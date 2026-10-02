import { insights } from '@/lib/content'

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] || character)
}

export function GET() {
  const base = 'https://www.focalpointny.com'
  const items = [...insights]
    .reverse()
    .map((insight) => `
      <item>
        <title>${escapeXml(insight.title)}</title>
        <link>${base}/insights/${insight.slug}</link>
        <guid>${base}/insights/${insight.slug}</guid>
        <description>${escapeXml(insight.description)}</description>
        <pubDate>${new Date(insight.publishedAt).toUTCString()}</pubDate>
        <category>${escapeXml(insight.pillar)}</category>
      </item>`)
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Focal Point Field Notes</title>
        <link>${base}/insights</link>
        <description>Strong opinions, operationally tested—on AI, experience, data, growth, and the systems that make them work.</description>
        ${items}
      </channel>
    </rss>`

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
