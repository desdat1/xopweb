'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function VoiceAgentsPage() {
  const [activeTab, setActiveTab] = useState('phone-intake')

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 animate-pulse-slow">
              <span className="text-5xl animate-float">📞</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Voice AI Agents
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideIn">
              Intelligent voice agents that handle phone calls and automatically create tickets in ConnectWise
            </p>
          </div>
        </div>
      </section>

      {/* Two Voice Agent Solutions */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Two Powerful Voice Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Phone Intake Agent - Available Now */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-green-500/30 rounded-2xl p-8 hover:border-green-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-5xl">🎯</div>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">Available Now</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Phone Intake Agent</h3>
              <p className="text-gray-300 mb-6">
                Handles incoming support calls, gathers all necessary information, and creates complete tickets in ConnectWise
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span>Overflow handling when agents are busy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span>24/7 after-hours ticket creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span>Intelligent issue categorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span>Priority assessment based on impact</span>
                </li>
              </ul>
            </div>

            {/* Conversation Monitor - Coming Soon */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-5xl">🚀</div>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">Coming Soon</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Conversation Monitor</h3>
              <p className="text-gray-300 mb-6">
                Joins live calls between engineers and users to automatically document and create tickets
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1 text-lg">✓</span>
                  <span>Listens to engineer-user conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1 text-lg">✓</span>
                  <span>Auto-creates tickets from discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1 text-lg">✓</span>
                  <span>Eliminates manual data entry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1 text-lg">✓</span>
                  <span>Captures all relevant details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Intake Agent Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Phone Intake Agent Capabilities</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Intelligent Call Handling Process</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">User Identification</h4>
                    <p className="text-gray-300">Captures caller's name, phone number, and email address through natural conversation</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Issue Discovery</h4>
                    <p className="text-gray-300">Uses intelligent questioning to understand the problem and gather all necessary details</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Priority Assessment</h4>
                    <p className="text-gray-300">Determines issue criticality based on business impact and user responses</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Ticket Creation</h4>
                    <p className="text-gray-300">Automatically creates a complete ticket in ConnectWise with all gathered information</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ConnectWise Integration Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3 text-green-400">Ticket Details Captured</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Complete contact information</li>
                  <li>• Detailed problem description</li>
                  <li>• Affected systems/applications</li>
                  <li>• Business impact assessment</li>
                  <li>• Attempted troubleshooting steps</li>
                  <li>• Preferred callback times</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 border border-emerald-500/30 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3 text-emerald-400">Smart Categorization</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Automatic category selection</li>
                  <li>• Proper sub-category assignment</li>
                  <li>• Priority level determination</li>
                  <li>• Queue routing based on issue type</li>
                  <li>• SLA assignment if applicable</li>
                  <li>• Resource allocation suggestions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Tabs */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Implementation Scenarios</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['overflow-handling', 'after-hours', 'peak-times', 'future-capabilities'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              {activeTab === 'overflow-handling' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Overflow Call Management</h3>
                  <p className="text-gray-300 mb-4">
                    When all your human agents are busy, the Voice AI Agent seamlessly takes over to ensure no call goes unanswered. 
                    Callers receive immediate assistance, their issues are documented, and tickets are created without delay.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Zero hold time for callers</li>
                    <li>• Consistent service quality during peak periods</li>
                    <li>• Automatic escalation for critical issues</li>
                    <li>• Detailed call logs for follow-up</li>
                  </ul>
                </div>
              )}

              {activeTab === 'after-hours' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">24/7 After-Hours Support</h3>
                  <p className="text-gray-300 mb-4">
                    Provide round-the-clock ticket creation capabilities without staffing a night shift. Users can report issues 
                    anytime, and your team arrives to properly categorized and prioritized tickets each morning.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Complete issue documentation overnight</li>
                    <li>• Emergency escalation for critical problems</li>
                    <li>• Reduced on-call burden for engineers</li>
                    <li>• Improved client satisfaction with 24/7 availability</li>
                  </ul>
                </div>
              )}

              {activeTab === 'peak-times' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Peak Time Efficiency</h3>
                  <p className="text-gray-300 mb-4">
                    During Monday mornings or other peak periods, the Voice AI Agent acts as a force multiplier, handling 
                    routine ticket intake while your team focuses on complex issues.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-green-400 mb-2">Benefits</h4>
                      <ul className="space-y-1 text-gray-400 text-sm">
                        <li>• Reduced average wait time</li>
                        <li>• Consistent data collection</li>
                        <li>• Improved team efficiency</li>
                        <li>• Better resource allocation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400 mb-2">Results</h4>
                      <ul className="space-y-1 text-gray-400 text-sm">
                        <li>• 50% faster ticket creation</li>
                        <li>• 100% data accuracy</li>
                        <li>• Zero missed calls</li>
                        <li>• Higher CSAT scores</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'future-capabilities' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Coming Soon: Conversation Monitor</h3>
                  <p className="text-gray-300 mb-4">
                    The next evolution in voice AI will revolutionize how engineers document their calls:
                  </p>
                  <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3 text-purple-400">Automatic Call Documentation</h4>
                    <p className="text-gray-300 mb-4">
                      The AI agent joins calls between engineers and users, listening to the conversation and automatically:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Creates tickets with complete context</li>
                      <li>• Populates all required fields in ConnectWise</li>
                      <li>• Captures technical details discussed</li>
                      <li>• Documents resolution steps mentioned</li>
                      <li>• Frees engineers from post-call data entry</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Transform Your Phone Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Never Miss a Call</h3>
              <p className="text-gray-400">100% call capture even during peak times or after hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Perfect Data Entry</h3>
              <p className="text-gray-400">Consistent, complete ticket information every time</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Reduce Costs</h3>
              <p className="text-gray-400">Lower staffing needs while improving service levels</p>
            </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Phone Support?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Deploy AI voice agents that never sleep, never miss details, and always deliver perfect tickets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://xop.im/partner"
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden group"
              >
                <span className="relative z-10">Schedule Voice Demo</span>
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