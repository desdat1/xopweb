'use client'

import Image from 'next/image'
import {
  Zap, CheckCircle, Search, Clock,
  Users, Brain, ArrowRight, MessageSquare,
  FileText, BarChart3, AlertTriangle, Calendar,
  HeartPulse, Layers, Mic, Sparkles, TrendingUp,
  DollarSign, LineChart, Monitor, Bell, FileCheck, Reply
} from 'lucide-react'

export default function EvolveFlyer() {
  const engineerFeatures = [
    {
      icon: Search,
      title: "Enterprise Search",
      description: "Search across historical tickets, IT Glue, SharePoint, and other documentation repositories instantly"
    },
    {
      icon: AlertTriangle,
      title: "Intelligent Ticket Analysis",
      description: "AI analyzes tickets for escalation needs, multi-user events, agreement entitlement, and cadence patterns"
    },
    {
      icon: FileText,
      title: "Automated Admin Work",
      description: "Note collection and time entries handled automatically - engineers focus on solving, not documenting"
    },
    {
      icon: Layers,
      title: "PSA-Native Integration",
      description: "AI tools run directly inside ConnectWise, Halo, and other PSA/ticketing systems engineers already use"
    }
  ]

  const managerFeatures = [
    { icon: Brain, title: "AI-Assisted Triage", description: "Intelligent ticket routing and prioritization" },
    { icon: AlertTriangle, title: "Escalation Management", description: "Proactive escalation alerts and tracking" },
    { icon: HeartPulse, title: "Client Health", description: "Real-time client satisfaction monitoring" },
    { icon: Users, title: "Engineer Health", description: "Workload balance and burnout prevention" },
    { icon: Calendar, title: "Group Scheduler", description: "Intelligent resource scheduling and planning" }
  ]

  const speakingTopics = [
    {
      icon: TrendingUp,
      title: "Implementing AI That Delivers ROI for Your MSP",
      description: "Practical strategies for deploying AI solutions that generate measurable returns"
    },
    {
      icon: DollarSign,
      title: "How to Generate Revenue Selling AI Solutions to Clients",
      description: "Building a profitable AI practice and positioning AI services for your customer base"
    },
    {
      icon: LineChart,
      title: "Using AI to Build Dashboards & Actionable Intelligence",
      description: "Transforming raw data into executive insights that drive business decisions"
    }
  ]

  const outcomes = [
    { metric: "Faster", label: "Time to Resolution", description: "Find answers in seconds, not hours" },
    { metric: "Less", label: "Context Switching", description: "Everything inside your PSA" },
    { metric: "Zero", label: "Manual Note-Taking", description: "AI captures everything" },
    { metric: "Better", label: "Leadership Insights", description: "Data-driven decisions" }
  ]

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold">Rezolve.ai</div>
              <div className="text-purple-300">|</div>
              <Image
                src="https://www.connectwise.com/contentassets/46e6af166a92407eac66d8a7c79d3c8d/logo.svg"
                alt="ConnectWise"
                width={140}
                height={32}
                className="brightness-0 invert opacity-90"
              />
            </div>
            <div className="text-right">
              <div className="text-sm opacity-75">Prepared for</div>
              <div className="text-xl font-semibold">Evolve Facilitators</div>
            </div>
          </div>
          <div className="text-center py-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Make Engineers More Productive
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-200 mb-4">
              Deliver Actionable Insights for Leadership
            </h2>
            <p className="text-lg text-purple-300 max-w-3xl mx-auto">
              AI tools that embed directly into the PSA and ticketing systems your engineers already use
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-6 md:p-8">
        {/* Speaker Section - Matt Ruck */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/Matt.webp"
                  alt="Matt Ruck"
                  width={160}
                  height={160}
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-purple-400 font-medium text-sm uppercase tracking-wide mb-1">Featured Speaker</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Matt Ruck</h2>
                <p className="text-slate-300 mb-4">
                  Former CEO of <strong className="text-white">designDATA</strong>, where he led the company for
                  <strong className="text-white"> 28 years</strong> to <strong className="text-white">$30M in services revenue</strong> with
                  <strong className="text-white"> 100 engineers</strong> on staff. Now helping MSPs transform with AI.
                </p>

                <h3 className="text-lg font-semibold mb-4 text-purple-300">Speaking Topics</h3>
                <div className="space-y-3">
                  {speakingTopics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <topic.icon className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{topic.title}</h4>
                        <p className="text-slate-400 text-xs">{topic.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>The Problem We Solve</span>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Engineers spend too much time searching for information, documenting their work, and navigating between systems.
            Leadership lacks real-time visibility into operations.
            <strong className="text-gray-900"> Rezolve.ai brings AI assistance directly into the workflow</strong> -
            productivity for engineers, actionable intelligence for leadership.
          </p>
        </section>

        {/* Outcomes Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">{outcome.metric}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{outcome.label}</div>
                <div className="text-xs text-gray-600">{outcome.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineer Tools Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">For Engineers</h2>
              <p className="text-gray-600">Tools that make daily work faster and easier</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {engineerFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Manager Tools Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">For Leadership</h2>
              <p className="text-gray-600">Actionable insights and tools to lead effectively</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {managerFeatures.map((feature, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <feature.icon className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Embeds in Your PSA</h3>
              <p className="text-sm text-gray-600">
                Rezolve.ai integrates directly into ConnectWise, Halo, ServiceNow - wherever your engineers work
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Connects Your Knowledge</h3>
              <p className="text-sm text-gray-600">
                Indexes historical tickets, IT Glue, SharePoint, and documentation to provide instant answers
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Engineers Work Faster</h3>
              <p className="text-sm text-gray-600">
                AI assists with every ticket - from finding solutions to documenting the resolution automatically
              </p>
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Rezolve.ai</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2">No New Tools to Learn</h3>
              <p className="text-sm text-gray-600">AI lives inside the systems engineers already use daily</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">Lower Time to Resolution</h3>
              <p className="text-sm text-gray-600">Find answers instantly from across all your documentation</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-semibold mb-2">Proactive Intelligence</h3>
              <p className="text-sm text-gray-600">AI identifies escalations, patterns, and risks before they become problems</p>
            </div>
          </div>
        </section>

        {/* New Product Announcements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">New Product Launches</h2>

          {/* ConnectWise POD */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-blue-500" />
                  <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">New Product Launch</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Rezolve.ai Integrated POD for ConnectWise Manage</h3>
                <p className="text-gray-700 text-lg mb-4">
                  <strong>AI assistance embedded directly in your PSA.</strong> A dedicated panel inside ConnectWise Manage
                  that brings intelligent automation to every ticket - no context switching, no separate apps.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <HeartPulse className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-900 text-sm">Ticket Sentiment</span>
                    </div>
                    <p className="text-xs text-gray-600">Real-time sentiment analysis on every ticket interaction</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Bell className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-900 text-sm">Ticket Alert Pop-ups</span>
                    </div>
                    <p className="text-xs text-gray-600">Proactive alerts for escalations, SLA risks, and VIP clients</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Search className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-900 text-sm">Enterprise Search</span>
                    </div>
                    <p className="text-xs text-gray-600">Instant answers from tickets, IT Glue, SharePoint & more</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <FileCheck className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-900 text-sm">Agreement Verification</span>
                    </div>
                    <p className="text-xs text-gray-600">Automatic entitlement checks before work begins</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Mic className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-900 text-sm">Voice to Text</span>
                    </div>
                    <p className="text-xs text-gray-600">Speak notes directly into tickets hands-free</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Reply className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-900 text-sm">Auto-Gen Client Replies</span>
                    </div>
                    <p className="text-xs text-gray-600">AI-drafted responses ready for engineer review</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/connectwise-logo.png"
                    alt="ConnectWise"
                    width={120}
                    height={28}
                    className="opacity-70"
                  />
                  <span className="text-sm text-gray-500">Native integration - works inside ConnectWise Manage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Voice Transcription Agent */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mic className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span className="text-amber-700 font-semibold text-sm uppercase tracking-wide">New Product Launch</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Voice Transcription Agent</h3>
                <p className="text-gray-700 text-lg mb-4">
                  <strong>Hands-free engineer data input system.</strong> Engineers speak naturally while working -
                  AI captures complete, accurate resolution notes automatically. No typing, no clicking, no friction.
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-white rounded-lg p-3 border border-amber-200">
                    <div className="font-semibold text-gray-900 text-sm mb-1">Customer Sentiment Analysis</div>
                    <p className="text-xs text-gray-600">AI scans conversations to detect customer sentiment and flags concerns for proactive follow-up</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-amber-200">
                    <div className="font-semibold text-gray-900 text-sm mb-1">AI-Generated Resolution Notes</div>
                    <p className="text-xs text-gray-600">Complete, accurate documentation that captures the full context - not just bullet points</p>
                  </div>
                </div>
                <div className="bg-amber-100/50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-amber-800">
                    <strong>The Virtuous Cycle:</strong> Better resolution notes feed the AI engine more valuable data,
                    making future searches and suggestions increasingly accurate over time.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-amber-200">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Voice-to-ticket notes
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-amber-200">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Auto time entries
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-amber-200">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Works with any softphone
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-amber-200">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Sentiment detection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to See It in Action?</h2>
          <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
            Let us show you how Rezolve.ai can transform engineer productivity and deliver actionable insights for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://xop.im/partner"
              className="inline-flex items-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors"
            >
              Schedule a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="text-purple-200">
              <span className="opacity-75">or contact:</span>{' '}
              <a href="mailto:matt@xop.ai" className="text-white hover:text-purple-200">matt@xop.ai</a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 p-6 text-center text-sm text-gray-600 mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="font-semibold">xop.ai</span>
              <span className="text-gray-400">|</span>
              <span className="font-semibold">Rezolve.ai</span>
              <span className="text-gray-400">|</span>
              <Image
                src="https://www.connectwise.com/contentassets/46e6af166a92407eac66d8a7c79d3c8d/logo.svg"
                alt="ConnectWise"
                width={100}
                height={24}
                className="opacity-60"
              />
            </div>
            <div className="text-gray-500">
              AI-Powered Solutions for Managed Service Providers
            </div>
            <div>
              <a href="https://xop.ai/evolve" className="text-purple-600 hover:text-purple-700 font-medium">
                xop.ai/evolve
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
