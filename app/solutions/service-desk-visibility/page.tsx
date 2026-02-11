'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  Eye, Brain, Target, AlertTriangle, BarChart3, Clock,
  ArrowRight, Users, CheckCircle, Shield, Award, Zap,
  X, Check, TrendingUp, Gauge
} from 'lucide-react'

export default function ServiceDeskVisibilityPage() {
  const [mounted, setMounted] = useState(false)
  const [activeModule, setActiveModule] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const transformations = [
    { before: 'Checking in with each engineer to understand workload', after: 'Real-time visibility into every ticket and assignment' },
    { before: 'Finding out about escalations when clients call you', after: 'AI-detected escalation signals before they become complaints' },
    { before: 'Manual ticket assignment based on who seems available', after: 'AI Triage routes based on skills, history, and workload' },
    { before: 'Weekly status meetings to understand what happened', after: 'Live dashboards showing exactly what\'s happening now' },
  ]

  const modules = [
    {
      name: 'AI Triage',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      description: 'Route tickets to the right engineer automatically',
      details: 'AI analyzes ticket content, matches against engineer skills and specialties, considers current workload, and recommends the best assignment with confidence scores.',
      impact: 'Improve first-time fix rates by 40%'
    },
    {
      name: 'Escalation Board',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'bg-red-500/20 text-red-400 border-red-500/30',
      description: 'See at-risk tickets before they explode',
      details: 'Combines human escalations with AI-detected signals from sentiment analysis, response patterns, and communication gaps to surface tickets needing attention.',
      impact: 'Reduce escalations by 30%'
    },
    {
      name: 'Workload Dashboard',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      description: 'Balance work across your team',
      details: 'Real-time view of ticket distribution, time allocations, and capacity across your engineering team. Spot overload before burnout.',
      impact: 'Prevent engineer burnout'
    },
    {
      name: 'SLA Tracking',
      icon: <Clock className="w-6 h-6" />,
      color: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      description: 'Never miss an SLA again',
      details: 'Proactive alerts for approaching SLA deadlines. Prioritization recommendations based on client agreements and ticket urgency.',
      impact: 'Zero SLA breaches'
    },
  ]

  const emotionalBenefits = [
    { title: 'Confidence', description: 'Know the state of every ticket without asking', icon: <CheckCircle className="w-6 h-6" /> },
    { title: 'Control', description: 'Intervene before problems become crises', icon: <Gauge className="w-6 h-6" /> },
    { title: 'Clarity', description: 'See exactly where attention is needed', icon: <Eye className="w-6 h-6" /> },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
                <Eye className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Service Desk Visibility</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-gray-400">Stop Managing Blind.</span><br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">See Everything.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Complete visibility into your service desk—every ticket, every engineer, every client interaction.
                No more surprises. No more guesswork.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105">
                  See It In Action <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/apps/manager-app" className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all">
                  Explore TECHS Command Centre
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <Image
                src="/illustrations/bot5.png"
                alt="AI Team Managing Service Desk"
                width={400}
                height={400}
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Benefits */}
      <section className="px-6 py-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {emotionalBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-3">
                  {benefit.icon}
                </div>
                <h3 className="font-bold mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">This Changes How You Manage</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {transformations.map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/30 transition-all">
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

      {/* Command Centre Modules */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">TECHS Command Centre Modules</h2>
            <p className="text-gray-400">Everything you need to manage your service desk with confidence</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {modules.map((mod, index) => (
              <button
                key={index}
                onClick={() => setActiveModule(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeModule === index
                    ? mod.color + ' border'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {mod.icon}
                {mod.name}
              </button>
            ))}
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div key={activeModule} className="animate-fadeIn">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${modules[activeModule].color}`}>
                  {modules[activeModule].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{modules[activeModule].name}</h3>
                  <p className="text-gray-400">{modules[activeModule].description}</p>
                </div>
                <div className="text-right">
                  <span className="text-green-400 font-semibold text-sm">{modules[activeModule].impact}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{modules[activeModule].details}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Powered By Data */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Powered by Engineer Data</h3>
                <p className="text-gray-400">
                  Every insight in Command Centre comes from real data captured by Engineer Assist—response times,
                  resolution patterns, communication quality, and customer sentiment. No guessing. No opinions. Just data.
                </p>
              </div>
              <Link href="/solutions/engineer-efficiency" className="inline-flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-500 transition-all whitespace-nowrap">
                How Data Is Captured <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">The Impact of Visibility</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
              <div className="text-xs text-gray-500">Ticket Visibility</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">40%</div>
              <div className="text-xs text-gray-500">Faster Assignment</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-red-400 mb-1">30%</div>
              <div className="text-xs text-gray-500">Fewer Escalations</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">0</div>
              <div className="text-xs text-gray-500">Missed SLAs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">Related Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/solutions/client-retention" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-green-500/30 transition-all group">
              <span className="text-2xl mb-2 block">🤝</span>
              <span className="text-sm font-medium group-hover:text-green-400 transition-colors">Client Retention</span>
            </Link>
            <Link href="/solutions/team-development" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-purple-500/30 transition-all group">
              <span className="text-2xl mb-2 block">📈</span>
              <span className="text-sm font-medium group-hover:text-purple-400 transition-colors">Team Development</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 bg-gradient-to-r from-blue-900/20 via-black to-cyan-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to See Everything?
          </h2>
          <p className="text-gray-400 mb-6">
            Stop managing blind. Get complete visibility into your service desk operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
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
