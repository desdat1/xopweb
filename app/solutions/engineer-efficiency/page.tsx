'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  Zap, Brain, Clock, Search, CheckCircle,
  ArrowRight, Users, MessageCircle, Phone, FileText,
  Shield, Award, X, Check, Mic, RefreshCw
} from 'lucide-react'

export default function EngineerEfficiencyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const painPoints = [
    {
      stat: '15-20min',
      label: 'Post-Call Documentation',
      description: 'Engineers spend as much time writing tickets as they do solving problems'
    },
    {
      stat: '$$$',
      label: 'Eliminate Revenue Leakage',
      description: 'Every call logged accurately, every minute captured. No more chasing engineers for their hours.'
    },
    {
      stat: '#1',
      label: 'Engineer Complaint',
      description: '"I didn\'t become an engineer to be a secretary" — sound familiar?'
    },
  ]

  const voiceAssistSteps = [
    {
      step: '1',
      title: 'Engineer Starts Call',
      description: 'Opens the ticket, starts the call with the client, and adds AI Voice Assist with one click.',
      icon: <Phone className="w-5 h-5" />
    },
    {
      step: '2',
      title: 'AI Listens & Understands',
      description: 'Voice Assist joins the call and follows the conversation in real-time, capturing context, key details, and resolution steps.',
      icon: <Mic className="w-5 h-5" />
    },
    {
      step: '3',
      title: 'Engineer Solves the Problem',
      description: '100% focus on the customer. No note-taking. No splitting attention. Just engineering.',
      icon: <Brain className="w-5 h-5" />
    },
    {
      step: '4',
      title: 'Call Ends — Work Is Done',
      description: 'AI has already written the call summary, created the ticket subject, set priority and classification, and logged the time entry with notes. Done.',
      icon: <CheckCircle className="w-5 h-5" />
    },
  ]

  const voiceAssistBenefits = [
    {
      title: 'Engineers Actually Engineering',
      description: 'No more splitting attention between problem-solving and note-taking. 100% focus on the customer.',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'Accurate Time Entries, Every Call',
      description: 'Comprehensive time logs with detailed notes. No more reconstructing your day at 5pm. No more lost billable hours.',
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: 'Perfect Ticket Quality',
      description: 'Properly categorized, prioritized, and documented tickets without human error. Every single time.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: 'Happier Engineers, Less Turnover',
      description: 'Engineers get to do what they were hired to do — solve problems, not push paper.',
      icon: <Award className="w-6 h-6" />,
    },
  ]

  const transformations = [
    {
      before: 'Engineers spending 15-20 minutes writing tickets after every call',
      after: 'AI creates complete ticket documentation automatically — approval in 30 seconds'
    },
    {
      before: 'Lost billable time because engineers forget to log what they did',
      after: 'Perfect time entries with detailed notes on every single call'
    },
    {
      before: 'Tickets with incomplete info because engineers rush through documentation',
      after: 'Comprehensive, accurately categorized and prioritized tickets every time'
    },
    {
      before: 'Engineers frustrated by administrative busywork instead of solving problems',
      after: 'Engineers focused entirely on what they do best — technical problem-solving'
    },
  ]

  const additionalCapabilities = [
    {
      title: 'Enterprise Search',
      description: 'One search across tickets, IT Glue, SharePoint, documentation — instant results from all sources',
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: 'AI Ticket Insights',
      description: 'Instant ticket summaries, resolution suggestions, and similar ticket analysis when tackling issues',
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: 'Client Environment Context',
      description: 'User count, contacts, application stack, common issues — all at a glance before engaging',
      icon: <Users className="w-6 h-6" />,
    },
  ]

  const dataCapture = [
    { label: 'Call Patterns', description: 'Duration, complexity, and resolution patterns tracked automatically', icon: <Clock className="w-5 h-5" /> },
    { label: 'Resolution Quality', description: 'Follow-up rates and first-call resolution signals', icon: <CheckCircle className="w-5 h-5" /> },
    { label: 'Engineer Expertise', description: 'Which engineers excel at which issue types', icon: <Award className="w-5 h-5" /> },
    { label: 'Communication Quality', description: 'Customer sentiment and interaction quality analyzed', icon: <MessageCircle className="w-5 h-5" /> },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero — Look Ma, No Hands */}
      <section className="px-6 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-6">
                <Mic className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">AI Voice Assist — Just Launched</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-gray-400">Look Ma...</span><br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">No Hands!</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
                Your engineer gets on a call, adds our AI agent, and focuses entirely on solving the customer&apos;s problem. When the call ends, the ticket is already documented. The time is logged. Zero clicks. Zero typing.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105">
                  See Voice Assist Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/apps/engineer-assist" className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all">
                  Explore Engineer Assist
                </Link>
              </div>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <Image
                src="/illustrations/look ma.png"
                alt="AI Voice Assist — Look Ma, No Hands! A robot rides a bicycle hands-free while managing tickets, time entries, and documentation automatically"
                width={500}
                height={500}
                className="w-full max-w-md object-contain animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem — The Post-Call Tax */}
      <section className="px-6 py-10 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">The Post-Call Tax</h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Every support call ends with engineers doing the same tedious work: writing summaries, creating ticket subjects, setting priority, logging time. It&apos;s exhausting. It&apos;s revenue-killing. And it doesn&apos;t need to happen.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((item, index) => (
              <div key={index} className="bg-red-900/10 border border-red-500/20 rounded-xl p-6 text-center hover:border-red-500/40 transition-all">
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">{item.stat}</div>
                <div className="font-semibold mb-2">{item.label}</div>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Voice Assist Works — 4 Steps */}
      <section className="px-6 py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl font-bold text-center mb-2">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              How AI Voice Assist Works
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Four steps. Zero manual documentation.
          </p>

          <div className="space-y-4">
            {voiceAssistSteps.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-black/40 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-purple-300 mb-1 flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Changes — Benefits */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">What This Changes</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {voiceAssistBenefits.map((benefit, index) => (
              <div key={index} className={`bg-gray-900/50 border rounded-xl p-6 transition-all ${index % 2 === 0 ? 'border-purple-500/20 hover:border-purple-500/40' : 'border-blue-500/20 hover:border-blue-500/40'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${index % 2 === 0 ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Flywheel — Better Data, Smarter Engineers */}
      <section className="px-6 py-10 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-4">
              <RefreshCw className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">The Compounding Effect</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Every Call Makes Your Entire Team Smarter</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              AI Voice Assist doesn&apos;t just save time — it builds a knowledge engine. Every call generates rich, detailed resolution notes that feed directly into your Enterprise Search, making every future problem easier to solve.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: '1',
                title: 'Voice Assist Captures',
                description: 'AI writes comprehensive ticket notes and resolution details — far richer than any engineer would type manually',
                color: 'purple',
              },
              {
                step: '2',
                title: 'Data Feeds Search',
                description: 'Those detailed notes flow into Enterprise Search, building a growing library of real-world solutions',
                color: 'blue',
              },
              {
                step: '3',
                title: 'Engineers Find Answers',
                description: 'Next time a similar issue hits, any engineer can search and find exactly how it was resolved — in seconds',
                color: 'cyan',
              },
              {
                step: '4',
                title: 'Knowledge Compounds',
                description: 'Every call makes the system smarter. Tribal knowledge becomes team knowledge. New hires ramp faster.',
                color: 'green',
              },
            ].map((item, index) => (
              <div key={index} className="relative bg-black/40 border border-gray-800 rounded-xl p-5 hover:border-green-500/30 transition-all text-center">
                <div className={`w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center font-bold text-lg ${
                  item.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                  item.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                  item.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {item.step}
                </div>
                <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-500/20 rounded-xl p-5 text-center">
            <p className="text-gray-300 text-sm">
              <span className="text-green-400 font-semibold">The result:</span> Your knowledge base improves with every single call — automatically. No documentation initiatives. No knowledge management projects. Just engineers doing their jobs, and AI capturing everything.
            </p>
          </div>
        </div>
      </section>

      {/* Before / After Transformation */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Before & After Voice Assist</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {transformations.map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-purple-500/30 transition-all">
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

      {/* When They're Not On Calls */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">When They&apos;re Not On Calls...</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              AI Voice Assist handles call documentation. These tools handle everything else — so engineers stay productive across every workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalCapabilities.map((cap, index) => {
              const colors = ['border-cyan-500/20 hover:border-cyan-500/40', 'border-green-500/20 hover:border-green-500/40', 'border-orange-500/20 hover:border-orange-500/40']
              const iconColors = ['bg-cyan-500/20 text-cyan-400', 'bg-green-500/20 text-green-400', 'bg-orange-500/20 text-orange-400']
              return (
                <div key={index} className={`bg-gray-900/50 border ${colors[index]} rounded-xl p-5 transition-all`}>
                  <div className={`w-10 h-10 ${iconColors[index]} rounded-lg flex items-center justify-center mb-3`}>
                    {cap.icon}
                  </div>
                  <h3 className="font-bold mb-2">{cap.title}</h3>
                  <p className="text-sm text-gray-400">{cap.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">See Engineer & Team Performance</h2>
            <p className="text-gray-400">Watch how Voice Assist and performance tracking work together in the TECHS Command Centre</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/10">
            <video
              className="w-full"
              controls
              playsInline
            >
              <source src="/engineer-health-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Platform Intelligence — Data Capture */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-4">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Platform Intelligence</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Every Voice Assist Call Captures Data</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              While engineers work hands-free, AI Voice Assist captures intelligence that powers your TECHS Command Centre management insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dataCapture.map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mx-auto mb-3">
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
                <p className="text-sm text-gray-400">AI Triage, Escalation Detection, Client Health, and Team Performance — all fueled by Voice Assist data</p>
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
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">15-20min</div>
              <div className="text-xs text-gray-500">Saved Per Call</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">3hrs</div>
              <div className="text-xs text-gray-500">Saved Daily Per Engineer</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">100%</div>
              <div className="text-xs text-gray-500">Accurate Time Capture</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">$25K</div>
              <div className="text-xs text-gray-500">Annual Value / Engineer</div>
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
      <section className="px-6 py-12 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Go Hands-Free?
          </h2>
          <p className="text-gray-400 mb-6">
            Let engineers focus on solving problems. Let AI handle the documentation. See Voice Assist in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
              See Voice Assist Demo <ArrowRight className="w-4 h-4" />
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
