'use client'

import Navigation from '../../components/Navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronRight,
  ChevronLeft,
  X,
  Zap,
  Shield,
  TrendingUp,
  Users,
  MessageSquare,
  Brain,
  Target,
  Clock,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Monitor,
  Headphones,
  BarChart3,
  UserCheck,
  Workflow,
  Sparkles
} from 'lucide-react'
import Footer from '@/app/components/Footer'

// Extend Window interface for Calendly
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void
      initInlineWidget: (options: { url: string; parentElement: Element | null }) => void
    }
  }
}

// Video placeholder component - replace src with actual video when ready
function VideoPlaceholder({
  title,
  description,
  videoSrc
}: {
  title: string
  description: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 aspect-video">
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mb-4">
            <Play className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-gray-500 text-xs mt-1">{description}</p>
        </div>
      )}
    </div>
  )
}

// AI-Infused MSP rotating banner content
const aiInfusedBanners = [
  {
    headingLine1: "Your Engineers Solve Client Problems",
    headingLine2: "Not Administrative Work",
    paragraph: "AI-Infused MSPs - their engineers don't waste 20 minutes reading ticket histories or hunting through documentation. AI delivers instant context, suggests solutions, drafts responses, and adds time entries - so your team focuses on what they do best: solving complex problems and delighting clients.",
    colorClass: "bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400"
  },
  {
    headingLine1: "Action Problematic Tickets",
    headingLine2: "Before They Become a Larger Issue",
    paragraph: "AI-Infused MSPs empower service managers with visibility - so they don't get blindsided. AI monitors ticket health, client sentiment, & engineer workload (+ burnout detection) in real-time - surfacing issues before they escalate. You're proactive instead of reactive, and your clients notice the difference.",
    colorClass: "bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400"
  },
  {
    headingLine1: "At-Risk Clients Get Attention",
    headingLine2: "Before They Leave",
    paragraph: "AI-Infused MSPs don't find out a client is unhappy when they send the cancellation email. AI tracks patterns across tickets, response times, and sentiment - flagging accounts that need attention - while there's still time to turn things around.",
    colorClass: "bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400"
  },
  {
    headingLine1: "Stop Giving Away Services",
    headingLine2: "You Should Be Billing For",
    paragraph: "AI-Infused MSPs make revenue leakage visible so you can take action. AI analyzes every ticket against client agreements, alerting engineers when work falls outside scope - Recover revenue you didn't know you were losing!",
    colorClass: "bg-gradient-to-r from-red-400 via-rose-400 to-pink-400"
  },
  {
    headingLine1: "AI Isn't Just a Cost Saver",
    headingLine2: "It's a New Revenue Stream",
    paragraph: "AI-Infused MSPs don't just use AI internally - they sell solutions to their clients. Deploy branded chatbots and knowledge management solutions for your clients. Demonstrate AI maturity to win new business. Turn operational investment into AI expertise, and then to recurring revenue streams.",
    colorClass: "bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400"
  },
  {
    headingLine1: "Your Best Engineers Stay",
    headingLine2: "Because the Work is Better",
    paragraph: "In an AI-Infused MSP, engineers aren't burned out by repetitive tasks and overwhelming ticket queues. AI handles the tedious work, balances workloads fairly, and helps everyone level up. Your team is happier, more productive, and less likely to leave for the competition.",
    colorClass: "bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400"
  }
]

export default function PreviewHome() {
  const [mounted, setMounted] = useState(false)
  const [calendlyModalOpen, setCalendlyModalOpen] = useState(false)
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-rotate banners every 9 seconds (when not paused)
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % aiInfusedBanners.length)
        setIsTransitioning(false)
      }, 300) // Half of transition duration
    }, 9000)

    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    if (calendlyModalOpen) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/mattruck',
            parentElement: document.querySelector('.calendly-inline-widget')
          })
        }
      }
      document.body.appendChild(script)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [calendlyModalOpen])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />

      {/* Preview Banner */}
      <div className="bg-yellow-500/10 border-b border-yellow-500/30 px-4 py-2 text-center">
        <p className="text-yellow-400 text-sm">
          <strong>Preview Mode</strong> - This is a draft of the new homepage. Not visible to public.
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fadeIn">
            Become the{' '}
            <span className="text-gradient">AI-Infused MSP</span>
          </h1>

          {/* Rotating Banner */}
          <div className="mb-10 animate-fadeIn delay-100">
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700/50 max-w-4xl mx-auto relative overflow-hidden">
              {/* Accent line - matches current banner color */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${aiInfusedBanners[currentBanner].colorClass} transition-all duration-500`}></div>

              {/* Arrow navigation */}
              <button
                onClick={() => {
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentBanner((prev) => (prev - 1 + aiInfusedBanners.length) % aiInfusedBanners.length)
                    setIsTransitioning(false)
                  }, 300)
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentBanner((prev) => (prev + 1) % aiInfusedBanners.length)
                    setIsTransitioning(false)
                  }, 300)
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Banner content with fade transition */}
              <div
                className={`transition-opacity duration-500 px-8 md:px-12 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <h2
                  className={`text-xl md:text-2xl lg:text-3xl font-bold mb-4 ${aiInfusedBanners[currentBanner].colorClass} bg-clip-text text-transparent`}
                >
                  {aiInfusedBanners[currentBanner].headingLine1}
                  <br />
                  <span className="opacity-90">{aiInfusedBanners[currentBanner].headingLine2}</span>
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {aiInfusedBanners[currentBanner].paragraph}
                </p>
              </div>

              {/* Navigation dots and pause button */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <div className="flex gap-2">
                  {aiInfusedBanners.map((banner, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsTransitioning(true)
                        setTimeout(() => {
                          setCurrentBanner(index)
                          setIsTransitioning(false)
                        }, 300)
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentBanner
                          ? `w-6 ${banner.colorClass}`
                          : 'w-2 bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="w-8 h-8 rounded-full bg-gray-700/80 hover:bg-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Proof Bar */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10 animate-fadeIn delay-200">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">10-30%</div>
              <div className="text-sm text-gray-400">Engineer Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">Up to 50%</div>
              <div className="text-sm text-gray-400">Less Client Churn</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">Zero</div>
              <div className="text-sm text-gray-400">Retraining Required</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-300">
            <button
              onClick={() => setCalendlyModalOpen(true)}
              className="cta-button bg-gradient-to-r from-green-600 to-green-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
            >
              Request Demo
            </button>
            <Link
              href="/resources/roi"
              className="cta-button bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
            >
              Get ROI Analysis
            </Link>
            <Link
              href="/contact"
              className="cta-button bg-gray-800 border border-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Request Trial
            </Link>
          </div>

          {/* Integration Logos */}
          <div className="mt-12 animate-fadeIn delay-400">
            <p className="text-gray-500 text-sm mb-4">Embeds directly into</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="flex items-center gap-2 text-gray-400">
                <Monitor className="w-5 h-5" />
                <span className="font-medium">ConnectWise Manage</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Monitor className="w-5 h-5" />
                <span className="font-medium">Halo PSA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Monitor className="w-5 h-5" />
                <span className="font-medium">ServiceNow ITSM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Zero Friction AI */}
      <section className="px-6 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Zero Friction Entry</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI That Lives Inside Your PSA
              </h2>

              <p className="text-gray-300 text-lg mb-6">
                No new platform to learn. No workflow disruption. Rezolve.ai embeds directly
                into the tools your engineers already use every day.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Works inside ConnectWise Manage, Halo PSA, and ServiceNow ITSM</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">AI summaries, knowledge search, and smart suggestions - all in context</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Optional dedicated apps when you need expanded capabilities</span>
                </li>
              </ul>

              <p className="text-green-400 font-semibold">
                Engineers handle more tickets, faster, without the learning curve.
              </p>
            </div>

            <div className="animate-fadeIn delay-200">
              <VideoPlaceholder
                title="Video: PSA Embed Overview"
                description="ConnectWise with Rezolve panel embedded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Engineer Superpowers */}
      <section className="px-6 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Engineer Productivity</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Every Engineer Gets an AI Copilot
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Give your team the tools to work smarter, not harder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1: 5-Second Summaries */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 animate-fadeIn delay-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">5-Second Summaries</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Understand any ticket instantly. AI reads all notes, history, and context -
                delivers the essentials in seconds, not minutes.
              </p>
              <VideoPlaceholder
                title="Video: Ticket Summary"
                description="AI summary generation in action"
              />
            </div>

            {/* Feature 2: Ask Bot */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 animate-fadeIn delay-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Ask Bot</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Natural language search across tickets, IT Glue, SharePoint, and documentation.
                Find answers without leaving the ticket.
              </p>
              <VideoPlaceholder
                title="Video: Ask Bot"
                description="AI-powered knowledge search"
              />
            </div>

            {/* Feature 3: Smart Responses */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 animate-fadeIn delay-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Smart Responses</h3>
              </div>
              <p className="text-gray-400 mb-4">
                AI-drafted replies calibrated to your audience. Technical for DBAs,
                concise for executives. Edit and send in seconds.
              </p>
              <VideoPlaceholder
                title="Video: Smart Response"
                description="AI response generation"
              />
            </div>

            {/* Feature 4: Voice Notes */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 animate-fadeIn delay-400">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold">Voice Notes & Second Screen</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Speak notes, get transcriptions. Open ticket insights, client environment,
                and suggestions on a second monitor - always in context.
              </p>
              <VideoPlaceholder
                title="Video: Second Screen"
                description="Multi-monitor workflow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Chat */}
      <section className="px-6 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fadeIn delay-200">
              <VideoPlaceholder
                title="Video: Chat Interface"
                description="End user to engineer chat"
              />
            </div>

            <div className="order-1 lg:order-2 animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Communication</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real-Time Support, Captured & Searchable
              </h2>

              <p className="text-gray-300 text-lg mb-6">
                End users chat directly with engineers. Every conversation is captured,
                transcribed, and becomes part of your knowledge base.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">All chat transcripts captured in ticket history</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">AI learns from every interaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Better than email, faster than phone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Management Intelligence */}
      <section className="px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">For Service Managers & Executives</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Know What&apos;s Really Happening
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Strategic visibility for service managers. Spot problems before they escalate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Client Health */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 animate-fadeIn delay-100">
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Health</h3>
              <p className="text-gray-400 text-sm">
                Spot at-risk clients before they churn. AI monitors sentiment, ticket patterns,
                and response times to surface problems early.
              </p>
            </div>

            {/* Engineer Health */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 animate-fadeIn delay-200">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Engineer Health</h3>
              <p className="text-gray-400 text-sm">
                Monitor workload and prevent burnout. See who&apos;s overloaded, who has
                capacity, and balance work across your team.
              </p>
            </div>

            {/* AI Triage */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 animate-fadeIn delay-300">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <Workflow className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Triage</h3>
              <p className="text-gray-400 text-sm">
                Right engineer, right ticket, automatically. AI considers skills, workload,
                client familiarity, and schedule to route optimally.
              </p>
            </div>
          </div>

          {/* Video Row */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fadeIn delay-400">
              <p className="text-gray-500 text-sm mb-3">Manager Dashboard</p>
              <VideoPlaceholder
                title="Video: Manager Dashboard"
                description="Client health and team overview"
              />
            </div>
            <div className="animate-fadeIn delay-500">
              <p className="text-gray-500 text-sm mb-3">AI Triage & Scheduling</p>
              <VideoPlaceholder
                title="Video: AI Triage"
                description="Intelligent ticket routing"
              />
            </div>
          </div>

          <div className="text-center mt-12 animate-fadeIn">
            <p className="text-xl text-green-400 font-semibold">
              Up to 50% less client churn. Healthier, happier teams.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Revenue Protection */}
      <section className="px-6 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm font-medium">Revenue Protection</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stop Giving Away Services You Should Be Billing For
              </h2>

              <p className="text-gray-300 text-lg mb-6">
                Every MSP has revenue leakage they don&apos;t know about. Engineers provide
                out-of-scope services without realizing it. We catch it in real-time.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">AI analyzes every ticket against client agreements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Flags out-of-scope work before it&apos;s delivered</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Empowers engineers to have the right conversation</span>
                </li>
              </ul>

              <p className="text-red-400 font-semibold">
                Recover revenue hiding in plain sight.
              </p>
            </div>

            <div className="animate-fadeIn delay-200">
              <VideoPlaceholder
                title="Video: Agreement Warning"
                description="Out-of-scope detection popup"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: AI Revenue Opportunity */}
      <section className="px-6 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">New Revenue Stream</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Use AI Internally. Sell It Externally.
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              You&apos;ve transformed your operations with AI. Now offer that capability to your clients
              and create a new recurring revenue stream.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-900/20 to-purple-900/20 rounded-2xl p-8 md:p-12 border border-green-500/20 animate-fadeIn delay-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">The AI Revenue Opportunity</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Deploy branded AI chatbots for your clients&apos; employees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Knowledge management solutions they&apos;ll pay monthly for</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Win new business by demonstrating AI maturity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Differentiate from competitors still selling labor hours</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-black/30 rounded-lg border border-green-500/20">
                  <p className="text-green-400 font-semibold text-lg">
                    No MSPs are generating meaningful AI revenue yet. Be first.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">MRR</div>
                  <p className="text-gray-400">New recurring revenue from AI solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 animate-fadeIn delay-300">
            <Link
              href="/solutions/recurring-revenue"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              Learn About AI Revenue Opportunities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Transformation */}
      <section className="px-6 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Traditional MSP to AI-Infused MSP
            </h2>
            <p className="text-gray-400 text-lg">
              The MSP industry is dividing into two camps. Which one will you be in?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fadeIn delay-200">
            {/* Traditional MSP */}
            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-gray-400">Traditional MSP</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-500">
                  <X className="w-5 h-5 text-red-400/50" />
                  <span>Engineers read every note manually</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500">
                  <X className="w-5 h-5 text-red-400/50" />
                  <span>Manual ticket assignment</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500">
                  <X className="w-5 h-5 text-red-400/50" />
                  <span>Reactive to client issues</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500">
                  <X className="w-5 h-5 text-red-400/50" />
                  <span>Giving away out-of-scope work</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500">
                  <X className="w-5 h-5 text-red-400/50" />
                  <span>Selling labor hours only</span>
                </li>
              </ul>
            </div>

            {/* AI-Infused MSP */}
            <div className="bg-gradient-to-br from-green-900/20 to-purple-900/20 rounded-xl p-8 border border-green-500/30">
              <h3 className="text-xl font-semibold mb-6 text-green-400">AI-Infused MSP</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>5-second AI ticket summaries</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>AI-powered triage & routing</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Predictive client health monitoring</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Real-time agreement alerts</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Selling AI solutions to clients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Ready to Become an{' '}
            <span className="text-gradient">AI-Infused MSP</span>?
          </h2>

          <p className="text-xl text-gray-400 mb-10 animate-fadeIn delay-100">
            Join the MSPs transforming their operations and creating new revenue streams with AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-200">
            <button
              onClick={() => setCalendlyModalOpen(true)}
              className="cta-button bg-gradient-to-r from-green-600 to-green-500 px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
            >
              Request Demo
            </button>
            <Link
              href="/resources/roi"
              className="cta-button bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
            >
              Get ROI Analysis
            </Link>
            <Link
              href="/contact"
              className="cta-button bg-gray-800 border border-gray-700 px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Request Trial Instance
            </Link>
          </div>

          {/* Partnership Logos */}
          <div className="mt-16 pt-8 border-t border-gray-800 animate-fadeIn delay-300">
            <div className="flex items-center justify-center gap-8">
              <Image
                src="/xop-logo.png"
                alt="XOP.ai"
                width={120}
                height={40}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
              <span className="text-gray-600 text-2xl">+</span>
              <Image
                src="/rezolve-logo.png"
                alt="Rezolve.ai"
                width={120}
                height={40}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-gray-500 text-sm mt-4">
              30+ years MSP experience combined with cutting-edge AI technology
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      {calendlyModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setCalendlyModalOpen(false)
            }
          }}
        >
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] relative">
            <button
              onClick={() => setCalendlyModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-4 h-[600px] overflow-hidden rounded-lg">
              <div
                className="calendly-inline-widget h-full w-full"
                data-url="https://calendly.com/mattruck"
                data-auto-load="false"
              ></div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
