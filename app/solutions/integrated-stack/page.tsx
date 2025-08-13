'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function IntegrationsPage() {
  const [activeTab, setActiveTab] = useState('msp-tools')

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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 animate-pulse-slow">
              <span className="text-5xl animate-float">🔗</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Integrated to Your Stack
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideIn">
              Seamlessly connect with the tools that power your MSP and your clients' businesses
            </p>
          </div>
        </div>
      </section>

      {/* MSP-Critical Integrations */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gradient">MSP-Critical Integrations</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Deep, native integrations with the tools that run your MSP business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* ConnectWise Manage */}
            <div className="bg-black/50 border border-indigo-500/30 rounded-2xl p-8 hover:border-indigo-500/50 transition-all">
              <div className="text-4xl mb-4">🎫</div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">ConnectWise Manage</h3>
              <p className="text-gray-300 mb-6">
                The deepest integration available - full bi-directional sync with your PSA
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Create new tickets with full categorization</li>
                <li>• Update ticket status and priority</li>
                <li>• Assign tickets to technicians</li>
                <li>• Log time entries automatically</li>
                <li>• Create and update contacts</li>
                <li>• Update company information</li>
                <li>• Retrieve and add ticket notes</li>
                <li>• Full service catalog integration</li>
              </ul>
            </div>

            {/* IT Glue */}
            <div className="bg-black/50 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">IT Glue</h3>
              <p className="text-gray-300 mb-6">
                Complete documentation platform integration for instant knowledge access
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Create new documentation entries</li>
                <li>• Update existing assets</li>
                <li>• Link configuration items</li>
                <li>• Create and update SOPs</li>
                <li>• Search across all documentation</li>
                <li>• Add comments and notes</li>
                <li>• Organization-based retrieval</li>
                <li>• Asset relationship mapping</li>
              </ul>
            </div>

            {/* SharePoint */}
            <div className="bg-black/50 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-4">📁</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">SharePoint</h3>
              <p className="text-gray-300 mb-6">
                Unified access to all your internal knowledge and client documentation
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Create folders and upload files</li>
                <li>• Search documents across sites</li>
                <li>• Retrieve files on demand</li>
                <li>• Manage folder access permissions</li>
                <li>• Add SharePoint site access</li>
                <li>• Access shared areas via AD</li>
                <li>• Full text search capabilities</li>
                <li>• Document version control</li>
              </ul>
            </div>

            {/* ITBoost */}
            <div className="bg-black/50 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">ITBoost</h3>
              <p className="text-gray-300 mb-6">
                Streamlined documentation management and knowledge sharing
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Create documentation entries</li>
                <li>• Update existing documents</li>
                <li>• Link documentation to tickets</li>
                <li>• Add notes to documents</li>
                <li>• Search knowledgebase</li>
                <li>• View change history</li>
                <li>• Share documents externally</li>
                <li>• Template management</li>
              </ul>
            </div>

            {/* Hudu */}
            <div className="bg-black/50 border border-green-500/30 rounded-2xl p-8 hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Hudu</h3>
              <p className="text-gray-300 mb-6">
                Modern IT documentation platform with asset management
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Create new assets</li>
                <li>• Update asset fields</li>
                <li>• Retrieve documentation</li>
                <li>• Link assets to organizations</li>
                <li>• Create KB articles</li>
                <li>• Edit existing documentation</li>
                <li>• Search across all assets</li>
                <li>• Asset tagging and categorization</li>
              </ul>
            </div>

            {/* Enterprise Options */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-600/30 rounded-2xl p-8">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Enterprise MSP Tools</h3>
              <p className="text-gray-400 mb-6">
                For larger MSPs, we also integrate with:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-1">ServiceNow</h4>
                  <p className="text-sm text-gray-400">Full ITSM integration with catalog and workflow automation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-1">Jira Service Management</h4>
                  <p className="text-sm text-gray-400">Complete ticket lifecycle and knowledge base integration</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-1">Confluence</h4>
                  <p className="text-sm text-gray-400">Team collaboration and documentation platform sync</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Integration Ecosystem</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['msp-tools', 'productivity', 'hr-systems', 'security', 'rmm-tools'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              {activeTab === 'msp-tools' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-6">MSP & Ticketing Systems</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🎫</span>
                      </div>
                      <p className="text-sm">ConnectWise</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">📘</span>
                      </div>
                      <p className="text-sm">ServiceNow</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <p className="text-sm">Zendesk</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🌿</span>
                      </div>
                      <p className="text-sm">Freshdesk</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">⚙️</span>
                      </div>
                      <p className="text-sm">ManageEngine</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🍒</span>
                      </div>
                      <p className="text-sm">Cherwell</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🔵</span>
                      </div>
                      <p className="text-sm">Jira</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">💫</span>
                      </div>
                      <p className="text-sm">HaloPSA</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'productivity' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-6">Productivity & Collaboration</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">📧</span>
                      </div>
                      <p className="text-sm">Office 365</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🔵</span>
                      </div>
                      <p className="text-sm">Google Workspace</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">💬</span>
                      </div>
                      <p className="text-sm">MS Teams</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">💼</span>
                      </div>
                      <p className="text-sm">Slack</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">📹</span>
                      </div>
                      <p className="text-sm">Zoom</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🎥</span>
                      </div>
                      <p className="text-sm">Webex</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">📦</span>
                      </div>
                      <p className="text-sm">Dropbox</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">📂</span>
                      </div>
                      <p className="text-sm">Box</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'hr-systems' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-6">HR & Business Systems</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">👥</span>
                      </div>
                      <p className="text-sm">Workday</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🎋</span>
                      </div>
                      <p className="text-sm">BambooHR</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">💰</span>
                      </div>
                      <p className="text-sm">Gusto</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <p className="text-sm">SAP SuccessFactors</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <p className="text-sm">UKG</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">👤</span>
                      </div>
                      <p className="text-sm">PeopleSoft</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">☁️</span>
                      </div>
                      <p className="text-sm">Salesforce</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">📊</span>
                      </div>
                      <p className="text-sm">HubSpot</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-6">Security & Identity Management</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🔐</span>
                      </div>
                      <p className="text-sm">Active Directory</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🔑</span>
                      </div>
                      <p className="text-sm">Okta</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <p className="text-sm">OneLogin</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <p className="text-sm">MS Endpoint Manager</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">📝</span>
                      </div>
                      <p className="text-sm">DocuSign</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">✍️</span>
                      </div>
                      <p className="text-sm">HelloSign</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <p className="text-sm">MS Dynamics</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">📋</span>
                      </div>
                      <p className="text-sm">SAP Concur</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'rmm-tools' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold mb-6">RMM & Automation Tools</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🛠️</span>
                      </div>
                      <p className="text-sm">Atera</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🥷</span>
                      </div>
                      <p className="text-sm">NinjaOne</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <p className="text-sm">N-able</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 mb-2">
                        <span className="text-2xl">⚔️</span>
                      </div>
                      <p className="text-sm">Tactical RMM</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gray-900/50 rounded-lg">
                    <p className="text-sm text-gray-400">
                      RMM integrations enable: Software installation, network printer setup, OneDrive troubleshooting, 
                      USB drive management, cache clearing, device configuration, new laptop setup assistance, 
                      filesystem fixes, and proactive monitoring with automatic ticket creation.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Integrations Matter</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Deep, Not Surface</h3>
              <p className="text-gray-400">Full API integration with bi-directional sync, not just basic webhooks</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Pre-Built & Ready</h3>
              <p className="text-gray-400">250+ out-of-the-box integrations ready to deploy on day one</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Available</h3>
              <p className="text-gray-400">Need something specific? We can build custom integrations in weeks</p>
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
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Connect Your Entire Tech Stack</h2>
            <p className="text-xl text-gray-300 mb-8">
              See how our integrations can transform your MSP operations and client service delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://xop.im/partner"
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden group"
              >
                <span className="relative z-10">View Integration Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="relative bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/30 transform hover:scale-105 transition-all overflow-hidden group border border-gray-600"
              >
                <span className="relative z-10">Discuss Your Stack</span>
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