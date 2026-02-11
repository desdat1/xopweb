'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  GraduationCap, Brain, Award, TrendingUp, Users,
  ArrowRight, CheckCircle, MessageCircle, Zap,
  X, Check, Target, Star, BarChart3
} from 'lucide-react'

export default function TeamDevelopmentPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const transformations = [
    { before: 'Annual reviews based on gut feeling and memory', after: 'Weekly coaching insights backed by objective data' },
    { before: 'Generic training that may or may not apply', after: 'Targeted development based on actual skill gaps' },
    { before: 'Guessing who deserves recognition', after: 'Data-driven identification of top performers' },
    { before: 'Waiting for problems to become obvious', after: 'Early signals when an engineer needs support' },
  ]

  const hardSkills = [
    'Azure & Cloud Platforms',
    'Network Troubleshooting',
    'Security Protocols',
    'Microsoft 365',
    'Backup & Disaster Recovery',
    'Virtualization',
  ]

  const softSkills = [
    'Communication Clarity',
    'Follow-up Cadence',
    'Client Empathy',
    'Documentation Quality',
    'Escalation Judgment',
    'Time Management',
  ]

  const coachingInsights = [
    {
      title: 'Performance Metrics',
      description: 'Resolution rates, response times, and quality scores compared to team benchmarks',
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: 'CSAT Tracking',
      description: 'Individual satisfaction scores from client feedback',
      icon: <Star className="w-5 h-5" />
    },
    {
      title: 'Skill Mapping',
      description: 'Where each engineer excels and where they need development',
      icon: <Target className="w-5 h-5" />
    },
    {
      title: 'Recognition Recommendations',
      description: 'AI-identified wins worth celebrating',
      icon: <Award className="w-5 h-5" />
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="px-6 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-6">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Team Development</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-gray-400">Upskill with Precision,</span><br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Not Guesswork</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Every engineer has different strengths and gaps. The platform reveals exactly where to focus
                development—both technical skills and soft skills.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105">
                  See It In Action <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/apps/manager-app" className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all">
                  Explore Team Performance Module
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <Image
                src="/illustrations/bot5.png"
                alt="AI Team Development"
                width={400}
                height={400}
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section className="px-6 py-10 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">From Guesswork to Precision</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {transformations.map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-purple-500/30 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-sm text-gray-400">{item.before}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-sm text-white font-medium">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Tracked */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Complete Skill Visibility</h2>
            <p className="text-gray-400">Track both technical expertise and interpersonal effectiveness</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Hard Skills */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-bold text-blue-400">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill, index) => (
                  <span key={index} className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Mapped through resolution success on specific issue types
              </p>
            </div>

            {/* Soft Skills */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-bold text-purple-400">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span key={index} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Analyzed through communication patterns and client feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Insights */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Weekly Coaching Insights</h2>
            <p className="text-gray-400">Actionable recommendations for every 1:1</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {coachingInsights.map((insight, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-purple-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 flex-shrink-0">
                    {insight.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{insight.title}</h3>
                    <p className="text-sm text-gray-400">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 text-center">
            <p className="text-purple-300 font-medium">
              "The rotating weekly insights mean you always have something specific to discuss—
              no more generic performance conversations."
            </p>
          </div>
        </div>
      </section>

      {/* Data Source */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Objective Data, Not Opinions</h3>
                <p className="text-gray-400">
                  Every skill assessment comes from actual ticket data—resolution success, client feedback,
                  communication analysis. No surveys. No self-reporting. Just performance reality.
                </p>
              </div>
              <Link href="/solutions/engineer-efficiency" className="inline-flex items-center gap-2 bg-yellow-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition-all whitespace-nowrap">
                How Data Is Captured <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 py-10 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">The Impact of Precision Coaching</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">30%</div>
              <div className="text-xs text-gray-500">Faster Skill Growth</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400 mb-1">40%</div>
              <div className="text-xs text-gray-500">Higher Retention</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">25%</div>
              <div className="text-xs text-gray-500">Better CSAT</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-orange-400 mb-1">Weekly</div>
              <div className="text-xs text-gray-500">Coaching Insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">Related Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/solutions/engineer-efficiency" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-yellow-500/30 transition-all group">
              <span className="text-2xl mb-2 block">⚡</span>
              <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors">Engineer Efficiency</span>
            </Link>
            <Link href="/solutions/service-desk-visibility" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all group">
              <span className="text-2xl mb-2 block">👁️</span>
              <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">Service Desk Visibility</span>
            </Link>
            <Link href="/solutions/client-retention" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-green-500/30 transition-all group">
              <span className="text-2xl mb-2 block">🤝</span>
              <span className="text-sm font-medium group-hover:text-green-400 transition-colors">Client Retention</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Develop Your Team?
          </h2>
          <p className="text-gray-400 mb-6">
            Targeted coaching. Objective data. Real skill growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/resources/roi" className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all">
              Calculate ROI
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
