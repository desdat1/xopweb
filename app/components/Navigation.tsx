'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false)
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [mobileAppsOpen, setMobileAppsOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)

  const solutions = [
    { name: 'Engineer Efficiency', href: '/solutions/engineer-efficiency', icon: '⚡' },
    { name: 'Service Desk Management', href: '/solutions/service-desk-management', icon: '📊' },
    { name: 'Executive Insights', href: '/solutions/executive-insights', icon: '📈' },
    { name: 'Generate Recurring Revenue', href: '/solutions/recurring-revenue', icon: '💰' },
    { name: 'Branded Chatbot for Clients', href: '/solutions/branded-chatbot', icon: '🤖' },
    { name: 'Voice Agents', href: '/solutions/voice-agents', icon: '📞' },
    { name: 'Email Agents', href: '/solutions/email-agents', icon: '📧' },
    { name: 'Integrations', href: '/solutions/integrated-stack', icon: '🔗' },
    { name: 'Future / Roadmap', href: '/solutions/roadmap', icon: '🚀' },
  ]

  const apps = [
    { name: 'AI Engineer Assist', href: '/apps/engineer-assist', icon: '⚡' },
    { name: 'AI Manager Application', href: '/apps/manager-app', icon: '👨‍💼' },
    { name: 'AI End User Chatbot', href: '/apps/end-user-chatbot', icon: '💬' },
  ]

  const resources = [
    { name: 'FAQ\'s', href: '/resources/faq', icon: '❓' },
    { name: 'MSP e-book "Generating AI Revenue"', href: '/ebook', icon: '📖' },
    { name: 'Blogs / News', href: '/blog', icon: '📝' },
    { name: 'Matt & Manish AI podcast', href: '/resources/podcast', icon: '🎙️' },
    { name: 'On Demand Webinars', href: '/resources/webinars', icon: '🎥' },
    { name: 'Rezolve.ai vs. Competition', href: '/resources/compare', icon: '⚖️' },
    { name: 'Request custom ROI', href: '/resources/roi', icon: '📊' },
  ]

  return (
    <nav className="border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <img src="/xop-logo.png" alt="xop.ai" className="h-[88px]" />
            <img src="/rezolve-logo.png" alt="Rezolve.ai" className="h-12" />
          </Link>
          
          <div className="hidden md:flex items-center justify-between flex-1">
            {/* Left side - grouped navigation */}
            <div className="flex items-center gap-8 ml-32">
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
              
              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                  onBlur={() => setTimeout(() => setResourcesDropdownOpen(false), 200)}
                  className="flex items-center gap-1 text-purple-400 hover:text-green-400 transition-colors"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {resourcesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-50">
                    {resources.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 hover:text-green-400 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => setResourcesDropdownOpen(false)}
                      >
                        <span className="text-lg">{resource.icon}</span>
                        <span>{resource.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right side - other links */}
            <div className="flex items-center gap-8">
              <Link href="/about" className="text-blue-400 hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="text-blue-400 hover:text-white transition-colors">Contact</Link>
              <Link href="/" className="text-blue-400 hover:text-white transition-colors">Home</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Bar - appears below header on mobile only */}
      <div className="md:hidden bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-3 flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
          >
            <span className="text-sm font-medium">Menu</span>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="bg-gray-800 border-t border-gray-700">
            <div className="px-6 py-4 space-y-4">
              {/* Mobile Solutions */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center justify-between w-full text-left text-green-400 font-medium py-2"
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileSolutionsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        className="flex items-center gap-3 py-2 text-gray-300 hover:text-green-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{solution.icon}</span>
                        <span>{solution.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Apps */}
              <div>
                <button
                  onClick={() => setMobileAppsOpen(!mobileAppsOpen)}
                  className="flex items-center justify-between w-full text-left text-yellow-400 font-medium py-2"
                >
                  Our Apps
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAppsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileAppsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {apps.map((app) => (
                      <Link
                        key={app.href}
                        href={app.href}
                        className="flex items-center gap-3 py-2 text-gray-300 hover:text-green-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{app.icon}</span>
                        <span>{app.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Resources */}
              <div>
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex items-center justify-between w-full text-left text-purple-400 font-medium py-2"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileResourcesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {resources.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="flex items-center gap-3 py-2 text-gray-300 hover:text-green-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{resource.icon}</span>
                        <span>{resource.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Other Links */}
              <Link 
                href="/about" 
                className="block py-2 text-gray-300 hover:text-green-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 text-gray-300 hover:text-green-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/" 
                className="block py-2 text-gray-300 hover:text-green-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}