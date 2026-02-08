'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import {
  ArrowRight, ArrowDown, Users, BarChart3, Zap, Brain,
  Search, Phone, Mail, MessageSquare, Shield, TrendingUp,
  Target, AlertTriangle, Award, DollarSign, CheckCircle,
  Clock, MessageCircle, FileText, Gauge, Eye, Sparkles,
  HeartPulse, GraduationCap, ChevronRight, X, Check
} from 'lucide-react'

export default function PlatformPage() {
  const [activeTransform, setActiveTransform] = useState(0)
  const [activeBenefit, setActiveBenefit] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Rotating hero messages
  const heroMessages = [
    { text: 'Response Time', color: 'text-green-400' },
    { text: 'Customer Sentiment', color: 'text-purple-400' },
    { text: 'Technical Skills', color: 'text-blue-400' },
    { text: 'Escalation Signals', color: 'text-orange-400' },
    { text: 'Communication Quality', color: 'text-pink-400' },
  ]
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
    const heroInterval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroMessages.length)
    }, 2500)
    const transformInterval = setInterval(() => {
      setActiveTransform((prev) => (prev + 1) % transformations.length)
    }, 4000)
    const benefitInterval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % emotionalBenefits.length)
    }, 5000)
    return () => {
      clearInterval(heroInterval)
      clearInterval(transformInterval)
      clearInterval(benefitInterval)
    }
  }, [])

  const dataPoints = [
    { label: 'Response Time', icon: <Clock className="w-4 h-4" /> },
    { label: 'Resolution Time', icon: <CheckCircle className="w-4 h-4" /> },
    { label: 'Technical Skills', icon: <Zap className="w-4 h-4" /> },
    { label: 'Follow-up Quality', icon: <MessageCircle className="w-4 h-4" /> },
    { label: 'Customer Sentiment', icon: <HeartPulse className="w-4 h-4" /> },
    { label: 'Escalation Signals', icon: <AlertTriangle className="w-4 h-4" /> },
    { label: 'Communication Clarity', icon: <FileText className="w-4 h-4" /> },
    { label: 'Documentation Quality', icon: <Search className="w-4 h-4" /> },
  ]

  const transformations = [
    { before: 'Finding out a client is unhappy when they call to cancel', after: 'Seeing warning signs 2 weeks before sentiment turns negative', icon: <Shield className="w-5 h-5" /> },
    { before: 'Hoping tickets go to the right engineer', after: 'AI routes based on skills, specialties, and client familiarity', icon: <Target className="w-5 h-5" /> },
    { before: 'Annual reviews based on gut feeling', after: 'Weekly coaching insights with specific, actionable feedback', icon: <GraduationCap className="w-5 h-5" /> },
    { before: 'Discovering profitability problems at quarter end', after: 'Real-time visibility into which clients are bleeding hours', icon: <DollarSign className="w-5 h-5" /> },
  ]

  const emotionalBenefits = [
    { title: 'Confidence', subtitle: 'Know the state of every client relationship', icon: <Sparkles className="w-6 h-6" />, color: 'from-green-600 to-emerald-600' },
    { title: 'Control', subtitle: 'Intervene before problems become crises', icon: <Gauge className="w-6 h-6" />, color: 'from-blue-600 to-cyan-600' },
    { title: 'Clarity', subtitle: 'Understand performance with objective data', icon: <Eye className="w-6 h-6" />, color: 'from-purple-600 to-pink-600' },
  ]

  const managerModules = [
    { name: 'AI Triage', icon: <Target className="w-5 h-5" />, color: 'bg-blue-500/20 text-blue-400' },
    { name: 'Escalations', icon: <AlertTriangle className="w-5 h-5" />, color: 'bg-red-500/20 text-red-400' },
    { name: 'Client Health', icon: <Shield className="w-5 h-5" />, color: 'bg-green-500/20 text-green-400' },
    { name: 'Team Performance', icon: <Award className="w-5 h-5" />, color: 'bg-purple-500/20 text-purple-400' },
    { name: 'Revenue Intel', icon: <DollarSign className="w-5 h-5" />, color: 'bg-orange-500/20 text-orange-400' },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero - Compact with rotating message */}
      <section className="px-6 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gray-400">From Gut Feeling to</span><br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Complete Visibility</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-2">
            Every interaction captures data—automatically.
          </p>

          {/* Rotating data point */}
          <div className="h-8 flex items-center justify-center mb-6">
            <span key={heroIndex} className={`text-lg md:text-xl font-semibold ${heroMessages[heroIndex].color} animate-fadeIn`}>
              {heroMessages[heroIndex].text}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 animate-pulseRing">
              See It In Action <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/resources/roi" className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all">
              Calculate ROI
            </Link>
          </div>
        </div>
      </section>

      {/* Data Points Ticker */}
      <section className="py-4 bg-gray-900/50 border-y border-gray-800 overflow-hidden">
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {[...dataPoints, ...dataPoints].map((point, index) => (
              <div key={index} className="flex items-center gap-2 px-6 text-sm text-gray-400 whitespace-nowrap">
                <span className="text-purple-400">{point.icon}</span>
                <span>{point.label}</span>
                <span className="text-gray-600 mx-4">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain + Promise - Compact */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pain */}
            <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-5">
              <h3 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
                <X className="w-5 h-5" /> Without Visibility
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" /> Problems explode before you know they exist</li>
                <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" /> Performance reviews feel like guesswork</li>
                <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" /> Ticket routing is hope-based</li>
                <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" /> Things slip through the cracks</li>
              </ul>
            </div>
            {/* Promise */}
            <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-5">
              <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                <Check className="w-5 h-5" /> With xop.ai
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" /> See warning signs weeks in advance</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" /> Data-driven coaching insights</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" /> AI routes based on skills & history</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" /> Nothing falls through</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rotating Transformation */}
      <section className="px-6 py-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold">This Changes Everything</h2>
          </div>

          {/* Active transformation */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 min-h-[120px]">
            <div key={activeTransform} className="flex flex-col md:flex-row items-center gap-4 animate-fadeIn">
              <div className="flex-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-gray-400 text-sm">{transformations[activeTransform].before}</p>
              </div>
              <div className="hidden md:block">
                <ArrowRight className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  {transformations[activeTransform].icon}
                </div>
                <p className="text-white text-sm font-medium">{transformations[activeTransform].after}</p>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {transformations.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTransform(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === activeTransform ? 'bg-green-400 w-6' : 'bg-gray-600 hover:bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Confidence. Control. Clarity. - Rotating */}
      <section className="px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Pills */}
            <div className="flex md:flex-col gap-2">
              {emotionalBenefits.map((benefit, i) => (
                <button
                  key={i}
                  onClick={() => setActiveBenefit(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    i === activeBenefit
                      ? `bg-gradient-to-r ${benefit.color} text-white`
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {benefit.title}
                </button>
              ))}
            </div>

            {/* Active benefit */}
            <div className="flex-1 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div key={activeBenefit} className="flex items-center gap-4 animate-fadeIn">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${emotionalBenefits[activeBenefit].color} flex items-center justify-center animate-float`}>
                  {emotionalBenefits[activeBenefit].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{emotionalBenefits[activeBenefit].title}</h3>
                  <p className="text-gray-400">{emotionalBenefits[activeBenefit].subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow - Compact Visual */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold">How Intelligence Flows</h2>
          </div>

          {/* Horizontal flow on desktop, vertical on mobile */}
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            {/* End Users */}
            <div className="flex-1 bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold text-cyan-400 text-sm">End Users</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: <MessageSquare className="w-3 h-3" />, label: 'Chat' },
                  { icon: <Phone className="w-3 h-3" />, label: 'Voice' },
                  { icon: <Mail className="w-3 h-3" />, label: 'Email' },
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded text-xs text-cyan-300">
                    {item.icon} {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center py-2 md:py-0">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center animate-pulse-slow">
                <ArrowRight className="w-4 h-4 md:rotate-0 rotate-90" />
              </div>
            </div>

            {/* Engineers + AI */}
            <div className="flex-1 bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="font-semibold text-purple-400 text-sm">Engineers + AI</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 rounded-lg p-2">
                <Brain className="w-4 h-4 text-purple-400 animate-pulse-slow" />
                <span className="text-xs text-purple-300">8 dimensions captured per interaction</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center py-2 md:py-0">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center animate-pulse-slow delay-500">
                <ArrowRight className="w-4 h-4 md:rotate-0 rotate-90" />
              </div>
            </div>

            {/* Leadership */}
            <div className="flex-1 bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-blue-400 text-sm">Leadership</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {managerModules.map((mod, i) => (
                  <span key={i} className={`flex items-center gap-1 ${mod.color} px-2 py-1 rounded text-xs`}>
                    {mod.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manager Modules - Compact Grid */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Actionable Insights</h2>
            <Link href="/apps/manager-app" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
              Explore <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {managerModules.map((mod, i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all group">
                <div className={`w-10 h-10 ${mod.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                  {mod.icon}
                </div>
                <span className="text-sm font-medium">{mod.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Benefits - Side by Side Compact */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Engineer Development */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold">Upskill Your Team</h3>
                  <p className="text-sm text-gray-400">Precision coaching, not guesswork</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-black/30 rounded p-2">
                  <span className="text-purple-400 font-medium">Hard Skills</span>
                  <p className="text-gray-500">Azure, Networking, Security</p>
                </div>
                <div className="bg-black/30 rounded p-2">
                  <span className="text-purple-400 font-medium">Soft Skills</span>
                  <p className="text-gray-500">Communication, Empathy</p>
                </div>
              </div>
            </div>

            {/* Client Relationships */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold">Save Relationships</h3>
                  <p className="text-sm text-gray-400">Early warning before churn</p>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2 text-gray-400">
                  <Check className="w-3 h-3 text-green-400" /> Sentiment trending negative? See it first.
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Check className="w-3 h-3 text-green-400" /> Escalations increasing? Intervene early.
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Check className="w-3 h-3 text-green-400" /> Communication dropping? Re-engage.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="animate-fadeIn">
              <div className="text-3xl md:text-4xl font-bold text-green-400">1000+</div>
              <div className="text-xs text-gray-500">data points/week/engineer</div>
            </div>
            <div className="animate-fadeIn delay-200">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">8</div>
              <div className="text-xs text-gray-500">dimensions per interaction</div>
            </div>
            <div className="animate-fadeIn delay-400">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">5</div>
              <div className="text-xs text-gray-500">management modules</div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Steps - Super Compact */}
      <section className="px-6 py-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <span className="text-sm">Deploy Engineer Tools</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <span className="text-sm">AI Learns Patterns</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <span className="text-sm">Insights Activate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-12 bg-gradient-to-r from-green-900/20 via-black to-blue-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready for <span className="text-green-400">Complete Visibility</span>?
          </h2>
          <p className="text-gray-400 mb-6">
            Stop managing by gut feeling. Start leading with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/apps/engineer-assist" className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all">
              Explore Engineer Assist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
