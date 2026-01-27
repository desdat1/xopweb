'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, Bot, MessageCircle, Users, Clock, Shield, Zap,
  FileText, BarChart3, CheckCircle, TrendingUp, Settings,
  Building2, Target, Brain, Ticket, AlertCircle, Phone, Mail,
  DollarSign, Database, Search, ArrowUp, Calculator, Layers
} from 'lucide-react'

export default function MSPBrandedChatbotPage() {
  const [activeTab, setActiveTab] = useState('deflection')

  const impactStats = [
    { value: '30%+', label: 'Level 1 Ticket Reduction', icon: <Ticket className="w-8 h-8" /> },
    { value: '75%', label: 'Phone Call Deflection', icon: <Phone className="w-8 h-8" /> },
    { value: '60%', label: 'Email Volume Reduction', icon: <Mail className="w-8 h-8" /> },
    { value: '$180K', label: 'Annual Engineering Savings', icon: <DollarSign className="w-8 h-8" /> }
  ]

  const trainingData = [
    {
      title: 'Client Documentation',
      icon: <FileText className="w-6 h-6" />,
      description: 'Trained on client-specific knowledge bases, procedures, and policies'
    },
    {
      title: 'Application Stack',
      icon: <Layers className="w-6 h-6" />,
      description: 'Deep knowledge of client\'s specific software, integrations, and workflows'
    },
    {
      title: 'Historical Tickets',
      icon: <Database className="w-6 h-6" />,
      description: 'Learns from previous resolutions to provide better responses over time'
    },
    {
      title: 'MSP Best Practices',
      icon: <Target className="w-6 h-6" />,
      description: 'Incorporates your MSP\'s proven troubleshooting methodologies'
    }
  ]

  const tabs = [
    { id: 'deflection', label: 'Ticket Deflection', icon: <Shield className="w-5 h-5" /> },
    { id: 'training', label: 'Smart Training', icon: <Brain className="w-5 h-5" /> },
    { id: 'upgrade', label: 'Enterprise Upgrade', icon: <ArrowUp className="w-5 h-5" /> }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  End User Teams Chatbot
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  <span className="text-green-400 font-bold">Eliminate 30%+ of Level 1 tickets</span> with AI-powered 
                  end user support trained on their specific environment and application stack.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  Dramatically reduce phone calls, email tickets, and helpdesk queue volume while 
                  providing instant 24/7 support under your brand.
                </p>
                
                {/* Key ROI Point */}
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Calculator className="w-6 h-6 text-green-400" />
                    <h3 className="text-xl font-bold">ROI Reality Check</h3>
                  </div>
                  <p className="text-gray-300">
                    If your MSP handles 1,000 Level 1 tickets monthly at 45 minutes average resolution time, 
                    deflecting just 30% saves <span className="text-green-400 font-bold">22.5 hours weekly</span> of 
                    engineering time.
                  </p>
                </div>

              </div>

              {/* Impact Stats */}
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">Measurable Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-green-400 mb-3 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Data Sources */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trained on Their Environment</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlike generic chatbots, we train on your client's specific data, applications, 
              and proven solutions for maximum deflection effectiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingData.map((data, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-colors">
                <div className="text-green-400 mb-4 flex justify-center">
                  {data.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{data.title}</h3>
                <p className="text-gray-400 text-sm">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Feature Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Solution Architecture</h2>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            {activeTab === 'deflection' && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-center">Level 1 Ticket Elimination</h3>
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-green-400">What Gets Deflected</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>Password reset requests and account lockouts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>Software installation and basic troubleshooting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>Network connectivity and printer issues</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>Application-specific how-to questions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>Policy and procedure inquiries</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">ROI Calculation</h4>
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Monthly Level 1 tickets:</span>
                          <span className="font-semibold">1,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Average resolution time:</span>
                          <span className="font-semibold">45 minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>30% deflection rate:</span>
                          <span className="font-semibold">300 tickets</span>
                        </div>
                        <div className="border-t border-blue-500/30 pt-3">
                          <div className="flex justify-between text-blue-400 font-bold">
                            <span>Monthly time savings:</span>
                            <span>225 hours</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'training' && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-center">Comprehensive AI Training</h3>
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-purple-400">Data Sources</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Database className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div>
                          <div className="font-medium">Knowledge Base Integration</div>
                          <div className="text-sm text-gray-400">SharePoint, Confluence, internal wikis, and documentation</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Layers className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div>
                          <div className="font-medium">Application Stack Training</div>
                          <div className="text-sm text-gray-400">Office 365, CRM systems, industry-specific software</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Ticket className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div>
                          <div className="font-medium">Historical Resolution Patterns</div>
                          <div className="text-sm text-gray-400">Previous successful solutions and troubleshooting paths</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-green-400">Training Benefits</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-green-400 mt-0.5" />
                        <div>
                          <div className="font-medium">Context-Aware Responses</div>
                          <div className="text-sm text-gray-400">Understands client-specific terminology and workflows</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Brain className="w-5 h-5 text-green-400 mt-0.5" />
                        <div>
                          <div className="font-medium">Continuous Learning</div>
                          <div className="text-sm text-gray-400">Improves responses based on successful resolutions</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-green-400 mt-0.5" />
                        <div>
                          <div className="font-medium">Accurate Escalation</div>
                          <div className="text-sm text-gray-400">Knows when to escalate and provides complete context</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'upgrade' && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-center">Enterprise Search Upgrade Path</h3>
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-orange-400">Seamless Interface Evolution</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <ArrowUp className="w-5 h-5 text-orange-400 mt-0.5" />
                        <div>
                          <div className="font-medium">Same Teams Interface</div>
                          <div className="text-sm text-gray-400">Users don't need to learn new tools or interfaces</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Search className="w-5 h-5 text-orange-400 mt-0.5" />
                        <div>
                          <div className="font-medium">Enhanced Search Capabilities</div>
                          <div className="text-sm text-gray-400">Advanced search across all enterprise systems and data</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Database className="w-5 h-5 text-orange-400 mt-0.5" />
                        <div>
                          <div className="font-medium">Expanded Data Sources</div>
                          <div className="text-sm text-gray-400">HR policies, operations manuals, training materials</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-green-400">Revenue Opportunity</h4>
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-400 mb-2">$250+</div>
                          <div className="text-sm text-gray-400">Monthly per client (first 20 users)</div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Revenue potential:</span>
                            <span className="font-semibold text-green-400">30-40% margins</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Implementation:</span>
                            <span className="font-semibold">Same Teams bot</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Training:</span>
                            <span className="font-semibold">Minimal required</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Eliminate 30%+ of Your Level 1 Tickets</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to dramatically reduce helpdesk volume while improving client satisfaction? 
            Let's discuss your specific environment and ROI potential.
          </p>
          
          {/* ROI Highlight */}
          <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">30%+</div>
                <div className="text-sm text-gray-400">Ticket Deflection</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">225</div>
                <div className="text-sm text-gray-400">Hours Saved Monthly</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">$180K</div>
                <div className="text-sm text-gray-400">Annual Savings</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://xop.im/partner"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              <Calculator className="w-5 h-5" />
              Calculate Your ROI
            </Link>
            <Link
              href="/resources/roi"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-green-500 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-black transition-all"
            >
              <FileText className="w-5 h-5" />
              Custom ROI Analysis
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}