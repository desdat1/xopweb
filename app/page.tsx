'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Home() {
  const [expandedServices, setExpandedServices] = useState<number[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ]

  // Reordered services array with Generate Recurring Revenue at position 4
  const services = [
    {
      icon: '👷',
      title: 'Engineer Efficiency',
      description: 'Free up engineers to solve complex problems',
      details: 'Our AI assistant handles routine tasks, knowledge retrieval, and ticket correlation. Engineers spend less time searching and more time solving, resulting in 15-30% productivity gains.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-pulse-slow',
      slug: 'engineer-efficiency'
    },
    {
      icon: '📊',
      title: 'Service Desk Management',
      description: 'Real-time insights for service managers',
      details: 'Get instant visibility into queue health, SLA compliance, and team performance. Our AI identifies patterns and suggests optimizations to improve service delivery.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-float',
      slug: 'service-desk-management'
    },
    {
      icon: '🎯',
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
      description: 'New revenue stream at $11/endpoint',
      details: 'Package our AI solutions as a premium service offering. Most MSPs achieve 50%+ margins while delivering tangible value that increases client retention.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-float',
      slug: 'recurring-revenue'
    },
    {
      icon: '💬',
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
      title: 'Integrated to Your Stack',
      description: 'Seamless integration with your existing tools',
      details: 'We integrate with ConnectWise Manage, ServiceNow, IT Glue, Confluence, Hudu, & others. Our API-first approach ensures your data flows smoothly between systems, eliminating silos and reducing manual work.',
      colorClass: 'from-green-500 to-green-400',
      iconAnimation: 'animate-float',
      slug: 'integrated-stack'
    },
    {
      icon: '🔮',
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
      {/* Navigation */}
      <nav className="p-6 mb-8 border-b border-gray-800 animate-slideIn">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="animate-pulse-slow">
              <Image 
                src="/xop-logo.png" 
                alt="XOP.ai" 
                width={132} 
                height={88} 
                className="h-[88px] w-auto"
              />
            </div>
            <Image 
              src="/rezolve-logo.png" 
              alt="Rezolve.ai" 
              width={72} 
              height={48} 
              className="h-12 w-auto opacity-80"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-green-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="cta-button bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 relative overflow-hidden"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 animate-fadeIn">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 hover:text-green-400 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          AI Solutions Designed by MSPs,<br />
          <span className="text-gradient">Built for MSPs</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto animate-fadeIn delay-200">
          <span className="text-yellow-400 italic">30 years of MSP experience + cutting-edge Rezolve.ai technology =</span><br />
          <span className="font-bold text-white">Real ROI for your business</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeIn delay-400">
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
      </section>

      {/* Services Section */}
      <section className="px-6 py-6" id="services">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn">Our Solutions</h2>
          
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
              <div className="text-3xl md:text-4xl font-bold text-green-400 animate-pulse-slow">20%</div>
              <div className="text-sm text-gray-400 mt-2">End User Ticket Deflection</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 xop.ai. All rights reserved. Powered by Rezolve.ai</p>
        </div>
      </footer>
    </div>
  )
}