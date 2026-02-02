'use client'

// Extend Window interface for Calendly
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void
      initInlineWidget: (options: { url: string; parentElement: Element | null }) => void
    }
  }
}

import Navigation from './components/Navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, X, Zap, Users, BarChart3, Clock, Search, Shield, TrendingUp, ArrowRight, CheckCircle, Brain, Headphones, Mail } from 'lucide-react'
import Footer from '@/app/components/Footer'

export default function Home() {
  const [expandedServices, setExpandedServices] = useState<number[]>([])
  const [mounted, setMounted] = useState(false)
  const [calendlyModalOpen, setCalendlyModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  const services = [
    {
      icon: '⚡',
      title: 'Engineer Efficiency',
      description: 'Free up engineers to solve complex problems',
      details: 'Our Enterprise Search and Engineer V4 app provides AI workspace with customer overviews, historical ticket analysis, and resolution suggestions. Engineers spend less time searching and more time solving, resulting in 15-30% productivity gains.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-pulse-slow',
      slug: 'engineer-efficiency'
    },
    {
      icon: '📊',
      title: 'Service Desk Management',
      description: 'Real-time insights for service managers',
      details: 'The Manager App provides AI-assisted ticket assignment, escalation tracking, client health monitoring, and team performance analytics. Track satisfaction scores, profitability metrics, and get weekly coaching insights.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-float',
      slug: 'service-desk-management'
    },
    {
      icon: '📈',
      title: 'Executive Insights',
      description: 'Data-driven decisions at your fingertips',
      details: 'Transform your MSP data into actionable insights. Track profitability by client, identify growth opportunities, and forecast resource needs with AI-powered analytics.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-pulse-slow',
      slug: 'executive-insights'
    },
    {
      icon: '💰',
      title: 'Generate Recurring Revenue',
      description: 'Sell standalone Knowledge Management solutions to your clients',
      details: 'Offer enterprise search applications that integrate with SharePoint and other data sources. Clients can search documents by department, region, and time period. Available as standalone app or with white-labeled chatbot integration.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-float',
      slug: 'recurring-revenue'
    },
    {
      icon: '🤖',
      title: 'Branded Chatbot for Clients',
      description: 'Let clients self-serve with your AI assistant',
      details: 'Deploy a white-labeled chatbot that deflects 20% of end-user tickets. Integrated with ConnectWise Manage, it provides instant answers while maintaining your brand experience.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-pulse-slow',
      slug: 'branded-chatbot'
    },
    {
      icon: '📞',
      title: 'Voice Agents',
      description: 'AI that sounds human, works 24/7',
      details: 'Handle after-hours calls, password resets, and routine inquiries with natural-sounding AI voice agents. Reduce on-call burden while maintaining service quality.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-float',
      slug: 'voice-agents'
    },
    {
      icon: '📧',
      title: 'Email Agents',
      description: 'Intelligent email triage and response',
      details: 'Automatically categorize, prioritize, and respond to routine emails. Our AI understands context and escalates appropriately, reducing response times by 70%.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-pulse-slow',
      slug: 'email-agents'
    },
    {
      icon: '🔗',
      title: 'Integrations',
      description: 'Seamless integration with your existing tools',
      details: 'We integrate with ConnectWise Manage, ServiceNow, Halo PSA, IT Glue, Confluence, Hudu, & others. Our API-first approach ensures your data flows smoothly between systems.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-float',
      slug: 'integrated-stack'
    },
  ]

  const toggleService = (index: number) => {
    setExpandedServices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section - Purpose-Driven */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-purple-900/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            AI That Makes MSP Engineers<br />
            <span className="text-gradient">Superhuman</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your engineers are problem-solvers. They shouldn't spend half their day searching, documenting, and doing data entry. We build AI that handles the repetitive work so your team can focus on what humans do best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://xop.im/partner"
              className="cta-button bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              See How It Works
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="cta-button bg-gray-800 border border-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
            >
              Talk to Matt
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="px-6 py-16 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problem We Solve</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The average MSP engineer spends 40-50% of their day on tasks that don't require human intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* The Pain */}
            <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Without AI</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Hours lost searching through documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Ticket notes written from memory after calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Same questions answered repeatedly</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Managers flying blind on team performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Executives guessing at client profitability</span>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="bg-green-900/10 border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-400">With xop.ai</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">AI searches everything in seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Calls automatically documented with full context</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Chatbots deflect 20-30% of routine tickets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Real-time visibility into escalations and workload</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Data-driven insights on every client and engineer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-gray-800">
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
              poster=""
            >
              <source src="/rezolve-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Who We Help - Three Personas */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI for Every Role</h2>
            <p className="text-xl text-gray-400">
              Different problems, one platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Engineers */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-green-500/30 rounded-2xl p-8 hover:border-green-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">For Engineers</h3>
              <p className="text-gray-300 mb-6">
                Stop searching, start solving. AI that knows your clients, your documentation, and your history.
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  90% less time searching
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Automatic ticket documentation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  AI-suggested responses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  One-click time entries
                </li>
              </ul>
              <Link href="/solutions/engineer-efficiency" className="inline-flex items-center gap-2 text-green-400 mt-6 hover:underline">
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Managers */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">For Managers</h3>
              <p className="text-gray-300 mb-6">
                See problems before clients complain. Lead proactively instead of reacting to fires.
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Real-time escalation alerts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Team workload visibility
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Client health monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Performance analytics
                </li>
              </ul>
              <Link href="/solutions/service-desk-management" className="inline-flex items-center gap-2 text-blue-400 mt-6 hover:underline">
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Executives */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">For Executives</h3>
              <p className="text-gray-300 mb-6">
                Make decisions based on data, not gut feelings. Know which clients are profitable and which aren't.
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Client profitability insights
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Churn risk identification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Capacity forecasting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Revenue opportunity tracking
                </li>
              </ul>
              <Link href="/solutions/executive-insights" className="inline-flex items-center gap-2 text-purple-400 mt-6 hover:underline">
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now - Industry Context */}
      <section className="px-6 py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Industry Is Splitting in Two</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Over the next 2-3 years, a clear divide will emerge between MSPs with AI and those without
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-400">MSPs With AI</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 mt-1" />
                    <span>15-30% more productive engineers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 mt-1" />
                    <span>Faster response times, happier clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 mt-1" />
                    <span>Scale without proportional hiring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 mt-1" />
                    <span>New revenue from AI services</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-400">MSPs Without AI</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">↓</span>
                    <span>Competing on price against efficient rivals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">↓</span>
                    <span>Losing talent to MSPs with better tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">↓</span>
                    <span>Higher labor costs eating margins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">↓</span>
                    <span>Always reactive, always behind</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-lg text-gray-300 italic">
                "The efficiency gap compounds. Early adopters get faster and more profitable every month. The longer you wait, the harder it becomes to catch up."
              </p>
              <p className="text-gray-500 mt-2">— Matt Ruck, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="px-6 py-16" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete AI Platform for MSPs</h2>
            <p className="text-xl text-gray-400">
              Eight integrated solutions that work together
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const isExpanded = expandedServices.includes(index)
              return (
                <div
                  key={index}
                  className="service-card rounded-xl cursor-pointer group animate-fadeIn flex flex-col h-full border border-gray-800 hover:border-green-500/50 bg-gray-900/50 overflow-hidden transition-all"
                  style={{ animationDelay: `${(index + 1) * 0.05}s` }}
                  onClick={() => toggleService(index)}
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-3xl ${service.iconAnimation}`}>
                        {service.icon}
                      </span>
                      <span className="text-gray-500 text-xl transition-transform duration-300 group-hover:scale-110">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-gray-800 animate-fadeIn">
                        <p className="text-sm leading-relaxed mb-4 text-gray-300">
                          {service.details}
                        </p>
                        <Link
                          href={`/solutions/${service.slug}`}
                          className="inline-flex items-center gap-2 text-green-400 text-sm font-medium hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Learn More
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-6 py-16 bg-gradient-to-b from-black to-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why MSPs Choose xop.ai</h2>
            <p className="text-xl text-gray-400">
              Built by MSPs, for MSPs—not adapted from generic enterprise AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">MSP-Native</h3>
              <p className="text-gray-400 text-sm">
                We understand tickets, SLAs, and client relationships because we've lived them for 30 years
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Works Inside Your PSA</h3>
              <p className="text-gray-400 text-sm">
                No new systems to learn. AI lives where your engineers already work
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Your Data Stays Yours</h3>
              <p className="text-gray-400 text-sm">
                SOC2 compliant. Never used for training. Data residency in US, Canada, or Europe
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2">Partnership Model</h3>
              <p className="text-gray-400 text-sm">
                Bi-weekly optimization meetings. We succeed when you succeed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Results You Can Measure</h2>
            <p className="text-xl text-gray-400">
              We don't sell features—we sell outcomes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeIn">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">15-30%</div>
              <div className="text-gray-400">Engineer Productivity Gain</div>
            </div>
            <div className="animate-fadeIn delay-100">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">20-30%</div>
              <div className="text-gray-400">Ticket Deflection</div>
            </div>
            <div className="animate-fadeIn delay-200">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-400">Less Time Searching</div>
            </div>
            <div className="animate-fadeIn delay-300">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">200%</div>
              <div className="text-gray-400">ROI by Year 2</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="https://xop.im/partner"
              className="cta-button bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Your Custom ROI Analysis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="px-6 py-16 bg-gradient-to-r from-green-900/20 via-gray-900 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            This Isn't About Replacing Humans with AI
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            It's about finally letting humans be human. Your engineers are problem-solvers, relationship-builders, and technical experts. Let AI handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://xop.im/partner"
              className="cta-button bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="cta-button bg-gray-800 border border-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
            >
              Learn Our Story
            </Link>
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
