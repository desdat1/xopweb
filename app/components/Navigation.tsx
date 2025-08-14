'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false)

  const apps = [
    { name: 'Engineer App v4', href: '/apps/engineer-app-v4' },
    { name: 'Manager App (Pre-Release)', href: '/apps/manager-app' },
    { name: 'Enterprise Search for MSPs', href: '/apps/enterprise-search-msps' },
    { name: 'Enterprise Search for End Users', href: '/apps/enterprise-search-end-users' },
    { name: 'End User Teams Chatbot', href: '/apps/msp-branded-client-chatbot' },
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
                <div className="absolute top-full left-0 mt-2 w-72 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-50">
                  {apps.map((app) => (
                    <Link
                      key={app.href}
                      href={app.href}
                      className="block px-4 py-3 hover:bg-gray-800 hover:text-green-400 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setAppsDropdownOpen(false)}
                    >
                      {app.name}
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