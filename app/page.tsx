'use client'

import Navigation from './components/Navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, Zap, Shield, Target, CheckCircle, Search,
  Clock, MessageCircle, FileText, Eye, MessageSquare,
  HeartPulse, GraduationCap, X, Check, Bot, AlertTriangle
} from 'lucide-react'
import Footer from '@/app/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeTransform, setActiveTransform] = useState(0)
  const [heroIndex, setHeroIndex] = useState(0)
  const [audienceIndex, setAudienceIndex] = useState(0)

  // Rotating audience section messages
  const audienceMessages = [
    {
      headline: <>From Gut Feeling to <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Complete Visibility</span></>,
      subtext: 'Every helpdesk interaction captures intelligence—automatically.'
    },
    {
      headline: <>Built for MSPs Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Scale</span></>,
      subtext: 'Your engineers need tools that save time. Your leaders need visibility that drives decisions.'
    },
    {
      headline: <>Stop the <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Firefighting</span></>,
      subtext: 'Give your team the tools to work smarter, and your leaders the insights to lead better.'
    },
    {
      headline: <>Your Whole Team, Finally <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Aligned</span></>,
      subtext: 'Engineers get efficiency. Leaders get visibility. Clients get better service.'
    },
    {
      headline: <>From Chaos to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Clarity</span></>,
      subtext: 'Empower engineers to move faster. Give leaders the visibility they\'ve been missing.'
    },
  ]

  // Rotating hero messages
  const heroMessages = [
    { text: 'Response Time', color: 'text-green-400' },
    { text: 'Customer Sentiment', color: 'text-purple-400' },
    { text: 'Technical Skills', color: 'text-blue-400' },
    { text: 'Escalation Signals', color: 'text-orange-400' },
    { text: 'Communication Quality', color: 'text-pink-400' },
    { text: 'Resolution Patterns', color: 'text-cyan-400' },
  ]

  const dataPoints = [
    { label: 'Response Time', icon: <Clock className="w-4 h-4" /> },
    { label: 'Resolution Time', icon: <CheckCircle className="w-4 h-4" /> },
    { label: 'Technical Skills', icon: <Zap className="w-4 h-4" /> },
    { label: 'Follow-up Quality', icon: <MessageCircle className="w-4 h-4" /> },
    { label: 'Customer Sentiment', icon: <HeartPulse className="w-4 h-4" /> },
    { label: 'Escalation Signals', icon: <AlertTriangle className="w-4 h-4" /> },
    { label: 'Communication Clarity', icon: <FileText className="w-4 h-4" /> },
    { label: 'Documentation Quality', icon: <Search className="w-4 h-4" /> },
  ]

  const transformations = [
    { before: 'Finding out clients are unhappy when they cancel', after: 'Seeing warning signs 2 weeks before sentiment turns', icon: <Shield className="w-5 h-5" /> },
    { before: 'Hoping tickets go to the right engineer', after: 'AI routes based on skills and client history', icon: <Target className="w-5 h-5" /> },
    { before: 'Annual reviews based on gut feeling', after: 'Weekly coaching with specific, actionable insights', icon: <GraduationCap className="w-5 h-5" /> },
  ]

  const solutions = [
    { name: 'Engineer Efficiency', href: '/solutions/engineer-efficiency', icon: <Zap className="w-5 h-5" />, color: 'text-yellow-400', desc: 'Tools that save 2hrs/day per engineer' },
    { name: 'Service Desk Visibility', href: '/solutions/service-desk-visibility', icon: <Eye className="w-5 h-5" />, color: 'text-blue-400', desc: 'Complete visibility into operations' },
    { name: 'Client Health & Retention', href: '/solutions/client-retention', icon: <HeartPulse className="w-5 h-5" />, color: 'text-green-400', desc: 'Early warning before churn' },
    { name: 'Team Development', href: '/solutions/team-development', icon: <GraduationCap className="w-5 h-5" />, color: 'text-purple-400', desc: 'Precision coaching, not guesswork' },
    { name: 'Client-Facing AI', href: '/solutions/client-facing-ai', icon: <Bot className="w-5 h-5" />, color: 'text-cyan-400', desc: 'Branded 24/7 AI support' },
    { name: 'Multi-Modal AI', href: '/solutions/client-facing-ai', icon: <MessageSquare className="w-5 h-5" />, color: 'text-orange-400', desc: 'Phone, Chat & Email — Meet customers where they are' },
  ]

  useEffect(() => {
    setMounted(true)
    const heroInterval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroMessages.length)
    }, 2500)
    const transformInterval = setInterval(() => {
      setActiveTransform((prev) => (prev + 1) % transformations.length)
    }, 7000)
    const audienceInterval = setInterval(() => {
      setAudienceIndex((prev) => (prev + 1) % audienceMessages.length)
    }, 8500)
    return () => {
      clearInterval(heroInterval)
      clearInterval(transformInterval)
      clearInterval(audienceInterval)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />


      {/* Dual Audience Section */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 key={audienceIndex} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fadeIn">
              {audienceMessages[audienceIndex].headline}
            </h2>
            <p key={`sub-${audienceIndex}`} className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn">
              {audienceMessages[audienceIndex].subtext}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Engineers Card */}
            <Link href="/apps/engineer-assist" className="group block">
              <div className="rounded-2xl border-4 border-purple-500/50 overflow-hidden hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                <Image
                  src="/illustrations/engineer6.png"
                  alt="I'm an Engineer - Tools that make my job easier"
                  width={1200}
                  height={675}
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Managers Card */}
            <Link href="/apps/manager-app" className="group block">
              <div className="rounded-2xl border-4 border-blue-500/50 overflow-hidden hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                <Image
                  src="/illustrations/manager7.png"
                  alt="I'm a Manager / Leader - Insights that drive decisions"
                  width={1200}
                  height={675}
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Data Points Ticker */}
      <section className="py-4 bg-gray-900/50 border-y border-gray-800 overflow-hidden">
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {[...dataPoints, ...dataPoints].map((point, index) => (
              <div key={index} className="flex items-center gap-2 px-8 text-sm text-gray-400 whitespace-nowrap">
                <span className="text-purple-400">{point.icon}</span>
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-gray-800">
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
            >
              <source src="/rezolve-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>


      {/* Rotating Transformation */}
      <section className="px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              This Changes <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Everything</span>
            </h2>
            <p className="text-gray-400">See the transformation in action</p>
          </div>

          {/* Active transformation */}
          <div className="bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80 border border-gray-700 rounded-2xl p-8 min-h-[140px] shadow-xl">
            <div key={activeTransform} className="flex flex-col md:flex-row items-center gap-6 animate-fadeIn">
              {/* Before */}
              <div className="flex-1 flex items-center gap-4 bg-red-950/30 rounded-xl p-4 border border-red-500/20">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <span className="text-red-400 text-xs font-semibold uppercase tracking-wide">Before</span>
                  <p className="text-gray-300 text-sm mt-1">{transformations[activeTransform].before}</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 animate-pulse-slow">
                  <ArrowRight className="w-6 h-6 md:rotate-0 rotate-90" />
                </div>
              </div>

              {/* After */}
              <div className="flex-1 flex items-center gap-4 bg-green-950/30 rounded-xl p-4 border border-green-500/20">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-400">
                  {transformations[activeTransform].icon}
                </div>
                <div>
                  <span className="text-green-400 text-xs font-semibold uppercase tracking-wide">After</span>
                  <p className="text-white text-sm font-medium mt-1">{transformations[activeTransform].after}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {transformations.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTransform(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeTransform ? 'bg-gradient-to-r from-green-400 to-emerald-400 w-8' : 'bg-gray-600 hover:bg-gray-500 w-2'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow - How It Works */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          {/* Team Illustration Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-700">
            <Image
              src="/illustrations/intel2.png"
              alt="How Intelligence Flows - Every interaction builds the picture"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Solutions for Every Challenge</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {solutions.map((solution, i) => (
              <Link
                key={i}
                href={solution.href}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={solution.color}>{solution.icon}</span>
                  <span className="font-medium text-sm group-hover:text-white transition-colors">{solution.name}</span>
                </div>
                <p className="text-xs text-gray-500">{solution.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
