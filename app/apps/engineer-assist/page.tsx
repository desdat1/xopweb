'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import {
  Search, Phone, Users, Star,
  BarChart3, ArrowRight, Zap, CheckCircle
} from 'lucide-react'

export default function EngineerAssistPage() {
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

  const psaIntegrations = [
    {
      name: "ConnectWise Manage",
      logo: "/connectwise-logo.png",
      video: "/rezolve-video.mp4",
      color: "red",
      gradient: "from-red-900/20 via-black to-gray-900/20",
      accentColor: "text-red-400",
      borderColor: "border-red-500/50",
      bgColor: "bg-red-500/20",
      shadowColor: "shadow-red-500/20",
      description: "Deep integration with ConnectWise Manage PSA for ticket management, time entry, and client data synchronization."
    },
    {
      name: "Halo PSA",
      logo: "/halo-logo.png",
      video: "/halo-video.mp4",
      color: "cyan",
      gradient: "from-cyan-900/20 via-black to-blue-900/20",
      accentColor: "text-cyan-400",
      borderColor: "border-cyan-500/50",
      bgColor: "bg-cyan-500/20",
      shadowColor: "shadow-cyan-500/20",
      description: "Native Halo PSA integration providing seamless workflow automation and real-time ticket synchronization."
    },
    {
      name: "ServiceNow ITSM",
      logo: "/servicenow-logo.png",
      video: "/snow-video.mp4",
      color: "green",
      gradient: "from-green-900/20 via-black to-emerald-900/20",
      accentColor: "text-green-400",
      borderColor: "border-green-500/50",
      bgColor: "bg-green-500/20",
      shadowColor: "shadow-green-500/20",
      description: "Enterprise-grade ServiceNow ITSM integration with CMDB access, incident management, and knowledge base connectivity."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4" />
                <span className="font-medium">PSA Embedded</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              AI Engineer Assist
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Empower your engineers with AI-powered tools that integrate directly into their PSA workflow.
              Search knowledge bases, get intelligent ticket insights, and resolve issues faster.
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

            {/* Supported PSAs */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span className="text-gray-400">Supported PSAs:</span>
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-lg px-4 py-2">
                  <img src="/connectwise-logo.png" alt="ConnectWise" className="h-8 w-auto" />
                </div>
                <div className="bg-white rounded-lg px-4 py-2">
                  <img src="/halo-logo.png" alt="Halo PSA" className="h-8 w-auto" />
                </div>
                <div className="bg-white rounded-lg px-4 py-2">
                  <img src="/servicenow-logo.png" alt="ServiceNow" className="h-8 w-auto" />
                </div>
              </div>
            </div>
          </div>
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

      {/* PSA Integration Sections */}
      {psaIntegrations.map((psa, index) => (
        <section key={psa.name} className={`relative py-16 overflow-hidden ${index % 2 === 1 ? 'bg-gray-900/30' : ''}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${psa.gradient}`}></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* PSA Header */}
              <div className="text-center mb-8">
                <div className="mb-6 flex items-center justify-center gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <img
                      src={psa.logo}
                      alt={psa.name}
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Engineer Assist for {psa.name}</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {psa.description}
                </p>
              </div>

              {/* Video Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-center">See It in Action</h3>
                <p className={`text-lg text-center max-w-3xl mx-auto mb-6 text-gray-300`}>
                  Watch how AI-powered tools help {psa.name} engineers resolve tickets faster with
                  <span className={`${psa.accentColor} font-semibold`}> intelligent search</span>,
                  <span className={`${psa.accentColor} font-semibold`}> AI-generated insights</span>, and
                  <span className={`${psa.accentColor} font-semibold`}> instant client context</span>.
                </p>
                <div className={`relative rounded-xl overflow-hidden shadow-2xl ${psa.shadowColor} border border-gray-700`}>
                  <video
                    className="w-full h-auto"
                    controls
                    preload="metadata"
                  >
                    <source src={psa.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className={`flex items-center gap-2 ${psa.bgColor} ${psa.accentColor} px-4 py-2 rounded-full`}>
                  <Star className="w-4 h-4" />
                  <span className="font-medium">Essential AI Tools</span>
                </div>
              </div>

              {/* Features for this PSA */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`bg-gray-900/50 border ${psa.borderColor} rounded-xl p-6`}>
                  <h4 className={`text-lg font-semibold mb-4 ${psa.accentColor}`}>Key Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${psa.accentColor}`} />
                      <span>Native integration - works inside your PSA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${psa.accentColor}`} />
                      <span>Instant access to knowledge and documentation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${psa.accentColor}`} />
                      <span>AI-powered ticket resolution suggestions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${psa.accentColor}`} />
                      <span>Real-time client context and history</span>
                    </div>
                  </div>
                </div>
                <div className={`bg-gray-900/50 border ${psa.borderColor} rounded-xl p-6`}>
                  <h4 className={`text-lg font-semibold mb-4 ${psa.accentColor}`}>Integration Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${psa.accentColor}`} />
                      <span>Automatic ticket data synchronization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${psa.accentColor}`} />
                      <span>Time entry and billing integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${psa.accentColor}`} />
                      <span>Client and contact data access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${psa.accentColor}`} />
                      <span>Configuration and asset visibility</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

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
      <section className="px-6 py-16">
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
