'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Target, TrendingUp, Users, DollarSign, BarChart, PieChart } from 'lucide-react'

export default function ExecutiveInsightsPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Profitability Analytics',
      description: 'Track margins by client, service, and technician to maximize profitability'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Performance',
      description: 'Monitor productivity, utilization, and skill development across your organization'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Client Health Scores',
      description: 'Predictive analytics to identify at-risk accounts before they churn'
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: 'Strategic Planning',
      description: 'Data-driven insights for resource allocation and growth opportunities'
    }
  ]

  const features = [
    'Executive dashboards with customizable KPIs',
    'Client profitability and lifetime value analysis',
    'Team performance scorecards and benchmarking',
    'Predictive churn analysis with early warning system',
    'Resource utilization and capacity planning',
    'Automated reporting and board deck generation'
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
            <Target className="w-16 h-16 text-green-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 animate-fadeIn">
            Executive Insights
          </h1>
          <p className="text-2xl text-gray-300 mb-8 animate-fadeIn delay-200">
            Strategic dashboards and AI-driven analytics for data-driven decisions
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
              href="/videos/executive-insights-demo.mp4"
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
          <h2 className="text-3xl font-bold text-center mb-12">Transform Your Business Intelligence</h2>
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
            {['overview', 'client-health', 'team-performance', 'financial-insights'].map((tab) => (
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
                <h3 className="text-2xl font-semibold mb-4">Your MSP Command Center</h3>
                <p className="text-gray-300 mb-4">
                  Executive Insights transforms your MSP data into actionable intelligence. By consolidating information 
                  from all your systems, our AI-powered platform provides the clarity you need to make strategic decisions 
                  with confidence.
                </p>
                <p className="text-gray-300">
                  From real-time performance metrics to predictive analytics, every feature is designed to help you 
                  optimize operations, maximize profitability, and drive sustainable growth.
                </p>
              </div>
            )}

            {activeTab === 'client-health' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">360° Client Health Monitoring</h3>
                <p className="text-gray-300 mb-4">Our AI analyzes multiple data points to score client health:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-green-400">Health Indicators</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Ticket volume trends</li>
                      <li>• Response satisfaction</li>
                      <li>• Contract utilization</li>
                      <li>• Payment history</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-green-400">Predictive Insights</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Churn risk scoring</li>
                      <li>• Upsell opportunities</li>
                      <li>• Service gaps</li>
                      <li>• Renewal probability</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-300 mt-4">
                  Result: 30% reduction in client churn through proactive intervention.
                </p>
              </div>
            )}

            {activeTab === 'team-performance' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Team Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Get deep insights into your team's performance and potential:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Individual productivity metrics and trending</li>
                  <li>Skill gap analysis and training recommendations</li>
                  <li>Utilization rates and capacity planning</li>
                  <li>Quality scores and customer feedback correlation</li>
                  <li>Peer benchmarking and best practice identification</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Identify top performers, coach underperformers, and optimize team composition for maximum efficiency.
                </p>
              </div>
            )}

            {activeTab === 'financial-insights' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">Financial Performance Analytics</h3>
                <p className="text-gray-300 mb-4">Make data-driven financial decisions with:</p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-green-400">Profitability</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• By client</li>
                      <li>• By service</li>
                      <li>• By technician</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-green-400">Forecasting</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Revenue projections</li>
                      <li>• Resource needs</li>
                      <li>• Growth scenarios</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-green-400">Optimization</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Pricing insights</li>
                      <li>• Cost reduction</li>
                      <li>• Margin improvement</li>
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

      {/* Learn More About Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Learn More About</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/solutions/engineer-efficiency" 
              className="group relative bg-gradient-to-r from-yellow-600 to-orange-500 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-yellow-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">⚡</span>
                Engineer Efficiency
              </span>
            </Link>
            <Link 
              href="/solutions/service-desk-management" 
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">📊</span>
                Service Desk
              </span>
            </Link>
            {/* Executive Insights is excluded since it's the current page */}
            <Link 
              href="/solutions/recurring-revenue" 
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">💰</span>
                Generate Revenue
              </span>
            </Link>
            <Link 
              href="/solutions/branded-chatbot" 
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">🤖</span>
                Branded Chatbot
              </span>
            </Link>
            <Link 
              href="/solutions/voice-agents" 
              className="group relative bg-gradient-to-r from-green-600 to-emerald-500 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">📞</span>
                Voice AI Agents
              </span>
            </Link>
            <Link 
              href="/solutions/email-agents" 
              className="group relative bg-gradient-to-r from-yellow-600 to-orange-500 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-yellow-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">📧</span>
                Email Agents
              </span>
            </Link>
            <Link 
              href="/solutions/integrated-stack" 
              className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">🔗</span>
                Integrated to Your Stack
              </span>
            </Link>
            <Link 
              href="/solutions/aura-insights" 
              className="group relative bg-gradient-to-r from-red-600 to-orange-500 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">🎯</span>
                AURA Insights
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-900 to-emerald-900 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Make Decisions with Confidence</h2>
          <p className="text-xl text-gray-300 mb-8">
            See how AI-powered insights can transform your MSP's performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://xop.im/partner"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all"
            >
              Get Your Custom Analysis
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