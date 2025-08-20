import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'XOP.ai - AI Solutions Designed by MSPs, For MSPs',
  description: '28 years of MSP experience + cutting-edge Rezolve.ai technology = Real ROI for your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script 
          defer 
          src="https://va.vercel-scripts.com/v1/script.js" 
          data-endpoint="/api/_vercel/insights/view"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}