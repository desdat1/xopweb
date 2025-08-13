'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AuraInsightsPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-orange-500 animate-pulse-slow">
              <span className="text-5xl animate-float">🎯</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              AURA Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideIn">
              AI-powered ticket health monitoring that identifies problems before they escalate
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
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Six-Point Scoring System */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gradient">Revolutionary Six-Point Scoring System</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Our advanced AI technology analyzes tickets across six critical dimensions, providing unprecedented insight into ticket health
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* End User Sentiment */}
            <div className="bg-black/50 border border-red-500/30 rounded-2xl p-8 hover:border-red-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">😊</div>
                <h3 className="text-xl font-bold text-red-400">End User Sentiment</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Analyzes the emotional state of the end user throughout the ticket lifecycle
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Detects frustration and urgency</li>
                <li>• Monitors sentiment changes</li>
                <li>• Identifies escalation risks</li>
                <li>• Tracks satisfaction trends</li>
              </ul>
            </div>

            {/* Ticket Follow-up */}
            <div className="bg-black/50 border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">⏰</div>
                <h3 className="text-xl font-bold text-orange-400">Ticket Follow-up</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Monitors whether tickets receive timely and appropriate follow-up actions
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Response time analysis</li>
                <li>• Follow-up frequency tracking</li>
                <li>• SLA compliance monitoring</li>
                <li>• Communication gaps detection</li>
              </ul>
            </div>

            {/* Engineer Empathy */}
            <div className="bg-black/50 border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">💝</div>
                <h3 className="text-xl font-bold text-yellow-400">Engineer Empathy</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Evaluates whether engineers demonstrate understanding and care in their responses
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Tone and language analysis</li>
                <li>• Personalization assessment</li>
                <li>• Understanding validation</li>
                <li>• Customer care indicators</li>
              </ul>
            </div>

            {/* Technical Approach */}
            <div className="bg-black/50 border border-green-500/30 rounded-2xl p-8 hover:border-green-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🔧</div>
                <h3 className="text-xl font-bold text-green-400">Technical Approach</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Assesses whether the right technical steps are being taken to resolve the issue
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Solution accuracy scoring</li>
                <li>• Troubleshooting effectiveness</li>
                <li>• Root cause identification</li>
                <li>• Resolution path optimization</li>
              </ul>
            </div>

            {/* Work Disruption */}
            <div className="bg-black/50 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🚨</div>
                <h3 className="text-xl font-bold text-blue-400">Work Disruption</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Measures how severely the issue impacts the end user's ability to work
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Business impact assessment</li>
                <li>• Productivity loss calculation</li>
                <li>• Critical workflow blocking</li>
                <li>• Urgency classification</li>
              </ul>
            </div>

            {/* Overall Health Score */}
            <div className="bg-black/50 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">📊</div>
                <h3 className="text-xl font-bold text-purple-400">Overall Health Score</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Combines all dimensions into a comprehensive ticket health indicator
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Weighted scoring algorithm</li>
                <li>• Predictive risk analysis</li>
                <li>• Trend identification</li>
                <li>• Actionable recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How AURA Works */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How AURA Insights Works</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['overview', 'micro-level', 'macro-level', 'integration'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-red-600 to-orange-600'
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
                  <h3 className="text-2xl font-semibold mb-4">Advanced AI-Powered Analysis</h3>
                  <p className="text-gray-300 mb-4">
                    AURA Insights represents a breakthrough in ticket health monitoring. Unlike traditional systems that 
                    rely on simple metrics like time-to-resolution or ticket age, AURA uses advanced AI to understand 
                    the complete context of each ticket.
                  </p>
                  <p className="text-gray-300 mb-4">
                    By analyzing multiple dimensions simultaneously, AURA can identify tickets that are heading for 
                    trouble long before traditional metrics would flag them. This proactive approach allows service 
                    desk managers to intervene early, preventing escalations and improving customer satisfaction.
                  </p>
                  <p className="text-gray-300">
                    The technology powers both our Service Desk Management and Executive Insights solutions, providing 
                    actionable intelligence at every level of your organization.
                  </p>
                </div>
              )}

              {activeTab === 'micro-level' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Micro-Level: Individual Ticket Analysis</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-red-400">Real-Time Monitoring</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Continuous analysis of every ticket interaction</li>
                        <li>• Immediate alerts when scores drop below thresholds</li>
                        <li>• Predictive warnings before issues escalate</li>
                        <li>• Contextual recommendations for intervention</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-orange-400">Actionable Insights</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Specific guidance on what needs attention</li>
                        <li>• Suggested actions to improve ticket health</li>
                        <li>• Risk factors clearly identified</li>
                        <li>• Historical pattern recognition</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'macro-level' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Macro-Level: Team & Client Health</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl p-6">
                      <h4 className="text-xl font-semibold mb-3 text-red-400">Client Health Metrics</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Overall satisfaction trends</li>
                        <li>• Recurring issue patterns</li>
                        <li>• Service quality indicators</li>
                        <li>• Risk of churn analysis</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 rounded-xl p-6">
                      <h4 className="text-xl font-semibold mb-3 text-orange-400">Team Performance</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Engineer empathy scores</li>
                        <li>• Response time patterns</li>
                        <li>• Technical effectiveness</li>
                        <li>• Training opportunities</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-6">
                    AURA aggregates individual ticket scores to provide executive-level insights into overall service 
                    health, helping identify systemic issues and opportunities for improvement.
                  </p>
                </div>
              )}

              {activeTab === 'integration' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-4">Seamless Integration</h3>
                  <p className="text-gray-300 mb-6">
                    AURA Insights is deeply integrated into the Rezolve.ai platform, automatically enhancing your 
                    existing solutions with no additional setup required.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-red-400">Service Desk Management</h4>
                      <p className="text-gray-300 text-sm mt-1">
                        Real-time ticket health monitoring, automated alerts, and intervention recommendations
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-orange-400">Executive Insights</h4>
                      <p className="text-gray-300 text-sm mt-1">
                        High-level dashboards, trend analysis, and strategic recommendations for leadership
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-yellow-400">Workflow Automation</h4>
                      <p className="text-gray-300 text-sm mt-1">
                        Trigger automated actions based on health scores, escalate at-risk tickets automatically
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why AURA is Different */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why AURA Insights is Different</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Traditional Systems */}
              <div className="bg-black/50 border border-gray-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-400">Traditional Ticket Monitoring</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Simple time-based metrics only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>No sentiment analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Reactive problem detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Limited context understanding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>No empathy measurement</span>
                  </li>
                </ul>
              </div>

              {/* AURA Insights */}
              <div className="bg-black/50 border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/50 transition-all">
                <h3 className="text-xl font-bold mb-4 text-orange-400">AURA Insights</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Six-dimensional health scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Advanced sentiment analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Predictive problem detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Complete context awareness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Engineer empathy tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Differentiator */}
            <div className="mt-12 bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gradient">The AURA Advantage</h3>
              <p className="text-xl text-gray-300 mb-4">
                Identifies tickets in trouble <span className="text-orange-400 font-bold">up to 72 hours earlier</span> than traditional systems
              </p>
              <p className="text-gray-400">
                This early warning system gives your team the time they need to intervene effectively, 
                preventing escalations and maintaining customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Transform Your Service Delivery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Proactive Management</h3>
              <p className="text-gray-400">Identify and resolve issues before they escalate</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Improved Satisfaction</h3>
              <p className="text-gray-400">Higher CSAT scores through better service delivery</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-400">Make informed choices based on comprehensive insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Experience the Power of AURA Insights</h2>
            <p className="text-xl text-gray-300 mb-8">
              See how our advanced AI technology can transform your ticket management and service delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://xop.im/partner"
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden group"
              >
                <span className="relative z-10">See AURA in Action</span>
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