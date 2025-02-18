import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: '%s | React Data Fetching Patterns',
    default:
      'Modern React Data Fetching Patterns with Suspense and Server Components'
  },
  description:
    'Practical guide to modern React data fetching patterns including Suspense, Server Components, and the use API. Learn through interactive code examples.',
  keywords: [
    'React 19',
    'Suspense',
    'Server Components',
    'Data Fetching',
    'use API',
    'Next.js Patterns',
    'Streaming SSR'
  ],
  authors: [{ name: 'Nazar Palamarchuk' }],
  openGraph: {
    title: 'React Data Fetching Patterns Guide',
    description:
      'Interactive demonstration of modern React data fetching strategies with Suspense and Server Components',
    url: 'https://react-server-components-data-fetching.vercel.app/',
    siteName: 'React Data Fetching Patterns Guide',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'React Data Fetching Patterns Guide',
    description:
      'Interactive demo of React 19 Suspense and Server Components patterns',
    creator: '@naz_pal'
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 text-slate-900`}
      >
        <main className="min-h-screen p-4 md:p-8">
          <header className="max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">
              <Link
                href="/"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Code Examples
              </Link>
            </h1>
            <nav>
              <ul className="flex flex-wrap gap-2">
                {[
                  { href: '/minimum', label: 'Bad approach' },
                  { href: '/with-suspense', label: 'Good approach' },
                  { href: '/with-suspense-and-use', label: 'Best approach' }
                ].map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm md:text-base text-slate-600 hover:text-slate-900 transition-colors border border-slate-200 rounded-md px-2 py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <div className="max-w-4xl mx-auto px-2 md:px-0">{children}</div>
        </main>
      </body>
    </html>
  )
}
