'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import {
  Bot, Brain, MessageCircle, Phone, Mail, Clock,
  ArrowRight, Users, CheckCircle, Shield, Sparkles,
  X, Check, Headphones, Globe, Zap
} from 'lucide-react'

export default function ClientFacingAIPage() {
  const [mounted, setMounted] = useState(false)
  const [activeChannel, setActiveChannel] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const channels = [
    {
      name: 'Teams Chatbot',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      description: 'AI assistant embedded in Microsoft Teams',
      capabilities: ['Password resets', 'Knowledge base queries', 'Ticket status checks', 'How-to guidance'],
      impact: 'Deflect 30-40% of tier 1 tickets'
    },
    {
      name: 'Voice Agent',
      icon: <Phone className="w-6 h-6" />,
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      description: 'AI-powered phone support with natural conversation',
      capabilities: ['24/7 availability', 'Ticket creation', 'Call routing', 'Status updates'],
      impact: 'Answer calls instantly, any time'
    },
    {
      name: 'Email Agent',
      icon: <Mail className="w-6 h-6" />,
      color: 'bg-green-500/20 text-green-400 border-green-500/30',
      description: 'Intelligent email triage and response',
      capabilities: ['Auto-categorization', 'Priority detection', 'Suggested responses', 'Ticket creation'],
      impact: 'Process emails in seconds, not hours'
    },
  ]

  const transformations = [
    { before: 'Clients waiting on hold or in email queues', after: 'Instant responses across every channel, 24/7' },
    { before: 'Tier 1 tickets consuming engineer time', after: '30-40% of simple requests resolved by AI' },
    { before: 'Inconsistent support depending on who answers', after: 'Every client gets the same quality experience' },
    { before: 'After-hours calls going to voicemail', after: 'AI handles requests around the clock' },
  ]

  const benefits = [
    { title: '24/7 Availability', description: 'Your clients get instant help any time', icon: <Clock className="w-6 h-6" /> },
    { title: 'Your Brand', description: 'Branded experience with your company identity', icon: <Sparkles className="w-6 h-6" /> },
    { title: 'Human Handoff', description: 'Seamless escalation when AI reaches its limits', icon: <Users className="w-6 h-6" /> },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6">
            <Bot className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Client-Facing AI</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gray-400">Your Clients Get AI.</span><br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Your Brand Gets Credit.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Deploy AI-powered support across chat, voice, and email—branded as your company.
            Deflect tier 1 tickets while delivering instant, consistent client experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105">
              See It In Action <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/apps/end-user-chatbot" className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all">
              Explore End User AI
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="px-6 py-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 mx-auto mb-3">
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
          <h2 className="text-2xl font-bold text-center mb-8">Transform Your Client Experience</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {transformations.map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/30 transition-all">
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

      {/* AI Channels */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Every Channel, One AI</h2>
            <p className="text-gray-400">Consistent, intelligent support wherever your clients reach out</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {channels.map((channel, index) => (
              <button
                key={index}
                onClick={() => setActiveChannel(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeChannel === index
                    ? channel.color + ' border'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {channel.icon}
                {channel.name}
              </button>
            ))}
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div key={activeChannel} className="animate-fadeIn">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${channels[activeChannel].color}`}>
                  {channels[activeChannel].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{channels[activeChannel].name}</h3>
                  <p className="text-gray-400">{channels[activeChannel].description}</p>
                </div>
                <div className="text-right">
                  <span className="text-green-400 font-semibold text-sm">{channels[activeChannel].impact}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {channels[activeChannel].capabilities.map((cap, index) => (
                  <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branded Experience */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Your Brand, Your AI</h3>
                <p className="text-gray-400">
                  Clients interact with AI that looks and feels like your company. Your logo, your colors, your voice.
                  They see you as innovative—delivering modern AI-powered support that differentiates you from competitors.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs text-center">Custom Branding</span>
                <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs text-center">Your Knowledge Base</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Connection */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Connected to Your Platform</h3>
                <p className="text-gray-400">
                  End User AI isn't standalone—it's connected to the same platform powering your engineering team.
                  Client interactions feed the AI Scoring module, contributing to client sentiment analysis and health scores.
                </p>
              </div>
              <Link href="/solutions/client-retention" className="inline-flex items-center gap-2 bg-yellow-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition-all whitespace-nowrap">
                See Client Health <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">The Impact of Client-Facing AI</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-cyan-400 mb-1">30-40%</div>
              <div className="text-xs text-gray-500">Tier 1 Deflection</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
              <div className="text-xs text-gray-500">Availability</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">&lt;10s</div>
              <div className="text-xs text-gray-500">Response Time</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-400 mb-1">100%</div>
              <div className="text-xs text-gray-500">Consistent Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">Related Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/solutions/client-retention" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-green-500/30 transition-all group">
              <span className="text-2xl mb-2 block">&#129309;</span>
              <span className="text-sm font-medium group-hover:text-green-400 transition-colors">Client Retention</span>
            </Link>
            <Link href="/solutions/engineer-efficiency" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-yellow-500/30 transition-all group">
              <span className="text-2xl mb-2 block">&#9889;</span>
              <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors">Engineer Efficiency</span>
            </Link>
            <Link href="/solutions/service-desk-visibility" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all group">
              <span className="text-2xl mb-2 block">&#128065;&#65039;</span>
              <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">Service Desk Visibility</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 bg-gradient-to-r from-cyan-900/20 via-black to-purple-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Give Clients AI-Powered Support?
          </h2>
          <p className="text-gray-400 mb-6">
            Branded AI support across chat, voice, and email. Your clients get instant help. Your engineers focus on what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
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
