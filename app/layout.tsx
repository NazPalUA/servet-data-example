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
  title: 'Create Next App',
  description: 'Generated by create next app'
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
          <header className="max-w-4xl mx-auto mb-8">
            <h1 className="text-3xl font-bold mb-6">Demo</h1>
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
