'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import Link from 'next/link'

export default function ContractManagementPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-pulse-slow">
              <span className="text-5xl animate-float">📋</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Contract Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideIn">
              Intelligent contract lifecycle management and entitlement verification powered by AI
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
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Transform Contract Management</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Current State */}
            <div className="bg-black/50 border border-gray-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">📁</div>
                <h3 className="text-xl font-bold text-gray-400">Traditional Contract Management</h3>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>Manual contract tracking in spreadsheets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>Missed renewal deadlines and revenue leakage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>No visibility into actual entitlement usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>Reactive approach to contract compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>Hours spent on manual contract reviews</span>
                </li>
              </ul>
            </div>

            {/* AI-Enhanced */}
            <div className="bg-black/50 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🚀</div>
                <h3 className="text-xl font-bold text-blue-400">AI-Powered Contract Intelligence</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Automated contract ingestion and parsing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Proactive renewal notifications with analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Real-time entitlement verification against usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Automatic compliance monitoring and alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Revenue optimization recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Entitlement Verification */}
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Entitlement Verification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">Automated Validation</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Compare contract terms against actual usage</li>
                    <li>• Identify over and under-utilized services</li>
                    <li>• Flag potential compliance issues</li>
                    <li>• Track license counts vs. deployed assets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-cyan-400">Revenue Protection</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Detect unbilled services automatically</li>
                    <li>• Identify upsell opportunities</li>
                    <li>• Prevent revenue leakage</li>
                    <li>• Optimize contract structures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contract Intelligence */}
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Contract Intelligence</h3>
              <p className="text-gray-300 mb-6">
                AI-powered contract analysis extracts key terms, dates, and obligations automatically,
                giving you complete visibility into your contract portfolio.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-xl p-4">
                  <h4 className="font-semibold mb-2 text-blue-400">Term Extraction</h4>
                  <p className="text-sm text-gray-300">Automatically pulls key dates, pricing, and SLA terms</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 border border-cyan-500/30 rounded-xl p-4">
                  <h4 className="font-semibold mb-2 text-cyan-400">Renewal Tracking</h4>
                  <p className="text-sm text-gray-300">Never miss a renewal with proactive notifications</p>
                </div>
                <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/20 border border-teal-500/30 rounded-xl p-4">
                  <h4 className="font-semibold mb-2 text-teal-400">Compliance Monitoring</h4>
                  <p className="text-sm text-gray-300">Continuous monitoring of SLA and contract obligations</p>
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
              {['overview', 'ingestion', 'verification', 'optimization'].map((tab) => (
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
                  <h3 className="text-2xl font-semibold mb-4">Intelligent Contract Lifecycle Management</h3>
                  <p className="text-gray-300 mb-4">
                    Contract Management transforms how MSPs handle agreements, entitlements, and renewals.
                    By applying AI to your entire contract portfolio, the system ensures you never miss
                    a renewal, always bill for services rendered, and maintain full compliance visibility.
                  </p>
                  <p className="text-gray-300">
                    From automated ingestion to real-time entitlement verification, every aspect of
                    contract management is streamlined and optimized.
                  </p>
                </div>
              )}

              {activeTab === 'ingestion' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Automated Contract Ingestion</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                      <div>
                        <h4 className="font-semibold mb-1">Document Upload</h4>
                        <p className="text-gray-400 text-sm">Upload contracts in any format - PDF, Word, or scanned documents</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                      <div>
                        <h4 className="font-semibold mb-1">AI Parsing</h4>
                        <p className="text-gray-400 text-sm">AI extracts key terms, dates, pricing, and service definitions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                      <div>
                        <h4 className="font-semibold mb-1">Data Structuring</h4>
                        <p className="text-gray-400 text-sm">Contract data is organized and linked to client records</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                      <div>
                        <h4 className="font-semibold mb-1">Continuous Monitoring</h4>
                        <p className="text-gray-400 text-sm">System begins tracking obligations and upcoming milestones</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'verification' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Real-Time Entitlement Verification</h3>
                  <p className="text-gray-300 mb-4">
                    The AI continuously compares what clients are entitled to versus what they're actually using:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-4">
                      <h4 className="font-semibold mb-2 text-blue-400">Usage Tracking</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Monitor active users vs. licensed seats</li>
                        <li>• Track service consumption levels</li>
                        <li>• Identify underutilized subscriptions</li>
                        <li>• Flag overages automatically</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 rounded-xl p-4">
                      <h4 className="font-semibold mb-2 text-cyan-400">Compliance Alerts</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• SLA breach warnings</li>
                        <li>• Contract term violations</li>
                        <li>• Renewal deadline reminders</li>
                        <li>• Obligation tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'optimization' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Revenue Optimization</h3>
                  <p className="text-gray-300 mb-4">
                    Based on contract and usage analysis, the system identifies opportunities to optimize revenue:
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-400">Upsell Opportunities</h4>
                      <p className="text-gray-300 text-sm mt-1">
                        Identify clients approaching usage limits or needing additional services
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-400">Revenue Recovery</h4>
                      <p className="text-gray-300 text-sm mt-1">
                        Find unbilled services and missing charges automatically
                      </p>
                    </div>
                    <div className="border-l-4 border-cyan-500 pl-4">
                      <h4 className="font-semibold text-cyan-400">Contract Optimization</h4>
                      <p className="text-gray-300 text-sm mt-1">
                        Recommendations for restructuring contracts based on actual usage patterns
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
          <h2 className="text-3xl font-bold text-center mb-12">Business Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">Eliminate Revenue Leakage</h3>
              <p className="text-gray-300">Capture all billable services and prevent missed charges</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 border border-cyan-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">60%+ Time Savings</h3>
              <p className="text-gray-300">Reduce contract management overhead dramatically</p>
            </div>

            <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3 text-teal-400">Full Compliance</h3>
              <p className="text-gray-300">Ensure adherence to all SLAs and contract terms</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3 text-green-400">Optimized Contracts</h3>
              <p className="text-gray-300">Data-driven recommendations for better contract structures</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Impact */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Measurable Results</h2>
            <p className="text-xl text-gray-300 mb-12">AI-powered contract management delivers immediate ROI</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">60%+</div>
                <p className="text-gray-300">Reduction in Contract Management Time</p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                <p className="text-gray-300">Renewal Notification Coverage</p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
                <div className="text-4xl font-bold text-teal-400 mb-2">5-15%</div>
                <p className="text-gray-300">Revenue Recovery from Unbilled Services</p>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Take Control of Your Contracts</h2>
            <p className="text-xl text-gray-300 mb-8">
              Stop losing revenue to missed renewals and unbilled services. Let AI manage your contract lifecycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://xop.im/partner"
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden group"
              >
                <span className="relative z-10">See Contract AI in Action</span>
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
