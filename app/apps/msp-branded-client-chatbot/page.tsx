'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, Bot, MessageCircle, Users, Clock, Shield, Zap,
  FileText, BarChart3, CheckCircle, TrendingUp, Settings,
  Building2, Target, Brain, Ticket, AlertCircle
} from 'lucide-react'

export default function MSPBrandedChatbotPage() {
  const [activeFeature, setActiveFeature] = useState('deflection')

  const features = [
    {
      id: 'deflection',
      title: 'Ticket Deflection',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-green-600 to-emerald-500',
      description: 'Resolve 20% of requests instantly without creating tickets'
    },
    {
      id: 'escalation',
      title: 'Smart Escalation',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-blue-600 to-cyan-500',
      description: 'Seamlessly create tickets with full context when needed'
    },
    {
      id: 'teams',
      title: 'Teams Integration',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'from-purple-600 to-pink-500',
      description: 'Lives where your clients work - directly in Microsoft Teams'
    }
  ]

  const featureDetails = {
    deflection: {
      subtitle: 'Instant Problem Resolution',
      capabilities: [
        'Answers common IT questions immediately',
        'Provides password reset instructions',
        'Guides users through basic troubleshooting',
        'Offers links to relevant documentation'
      ],
      benefits: [
        'Reduce ticket volume by 20% on average',
        'Provide 24/7 instant support',
        'Improve client satisfaction scores',
        'Free up engineers for complex issues'
      ]
    },
    escalation: {
      subtitle: 'Intelligent Ticket Creation',
      capabilities: [
        'Creates tickets in ConnectWise Manage automatically',
        'Captures full conversation context',
        'Categorizes issues appropriately',
        'Includes relevant client information'
      ],
      benefits: [
        'No lost information during handoffs',
        'Faster engineer response times',
        'Better ticket categorization',
        'Complete audit trail of interactions'
      ]
    },
    teams: {
      subtitle: 'Native Microsoft Teams Experience',
      capabilities: [
        'Installs as a Teams app in client environment',
        'Appears as a branded bot in Teams channels',
        'Supports both chat and channel conversations',
        'Integrates with Teams notifications'
      ],
      benefits: [
        'No additional software to install',
        'Users stay in familiar environment',
        'Leverage existing Teams adoption',
        'Maintain professional branding'
      ]
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-pulse-slow">
              <span className="text-5xl animate-float">🤖</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              MSP Branded Client Teams Chatbot
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              White-labeled AI chatbot that deflects tickets and delights clients in Microsoft Teams
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Deploy 24/7 AI support under your brand with seamless escalation to human agents
            </p>
            
            {/* Available Now Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-6 py-3 rounded-full font-semibold">
              <span className="text-xl">✅</span>
              <span>Available Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Features */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Three Core Features</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive AI support that works seamlessly with your existing workflow
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`bg-gradient-to-br ${feature.color} p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all transform hover:-translate-y-1 cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className="text-white mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/90 text-sm">{feature.description}</p>
                <div className="mt-4 flex items-center text-white/80 text-sm">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Feature Deep Dive</h2>
          
          {/* Feature Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeFeature === feature.id
                    ? `bg-gradient-to-r ${feature.color} text-white`
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                {feature.icon}
                <span className="font-medium">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Active Feature Details */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">
                {features.find(f => f.id === activeFeature)?.title}
              </h3>
              <p className="text-xl text-gray-300">
                {featureDetails[activeFeature as keyof typeof featureDetails]?.subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Capabilities */}
              <div>
                <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-blue-400" />
                  Capabilities
                </h4>
                <div className="space-y-4">
                  {featureDetails[activeFeature as keyof typeof featureDetails]?.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  Key Benefits
                </h4>
                <div className="space-y-4">
                  {featureDetails[activeFeature as keyof typeof featureDetails]?.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & ROI */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Simple Implementation</h2>
              <p className="text-xl text-gray-300 mb-6">
                Deploy in your client's Teams environment in minutes, not weeks.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-blue-400" />
                  <span>Completely branded with your company identity</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Client data stays in their Teams environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bot className="w-5 h-5 text-purple-400" />
                  <span>No server setup or maintenance required</span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Business Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">20%</div>
                  <div className="text-sm text-gray-400">Ticket Deflection</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                  <div className="text-sm text-gray-400">Faster Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">90%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            
            {/* CTA */}
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
                <span className="relative z-10">Calculate ROI</span>
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