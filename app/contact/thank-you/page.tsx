'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { CheckCircle, ArrowRight } from 'lucide-react'

declare global {
  interface Window {
    rdt?: (...args: unknown[]) => void
  }
}

export default function ContactThankYou() {
  useEffect(() => {
    // Fire Reddit pixel Lead event on thank you page load
    if (typeof window !== 'undefined' && window.rdt) {
      window.rdt('track', 'Lead')
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center animate-fadeIn">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Thank You!
          </h1>

          <p className="text-xl text-gray-300 mb-4 animate-fadeIn delay-100">
            We've received your message and appreciate you reaching out.
          </p>

          <p className="text-gray-400 mb-12 animate-fadeIn delay-200">
            Our team will review your inquiry and get back to you within 24 business hours.
            In the meantime, feel free to explore our solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-300">
            <Link
              href="/solutions/engineer-efficiency"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              className="border border-gray-700 hover:border-green-500 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
