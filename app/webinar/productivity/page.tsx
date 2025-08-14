'use client'

import { useState } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { Video, CheckCircle, Mail, User, ArrowLeft, ExternalLink, Play } from 'lucide-react'
import Link from 'next/link'

export default function ProductivityWebinarPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    interest: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/webinar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          webinar: 'Monetize, Boost your MPS Business Productivity with GenAI'
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        <section className="px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-500/10 border border-green-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            
            <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
            <p className="text-xl text-gray-300 mb-8">
              You now have access to the webinar. You can watch it immediately using the link below.
            </p>
            
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4 text-blue-400">Watch the Webinar Now</h2>
              <a
                href="https://youtu.be/HRhcN9MLLsY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                <Play className="w-5 h-5" />
                Watch on YouTube
              </a>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">What's Next?</h2>
              <ul className="text-left space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-green-400 flex-shrink-0" />
                  Watch the full webinar presentation
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  Implement the productivity strategies discussed
                </li>
                <li className="flex items-center gap-3">
                  <User className="w-5 h-5 text-green-400 flex-shrink-0" />
                  Schedule a consultation to discuss your specific needs
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Read More Insights
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-green-500/30 px-6 py-3 rounded-full font-semibold hover:bg-green-500/10 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/resources"
            className="inline-flex items-center gap-2 text-green-400 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Webinar Info */}
            <div>
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-8 mb-8">
                <Video className="w-16 h-16 text-blue-400 mb-6" />
                <h1 className="text-3xl font-bold mb-4">Monetize, Boost your MSP Business Productivity with GenAI</h1>
                <p className="text-lg text-gray-300 mb-6">
                  Discover proven strategies to leverage Generative AI for increasing MSP productivity and creating new revenue streams. 
                  Learn from real-world implementations and actionable insights.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">What You'll Learn:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      How to identify revenue-generating AI opportunities in your MSP
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      Productivity gains through AI-powered automation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      Client engagement strategies with AI solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      ROI measurement and success metrics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      Implementation roadmap for MSPs of all sizes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      Q&A with industry experts
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Access This Webinar</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    placeholder="john@yourcompany.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    placeholder="Your MSP Company"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="Owner/CEO">Owner/CEO</option>
                    <option value="CTO/Technical Director">CTO/Technical Director</option>
                    <option value="Operations Manager">Operations Manager</option>
                    <option value="Service Manager">Service Manager</option>
                    <option value="Engineer/Technician">Engineer/Technician</option>
                    <option value="Sales/Business Development">Sales/Business Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  >
                    <option value="">What interests you most?</option>
                    <option value="Increasing productivity">Increasing productivity</option>
                    <option value="Generating new revenue">Generating new revenue</option>
                    <option value="Client service improvement">Client service improvement</option>
                    <option value="Operational efficiency">Operational efficiency</option>
                    <option value="Competitive advantage">Competitive advantage</option>
                    <option value="All of the above">All of the above</option>
                  </select>
                </div>

                {error && (
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-red-300">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Getting Access...
                    </>
                  ) : (
                    <>
                      <Video className="w-5 h-5" />
                      Access Webinar
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting this form, you agree to receive emails from xop.ai about AI solutions for MSPs. 
                  You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}