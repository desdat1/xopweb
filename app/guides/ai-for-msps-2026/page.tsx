'use client'

import { useState } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { CheckCircle, Mail, User, Building, BookOpen, TrendingUp, Users, Zap, Clock, Shield, ArrowRight, Calendar, ExternalLink } from 'lucide-react'

export default function AIForMSPsGuidePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    companySize: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-green-500/10 border border-green-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>

            <h1 className="text-4xl font-bold mb-6">Your Guide is Ready</h1>
            <p className="text-xl text-gray-300 mb-8">
              Download your copy of <strong>The AI Reckoning for MSP Leadership</strong> below. We&apos;ve also sent a copy to your inbox.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-8">
              <a
                href="/docs/msp-executive-guide-ai-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all text-lg"
              >
                <BookOpen className="w-5 h-5" />
                Download the Guide (PDF)
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* CTA: Book a Meeting */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Want to Discuss Your AI Strategy?</h2>
              <p className="text-gray-300 mb-6">
                Matt Ruck has helped MSP leaders navigate the AI transition firsthand. Book a 30-minute call to talk through your specific situation &mdash; where you are today, where the industry is heading, and what moves make sense for your business.
              </p>
              <a
                href="https://xop.im/partner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all text-lg"
              >
                <Calendar className="w-5 h-5" />
                Book a Call with Matt
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors"
              >
                Read More Insights
              </Link>
              <Link
                href="/solutions/engineer-efficiency"
                className="inline-flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  const chapters = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'The MSP Evolution',
      description: 'From break-fix to managed services to AI-native — why each transition became table stakes within five years.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Tier 1 & 2 Ratio Changes',
      description: 'How agentic AI collapses the traditional MSP staffing pyramid and what the new workforce model looks like.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'The Engineer Efficiency Dividend',
      description: 'Why early AI attempts failed, and how second-generation tools solve the data quality problem at the source.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'The Automation Trap',
      description: 'The counterintuitive case for slowing down on hand-built automations before agentic AI makes them obsolete.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Differentiation or Death',
      description: 'The three-component value proposition that separates surviving MSPs from those that get commoditized.'
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: 'Three Actions for Monday Morning',
      description: 'A concrete action plan: appoint your AI practice lead, implement internally first, and rebuild your sales narrative.'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="px-6 pt-16 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-1 text-purple-400 text-sm font-medium mb-6">
            Free Executive Guide &mdash; 14 Pages
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            2026: The AI Reckoning for<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MSP Leadership</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            How agentic systems will reshape the economics, workforce, and customer expectations of the managed services industry.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Written by <strong className="text-white">Matt Ruck</strong> and <strong className="text-white">R. Marcus Holloway</strong> &mdash; two MSP executives who built, scaled, and exited MSP businesses and now consult with MSPs on AI adoption.
          </p>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-purple-500 bg-gray-900/50 rounded-r-lg p-6">
            <p className="text-lg italic text-gray-300">
              &ldquo;AI won&apos;t kill MSPs. Hesitation will. The winners won&apos;t be the ones who waited to see what happened &mdash; they&apos;ll be the ones who ran the experiment, showed the proof, and made believers out of their teams, their clients, and their market.&rdquo;
            </p>
            <p className="text-purple-400 mt-3 font-medium">&mdash; Matt Ruck, CEO xop.ai</p>
          </div>
        </div>
      </section>

      {/* Main Content: Chapters + Form */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left: What's Inside (3 cols) */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-8">What&apos;s Inside the Guide</h2>

              <div className="space-y-6">
                {chapters.map((chapter, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-purple-400">
                      {chapter.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{chapter.title}</h3>
                      <p className="text-gray-400">{chapter.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Stats */}
              <div className="mt-12 grid sm:grid-cols-3 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">80%</div>
                  <div className="text-sm text-gray-400">Ticket resolution by AI projected within 3 years</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">30-50%</div>
                  <div className="text-sm text-gray-400">Productivity lift per senior engineer with AI tools</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-1">12-18 mo</div>
                  <div className="text-sm text-gray-400">Window to capture margin before top-line pressure</div>
                </div>
              </div>
            </div>

            {/* Right: Form (2 cols) */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 sticky top-8">
                <h2 className="text-2xl font-bold mb-2">Get the Free Guide</h2>
                <p className="text-gray-400 text-sm mb-6">Fill out the form below and we&apos;ll send it to your inbox instantly.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
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
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
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
                      placeholder="john@yourmsp.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
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
                      placeholder="Your MSP"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
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
                      <option value="COO/Operations">COO/Operations</option>
                      <option value="VP/Director of Service">VP/Director of Service</option>
                      <option value="Service Manager">Service Manager</option>
                      <option value="Sales/Business Development">Sales/Business Development</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-300 mb-1">
                      Company Size *
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      required
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    >
                      <option value="">Select company size</option>
                      <option value="1-5 employees">1-5 employees</option>
                      <option value="6-15 employees">6-15 employees</option>
                      <option value="16-50 employees">16-50 employees</option>
                      <option value="51-100 employees">51-100 employees</option>
                      <option value="100+ employees">100+ employees</option>
                    </select>
                  </div>

                  {error && (
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-red-300 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        Get the Free Guide
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to receive emails from xop.ai about AI solutions for MSPs. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Prefer to Talk It Through?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Matt Ruck has helped dozens of MSP owners navigate the AI transition. Book a no-obligation call to discuss your specific challenges and opportunities.
            </p>
            <a
              href="https://xop.im/partner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all text-lg"
            >
              <Calendar className="w-5 h-5" />
              Book a Call with Matt
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
