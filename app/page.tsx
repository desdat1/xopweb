'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Home() {
  const [expandedServices, setExpandedServices] = useState<number[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ]

  const services = [
    {
      icon: '🔗',
      title: 'Integrated to Your Stack',
      description: 'Seamless integration with your existing tools',
      details: 'We integrate with ConnectWise Manage, ServiceNow, IT Glue, Confluence, Hudu, & others. Our API-first approach ensures your data flows smoothly between systems, eliminating silos and reducing manual work.',
      colorClass: '',
      slug: 'integrated-stack'
    },
    {
      icon: '👁️',
      title: 'AURA Insights',
      description: 'AI-powered ticket health monitoring',
      details: 'Monitor ticket health in real-time with our AI assistant. AURA identifies bottlenecks, predicts escalations, and suggests optimal routing to keep your service desk running smoothly.',
      colorClass: '',
      slug: 'aura-insights'
    },
    {
      icon: '👷',
      title: 'Engineer Efficiency',
      description: 'Free up engineers to solve complex problems',
      details: 'Our AI assistant handles routine tasks, knowledge retrieval, and ticket correlation. Engineers spend less time searching and more time solving, resulting in 15-30% productivity gains.',
      colorClass: 'bg-gradient-to-r from-blue-500 to-blue-600',
      slug: 'engineer-efficiency'
    },
    {
      icon: '📊',
      title: 'Service Desk Management',
      description: 'Real-time insights for service managers',
      details: 'Get instant visibility into queue health, SLA compliance, and team performance. Our AI identifies patterns and suggests optimizations to improve service delivery.',
      colorClass: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      slug: 'service-desk-management'
    },
    {
      icon: '🎯',
      title: 'Executive Insights',
      description: 'Data-driven decisions at your fingertips',
      details: 'Transform your MSP data into actionable insights. Track profitability by client, identify growth opportunities, and forecast resource needs with AI-powered analytics.',
      colorClass: 'bg-gradient-to-r from-green-500 to-green-600',
      slug: 'executive-insights'
    },
    {
      icon: '💬',
      title: 'Branded Chatbot for Clients',
      description: 'Let clients self-serve with your AI assistant',
      details: 'Deploy a white-labeled chatbot that deflects 20% of end-user tickets. Integrated with ConnectWise Manage, it provides instant answers while maintaining your brand experience.',
      colorClass: 'bg-gradient-to-r from-blue-500 to-blue-600',
      slug: 'branded-chatbot'
    },
    {
      icon: '💰',
      title: 'Generate Recurring Revenue',
      description: 'New revenue stream at $11/endpoint',
      details: 'Package our AI solutions as a premium service offering. Most MSPs achieve 50%+ margins while delivering tangible value that increases client retention.',
      colorClass: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      slug: 'recurring-revenue'
    },
    {
      icon: '📞',
      title: 'Voice Agents',
      description: 'AI that sounds human, works 24/7',
      details: 'Handle after-hours calls, password resets, and routine inquiries with natural-sounding AI voice agents. Reduce on-call burden while maintaining service quality.',
      colorClass: 'bg-gradient-to-r from-green-500 to-green-600',
      slug: 'voice-agents'
    },
    {
      icon: '📧',
      title: 'Email Agents',
      description: 'Intelligent email triage and response',
      details: 'Automatically categorize, prioritize, and respond to routine emails. Our AI understands context and escalates appropriately, reducing response times by 70%.',
      colorClass: 'bg-gradient-to-r from-blue-500 to-blue-600',
      slug: 'email-agents'
    }
  ]

  const toggleService = (index: number) => {
    setExpandedServices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="p-6 mb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image 
              src="/xop-logo.png" 
              alt="XOP.ai" 
              width={132} 
              height={88} 
              className="h-[88px] w-auto"
            />
            <Image 
              src="/rezolve-logo.png" 
              alt="Rezolve.ai" 
              width={72} 
              height={48} 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
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
          <div className="md:hidden mt-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-center"
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
          AI Solutions Designed by MSPs,<br />Built for MSPs
        </h1>
        
        <p className="text-xl md:text-2xl text-yellow-400 italic mb-6 max-w-4xl mx-auto animate-fadeIn animation-delay-200">
          30 years of MSP experience + cutting-edge Rezolve.ai technology =<br />
          <span className="font-bold">Real ROI for your business</span>
        </p>
      </section>

      {/* Services Section */}
      <section className="px-6 py-6" id="services">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Solutions</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 cursor-pointer group"
                onClick={() => toggleService(index)}
              >
                <div className={`h-2 ${service.colorClass || 'bg-gradient-to-r from-purple-500 to-pink-500'}`} />
                
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#8BC34A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>
                  
                  {expandedServices.includes(index) && (
                    <div className="mt-4 animate-fadeIn">
                      <p className="text-sm leading-relaxed mb-4">
                        {service.details}
                      </p>
                      <Link
                        href={`/solutions/${service.slug}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-sm hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn More
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section with Statistics */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">AI Solutions that Deliver real ROI</h2>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeIn">
              <div className="text-3xl md:text-4xl font-bold text-[#8BC34A]">30+</div>
              <div className="text-sm text-gray-400">Years MSP Experience</div>
            </div>
            <div className="animate-fadeIn animation-delay-100">
              <div className="text-3xl md:text-4xl font-bold text-[#8BC34A]">200%</div>
              <div className="text-sm text-gray-400">ROI by Year 2</div>
            </div>
            <div className="animate-fadeIn animation-delay-200">
              <div className="text-3xl md:text-4xl font-bold text-[#8BC34A]">15-30%</div>
              <div className="text-sm text-gray-400">Engineer Productivity Gains</div>
            </div>
            <div className="animate-fadeIn animation-delay-300">
              <div className="text-3xl md:text-4xl font-bold text-[#8BC34A]">20%</div>
              <div className="text-sm text-gray-400">End User Ticket Deflection</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="https://xop.im/partner"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity inline-block"
            >
              Request a Customized ROI Analysis
            </Link>
            <Link
              href="/contact"
              className="bg-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors inline-block"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 xop.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}