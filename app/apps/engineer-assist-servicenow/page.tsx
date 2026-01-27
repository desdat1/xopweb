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

export default function EngineerAssistServiceNowPage() {
  const features = [
    {
      title: "AI-Powered Enterprise Search",
      icon: <Search className="w-6 h-6" />,
      description: "Search across knowledge bases, historical incidents, and documentation instantly"
    },
    {
      title: "Intelligent Ticket Insights",
      icon: <Zap className="w-6 h-6" />,
      description: "AI-generated summaries and resolution suggestions based on historical patterns"
    },
    {
      title: "Configuration Context",
      icon: <Users className="w-6 h-6" />,
      description: "Instant access to CMDB data, service maps, and configuration items"
    },
    {
      title: "Voice & Email Integration",
      icon: <Phone className="w-6 h-6" />,
      description: "AI assists with call documentation and email categorization"
    }
  ]

  const roiMetrics = [
    { metric: "30%", label: "Time savings per ticket", color: "text-green-400" },
    { metric: "2hrs", label: "Daily time saved per engineer", color: "text-emerald-400" },
    { metric: "$15K", label: "Annual savings per engineer", color: "text-teal-400" }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section with Video */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Platform Logo */}
            <div className="mb-6 flex items-center justify-center gap-4">
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

            {/* Video Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">See Engineer Assist in Action</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                Watch how AI-powered tools help ServiceNow engineers resolve incidents faster with
                <span className="text-green-400 font-semibold"> intelligent search</span>,
                <span className="text-green-400 font-semibold"> AI-generated insights</span>, and
                <span className="text-green-400 font-semibold"> instant configuration context</span>.
              </p>
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-green-500/20 border border-gray-700">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                >
                  <source src="/snow-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span className="font-medium">Essential AI Tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Escalations Video Section */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">AI-Powered Escalations Board</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Define escalation parameters and let AI identify incidents that need attention before they become critical issues.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-green-500/20 border border-gray-700 mb-8">
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
            >
              <source src="/ai-escalations-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Customizable Scoring Weights</h3>
              <p className="text-gray-300 text-sm mb-3">
                Fine-tune how AI identifies escalations by adjusting weights for:
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Disruption to end user work day</li>
                <li>• Priority level and incident age</li>
                <li>• Communication cadence</li>
                <li>• Technical issue complexity</li>
                <li>• End user sentiment and empathy</li>
                <li>• Chronic/repeat call patterns</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">AI Assignment & Skills Evaluation</h3>
              <p className="text-gray-300 text-sm mb-3">
                When escalating incidents, AI helps with intelligent reassignment:
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• "Why Escalate" rationale for each incident</li>
                <li>• Engineer suggestions with confidence scores</li>
                <li>• Technical skills evaluation before assignment</li>
                <li>• Real-time confidence threshold updates</li>
                <li>• Training tools for managers and engineers</li>
              </ul>
            </div>
          </div>
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
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">
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
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Manager Dashboards & Advanced Analytics?</h2>
            <p className="text-gray-300 mb-6">
              Upgrade to Engineer & Manager App for complete service desk visibility and team performance tracking.
            </p>
            <Link
              href="/apps/engineer-manager-servicenow"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all"
            >
              View Engineer & Manager App
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started with Engineer Assist</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start saving time on every incident with AI-powered assistance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
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
