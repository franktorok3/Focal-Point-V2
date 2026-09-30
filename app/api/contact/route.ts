import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

export const runtime = 'nodejs'

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(150).optional().default(''),
  timeframe: z.string().trim().max(80).optional().default(''),
  message: z.string().trim().min(20).max(5000),
  website: z.string().max(500).optional().default(''),
})

const attempts = new Map<string, { count: number; resetAt: number }>()

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    }
    return entities[character]
  })
}

function isRateLimited(key: string) {
  const now = Date.now()
  const current = attempts.get(key)
  if (!current || current.resetAt < now) {
    attempts.set(key, { count: 1, resetAt: now + 15 * 60 * 1000 })
    return false
  }
  current.count += 1
  return current.count > 5
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many attempts. Please try again later.' }, { status: 429 })
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check the form fields and try again.' }, { status: 400 })
  }

  const { name, email, company, timeframe, message, website } = parsed.data
  if (website) return NextResponse.json({ ok: true })

  const user = process.env.IONOS_SMTP_USER
  const password = process.env.IONOS_SMTP_PASSWORD
  const to = process.env.CONTACT_TO || 'hello@focalpointny.com'
  const from = process.env.CONTACT_FROM || user

  if (!user || !password || !from) {
    console.error('Contact delivery is not configured: missing IONOS SMTP environment variables.')
    return NextResponse.json({ error: 'Email delivery is temporarily unavailable.' }, { status: 503 })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.com',
    port: 465,
    secure: true,
    auth: { user, pass: password },
  })

  const submittedAt = new Date().toISOString()
  const subject = `New Focal Point inquiry — ${company || name}`
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || 'Not provided'}`,
    `Timeframe: ${timeframe || 'Not provided'}`,
    `Submitted: ${submittedAt}`,
    '',
    'What needs to work better?',
    message,
  ].join('\n')

  try {
    await transporter.sendMail({
      from: `Focal Point Website <${from}>`,
      to,
      replyTo: email,
      subject,
      text,
      html: `
        <h1 style="font-family:Georgia,serif;font-weight:400">New Focal Point inquiry</h1>
        <table cellpadding="6" cellspacing="0" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Company</strong></td><td>${escapeHtml(company || 'Not provided')}</td></tr>
          <tr><td><strong>Timeframe</strong></td><td>${escapeHtml(timeframe || 'Not provided')}</td></tr>
          <tr><td><strong>Submitted</strong></td><td>${submittedAt}</td></tr>
        </table>
        <h2 style="font-family:Georgia,serif;font-weight:400">What needs to work better?</h2>
        <p style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('IONOS contact delivery failed.', error)
    return NextResponse.json({ error: 'The message could not be delivered.' }, { status: 502 })
  }
}
