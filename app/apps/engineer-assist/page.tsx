'use client'

import { useState } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import {
  Search, Phone, Users, Star,
  BarChart3, ArrowRight, Zap, CheckCircle, Clock, Brain, TrendingUp, Mail, MessageSquare
} from 'lucide-react'

export default function EngineerAssistPage() {
  const [activePSA, setActivePSA] = useState('connectwise')

  const features = [
    {
      title: "AI-Powered Enterprise Search",
      icon: <Search className="w-6 h-6" />,
      description: "Search across IT Glue, SharePoint, historical tickets, and documentation instantly"
    },
    {
      title: "Intelligent Ticket Insights",
      icon: <Zap className="w-6 h-6" />,
      description: "AI-generated summaries and resolution suggestions based on historical patterns"
    },
    {
      title: "Client Environment Context",
      icon: <Users className="w-6 h-6" />,
      description: "Instant access to client configurations, contacts, and common issues"
    },
    {
      title: "Voice & Email Integration",
      icon: <Phone className="w-6 h-6" />,
      description: "AI assists with call documentation and email categorization"
    }
  ]

  const roiMetrics = [
    { metric: "30%", label: "Time savings per ticket", color: "text-green-400" },
    { metric: "2hrs", label: "Daily time saved per engineer", color: "text-blue-400" },
    { metric: "$15K", label: "Annual savings per engineer", color: "text-purple-400" }
  ]

  const psaOptions = [
    {
      id: 'connectwise',
      name: "ConnectWise Manage",
      shortName: "ConnectWise",
      logo: "/connectwise-logo.png",
      video: "/rezolve-video.mp4",
      accentColor: "text-red-400",
      borderColor: "border-red-500/50",
      bgColor: "bg-red-500/20",
      gradientFrom: "from-red-600",
      gradientTo: "to-orange-500",
      shadowColor: "shadow-red-500/20",
      available: true,
      description: "Deep integration with ConnectWise Manage PSA for ticket management, time entry, and client data synchronization."
    },
    {
      id: 'halo',
      name: "Halo PSA",
      shortName: "Halo PSA",
      logo: "/halo-logo.png",
      video: "/halo-video.mp4",
      accentColor: "text-cyan-400",
      borderColor: "border-cyan-500/50",
      bgColor: "bg-cyan-500/20",
      gradientFrom: "from-cyan-600",
      gradientTo: "to-blue-500",
      shadowColor: "shadow-cyan-500/20",
      available: true,
      description: "Native Halo PSA integration providing seamless workflow automation and real-time ticket synchronization."
    },
    {
      id: 'servicenow',
      name: "ServiceNow ITSM",
      shortName: "ServiceNow",
      logo: "/servicenow-logo.png",
      video: "/snow-video.mp4",
      accentColor: "text-green-400",
      borderColor: "border-green-500/50",
      bgColor: "bg-green-500/20",
      gradientFrom: "from-green-600",
      gradientTo: "to-emerald-500",
      shadowColor: "shadow-green-500/20",
      available: true,
      description: "Enterprise-grade ServiceNow ITSM integration with CMDB access, incident management, and knowledge base connectivity."
    },
    {
      id: 'autotask',
      name: "Autotask PSA",
      shortName: "Autotask",
      logo: "/autotask.png",
      video: null,
      accentColor: "text-orange-400",
      borderColor: "border-orange-500/50",
      bgColor: "bg-orange-500/20",
      gradientFrom: "from-orange-600",
      gradientTo: "to-amber-500",
      shadowColor: "shadow-orange-500/20",
      available: false,
      comingSoon: "March 2026",
      description: "Full Autotask PSA integration coming soon with complete ticket management, time tracking, and client data access."
    }
  ]

  const activePSAData = psaOptions.find(p => p.id === activePSA)!

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
              <div className="flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4" />
                <span className="font-medium">PSA Embedded or Standalone</span>
              </div>
              <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">Powers Manager Insights</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              AI Engineer Assist
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Empower your engineers with AI-powered tools. Available embedded directly in your PSA
              or as a standalone application.
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Integrates with ConnectWise, Halo PSA, ServiceNow, and Autotask (coming soon)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
              >
                Request Demo
                <ArrowRight className="w-5 h-5" />
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
        </div>
      </section>

      {/* PSA Selector Tabs */}
      <section className="px-6 py-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Select Your PSA Platform</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {psaOptions.map((psa) => (
              <button
                key={psa.id}
                onClick={() => setActivePSA(psa.id)}
                className={`relative flex items-center px-4 py-3 rounded-xl transition-all ${
                  activePSA === psa.id
                    ? `bg-gradient-to-r ${psa.gradientFrom} ${psa.gradientTo} shadow-lg`
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <div className={`bg-white rounded-lg p-2 ${activePSA === psa.id ? '' : 'opacity-70'}`}>
                  <img src={psa.logo} alt={psa.name} className="h-8 w-auto" />
                </div>
                {!psa.available && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {psa.comingSoon}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active PSA Content */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {/* PSA Header */}
          <div className="text-center mb-12">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="bg-white rounded-lg p-4">
                <img
                  src={activePSAData.logo}
                  alt={activePSAData.name}
                  className="h-12 w-auto"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Engineer Assist for {activePSAData.name}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {activePSAData.description}
            </p>
          </div>

          {activePSAData.available ? (
            <>
              {/* Video Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 text-center">See It in Action</h3>
                <p className="text-lg text-center max-w-3xl mx-auto mb-6 text-gray-300">
                  Watch how AI-powered tools help {activePSAData.name} engineers resolve tickets faster with
                  <span className={`${activePSAData.accentColor} font-semibold`}> intelligent search</span>,
                  <span className={`${activePSAData.accentColor} font-semibold`}> AI-generated insights</span>, and
                  <span className={`${activePSAData.accentColor} font-semibold`}> instant client context</span>.
                </p>
                <div className={`relative rounded-xl overflow-hidden shadow-2xl ${activePSAData.shadowColor} border border-gray-700`}>
                  <video
                    key={activePSAData.video}
                    className="w-full h-auto"
                    controls
                    preload="metadata"
                  >
                    <source src={activePSAData.video!} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Key Benefits Badge */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className={`flex items-center gap-2 ${activePSAData.bgColor} ${activePSAData.accentColor} px-4 py-2 rounded-full`}>
                  <Star className="w-4 h-4" />
                  <span className="font-medium">Essential AI Tools</span>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`bg-gray-900/50 border ${activePSAData.borderColor} rounded-xl p-6`}>
                  <h4 className={`text-lg font-semibold mb-4 ${activePSAData.accentColor}`}>Key Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activePSAData.accentColor}`} />
                      <span>Native integration - works inside your PSA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activePSAData.accentColor}`} />
                      <span>Instant access to knowledge and documentation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activePSAData.accentColor}`} />
                      <span>AI-powered ticket resolution suggestions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activePSAData.accentColor}`} />
                      <span>Real-time client context and history</span>
                    </div>
                  </div>
                </div>
                <div className={`bg-gray-900/50 border ${activePSAData.borderColor} rounded-xl p-6`}>
                  <h4 className={`text-lg font-semibold mb-4 ${activePSAData.accentColor}`}>Integration Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activePSAData.accentColor}`} />
                      <span>Automatic ticket data synchronization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activePSAData.accentColor}`} />
                      <span>Time entry and billing integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activePSAData.accentColor}`} />
                      <span>Client and contact data access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activePSAData.accentColor}`} />
                      <span>Configuration and asset visibility</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Coming Soon Content */
            <div className="text-center">
              <div className={`bg-gray-900/50 border ${activePSAData.borderColor} rounded-2xl p-12 max-w-2xl mx-auto`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${activePSAData.bgColor} mb-6`}>
                  <Clock className={`w-10 h-10 ${activePSAData.accentColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Coming {activePSAData.comingSoon}</h3>
                <p className="text-gray-300 mb-8">
                  We're working hard to bring AI Engineer Assist to {activePSAData.name}.
                  Join the waitlist to be notified when it's available.
                </p>
                <div className="space-y-4">
                  <h4 className={`text-lg font-semibold ${activePSAData.accentColor}`}>Planned Features</h4>
                  <div className="grid gap-3 text-left max-w-md mx-auto">
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activePSAData.accentColor}`} />
                      <span>Full PSA ticket integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activePSAData.accentColor}`} />
                      <span>AI-powered knowledge search</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activePSAData.accentColor}`} />
                      <span>Time entry automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${activePSAData.accentColor}`} />
                      <span>Client context and history</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${activePSAData.gradientFrom} ${activePSAData.gradientTo} px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all mt-8`}
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Core AI Capabilities */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core AI Capabilities</h2>
            <p className="text-xl text-gray-300">
              Everything engineers need to work faster and smarter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every Interaction Builds Intelligence */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
              <Brain className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">AI Scoring</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Every Interaction Builds Intelligence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As you work, the AI Scoring module captures patterns that power Manager App insights.
              The system learns from your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-green-500/30 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 mx-auto mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Search Queries</h4>
              <p className="text-sm text-gray-400">Reveal knowledge gaps and documentation needs</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-green-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Resolutions</h4>
              <p className="text-sm text-gray-400">Map expertise and success patterns</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-green-500/30 transition-all">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Voice Calls</h4>
              <p className="text-sm text-gray-400">Capture sentiment and escalation signals</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-green-500/30 transition-all">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Email & Teams</h4>
              <p className="text-sm text-gray-400">Track response cadence and engagement</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">This Data Powers Manager App</h3>
                <p className="text-gray-300">
                  AI Triage, Escalation Detection, Client Health, and Team Performance modules
                  all depend on data captured from your daily work.
                </p>
              </div>
              <Link
                href="/apps/manager-app"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all whitespace-nowrap"
              >
                See Manager Insights
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Results Across All PSAs</h2>
            <p className="text-xl text-gray-300">Consistent ROI regardless of your PSA platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {roiMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-center">
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>{metric.metric}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Manager Dashboards & Advanced Analytics?</h2>
            <p className="text-gray-300 mb-6">
              Upgrade to AI Manager Application for complete service desk visibility and team performance tracking.
            </p>
            <Link
              href="/apps/manager-app"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all"
            >
              View AI Manager Application
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started with AI Engineer Assist</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start saving time on every ticket with AI-powered assistance for your PSA
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              Request Demo
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
