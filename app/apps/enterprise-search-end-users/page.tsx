'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export default function EnterpriseSearchEndUsersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse-slow">
              <span className="text-5xl animate-float">🔍</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Enterprise Search for End Users
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideIn">
              Empower your clients with AI-powered knowledge discovery
            </p>
            
            {/* Available Now Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-6 py-3 rounded-full font-semibold">
              <span className="text-xl">✅</span>
              <span>Available Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Knowledge at Their Fingertips</h2>
            <p className="text-xl text-gray-300 mb-12">
              Give your clients the power to find answers instantly. Enterprise Search for End Users 
              provides a white-labeled AI search solution that connects to SharePoint, websites, 
              and uploaded documents - perfect for organizations that need powerful search without 
              ticketing integration.
            </p>
            
            {/* Placeholder Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-2">White-Label Ready</h3>
                <p className="text-gray-400">Deploy under your brand for stronger client relationships</p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="text-3xl mb-4">📁</div>
                <h3 className="text-xl font-bold mb-2">Multiple Sources</h3>
                <p className="text-gray-400">SharePoint, websites, and document uploads in one search</p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Revenue Generator</h3>
                <p className="text-gray-400">$11 per endpoint monthly recurring revenue opportunity</p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://xop.im/partner"
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden group"
              >
                <span className="relative z-10">Become a Partner</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="relative bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/30 transform hover:scale-105 transition-all overflow-hidden group border border-gray-600"
              >
                <span className="relative z-10">View Pricing</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}