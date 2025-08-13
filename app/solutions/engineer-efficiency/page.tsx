'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Zap, Brain, Clock, TrendingUp, Users, BarChart } from 'lucide-react'

export default function EngineerEfficiencyPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '30% Time Savings',
      description: 'Reduce time spent searching for solutions and documentation'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Faster Resolution',
      description: 'AI-powered insights accelerate ticket resolution by 40%'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Knowledge at Scale',
      description: 'Instantly access tribal knowledge across your entire organization'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Consistent Quality',
      description: 'Ensure every engineer delivers expert-level service'
    }
  ]

  const features = [
    'AI-powered ticket analysis and solution recommendations',
    'Integration with ConnectWise, IT Glue, and documentation systems',
    'Automatic correlation of similar tickets and resolutions',
    'Real-time knowledge base updates from resolved tickets',
    'Natural language search across all your data sources',
    'Proactive alerts for potential issues'
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="p-6 mb-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image 
                src="/xop-logo.png" 
                alt="xop.ai" 
                width={132} 
                height={88} 
                className="h-[88px] w-auto cursor-pointer"
              />
            </Link>
            <Image 
              src="/rezolve-logo.png" 
              alt="Rezolve.ai" 
              width={72} 
              height={48} 
              className="h-12 w-auto opacity-80"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-green-400 transition-colors">About Us</Link>
            <Link href="/resources" className="hover:text-green-400 transition-colors">Resources</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 animate-pulse-slow">
            <Zap className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 animate-fadeIn">
            Engineer Efficiency
          </h1>
          <p className="text-2xl text-gray-300 mb-8 animate-fadeIn delay-200">
            Free up engineers to solve complex problems while AI handles the routine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-400">
            <Link
              href="https://xop.im/partner"
              className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden group"
            >
              <span className="relative z-10">Schedule a Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="https://xop.im/partner"
              className="relative bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/30 transform hover:scale-105 transition-all overflow-hidden group border border-gray-600"
            >
              <span className="relative z-10">Request ROI Report</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/videos/engineer-efficiency-demo.mp4"
              className="relative bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all overflow-hidden group flex items-center justify-center gap-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center relative z-10">
                <svg className="w-3 h-3 text-green-600 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <span className="relative z-10">See in Action</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-6 py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Transform Your Service Desk</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-all animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-green-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Tabs */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['overview', 'integration', 'ai-engine', 'results'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-900 rounded-lg p-8">
            {activeTab === 'overview' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">AI-Powered Knowledge at Your Fingertips</h3>
                <p className="text-gray-300 mb-4">
                  Our Engineer Efficiency solution acts as a force multiplier for your technical team. 
                  By leveraging AI to instantly surface relevant solutions, documentation, and historical 
                  ticket data, your engineers can focus on what they do best - solving complex problems.
                </p>
                <p className="text-gray-300">
                  The system learns from every interaction, continuously improving its recommendations 
                  and building a comprehensive knowledge base unique to your MSP.
                </p>
              </div>
            )}

            {activeTab === 'integration' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">Seamless Integration</h3>
                <p className="text-gray-300 mb-4">
                  Works with your existing tools:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>ConnectWise Manage - Direct ticket integration</li>
                  <li>IT Glue - Documentation search and retrieval</li>
                  <li>SharePoint - Access to internal knowledge bases</li>
                  <li>Vendor portals - Unified search across all resources</li>
                </ul>
              </div>
            )}

            {activeTab === 'ai-engine' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">Powered by Advanced AI</h3>
                <p className="text-gray-300 mb-4">
                  Our AI engine uses natural language processing and machine learning to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Understand ticket context and identify root causes</li>
                  <li>Match current issues with historical resolutions</li>
                  <li>Suggest relevant documentation and KB articles</li>
                  <li>Learn from engineer feedback to improve accuracy</li>
                  <li>Identify patterns and prevent recurring issues</li>
                </ul>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">Measurable Results</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-green-400">Efficiency Gains</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 30% reduction in ticket resolution time</li>
                      <li>• 40% fewer escalations</li>
                      <li>• 25% increase in tickets per engineer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-green-400">Quality Improvements</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 50% reduction in repeat tickets</li>
                      <li>• 35% improvement in first-call resolution</li>
                      <li>• 90%+ customer satisfaction scores</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="px-6 py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ChevronRight className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Calculate Your ROI</h2>
          <p className="text-xl text-gray-300 mb-8">
            See how much time and money you could save with AI-powered engineer efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://xop.im/partner"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all"
            >
              Access ROI Calculator
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 xop.ai. All rights reserved. Powered by Rezolve.ai</p>
        </div>
      </footer>
    </div>
  )
}