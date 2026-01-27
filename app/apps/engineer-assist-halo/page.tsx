'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  Search, Phone, Mail, Clock,
  CheckCircle, TrendingUp, Users, Star,
  BarChart3, ArrowRight, Zap
} from 'lucide-react'

export default function EngineerAssistHaloPage() {
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
    { metric: "30%", label: "Time savings per ticket", color: "text-cyan-400" },
    { metric: "2hrs", label: "Daily time saved per engineer", color: "text-blue-400" },
    { metric: "$15K", label: "Annual savings per engineer", color: "text-purple-400" }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Platform Logo */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="bg-white rounded-lg p-4">
                <img
                  src="/halo-logo.png"
                  alt="Halo PSA"
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <span className="hidden text-cyan-600 font-bold text-xl">Halo PSA</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Engineer Assist
            </h1>
            <p className="text-2xl text-cyan-400 font-semibold mb-4">
              for Halo PSA
            </p>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered assistance that helps your engineers resolve tickets faster with intelligent search,
              ticket insights, and client context - all within Halo PSA.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span className="font-medium">Essential AI Tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="px-6 py-12 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">See Engineer Assist in Action</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how AI-powered tools help Halo PSA engineers resolve tickets faster with
              <span className="text-cyan-400 font-semibold"> intelligent search</span>,
              <span className="text-cyan-400 font-semibold"> AI-generated insights</span>, and
              <span className="text-cyan-400 font-semibold"> instant client context</span>.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-gray-700">
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
            >
              <source src="/halo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-400 mt-4 text-sm">
            Experience significant time-to-resolution improvements with AI assistance built for Halo PSA.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core AI Capabilities</h2>
            <p className="text-xl text-gray-300">
              Everything engineers need to work faster and smarter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">
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

      {/* ROI Metrics */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
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
          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Manager Dashboards & Advanced Analytics?</h2>
            <p className="text-gray-300 mb-6">
              Upgrade to Engineer & Manager App for complete service desk visibility and team performance tracking.
            </p>
            <Link
              href="/apps/engineer-manager-halo"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all"
            >
              View Engineer & Manager App
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started with Engineer Assist</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start saving time on every ticket with AI-powered assistance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
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
