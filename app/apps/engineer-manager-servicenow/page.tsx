'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import {
  Shield, Zap, Search, Phone, Mail, Clock,
  CheckCircle, TrendingUp, Users, Star, MessageCircle,
  BarChart3, ArrowRight, Database
} from 'lucide-react'

export default function EngineerManagerServiceNowPage() {
  const coreCapabilities = [
    {
      title: "AI-Powered Enterprise Search",
      icon: <Search className="w-6 h-6" />,
      description: "Search across knowledge bases, historical incidents, CMDB, and documentation with context awareness",
      benefits: ["Instant access to configurations", "Historical resolution patterns", "CMDB-aware responses"]
    },
    {
      title: "Voice Agent Integration",
      icon: <Phone className="w-6 h-6" />,
      description: "Voice AI assists with call handling, documentation, and incident creation from phone conversations",
      benefits: ["Auto-document phone calls", "Voice-to-incident conversion", "Call summary generation"]
    },
    {
      title: "Email Agent Assistance",
      icon: <Mail className="w-6 h-6" />,
      description: "AI processes incoming emails, categorizes incidents, and suggests responses based on context",
      benefits: ["Smart email categorization", "Automated response drafts", "Priority detection"]
    },
    {
      title: "Virtual Agent Integration",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Seamless integration with ServiceNow Virtual Agent for end-user self-service",
      benefits: ["30%+ incident deflection", "Bidirectional updates", "Context preservation"]
    }
  ]

  const managerFeatures = [
    {
      title: "Real-Time Dashboard",
      description: "Monitor incident queues, SLA compliance, and team workload in real-time"
    },
    {
      title: "Team Performance Analytics",
      description: "Track resolution times, customer satisfaction, and engineer productivity"
    },
    {
      title: "AI-Assisted Assignment",
      description: "Automatically assign incidents to the best-suited engineer based on skills and availability"
    },
    {
      title: "Escalation Management",
      description: "Proactive alerts and automated escalation workflows integrated with ServiceNow"
    }
  ]

  const roiMetrics = [
    { metric: "45%", label: "Time savings per incident", color: "text-green-400" },
    { metric: "2.5hrs", label: "Daily time saved per engineer", color: "text-emerald-400" },
    { metric: "$18K", label: "Annual savings per engineer", color: "text-teal-400" },
    { metric: "30%+", label: "Incidents deflected", color: "text-orange-400" }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Platform Logo */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="bg-white rounded-lg p-4">
                <img
                  src="/servicenow-logo.png"
                  alt="ServiceNow"
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <span className="hidden text-green-600 font-bold text-xl">ServiceNow</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              Engineer & Manager App
            </h1>
            <p className="text-2xl text-green-400 font-semibold mb-4">
              for ServiceNow
            </p>
            <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Complete AI-Powered Platform with Engineer Assistance and Manager Dashboards
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              The only platform that combines Enterprise Search, Voice AI, Email Agents, and Virtual Agent integration
              with powerful manager analytics - all integrated with ServiceNow ITSM
            </p>

            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span className="font-medium">Complete Platform</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span className="font-medium">Engineer + Manager Tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Engineer AI Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything engineers need to resolve incidents faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">
                    {capability.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                    <p className="text-gray-300 mb-4">{capability.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {capability.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manager Features */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Manager Dashboard & Analytics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete visibility into your ITSM operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {managerFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven ROI & Impact</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {roiMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-center">
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>{metric.metric}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Complete Platform Pricing</h2>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-green-400">$55</span>
                  <span className="text-xl text-gray-300">per engineer/month</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>All AI capabilities included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Manager dashboards & analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>ServiceNow Virtual Agent integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>No usage or token charges</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your ITSM Operations Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join organizations saving 2.5 hours daily per engineer with our complete AI platform
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/resources/roi"
              className="inline-flex items-center gap-2 bg-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-all"
            >
              <BarChart3 className="w-5 h-5" />
              Calculate ROI
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
