'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false)
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false)

  const solutions = [
    { name: 'Engineer Efficiency', href: '/solutions/engineer-efficiency', icon: '⚡' },
    { name: 'Service Desk Management', href: '/solutions/service-desk-management', icon: '📊' },
    { name: 'Executive Insights', href: '/solutions/executive-insights', icon: '📈' },
    { name: 'Generate Recurring Revenue', href: '/solutions/recurring-revenue', icon: '💰' },
    { name: 'Branded Chatbot for Clients', href: '/solutions/branded-chatbot', icon: '🤖' },
    { name: 'Voice Agents', href: '/solutions/voice-agents', icon: '📞' },
    { name: 'Email Agents', href: '/solutions/email-agents', icon: '📧' },
    { name: 'Integrations', href: '/solutions/integrated-stack', icon: '🔗' },
    { name: 'AURA Insights', href: '/solutions/aura-insights', icon: '🎯' },
  ]

  const apps = [
    { name: 'Engineer App v4', href: '/apps/engineer-app-v4', icon: '⚡' },
    { name: 'Manager App (Pre-Release)', href: '/apps/manager-app', icon: '👨‍💼' },
    { name: 'Enterprise Search for MSPs', href: '/apps/enterprise-search-msps', icon: '🔍' },
    { name: 'Enterprise Search for End Users', href: '/apps/enterprise-search-end-users', icon: '🔎' },
    { name: 'End User Teams Chatbot', href: '/apps/msp-branded-client-chatbot', icon: '💬' },
  ]

  return (
    <nav className="border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <img src="/xop-logo.png" alt="xop.ai" className="h-[88px]" />
            <img src="/rezolve-logo.png" alt="Rezolve.ai" className="h-12" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                onBlur={() => setTimeout(() => setSolutionsDropdownOpen(false), 200)}
                className="flex items-center gap-1 text-green-400 hover:text-yellow-400 transition-colors"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-50">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 hover:text-green-400 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setSolutionsDropdownOpen(false)}
                    >
                      <span className="text-lg">{solution.icon}</span>
                      <span>{solution.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Our Apps Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAppsDropdownOpen(!appsDropdownOpen)}
                onBlur={() => setTimeout(() => setAppsDropdownOpen(false), 200)}
                className="flex items-center gap-1 text-yellow-400 hover:text-green-400 transition-colors"
              >
                Our Apps
                <ChevronDown className={`w-4 h-4 transition-transform ${appsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {appsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-50">
                  {apps.map((app) => (
                    <Link
                      key={app.href}
                      href={app.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 hover:text-green-400 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setAppsDropdownOpen(false)}
                    >
                      <span className="text-lg">{app.icon}</span>
                      <span>{app.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/about" className="hover:text-green-400 transition-colors">About Us</Link>
            <Link href="/resources" className="hover:text-green-400 transition-colors">Resources</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}