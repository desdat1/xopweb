'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone, Mic, MessageSquare, Clock, Shield, CheckCircle,
  ArrowRight, Users, FileText, Brain, Zap, X, Check,
  Smartphone, Volume2, PenTool, AlertCircle
} from 'lucide-react'

export default function VoiceAgentsPage() {
  const [mounted, setMounted] = useState(false)
  const [activeAgent, setActiveAgent] = useState<'intake' | 'transcription'>('intake')

  useEffect(() => {
    setMounted(true)
  }, [])

  const intakeProcess = [
    { step: '1', title: 'Overflow Activation', description: 'When your team is at capacity, calls route to the AI Intake Agent seamlessly' },
    { step: '2', title: 'Caller Identification', description: 'AI identifies the user and company from your PSA contact database' },
    { step: '3', title: 'SMS Authentication', description: 'Secure identity verification via SMS text message—no authenticator app required' },
    { step: '4', title: 'Issue Discovery', description: 'Natural conversation to understand ticket subject, priority, and business impact' },
    { step: '5', title: 'Ticket Creation', description: 'Properly categorized ticket created in your PSA with all pertinent details' },
  ]

  const transcriptionBenefits = [
    { title: 'Hands-Free Engineering', description: 'Focus on solving the problem while AI handles all documentation', icon: <Mic className="w-5 h-5" /> },
    { title: 'Complete Ticket Notes', description: 'Comprehensive notes captured from every conversation automatically', icon: <FileText className="w-5 h-5" /> },
    { title: 'Smart Status Updates', description: 'Ticket status, priority, and categorization adjusted as the call progresses', icon: <Zap className="w-5 h-5" /> },
    { title: 'Time Entry Suggestions', description: 'AI creates suggested time entries and resolution notes for engineer approval', icon: <Clock className="w-5 h-5" /> },
  ]

  const documentationFeatures = [
    {
      title: 'Chat Transcription',
      description: 'Same technology works on chat conversations—ticket notes prepared automatically as you chat with clients',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: 'Documentation Gap Detection',
      description: 'When Ask AI senses insufficient documentation, a "Create Documentation" button appears',
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      title: 'Silent Ticket Creation',
      description: 'Option to silently create a ticket under the client\'s name to create needed documentation—closing the improvement loop',
      icon: <PenTool className="w-6 h-6" />
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-teal-900/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
            <Phone className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">AI Voice Solutions</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gray-400">Voice AI That Actually</span><br />
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Gets the Work Done</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Two powerful voice solutions: AI that answers overflow calls and creates perfect tickets,
            plus AI that transcribes engineer calls and handles all documentation automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105">
              See Voice AI Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/apps/engineer-assist" className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all">
              Explore Engineer Assist
            </Link>
          </div>
        </div>
      </section>

      {/* Two Solutions Toggle */}
      <section className="px-6 py-10 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveAgent('intake')}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                activeAgent === 'intake'
                  ? 'bg-gradient-to-r from-green-600 to-teal-600 shadow-lg shadow-green-500/20'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <div className="font-bold">AI Intake Agent</div>
                <div className="text-sm text-gray-300">Overflow call handling</div>
              </div>
            </button>
            <button
              onClick={() => setActiveAgent('transcription')}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                activeAgent === 'transcription'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/20'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <Mic className="w-6 h-6" />
              <div className="text-left">
                <div className="font-bold">AI Transcription Agent</div>
                <div className="text-sm text-gray-300">Hands-free documentation</div>
              </div>
            </button>
          </div>

          {/* AI Intake Agent Content */}
          {activeAgent === 'intake' && (
            <div className="animate-fadeIn">
              <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">AI Intake Agent</h2>
                    <p className="text-gray-400">
                      When your team is overcapacity, the AI Intake Agent seamlessly fields phone calls,
                      creating properly categorized tickets with all pertinent information.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {intakeProcess.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-black/30 rounded-xl p-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-green-400">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/30 border border-green-500/20 rounded-xl p-4">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-400" />
                      Secure SMS Authentication
                    </h4>
                    <p className="text-sm text-gray-400">
                      Identity verification via SMS text message. No authenticator app required—
                      simple, secure, and accessible for all end users.
                    </p>
                  </div>
                  <div className="bg-black/30 border border-green-500/20 rounded-xl p-4">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-400" />
                      Complete Ticket Creation
                    </h4>
                    <p className="text-sm text-gray-400">
                      Subject, priority, disruption level, impact assessment, and proper categorization—
                      every ticket is complete and actionable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Transcription Agent Content */}
          {activeAgent === 'transcription' && (
            <div className="animate-fadeIn">
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mic className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">AI Transcription Agent</h2>
                    <p className="text-gray-400">
                      Part of Engineer Assist (and coming soon to integrated PSA), the Transcription Agent
                      works with any softphone setup using your system microphone and speaker output.
                    </p>
                  </div>
                </div>

                <div className="bg-black/30 border border-purple-500/20 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Volume2 className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold">Works With Any Softphone</h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Utilizes your system microphone and speaker output—no special integration required.
                    Works with Teams, Zoom, RingCentral, or any other softphone solution.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {transcriptionBenefits.map((benefit, index) => (
                    <div key={index} className="bg-black/30 border border-purple-500/20 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                          {benefit.icon}
                        </div>
                        <h4 className="font-bold">{benefit.title}</h4>
                      </div>
                      <p className="text-sm text-gray-400">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3">The Real Impact</h4>
                  <p className="text-gray-300">
                    The AI Transcription Agent saves engineers valuable time on every ticket, ensuring
                    comprehensive and timely data entry. With well-written, detailed notes, it builds
                    valuable ticket resolution data—benefiting other engineers who leverage <strong className="text-purple-400">Ask AI</strong> for
                    future requests. This creates a continuously improving knowledge base.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Transformations */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">What Voice AI Changes</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-green-500/30 transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-sm text-gray-400">Missed calls when team is busy or after hours</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-sm text-white font-medium">Every call answered, every ticket created</p>
              </div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-green-500/30 transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-sm text-gray-400">Engineers spending 10+ minutes on post-call notes</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-sm text-white font-medium">Complete notes and time entries ready for approval</p>
              </div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-green-500/30 transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-sm text-gray-400">Inconsistent ticket quality depending on who takes the call</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-sm text-white font-medium">Consistent, comprehensive documentation every time</p>
              </div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-green-500/30 transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-sm text-gray-400">"Is our documentation good enough?"—no way to know</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-sm text-white font-medium">AI detects gaps and creates improvement tickets automatically</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Improvement Loop */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-full mb-4">
              <Brain className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Continuous Improvement</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Finally—An Answer to "Is Our Documentation Good Enough?"</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              This is something we've been working diligently on at xop.ai
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {documentationFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-900/50 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">The Improvement Loop</h3>
                <p className="text-gray-400">
                  When Ask AI senses insufficient documentation, engineers see a "Create Documentation" button.
                  One click silently creates a ticket under the client's name to create the needed documentation—
                  closing the circle and continuously improving your knowledge base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">The Impact of Voice AI</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
              <div className="text-xs text-gray-500">Call Capture</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">10min</div>
              <div className="text-xs text-gray-500">Saved Per Ticket</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-xs text-gray-500">Availability</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-400 mb-1">Zero</div>
              <div className="text-xs text-gray-500">Missed Details</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">Related Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/solutions/engineer-efficiency" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-yellow-500/30 transition-all group">
              <span className="text-2xl mb-2 block">&#9889;</span>
              <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors">Engineer Efficiency</span>
            </Link>
            <Link href="/solutions/client-facing-ai" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-all group">
              <span className="text-2xl mb-2 block">&#129302;</span>
              <span className="text-sm font-medium group-hover:text-cyan-400 transition-colors">Client-Facing AI</span>
            </Link>
            <Link href="/solutions/service-desk-visibility" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all group">
              <span className="text-2xl mb-2 block">&#128065;&#65039;</span>
              <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">Service Desk Visibility</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 bg-gradient-to-r from-green-900/20 via-black to-teal-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Add Voice AI to Your MSP?
          </h2>
          <p className="text-gray-400 mb-6">
            Never miss a call. Never skip documentation. Let AI handle the work while you focus on solving problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
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
