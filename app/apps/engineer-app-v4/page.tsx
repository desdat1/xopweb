'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { 
  Shield, Zap, Target
} from 'lucide-react'

export default function EngineerAppV4Page() {

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-orange-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 animate-pulse-slow">
              <span className="text-5xl animate-float">⚡</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
              Engineer App v4
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              AI-powered efficiency tools that work as an intelligent overlay to ConnectWise Manage
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Advanced AI assistance designed to accelerate ticket resolution and reduce administrative overhead
            </p>
            
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-6 py-3 rounded-full font-semibold">
              <span className="text-xl">🚀</span>
              <span>Coming September 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Revolutionary AI Assistant for Engineers</h2>
          <p className="text-xl text-gray-300 mb-12">
            Engineer App v4 is a game-changing overlay application for ConnectWise Manage that brings AI-powered assistance 
            directly into your engineers' workflow. With intelligent ticket analysis, automated documentation, 
            and proactive suggestions, your team will resolve issues faster than ever before.
          </p>
          
          {/* Simple Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Insights</h3>
              <p className="text-gray-400">Get intelligent suggestions based on ticket context and history</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Real-Time Analytics</h3>
              <p className="text-gray-400">Track performance and identify bottlenecks instantly</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-2">Overlay Integration</h3>
              <p className="text-gray-400">Works as an intelligent overlay to ConnectWise Manage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & ROI */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Seamless ConnectWise Integration</h2>
              <p className="text-xl text-gray-300 mb-6">
                Engineer App v4 works as an intelligent overlay within ConnectWise Manage. No workflow changes required.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>No data leaves your environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span>Real-time AI analysis and suggestions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-purple-400" />
                  <span>Works with existing ConnectWise workflows</span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Expected Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">40%</div>
                  <div className="text-sm text-gray-400">Faster Resolution</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                  <div className="text-sm text-gray-400">Less Research Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">70%</div>
                  <div className="text-sm text-gray-400">Reduced Admin Work</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
                  <div className="text-sm text-gray-400">Higher First-Time Fix</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Engineering Team?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the waitlist for Engineer App v4 and be among the first to experience AI-powered efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://xop.im/partner"
              className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden group"
            >
              <span className="relative z-10">Get Early Access</span>
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
      </section>

      <Footer />
    </div>
  )
}