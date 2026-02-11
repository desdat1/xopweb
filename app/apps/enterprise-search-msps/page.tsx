'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight, Search, Database, Zap, Clock, Shield, Brain,
  FileText, Users, BarChart3, CheckCircle, TrendingUp, Settings,
  Link as LinkIcon, Archive, Globe, HardDrive
} from 'lucide-react'

export default function EnterpriseSearchMSPsPage() {
  const [activeSource, setActiveSource] = useState('connectwise')

  const dataSources = [
    {
      id: 'connectwise',
      title: 'ConnectWise Manage',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-blue-600 to-cyan-500',
      description: 'Search historical tickets, resolutions, and client information'
    },
    {
      id: 'itglue',
      title: 'IT Glue Documentation',
      icon: <Archive className="w-6 h-6" />,
      color: 'from-green-600 to-emerald-500',
      description: 'Access procedures, passwords, and configuration docs'
    },
    {
      id: 'sharepoint',
      title: 'SharePoint & Files',
      icon: <HardDrive className="w-6 h-6" />,
      color: 'from-purple-600 to-pink-500',
      description: 'Search documents, policies, and shared resources'
    },
    {
      id: 'websites',
      title: 'Vendor Portals',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-orange-600 to-red-500',
      description: 'Find information across vendor support sites'
    }
  ]

  const sourceDetails = {
    connectwise: {
      subtitle: 'Historical Ticket Intelligence',
      features: [
        'Search across all ticket descriptions and resolutions',
        'Find similar issues resolved by your team',
        'Access client-specific history and patterns',
        'Discover knowledge from completed projects'
      ],
      benefits: [
        'Reduce duplicate research time',
        'Learn from successful past resolutions',
        'Understand client history quickly',
        'Leverage institutional knowledge'
      ]
    },
    itglue: {
      subtitle: 'Documentation & Procedures',
      features: [
        'Instant access to client configurations',
        'Search procedures and runbooks',
        'Find passwords and credentials securely',
        'Access network diagrams and documentation'
      ],
      benefits: [
        'Eliminate password hunting',
        'Follow established procedures',
        'Maintain security compliance',
        'Onboard new engineers faster'
      ]
    },
    sharepoint: {
      subtitle: 'Files & Knowledge Base',
      features: [
        'Search document content, not just filenames',
        'Find policies and procedure documents',
        'Access training materials and guides',
        'Discover shared resources and templates'
      ],
      benefits: [
        'Find information regardless of file location',
        'Ensure policy compliance',
        'Accelerate training and development',
        'Reduce information silos'
      ]
    },
    websites: {
      subtitle: 'External Knowledge Sources',
      features: [
        'Search vendor support documentation',
        'Access product manuals and guides',
        'Find troubleshooting resources',
        'Discover software updates and patches'
      ],
      benefits: [
        'Get vendor-specific solutions',
        'Stay current with product updates',
        'Access authoritative troubleshooting',
        'Reduce escalation to vendor support'
      ]
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 animate-pulse-slow">
              <span className="text-5xl animate-float">🔍</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              Enterprise Search for MSPs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Unified AI search across ConnectWise, IT Glue, SharePoint, and vendor portals
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Find any piece of information in seconds with intelligent AI-powered search that understands context
            </p>
            
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Search Across All Your Data Sources</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            One search interface connects to all your knowledge repositories
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataSources.map((source, index) => (
              <div 
                key={source.id}
                className={`bg-gradient-to-br ${source.color} p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all transform hover:-translate-y-1 cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveSource(source.id)}
              >
                <div className="text-white mb-4">{source.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-white">{source.title}</h3>
                <p className="text-white/90 text-sm">{source.description}</p>
                <div className="mt-4 flex items-center text-white/80 text-sm">
                  <span>Explore</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source Details */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Source Deep Dive</h2>
          
          {/* Source Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {dataSources.map((source) => (
              <button
                key={source.id}
                onClick={() => setActiveSource(source.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeSource === source.id
                    ? `bg-gradient-to-r ${source.color} text-white`
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                {source.icon}
                <span className="font-medium">{source.title}</span>
              </button>
            ))}
          </div>

          {/* Active Source Details */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">
                {dataSources.find(s => s.id === activeSource)?.title}
              </h3>
              <p className="text-xl text-gray-300">
                {sourceDetails[activeSource as keyof typeof sourceDetails]?.subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Search className="w-6 h-6 text-green-400" />
                  Search Capabilities
                </h4>
                <div className="space-y-4">
                  {sourceDetails[activeSource as keyof typeof sourceDetails]?.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  Key Benefits
                </h4>
                <div className="space-y-4">
                  {sourceDetails[activeSource as keyof typeof sourceDetails]?.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features & ROI */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligent AI Search</h2>
              <p className="text-xl text-gray-300 mb-6">
                Natural language queries that understand context and intent, not just keywords.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-green-400" />
                  <span>Understands technical terminology and concepts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>Searches content, not just file names</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <span>Respects permissions and access controls</span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Productivity Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
                  <div className="text-sm text-gray-400">Faster Resolution</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">75%</div>
                  <div className="text-sm text-gray-400">Less Search Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-sm text-gray-400">Fewer Escalations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">90%</div>
                  <div className="text-sm text-gray-400">First Search Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Search Experience?</h2>
          <p className="text-xl text-gray-300 mb-8">
            See how Enterprise Search can revolutionize your MSP operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://xop.im/partner"
              className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/contact"
              className="relative bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/30 transform hover:scale-105 transition-all overflow-hidden group border border-gray-600"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}