'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EmailAgentsPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-orange-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 animate-pulse-slow">
              <span className="text-5xl animate-float">📧</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Email Agents
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideIn">
              Transform email ticket management with AI-powered parsing, categorization, and smart replies
            </p>
            
            {/* Action Buttons - No "See in Action" button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeIn delay-400">
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
            </div>
          </div>
        </div>
      </section>

      {/* Current vs AI-Enhanced Comparison */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Beyond Basic Email Parsing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Current ConnectWise */}
            <div className="bg-black/50 border border-gray-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">📨</div>
                <h3 className="text-xl font-bold text-gray-400">Current ConnectWise Email Processing</h3>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>Basic customer matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>Simple subject line capture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>Email body copied to ticket</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>Manual categorization required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>No intelligent routing</span>
                </li>
              </ul>
            </div>

            {/* AI-Enhanced */}
            <div className="bg-black/50 border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🚀</div>
                <h3 className="text-xl font-bold text-yellow-400">AI-Enhanced Email Processing</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Intelligent content analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Automatic categorization & sub-categorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Priority/severity assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Smart routing to right queue/engineer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Contextual auto-replies with solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Intelligent Email Processing Features</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Smart Analysis */}
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Advanced Content Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-yellow-400">Understanding Context</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Identifies technical issues vs. requests</li>
                    <li>• Extracts key information and error messages</li>
                    <li>• Recognizes urgency indicators</li>
                    <li>• Detects sentiment and frustration levels</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-orange-400">Intelligent Classification</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Maps to correct category/sub-category</li>
                    <li>• Assigns appropriate priority level</li>
                    <li>• Determines severity based on impact</li>
                    <li>• Routes to specialized queues</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Smart Replies */}
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Contextual Smart Replies</h3>
              <p className="text-gray-300 mb-6">
                The AI agent can automatically respond to emails with relevant solutions or information requests, 
                dramatically reducing response times and potentially resolving issues without engineer intervention.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-4">
                  <h4 className="font-semibold mb-2 text-yellow-400">Solution Suggestions</h4>
                  <p className="text-sm text-gray-300">Provides step-by-step fixes for common issues</p>
                </div>
                <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 border border-orange-500/30 rounded-xl p-4">
                  <h4 className="font-semibold mb-2 text-orange-400">Information Gathering</h4>
                  <p className="text-sm text-gray-300">Requests specific details needed for resolution</p>
                </div>
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-xl p-4">
                  <h4 className="font-semibold mb-2 text-red-400">Expectation Setting</h4>
                  <p className="text-sm text-gray-300">Updates on ticket status and resolution timeline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Tabs */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How Email AI Agents Work</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['overview', 'processing', 'categorization', 'smart-replies'].map((tab) => (
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
                  <h3 className="text-2xl font-semibold mb-4">Intelligent Email Ticket Management</h3>
                  <p className="text-gray-300 mb-4">
                    Email Agents revolutionize how MSPs handle email-based support requests. By applying advanced AI 
                    to every incoming email, the system understands context, extracts critical information, and takes 
                    intelligent actions - all before an engineer even sees the ticket.
                  </p>
                  <p className="text-gray-300">
                    This goes far beyond ConnectWise's basic email parsing, providing true automation that reduces 
                    manual work, improves response times, and ensures consistent ticket quality.
                  </p>
                </div>
              )}

              {activeTab === 'processing' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Email Processing Pipeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-yellow-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                      <div>
                        <h4 className="font-semibold mb-1">Email Reception</h4>
                        <p className="text-gray-400 text-sm">Incoming email intercepted before standard ConnectWise processing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-yellow-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                      <div>
                        <h4 className="font-semibold mb-1">Content Analysis</h4>
                        <p className="text-gray-400 text-sm">AI examines subject, body, attachments, and sender history</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-yellow-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                      <div>
                        <h4 className="font-semibold mb-1">Information Extraction</h4>
                        <p className="text-gray-400 text-sm">Pulls out error messages, system names, impact details</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-yellow-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                      <div>
                        <h4 className="font-semibold mb-1">Ticket Enhancement</h4>
                        <p className="text-gray-400 text-sm">Creates properly formatted ticket with all metadata</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'categorization' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Smart Categorization Engine</h3>
                  <p className="text-gray-300 mb-4">
                    The AI agent makes intelligent decisions about each email:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-xl p-4">
                      <h4 className="font-semibold mb-2 text-yellow-400">Category Assignment</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Hardware vs. Software issues</li>
                        <li>• Network vs. Application problems</li>
                        <li>• Security incidents</li>
                        <li>• Service requests</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl p-4">
                      <h4 className="font-semibold mb-2 text-orange-400">Priority Determination</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Business impact analysis</li>
                        <li>• User urgency detection</li>
                        <li>• SLA requirements</li>
                        <li>• Historical patterns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'smart-replies' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Automated Response System</h3>
                  <p className="text-gray-300 mb-4">
                    Based on email content, the AI can automatically send contextually appropriate responses:
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-400">Immediate Solutions</h4>
                      <p className="text-gray-300 text-sm mt-1">
                        For known issues, sends step-by-step resolution guides, reducing ticket volume by up to 30%
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-yellow-400">Information Requests</h4>
                      <p className="text-gray-300 text-sm mt-1">
                        Automatically asks for missing details like error codes, affected systems, or screenshots
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-400">Status Updates</h4>
                      <p className="text-gray-300 text-sm mt-1">
                        Confirms ticket creation and provides realistic timeline based on current queue status
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Transform Your Email Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Faster Response</h3>
              <p className="text-gray-300">Instant acknowledgment and potential solutions without waiting</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 border border-orange-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-orange-400">Accurate Routing</h3>
              <p className="text-gray-300">Tickets go to the right team with proper priority every time</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-red-400">Better Data</h3>
              <p className="text-gray-300">Complete ticket information for faster resolution</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-900/20 to-pink-800/20 border border-pink-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-pink-400">Self-Service</h3>
              <p className="text-gray-300">30% of issues resolved without engineer intervention</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Impact */}
      <section className="py-16 bg-gradient-to-br from-yellow-900/20 via-black to-orange-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Measurable Email Support Impact</h2>
            <p className="text-xl text-gray-300 mb-12">Deploy AI email agents for immediate efficiency gains</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">75%</div>
                <p className="text-gray-300">Reduction in Ticket Triage Time</p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
                <div className="text-4xl font-bold text-orange-400 mb-2">30%</div>
                <p className="text-gray-300">Tickets Resolved via Auto-Reply</p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
                <div className="text-4xl font-bold text-red-400 mb-2">100%</div>
                <p className="text-gray-300">Accurate Categorization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Learn More About</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
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
            {/* Email Agents is excluded since it's the current page */}
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

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/20 to-orange-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Stop Manual Email Processing Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let AI handle email triage while your team focuses on solving problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://xop.im/partner"
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden group"
              >
                <span className="relative z-10">See Email AI in Action</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="relative bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/30 transform hover:scale-105 transition-all overflow-hidden group border border-gray-600"
              >
                <span className="relative z-10">Discuss Your Needs</span>
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