import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'XOP.ai - AI Solutions Designed by MSPs, For MSPs',
  description: '28 years of MSP experience + cutting-edge Rezolve.ai technology = Real ROI for your business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}