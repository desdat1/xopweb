'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import {
  Zap, Brain, Clock, TrendingUp, Search, CheckCircle,
  ArrowRight, Users, MessageCircle, Phone, Mail, FileText,
  Target, Shield, Award, X, Check
} from 'lucide-react'

export default function EngineerEfficiencyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const dataCapture = [
    { label: 'Search Patterns', description: 'What engineers look for reveals knowledge gaps', icon: <Search className="w-5 h-5" /> },
    { label: 'Resolution Success', description: 'Which solutions work builds expertise mapping', icon: <CheckCircle className="w-5 h-5" /> },
    { label: 'Response Time', description: 'Speed of engagement tracked automatically', icon: <Clock className="w-5 h-5" /> },
    { label: 'Communication Quality', description: 'Clarity and follow-up patterns analyzed', icon: <MessageCircle className="w-5 h-5" /> },
  ]

  const transformations = [
    { before: 'Searching across 5 systems to find an answer', after: 'One search, instant results from all sources' },
    { before: 'Starting every ticket from scratch', after: 'AI-generated context and resolution suggestions' },
    { before: 'Manually writing time entries at end of day', after: 'Automatic time capture as you work' },
    { before: 'Tribal knowledge locked in senior engineers', after: 'Expertise accessible to your entire team' },
  ]

  const capabilities = [
    {
      title: 'Enterprise Search',
      description: 'Search across tickets, documentation, IT Glue, SharePoint—everything in one place',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'AI Ticket Insights',
      description: 'Instant summaries, resolution suggestions, and similar ticket analysis',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Client Environment Context',
      description: 'User count, contacts, application stack, common issues—all at a glance',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Automatic Time Capture',
      description: 'Time entries created as engineers work, not reconstructed later',
      icon: <Clock className="w-6 h-6" />
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-orange-900/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Engineer Efficiency</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gray-400">Tools That Eliminate Friction.</span><br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Data That Powers Insights.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Give engineers the tools they need to work faster—while automatically capturing the data that powers your management insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105">
              See It In Action <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/apps/engineer-assist" className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all">
              Explore Engineer Assist
            </Link>
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section className="px-6 py-10 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">This Changes How Engineers Work</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {transformations.map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-yellow-500/30 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-sm text-gray-400">{item.before}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-sm text-white font-medium">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Core Capabilities</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400 flex-shrink-0">
                    {cap.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{cap.title}</h3>
                    <p className="text-sm text-gray-400">{cap.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Capture - The Platform Connection */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-4">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">Platform Intelligence</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Every Interaction Captures Data</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              While engineers work faster, the AI Scoring module captures intelligence that powers your management insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dataCapture.map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-purple-500/30 transition-all">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mx-auto mb-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-sm mb-1">{item.label}</h4>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold mb-1">This Data Powers TECHS Command Centre</h3>
                <p className="text-sm text-gray-400">AI Triage, Escalation Detection, Client Health, and Team Performance—all fueled by engineer data</p>
              </div>
              <Link href="/apps/manager-app" className="inline-flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-500 transition-all whitespace-nowrap">
                See Command Centre <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Measurable Impact</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-400 mb-1">30%</div>
              <div className="text-xs text-gray-500">Time Saved Per Ticket</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">2hrs</div>
              <div className="text-xs text-gray-500">Saved Daily Per Engineer</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400 mb-1">40%</div>
              <div className="text-xs text-gray-500">Faster Resolution</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">$15K</div>
              <div className="text-xs text-gray-500">Annual Savings/Engineer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">Related Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/solutions/service-desk-visibility" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all group">
              <span className="text-2xl mb-2 block">👁️</span>
              <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">Service Desk Visibility</span>
            </Link>
            <Link href="/solutions/team-development" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-purple-500/30 transition-all group">
              <span className="text-2xl mb-2 block">📈</span>
              <span className="text-sm font-medium group-hover:text-purple-400 transition-colors">Team Development</span>
            </Link>
            <Link href="/solutions/client-retention" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-green-500/30 transition-all group">
              <span className="text-2xl mb-2 block">🤝</span>
              <span className="text-sm font-medium group-hover:text-green-400 transition-colors">Client Retention</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 bg-gradient-to-r from-yellow-900/20 via-black to-orange-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Engineer Productivity?
          </h2>
          <p className="text-gray-400 mb-6">
            Tools that save time. Data that drives insights. Results that compound.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/resources/roi" className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all">
              Calculate ROI
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
