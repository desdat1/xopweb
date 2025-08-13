'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BrandedChatbotPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <img src="/xop-logo.png" alt="xop.ai" className="h-[88px]" />
              <img src="/rezolve-logo.png" alt="Rezolve.ai" className="h-12" />
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-green-400 transition-colors">About Us</Link>
              <Link href="/resources" className="hover:text-green-400 transition-colors">Resources</Link>
              <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-pulse-slow">
              <span className="text-5xl animate-float">🤖</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Branded Chatbot for Clients
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideIn">
              White-labeled Teams chatbot that transforms client support with AI-powered self-service
            </p>
            
            {/* Action Buttons */}
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
              <Link
                href="/videos/branded-chatbot-demo.mp4"
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
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Transform Client Support Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">🎫</div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">20% Ticket Deflection</h3>
              <p className="text-gray-300">Resolve common issues instantly without creating tickets</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 border border-cyan-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Reduce Call Volume</h3>
              <p className="text-gray-300">Decrease phone queue load with 24/7 AI assistance</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-green-400">Instant Response</h3>
              <p className="text-gray-300">No wait times - immediate answers to client questions</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">🏷️</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">White-Labeled</h3>
              <p className="text-gray-300">Fully branded as your MSP's solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features Built for MSPs</h2>
          
          <div className="max-w-5xl mx-auto">
            {/* ConnectWise Integration */}
            <div className="mb-12 bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Full ConnectWise Manage Integration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <div>
                      <h4 className="font-bold mb-1">Intelligent Ticket Creation</h4>
                      <p className="text-gray-400 text-sm">Auto-generates tickets with proper subject, detailed description, and smart prioritization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <div>
                      <h4 className="font-bold mb-1">Bi-Directional Updates</h4>
                      <p className="text-gray-400 text-sm">Engineers post updates, clients see real-time progress</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <div>
                      <h4 className="font-bold mb-1">Chat with Engineer</h4>
                      <p className="text-gray-400 text-sm">Direct communication channel within existing tickets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <div>
                      <h4 className="font-bold mb-1">Ticket Status Tracking</h4>
                      <p className="text-gray-400 text-sm">Clients check ticket status without calling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Tech Stack Training */}
            <div className="mb-12 bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Trained on Each Client's Tech Stack</h3>
              <p className="text-gray-300 mb-6">
                The chatbot learns and understands each client's specific technology environment, providing accurate, 
                contextual support based on their unique setup, applications, and configurations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🖥️</div>
                  <p className="text-sm text-gray-400">Hardware Configs</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📱</div>
                  <p className="text-sm text-gray-400">Software Stack</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🔧</div>
                  <p className="text-sm text-gray-400">Custom Apps</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📋</div>
                  <p className="text-sm text-gray-400">Procedures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Tabs */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['overview', 'self-service', 'ticket-management', 'upsell'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
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
                  <h3 className="text-2xl font-semibold mb-4">24/7 AI-Powered Client Support</h3>
                  <p className="text-gray-300 mb-4">
                    Deploy a white-labeled Microsoft Teams chatbot that becomes your clients' first line of support. 
                    Available 24/7, it understands their specific environment and can resolve common issues instantly.
                  </p>
                  <p className="text-gray-300">
                    The chatbot seamlessly integrates with ConnectWise Manage, creating tickets when needed with full 
                    context, proper categorization, and intelligent prioritization - all while maintaining your MSP's branding.
                  </p>
                </div>
              )}

              {activeTab === 'self-service' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Intelligent Self-Service Resolution</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <div>
                        <strong>Password Resets:</strong> Guide users through self-service password resets for common applications
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <div>
                        <strong>How-To Guidance:</strong> Step-by-step instructions for common tasks specific to their environment
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <div>
                        <strong>Troubleshooting:</strong> Diagnose and resolve common issues without engineer intervention
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <div>
                        <strong>Knowledge Access:</strong> Instant answers from your documentation and knowledge base
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'ticket-management' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Seamless Ticket Integration</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-blue-400">Smart Ticket Creation</h4>
                      <p className="text-gray-300">When the chatbot can't resolve an issue, it creates a perfectly formatted ticket with:</p>
                      <ul className="mt-2 space-y-1 text-gray-400 ml-4">
                        <li>• Descriptive subject line based on the conversation</li>
                        <li>• Detailed problem description with full context</li>
                        <li>• Automatic priority assignment based on impact</li>
                        <li>• Proper categorization and routing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-blue-400">Live Communication</h4>
                      <p className="text-gray-300">
                        Clients can chat directly with assigned engineers through the bot, see real-time ticket updates, 
                        and receive notifications - eliminating phone tag and email delays.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'upsell' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Revenue Growth Opportunity</h3>
                  <p className="text-gray-300 mb-4">
                    Start with the chatbot to deliver immediate value, then expand with knowledge management solutions:
                  </p>
                  <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3 text-purple-400">Knowledge Management Add-On</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Connect SharePoint and document libraries</li>
                      <li>• Index company procedures and policies</li>
                      <li>• Enable enterprise-wide knowledge search</li>
                      <li>• Track and improve knowledge accuracy</li>
                    </ul>
                    <p className="mt-4 text-green-400 font-semibold">
                      Natural upsell path = Additional recurring revenue
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Feature Set</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Microsoft Teams Integration</h3>
                <p className="text-gray-400 text-sm">Native Teams app for seamless user experience</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">White-Label Branding</h3>
                <p className="text-gray-400 text-sm">Your logo, colors, and messaging throughout</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">24/7 Availability</h3>
                <p className="text-gray-400 text-sm">Always-on support even outside business hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Multi-Language Support</h3>
                <p className="text-gray-400 text-sm">Communicate in your clients' preferred languages</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Usage Analytics</h3>
                <p className="text-gray-400 text-sm">Track deflection rates and common issues</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Continuous Learning</h3>
                <p className="text-gray-400 text-sm">Improves responses based on interactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Impact */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Measurable Business Impact</h2>
            <p className="text-xl text-gray-300 mb-12">Deploy once, benefit forever</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">20%</div>
                <p className="text-gray-300">Ticket Deflection Rate</p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
                <p className="text-gray-300">Reduction in Phone Calls</p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <p className="text-gray-300">Support Availability</p>
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
            {/* Branded Chatbot is excluded since it's the current page */}
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

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Give Your Clients 24/7 AI Support</h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform client experience while reducing your support workload and creating new revenue streams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://xop.im/partner"
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden group"
              >
                <span className="relative z-10">See Live Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="relative bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/30 transform hover:scale-105 transition-all overflow-hidden group border border-gray-600"
              >
                <span className="relative z-10">Discuss Implementation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/xop-logo.png" alt="xop.ai" className="h-12 mb-4" />
              <p className="text-gray-400">AI Solutions Designed by MSPs, For MSPs</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/solutions/engineer-efficiency" className="hover:text-white">Engineer Efficiency</Link></li>
                <li><Link href="/solutions/service-desk-management" className="hover:text-white">Service Desk Management</Link></li>
                <li><Link href="/solutions/executive-insights" className="hover:text-white">Executive Insights</Link></li>
                <li><Link href="/solutions/recurring-revenue" className="hover:text-white">Generate Revenue</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <p className="text-gray-400">
                PO Box 261<br />
                Brookeville, MD 20833<br />
                202-525-8159
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 xop.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}