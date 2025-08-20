'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { Video, ChevronRight } from 'lucide-react'

export default function WebinarsPage() {
  const webinars = [
    {
      title: 'Monetize, Boost your MSP Business Productivity with GenAI',
      description: 'Discover proven strategies to leverage Generative AI for increasing MSP productivity and creating new revenue streams.',
      status: 'available',
      link: '/webinar/productivity'
    },
    {
      title: 'MSPs & GenAI - Build a Revenue Generating Practice',
      description: 'Learn how to transform your MSP into a revenue-generating AI powerhouse with proven strategies for building and scaling an AI practice.',
      status: 'available',
      link: '/webinar/revenue'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Webinars Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              On Demand Webinars
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert insights on leveraging AI to transform your MSP business and generate new revenue streams
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-8 hover:bg-gray-800 transition-colors">
                <Video className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{webinar.title}</h3>
                <p className="text-gray-400 mb-6 text-lg">{webinar.description}</p>
                <div className="mb-6">
                  <span className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                    Available Now
                  </span>
                </div>
                <Link
                  href={webinar.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-lg"
                >
                  Access Webinar
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}