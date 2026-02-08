'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import {
  HeartPulse, Brain, Shield, AlertTriangle, TrendingDown,
  ArrowRight, Users, CheckCircle, MessageCircle, Clock,
  X, Check, TrendingUp, Phone, Mail
} from 'lucide-react'

export default function ClientRetentionPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const warningSignals = [
    { signal: 'Sentiment Trending Negative', description: 'AI detects frustration in communications before it becomes a complaint', icon: <TrendingDown className="w-5 h-5" /> },
    { signal: 'Response Time Increasing', description: 'Tickets taking longer to acknowledge or resolve than usual', icon: <Clock className="w-5 h-5" /> },
    { signal: 'Escalation Frequency Rising', description: 'More issues being escalated than historical patterns', icon: <AlertTriangle className="w-5 h-5" /> },
    { signal: 'Communication Gaps', description: 'Less proactive outreach, fewer status updates', icon: <MessageCircle className="w-5 h-5" /> },
  ]

  const transformations = [
    { before: 'Finding out a client is unhappy when they call to cancel', after: 'Seeing early warning signs 2-3 weeks before sentiment turns negative' },
    { before: 'Reacting to complaints after the damage is done', after: 'Proactively intervening when signals first appear' },
    { before: 'Quarterly business reviews reveal problems months old', after: 'Real-time health scores you can act on today' },
    { before: 'Guessing which clients need attention', after: 'Prioritized list of at-risk relationships' },
  ]

  const healthFactors = [
    { factor: 'CSAT Scores', description: 'Aggregated satisfaction from resolved tickets', weight: 'High' },
    { factor: 'Response Patterns', description: 'How quickly we engage and resolve', weight: 'High' },
    { factor: 'Escalation Rate', description: 'Frequency vs. historical baseline', weight: 'Medium' },
    { factor: 'Communication Quality', description: 'Proactive updates and clarity', weight: 'Medium' },
    { factor: 'Sentiment Analysis', description: 'Tone of client communications', weight: 'High' },
    { factor: 'Budget vs. Actual', description: 'Are we delivering value?', weight: 'Medium' },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
            <HeartPulse className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Client Health & Retention</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gray-400">Save Relationships</span><br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Before They're at Risk</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Client churn doesn't happen suddenly. There are always warning signs—you just couldn't see them before.
            Now you can.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105">
              See It In Action <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/apps/manager-app" className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all">
              Explore Client Health Module
            </Link>
          </div>
        </div>
      </section>

      {/* Early Warning Signals */}
      <section className="px-6 py-10 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Early Warning Signals</h2>
            <p className="text-gray-400">The platform surfaces these signals weeks before they become problems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {warningSignals.map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-orange-500/20 rounded-xl p-4 hover:border-orange-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-orange-400">{item.signal}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">From Reactive to Proactive</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {transformations.map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-green-500/30 transition-all">
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

      {/* Client Health Score */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Client Health Score</h2>
            <p className="text-gray-400">A single number that tells you where to focus</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-4">What Drives the Score</h3>
              <div className="space-y-3">
                {healthFactors.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-sm">{item.factor}</span>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.weight === 'High' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>{item.weight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
              <h3 className="font-bold mb-4">How You'll Use It</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <span className="font-medium text-sm">Weekly Review</span>
                    <p className="text-xs text-gray-400">Check which clients moved up or down</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <span className="font-medium text-sm">Prioritized Outreach</span>
                    <p className="text-xs text-gray-400">Know exactly who needs a call this week</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <span className="font-medium text-sm">Trend Analysis</span>
                    <p className="text-xs text-gray-400">See if interventions are working</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <span className="font-medium text-sm">QBR Preparation</span>
                    <p className="text-xs text-gray-400">Data-backed talking points for every client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Source */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Powered by Real Interaction Data</h3>
                <p className="text-gray-400">
                  Client Health isn't a survey or a guess. It's calculated from every ticket, call, and email—
                  the actual experience clients have with your team, analyzed automatically.
                </p>
              </div>
              <Link href="/solutions/engineer-efficiency" className="inline-flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-500 transition-all whitespace-nowrap">
                How Data Flows <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">The Impact of Early Warning</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">2-3 wks</div>
              <div className="text-xs text-gray-500">Earlier Warning</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400 mb-1">50%</div>
              <div className="text-xs text-gray-500">Reduction in Churn</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">25%</div>
              <div className="text-xs text-gray-500">Higher CSAT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">Related Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/solutions/service-desk-visibility" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all group">
              <span className="text-2xl mb-2 block">👁️</span>
              <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">Service Desk Visibility</span>
            </Link>
            <Link href="/solutions/client-facing-ai" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-all group">
              <span className="text-2xl mb-2 block">🤖</span>
              <span className="text-sm font-medium group-hover:text-cyan-400 transition-colors">Client-Facing AI</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 bg-gradient-to-r from-green-900/20 via-black to-emerald-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Save More Clients?
          </h2>
          <p className="text-gray-400 mb-6">
            See the warning signs before it's too late. Protect your recurring revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
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
