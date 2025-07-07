// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anita Methodist School',
  description: 'A Christian school built around children, teaching them they are wonderfully made, each the child of the one true King.',
  keywords: ['school', 'education', 'Christian', 'Methodist', 'children', 'Chennai'],
  authors: [{ name: 'Anita Methodist School' }],
  openGraph: {
    title: 'Anita Methodist School',
    description: 'A Christian school built around children, teaching them they are wonderfully made.',
    url: 'https://anitamethodist.com',
    siteName: 'Anita Methodist School',
    images: [
      {
        url: '/images/hero-sports-week.jpg',
        width: 1024,
        height: 686,
        alt: 'Anita Methodist School Students',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anita Methodist School',
    description: 'A Christian school built around children, teaching them they are wonderfully made.',
    images: ['/images/hero-sports-week.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}