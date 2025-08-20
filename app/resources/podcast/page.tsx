'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { Mic, Play } from 'lucide-react'

export default function PodcastPage() {
  const podcasts = [
    {
      title: 'AI for MSPs - The Opportunity',
      description: 'Exploring the landscape of AI opportunities specifically designed for managed service providers.',
      episode: 1,
      link: 'https://youtu.be/E9KLUqd86xo'
    },
    {
      title: 'AI for MSPs - Gen AI Middleware',
      description: 'Understanding how generative AI middleware can bridge the gap between MSP operations and AI capabilities.',
      episode: 2,
      link: 'https://youtu.be/hzFnUJio2vI'
    },
    {
      title: 'AI for MSPs - How We Partner With MSPs',
      description: 'Learn about our partnership approach and how we work with MSPs to implement AI solutions.',
      episode: 3,
      link: 'https://youtu.be/s2GwKqqly7U'
    },
    {
      title: 'AI for MSPs - The impact of AI on MRR Price Points',
      description: 'Discussing how AI implementations affect monthly recurring revenue and pricing strategies.',
      episode: 4,
      link: 'https://youtu.be/CH6ThSqexhs'
    },
    {
      title: 'AI for MSPs - Building a Bot From Scratch?',
      description: 'Should MSPs build custom AI bots or leverage existing solutions? We explore the pros and cons.',
      episode: 5,
      link: 'https://youtu.be/BXpTLEImoBc'
    },
    {
      title: 'AI for MSPs - The Evolution of From AI To Gen AI and Now Agentic AI',
      description: 'Tracing the evolution of AI technologies and what agentic AI means for MSPs.',
      episode: 6,
      link: 'https://youtu.be/DHaaDxFsfP8'
    },
    {
      title: 'AI for MSPs - Introducing HR chatbots to MSP community',
      description: 'How HR chatbots can streamline MSP internal operations and employee support.',
      episode: 7,
      link: 'https://youtu.be/mg9T_IopaFk'
    },
    {
      title: 'AI for MSPs - Are MSPs Too Bogged Down with Automation Projects?',
      description: 'Examining whether MSPs are overwhelmed by automation initiatives and how to prioritize effectively.',
      episode: 8,
      link: 'https://youtu.be/ULIUhaFn7XI'
    },
    {
      title: 'AI for MSPs - Auto Categorizing Ticket Types, Priority Level & Time Entries',
      description: 'Deep dive into automated ticket categorization and time tracking using AI.',
      episode: 9,
      link: 'https://youtu.be/w9BHKutccPc'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Podcast Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Matt & Manish AI Automation for MSPs Podcast
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              9 episodes focused on AI opportunities, implementation strategies, and real-world applications for MSPs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((podcast, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <Mic className="w-8 h-8 text-yellow-400" />
                  <span className="text-sm bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">
                    Episode {podcast.episode}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{podcast.title}</h3>
                <p className="text-gray-400 mb-6">{podcast.description}</p>
                <a
                  href={podcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-colors group-hover:underline"
                >
                  <Play className="w-4 h-4" />
                  Watch on YouTube
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}