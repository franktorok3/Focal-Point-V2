import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.focalpointny.com'),
  title: {
    default: 'Focal Point — Simplify the systems behind growth',
    template: '%s | Focal Point',
  },
  description:
    'Focal Point helps growing organizations turn disconnected tools, scattered data, and promising AI experiments into one dependable operating system.',
  openGraph: {
    type: 'website',
    siteName: 'Focal Point NY',
    title: 'Focal Point — Simplify the systems behind growth',
    description:
      'Strategy, systems design, and hands-on implementation for growing organizations.',
    url: '/',
    images: [{ url: '/images/hero-systems-to-focal-point.png', width: 1792, height: 896, alt: 'Disconnected systems converging into one clear focal point.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Focal Point — Simplify the systems behind growth',
    description: 'Strategy, systems design, and hands-on implementation for growing organizations.',
    images: ['/images/hero-systems-to-focal-point.png'],
  },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf9f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Focal Point NY',
              url: 'https://www.focalpointny.com',
              email: 'hello@focalpointny.com',
              founder: { '@type': 'Person', name: 'Frank Torok' },
              areaServed: 'United States',
              description:
                'Founder-led strategy, systems, data, operations, and applied AI consultancy.',
            }).replace(/</g, '\\u003c'),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
