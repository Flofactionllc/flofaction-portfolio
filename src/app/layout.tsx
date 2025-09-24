import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flo Faction LLC - Professional Business Services',
  description: 'Comprehensive business services including insurance, music production, emergency management, videography, and digital marketing. Serving Port St. Lucie, Florida and nationwide.',
  keywords: 'insurance, music production, emergency management, videography, marketing, Port St. Lucie, Florida, business services',
  openGraph: {
    title: 'Flo Faction LLC - Professional Business Services',
    description: 'Comprehensive business services including insurance, music production, emergency management, videography, and digital marketing.',
    type: 'website',
    url: 'https://www.flofaction.com',
    siteName: 'Flo Faction LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flo Faction LLC - Professional Business Services',
    description: 'Comprehensive business services including insurance, music production, emergency management, videography, and digital marketing.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
