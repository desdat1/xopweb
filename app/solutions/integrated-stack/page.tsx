'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 animate-pulse-slow">
              <span className="text-5xl animate-float">🔗</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Integrations
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
              <div className="h-16 mb-4 flex items-center">
                <Image src="/connectwise-logo.png" alt="ConnectWise" width={180} height={40} className="object-contain" />
              </div>
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

            {/* ServiceNow */}
            <div className="bg-black/50 border border-green-500/30 rounded-2xl p-8 hover:border-green-500/50 transition-all">
              <div className="h-16 mb-4 flex items-center">
                <Image src="/servicenow-logo.png" alt="ServiceNow" width={180} height={40} className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">ServiceNow</h3>
              <p className="text-gray-300 mb-6">
                Enterprise-grade ITSM integration for large MSPs and IT teams
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Full incident management integration</li>
                <li>• Service catalog automation</li>
                <li>• Knowledge base sync</li>
                <li>• CMDB asset linking</li>
                <li>• Change management workflows</li>
                <li>• SLA tracking and escalation</li>
                <li>• User and group management</li>
                <li>• Custom field mapping</li>
              </ul>
            </div>

            {/* Halo PSA */}
            <div className="bg-black/50 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="h-16 mb-4 flex items-center">
                <Image src="/halo-logo.png" alt="Halo PSA" width={120} height={40} className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Halo PSA</h3>
              <p className="text-gray-300 mb-6">
                Modern PSA platform integration for growing MSPs
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Create and manage tickets</li>
                <li>• Update ticket status and priority</li>
                <li>• Time entry automation</li>
                <li>• Client and contact sync</li>
                <li>• Asset management integration</li>
                <li>• Knowledge base access</li>
                <li>• SLA and workflow automation</li>
                <li>• Bi-directional data sync</li>
              </ul>
            </div>

            {/* IT Glue */}
            <div className="bg-black/50 border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/50 transition-all">
              <div className="h-16 mb-4 flex items-center">
                <Image src="/logo_itglue.png" alt="IT Glue" width={120} height={40} className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">IT Glue</h3>
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
              <div className="h-16 mb-4 flex items-center">
                <div className="text-5xl">📁</div>
              </div>
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

            {/* Confluence */}
            <div className="bg-black/50 border border-blue-400/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all">
              <div className="h-16 mb-4 flex items-center">
                <div className="text-5xl">📘</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Confluence</h3>
              <p className="text-gray-300 mb-6">
                Team collaboration and documentation platform sync
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Search across all spaces</li>
                <li>• Retrieve page content</li>
                <li>• Access team documentation</li>
                <li>• Link to relevant pages</li>
                <li>• Knowledge base integration</li>
                <li>• Comment and annotation sync</li>
                <li>• Space-based organization</li>
                <li>• Version history access</li>
              </ul>
            </div>

            {/* ITBoost */}
            <div className="bg-black/50 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="h-16 mb-4 flex items-center">
                <div className="text-5xl">🚀</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">IT Boost</h3>
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
            <div className="bg-black/50 border border-teal-500/30 rounded-2xl p-8 hover:border-teal-500/50 transition-all">
              <div className="h-16 mb-4 flex items-center">
                <div className="text-5xl">🔐</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-teal-400">Hudu</h3>
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

      <Footer />
    </div>
  )
}