import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ethan Miles - Digital Product Designer',
  description: 'Premium portfolio of Ethan Miles, a digital product designer creating intuitive interfaces and user-centric experiences.',
  keywords: 'designer, portfolio, digital design, UI/UX, product design',
  authors: [{ name: 'Ethan Miles' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethanmiles.design',
    title: 'Ethan Miles - Digital Product Designer',
    description: 'Premium portfolio of digital product designer',
    siteName: 'Ethan Miles Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white antialiased">
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
