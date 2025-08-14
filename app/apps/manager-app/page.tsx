'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export default function ManagerAppPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-pulse-slow">
              <span className="text-5xl animate-float">📊</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Manager App
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideIn">
              AI-driven service desk management and team optimization
            </p>
            
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-6 py-3 rounded-full font-semibold">
              <span className="text-xl">🚀</span>
              <span>Coming December 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Complete Service Desk Intelligence</h2>
            <p className="text-xl text-gray-300 mb-12">
              Manager App transforms how service managers run their teams with AI-powered insights, 
              intelligent ticket routing, and predictive analytics that help you stay ahead of issues 
              before they impact SLAs.
            </p>
            
            {/* Placeholder Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Smart Ticket Routing</h3>
                <p className="text-gray-400">AI automatically assigns tickets to the best available engineer</p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
                <p className="text-gray-400">Forecast workload and identify trends before they become problems</p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="text-3xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-2">Team Performance</h3>
                <p className="text-gray-400">Real-time visibility into engineer productivity and workload</p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://xop.im/partner"
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden group"
              >
                <span className="relative z-10">Join the Waitlist</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="relative bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/30 transform hover:scale-105 transition-all overflow-hidden group border border-gray-600"
              >
                <span className="relative z-10">Learn More</span>
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