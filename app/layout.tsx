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
    url: 'https://react-data-fetching-patterns.vercel.app/',
    siteName: 'React Patterns Blog',
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
        <main className="min-h-screen p-8">
          <header className="max-w-4xl mx-auto  flex justify-between items-center">
            <h1 className="text-3xl font-bold ">
              <Link
                href="/"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Code Examples
              </Link>
            </h1>
            <nav>
              <ul className="flex gap-6">
                <li>
                  <Link
                    href="/minimum"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Minimum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/with-suspense"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    With Suspense
                  </Link>
                </li>
                <li>
                  <Link
                    href="/with-suspense-and-use"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    With Suspense and Use
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  )
}
