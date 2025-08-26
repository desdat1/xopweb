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
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, X } from 'lucide-react'
import Footer from '@/app/components/Footer'

export default function Home() {
  const [expandedServices, setExpandedServices] = useState<number[]>([])
  const [mounted, setMounted] = useState(false)
  // const [splashVisible, setSplashVisible] = useState(true) // Commented out for future use
  const [calendlyModalOpen, setCalendlyModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (calendlyModalOpen) {
      // Load Calendly widget script when modal opens
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => {
        // Initialize the inline widget after script loads
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/mattruck',
            parentElement: document.querySelector('.calendly-inline-widget')
          })
        }
      }
      document.body.appendChild(script)
      
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable body scroll when modal closes
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [calendlyModalOpen])

  // Reordered services array with Generate Recurring Revenue at position 4
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
      details: 'We integrate with ConnectWise Manage, ServiceNow, IT Glue, Confluence, Hudu, & others. Our API-first approach ensures your data flows smoothly between systems, eliminating silos and reducing manual work.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-float',
      slug: 'integrated-stack'
    },
    {
      icon: '🎯',
      title: 'AURA Insights',
      description: 'AI-powered ticket health monitoring',
      details: 'Monitor ticket health in real-time with our AI assistant. AURA identifies bottlenecks, predicts escalations, and suggests optimal routing to keep your service desk running smoothly.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-pulse-slow',
      slug: 'aura-insights'
    }
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

      {/* ConnectWise Evolve Splash Screen - Commented out for future use */}
      {/*
      {splashVisible && (
        <section className="bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-blue-900/30 border-b border-blue-500/30 relative">
          {/* Close Button */}
          {/*
          <button
            onClick={() => setSplashVisible(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70 text-gray-400 hover:text-white transition-all"
            aria-label="Close splash screen"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="container mx-auto px-6 py-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* ConnectWise Logo */}
                {/*
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4 lg:mb-0">
                    <img 
                      src="https://www.connectwise.com/contentassets/46e6af166a92407eac66d8a7c79d3c8d/logo.svg" 
                      alt="ConnectWise" 
                      className="h-12 w-auto"
                    />
                    <div className="text-3xl font-bold text-blue-400">EVOLVE</div>
                  </div>
                  <div className="text-sm text-gray-400 text-center lg:text-left">August 19 - 22, Milwaukee, Wisconsin</div>
                </div>
                
                {/* Event Content */}
                {/*
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                    Building the Future of MSP Operations in Milwaukee
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Matt will be in Milwaukee August 19 - 22 and is available to meet with MSPs to discuss building 
                    <span className="text-blue-400 font-semibold"> engineer efficiency</span>, gaining 
                    <span className="text-green-400 font-semibold"> service desk insights</span>, and creating 
                    <span className="text-purple-400 font-semibold"> new revenue streams</span> through AI automation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button
                      onClick={() => setCalendlyModalOpen(true)}
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                    >
                      <span className="text-2xl">📅</span>
                      Schedule Time with Matt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      */}

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          AI Solutions Designed by MSPs,<br />
          <span className="text-gradient">Built for MSPs</span>
        </h1>
      </section>

      {/* Services Section */}
      <section className="px-6 py-6" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const isExpanded = expandedServices.includes(index)
              return (
                <div
                  key={index}
                  className="service-card rounded-lg cursor-pointer group animate-fadeIn flex flex-col h-full border-4 border-gray-800 border-b-purple-500 bg-gray-900 overflow-hidden"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  onClick={() => toggleService(index)}
                >
                  <div className={`h-3 bg-gradient-to-r ${service.colorClass} shimmer`}></div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`text-3xl ${service.iconAnimation}`}>
                          {service.icon}
                        </span>
                        <h3 className="text-xl font-semibold group-hover:text-green-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <span className="text-gray-400 text-2xl transition-transform duration-300 group-hover:scale-110">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>
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
                          className="inline-flex items-center gap-2 cta-button bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 ml-auto relative overflow-hidden"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Learn More
                          <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
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

      {/* CTA Section - Between Cards and Statistics */}
      <section className="px-6 py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl md:text-2xl mb-8 animate-fadeIn">
            <span className="text-yellow-400 italic">30 years of MSP experience + cutting-edge Rezolve.ai technology =</span><br />
            <span className="font-bold text-white text-2xl md:text-3xl">Solutions that deliver ROI to your business</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-200">
            <Link
              href="https://xop.im/partner"
              className="cta-button bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              Request a Customized ROI Analysis
            </Link>
            <Link
              href="/contact"
              className="cta-button bg-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Section with Statistics */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
            AI Solutions that Deliver Real ROI
          </h2>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeIn delay-100">
              <div className="text-3xl md:text-4xl font-bold text-green-400 animate-pulse-slow">30+</div>
              <div className="text-sm text-gray-400 mt-2">Years MSP Experience</div>
            </div>
            <div className="animate-fadeIn delay-200">
              <div className="text-3xl md:text-4xl font-bold text-green-400 animate-pulse-slow">200%</div>
              <div className="text-sm text-gray-400 mt-2">ROI by Year 2</div>
            </div>
            <div className="animate-fadeIn delay-300">
              <div className="text-3xl md:text-4xl font-bold text-green-400 animate-pulse-slow">15-30%</div>
              <div className="text-sm text-gray-400 mt-2">Engineer Productivity Gains</div>
            </div>
            <div className="animate-fadeIn delay-400">
              <div className="text-3xl md:text-4xl font-bold text-green-400 animate-pulse-slow">20-30%</div>
              <div className="text-sm text-gray-400 mt-2">End User Ticket Deflection</div>
            </div>
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
            {/* Close Button */}
            <button
              onClick={() => setCalendlyModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Calendly Inline Widget */}
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