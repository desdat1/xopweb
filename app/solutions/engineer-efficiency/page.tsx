'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Zap, Brain, Clock, TrendingUp, Users, BarChart, CheckCircle } from 'lucide-react'

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

  const timeSavingFeatures = [
    {
      title: 'AI Workspace with Customer Overview',
      description: 'Engineers get immediate context about customer environments including user count, primary contacts, application stack, and common issues - all integrated within ConnectWise Manage.'
    },
    {
      title: 'Intelligent Ticket Summarization',
      description: 'Get instant, concise summaries of lengthy ticket threads. Our AI extracts the key issues, actions taken, and current status - perfect for handoffs or catching up on escalated tickets.'
    },
    {
      title: 'Enterprise Search Across All Systems',
      description: 'Find similar tickets, proven solutions, and relevant documentation instantly. Search across ConnectWise historical data, IT Glue, SharePoint, and other data sources from one unified interface.'
    },
    {
      title: 'Resolution Suggestions',
      description: 'AI analyzes similar historical tickets and provides suggested resolution steps based on what worked before, reducing problem-solving time and improving consistency.'
    },
    {
      title: 'Automatic Time Entry Capture',
      description: 'Auto-capture time entries as engineers work on tickets. The system tracks activities and creates accurate time entries, reducing administrative overhead.'
    },
    {
      title: 'Escalation Communication Tools',
      description: 'Built-in tools for communicating escalations to management and executive leadership, with all escalation activity tracked in the manager dashboard.'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

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
            The Perfect AI Overlay for ConnectWise Manage
          </p>
          <div className="flex justify-center animate-fadeIn delay-400">
            <Link
              href="https://xop.im/partner"
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

      {/* Time-Saving Features Section */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Transform How Your Engineers Work</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Every feature is designed to save time and reduce cognitive load, letting your engineers focus on solving problems instead of managing processes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {timeSavingFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-yellow-500/50 transition-all animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-lg p-6">
              <p className="text-lg text-yellow-400 font-semibold">
                All features work seamlessly within ConnectWise Manage - no switching between systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Measurable Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-all animate-fadeIn"
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
      <section className="px-6 py-16 bg-gray-900/30">
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
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-600'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
            {activeTab === 'overview' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">Your AI-Powered ConnectWise Companion</h3>
                <p className="text-gray-300 mb-4">
                  Engineer Efficiency seamlessly integrates with ConnectWise Manage to provide an intelligent overlay 
                  that enhances every aspect of ticket management. From the moment a ticket arrives to final resolution, 
                  our AI works alongside your engineers to eliminate repetitive tasks and surface critical information.
                </p>
                <p className="text-gray-300">
                  Think of it as having a senior engineer looking over your shoulder, instantly providing answers, 
                  automating routine tasks, and ensuring nothing falls through the cracks.
                </p>
              </div>
            )}

            {activeTab === 'integration' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">Native ConnectWise Integration</h3>
                <p className="text-gray-300 mb-4">
                  Works directly within your ConnectWise environment:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Appears as an overlay within ConnectWise Manage</li>
                  <li>No data synchronization delays - real-time updates</li>
                  <li>Respects your existing security and permissions</li>
                  <li>Works with your custom fields and workflows</li>
                  <li>Integrates with IT Glue, SharePoint, and other documentation systems</li>
                </ul>
              </div>
            )}

            {activeTab === 'ai-engine' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">Powered by Advanced AI</h3>
                <p className="text-gray-300 mb-4">
                  Our AI engine continuously learns from your MSP's unique patterns:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Understands your specific client environments and configurations</li>
                  <li>Learns from successful ticket resolutions to improve recommendations</li>
                  <li>Adapts to your team's communication style for better auto-drafts</li>
                  <li>Identifies emerging issues before they become widespread</li>
                  <li>Gets smarter with every ticket your team resolves</li>
                </ul>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4">Real MSP Results</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-yellow-400">Time Savings</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 15 minutes saved per ticket on average</li>
                      <li>• 2+ hours saved daily per engineer</li>
                      <li>• 90% reduction in time spent searching</li>
                      <li>• 100% accurate time tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-yellow-400">Quality Improvements</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 50% fewer escalations needed</li>
                      <li>• 35% faster ticket resolution</li>
                      <li>• Zero missed SLAs due to prioritization</li>
                      <li>• 95%+ client satisfaction scores</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Learn More About Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Learn More About</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            <Link 
              href="/solutions/executive-insights" 
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">📈</span>
                Executive Insights
              </span>
            </Link>
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
                Integrations
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

      <Footer />
    </div>
  )
}