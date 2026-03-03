'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import {
  Zap, BarChart3, Brain, Search, Shield,
  ArrowRight, Calendar, Monitor, Mic, HeartPulse,
  MessageSquare, CheckCircle
} from 'lucide-react'

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void
      initInlineWidget: (options: { url: string; parentElement: Element | null }) => void
    }
  }
}

export default function RezolvePartnerPage() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link)
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  const psaPlatforms = [
    { name: 'ConnectWise Manage', logo: '/connectwise-logo.png', width: 140 },
    { name: 'HaloPSA', logo: '/halo-logo.png', width: 100 },
    { name: 'Autotask', logo: '/autotask.png', width: 120 },
    { name: 'ServiceNow', logo: '/servicenow-logo.png', width: 130 },
  ]

  const solutions = [
    {
      icon: Zap,
      title: 'Engineer Efficiency',
      description: 'AI assistance embedded directly in the PSA — enterprise search, automated notes, and intelligent ticket analysis.',
      href: '/solutions/engineer-efficiency',
    },
    {
      icon: BarChart3,
      title: 'Service Desk Management',
      description: 'AI-powered triage, escalation management, client health scoring, and real-time operational dashboards.',
      href: '/solutions/service-desk-management',
    },
    {
      icon: Brain,
      title: 'Executive Insights',
      description: 'Data-driven intelligence on engineer performance, client satisfaction trends, and revenue opportunities.',
      href: '/solutions/executive-insights',
    },
    {
      icon: MessageSquare,
      title: 'Branded Client Chatbot',
      description: 'White-labeled AI chatbot for your clients — deflect tickets, improve satisfaction, and deliver 24/7 support.',
      href: '/solutions/branded-chatbot',
    },
    {
      icon: Mic,
      title: 'Voice Agents',
      description: 'AI voice transcription that captures resolution notes hands-free and feeds richer data back into the knowledge base.',
      href: '/solutions/voice-agents',
    },
    {
      icon: Shield,
      title: 'Recurring Revenue',
      description: 'Package AI solutions as billable offerings to your clients — turn operational tools into a new revenue stream.',
      href: '/solutions/recurring-revenue',
    },
  ]

  const apps = [
    {
      icon: Monitor,
      title: 'AI Engineer Assist',
      description: 'Embedded AI copilot for frontline engineers inside the PSA.',
      href: '/apps/engineer-app-v4',
    },
    {
      icon: HeartPulse,
      title: 'TECHS Command Centre',
      description: 'Real-time service desk management with AI-driven triage and insights.',
      href: '/apps/manager-app',
    },
    {
      icon: Search,
      title: 'Enterprise Search',
      description: 'Instant answers from historical tickets, IT Glue, SharePoint, and more.',
      href: '/apps/enterprise-search-msps',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-green-900/20" />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
          {/* Partner Logos */}
          <div className="flex items-center justify-center gap-6 mb-12 animate-fadeIn">
            <Image
              src="/rezolve-logo.png"
              alt="Rezolve.ai"
              width={160}
              height={48}
            />
            <span className="text-3xl text-gray-600 font-light">+</span>
            <Image
              src="/xop-logo.png"
              alt="XOP.ai"
              width={120}
              height={48}
            />
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Transform MSP Operations with{' '}
              <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                Embedded AI
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeIn delay-100">
              XOP.ai brings Rezolve.ai&apos;s powerful AI platform directly into the PSA and ticketing systems MSP engineers use every day — ConnectWise Manage, HaloPSA, Autotask, and ServiceNow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn delay-200">
              <a
                href="#get-started"
                className="cta-button inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all"
              >
                <Calendar className="w-5 h-5" />
                Get Started
              </a>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                Explore Resources
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PSA Platforms */}
      <section className="py-12 border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
            Embedded solutions for the platforms you already use
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {psaPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white/90 rounded-lg px-5 py-3 flex items-center justify-center"
              >
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  width={platform.width}
                  height={36}
                  className="object-contain h-9"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Call — Embedded Calendly */}
      <section id="get-started" className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Left side — messaging */}
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your MSP with AI?
              </h2>
              <p className="text-gray-300 mb-6">
                Book a 30-minute introductory call to learn how XOP.ai&apos;s embedded AI solutions can:
              </p>
              <ul className="space-y-3">
                {[
                  'Improve engineer productivity inside the PSA',
                  'Deliver real-time operational intelligence',
                  'Create new recurring revenue streams',
                  'Deploy in days across ConnectWise, Halo, Autotask, or ServiceNow',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side — embedded Calendly */}
            <div className="md:col-span-3 bg-white rounded-xl overflow-hidden">
              <div
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/mattruck"
                style={{ minHeight: '700px', height: '700px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI That Lives Where Engineers Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              No new tools to learn. No context switching. XOP.ai embeds AI directly into the PSA — making every engineer more productive and giving leadership real-time operational intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { metric: 'Faster', label: 'Time to Resolution', description: 'Enterprise search finds answers in seconds' },
              { metric: 'Zero', label: 'Manual Note-Taking', description: 'AI captures notes and time entries' },
              { metric: 'Real-Time', label: 'Operational Insights', description: 'Data-driven leadership dashboards' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center animate-fadeIn"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.metric}
                </div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions for Every Layer of the MSP</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From frontline engineers to the C-suite, XOP.ai delivers measurable impact across your entire operation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.href}
                className="group bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-all animate-fadeIn"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <solution.icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-400 text-sm">{solution.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Applications</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Purpose-built AI applications that embed into your MSP workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {apps.map((app, index) => (
              <Link
                key={index}
                href={app.href}
                className="group bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-purple-500/50 transition-all text-center"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <app.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {app.title}
                </h3>
                <p className="text-gray-400 text-sm">{app.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Work Together</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Introductory Call',
                description: 'We learn about your MSP operations, PSA environment, and where AI can deliver the most impact.',
              },
              {
                step: '2',
                title: 'Tailored Demo',
                description: 'See XOP.ai embedded in your PSA — ConnectWise, Halo, Autotask, or ServiceNow — with your real workflows.',
              },
              {
                step: '3',
                title: 'Rapid Deployment',
                description: 'Go live in days, not months. AI starts working inside your PSA immediately with zero disruption.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resources</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Dive deeper into how AI is transforming the MSP industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'ROI Calculator', href: '/resources/roi', description: 'See the financial impact of AI on your MSP.' },
              { title: 'FAQ', href: '/resources/faq', description: 'Common questions about XOP.ai solutions.' },
              { title: 'Webinars', href: '/resources/webinars', description: 'On-demand sessions from MSP leaders.' },
              { title: 'Blog', href: '/blog', description: 'Latest insights on AI and MSP operations.' },
            ].map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="group bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-green-500/50 transition-all"
              >
                <h3 className="font-semibold mb-1 group-hover:text-green-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-500 text-sm">{resource.description}</p>
                <div className="mt-3 flex items-center gap-1 text-sm text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  View <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
