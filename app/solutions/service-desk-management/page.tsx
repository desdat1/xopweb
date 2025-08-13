'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, BarChart3, Users, AlertCircle, TrendingUp, Clock, Shield } from 'lucide-react'

export default function ServiceDeskManagementPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Smart Ticket Assignment',
      description: 'AI automatically routes tickets to the right engineer based on skills and availability'
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Proactive Escalation',
      description: 'Identify at-risk tickets before they become fires with predictive analytics'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Real-Time Dashboards',
      description: 'Monitor queue health, SLA compliance, and team performance at a glance'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Client Health Monitoring',
      description: 'Track satisfaction scores and identify clients needing attention'
    }
  ]

  const features = [
    'AI-powered ticket routing and load balancing',
    'Real-time escalation boards with predictive alerts',
    'Client health scorecards with actionable insights',
    'Team performance analytics and coaching opportunities',
    'SLA tracking with breach prevention alerts',
    'Automated workflow optimization recommendations'
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
            <BarChart3 className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 animate-fadeIn">
            Service Desk Management
          </h1>
          <p className="text-2xl text-gray-300 mb-8 animate-fadeIn delay-200">
            Real-time insights and AI-powered optimization for service managers
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
              href="/videos/service-desk-demo.mp4"
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
          <h2 className="text-3xl font-bold text-center mb-12">Optimize Your Service Desk Operations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-black border border-gray-800 rounded-lg p-6 hover:border-yellow-500 transition-all animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-yellow-400 mb-4">{benefit.icon}</div>
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
            {['overview', 'ticket-assignment', 'escalation-boards', 'client-health'].map((tab) => (
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
                <h3 className="text-2xl font-semibold mb-4">Command Center for Service Managers</h3>
                <p className="text-gray-300 mb-4">
                  Our Service Desk Management solution gives you unprecedented visibility and control over your entire operation. 
                  Using AI and real-time analytics, you can proactively manage tickets, optimize team performance, and ensure 
                  client satisfaction.
                </p>
                <p className="text-gray-300">
                  From intelligent ticket routing to predictive escalation alerts, every feature is designed to help you 
                  deliver exceptional service while improving operational efficiency.
                </p>
              </div>
            )}

            {activeTab === 'ticket-assignment' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">Intelligent Ticket Assignment</h3>
                <p className="text-gray-300 mb-4">Our AI analyzes multiple factors to route tickets optimally:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Engineer skill sets and certifications</li>
                  <li>Current workload and availability</li>
                  <li>Historical performance on similar issues</li>
                  <li>Client preferences and SLA requirements</li>
                  <li>Time zone and schedule considerations</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Result: 40% faster resolution times and improved engineer satisfaction.
                </p>
              </div>
            )}

            {activeTab === 'escalation-boards' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">Proactive Escalation Management</h3>
                <p className="text-gray-300 mb-4">Stay ahead of issues with our escalation boards:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-yellow-400">Risk Indicators</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• SLA breach predictions</li>
                      <li>• Stalled ticket detection</li>
                      <li>• Client sentiment analysis</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-yellow-400">Automated Actions</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Manager notifications</li>
                      <li>• Resource reallocation</li>
                      <li>• Client communication</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'client-health' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">Client Health Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  Get a 360-degree view of client satisfaction and engagement:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Real-time satisfaction scores based on multiple data points</li>
                  <li>Ticket volume trends and resolution patterns</li>
                  <li>Response time analysis and SLA compliance</li>
                  <li>Proactive alerts for at-risk accounts</li>
                  <li>Recommended actions to improve client relationships</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Reduce churn by 25% with early intervention on client issues.
                </p>
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
                <ChevronRight className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-900 to-orange-900 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">See Your Potential Savings</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how AI-powered service desk management can transform your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://xop.im/partner"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all"
            >
              Calculate Your ROI
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