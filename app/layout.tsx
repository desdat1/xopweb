import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from './components/GoogleAnalytics'
import RedditPixel from './components/RedditPixel'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'xop.ai - AI Solutions Designed by MSPs, For MSPs',
  description: '28 years of MSP experience + cutting-edge AI technology = Real results for your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <RedditPixel pixelId="a2_ikesnp9calk5" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
