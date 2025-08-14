'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, ExternalLink } from 'lucide-react'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Blog Post Content */}
      <article className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-green-400 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                Industry Research
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Participate in the 2025 AI for MSPs Survey!
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Matt Ruck</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>March 15, 2025</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8 font-medium">
              Help shape the future of AI in the MSP industry by participating in our comprehensive 2025 survey. Your insights will drive the development of better AI solutions for the entire MSP community.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">Why This Survey Matters</h2>
            
            <p className="mb-6">
              The MSP industry is at a critical inflection point with AI adoption. While some MSPs are already seeing significant benefits from AI implementation, others are still evaluating their options or struggling with where to start. This survey will help us understand:
            </p>

            <ul className="mb-6 space-y-2">
              <li>• Current AI adoption rates across MSPs of different sizes</li>
              <li>• The biggest challenges MSPs face when implementing AI</li>
              <li>• Which AI use cases deliver the most value</li>
              <li>• ROI expectations versus reality</li>
              <li>• Future AI investment priorities</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-white">What We're Asking</h2>
            
            <p className="mb-6">
              The survey takes approximately 10-15 minutes to complete and covers:
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Current AI Usage</h3>
            <ul className="mb-6 space-y-2">
              <li>• What AI tools and solutions you're currently using</li>
              <li>• How long you've been using AI in your operations</li>
              <li>• Which departments or functions have adopted AI</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Implementation Challenges</h3>
            <ul className="mb-6 space-y-2">
              <li>• Technical integration hurdles</li>
              <li>• Staff training and adoption issues</li>
              <li>• Budget and ROI concerns</li>
              <li>• Client acceptance and communication</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Results and Impact</h3>
            <ul className="mb-6 space-y-2">
              <li>• Measurable improvements in efficiency</li>
              <li>• Cost savings and revenue impact</li>
              <li>• Client satisfaction changes</li>
              <li>• Engineer productivity gains</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Future Plans</h3>
            <ul className="mb-6 space-y-2">
              <li>• AI investment priorities for the next 12-24 months</li>
              <li>• Specific use cases you want to explore</li>
              <li>• Budget allocation for AI initiatives</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-white">How We'll Use the Data</h2>
            
            <p className="mb-6">
              All survey responses are completely anonymous and will be used to:
            </p>

            <ul className="mb-6 space-y-2">
              <li>• Publish an industry report on AI adoption in MSPs</li>
              <li>• Identify trends and best practices</li>
              <li>• Guide product development for AI solutions</li>
              <li>• Create educational content addressing common challenges</li>
              <li>• Benchmark your results against industry peers</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-white">Survey Benefits</h2>
            
            <p className="mb-6">
              As a thank you for participating, you'll receive:
            </p>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
              <ul className="space-y-2">
                <li>• <strong>Early access</strong> to the complete survey results and industry report</li>
                <li>• <strong>Benchmark data</strong> showing how your MSP compares to peers</li>
                <li>• <strong>Best practices guide</strong> compiled from high-performing MSPs</li>
                <li>• <strong>Exclusive webinar</strong> presenting key findings and actionable insights</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Take the Survey</h2>
            
            <p className="mb-6">
              The survey is open through April 30, 2025. The more MSPs who participate, the more valuable the insights will be for everyone.
            </p>

            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg p-6 mb-8 text-center">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Ready to Contribute?</h3>
              <p className="mb-4">
                Your voice matters in shaping the future of AI for MSPs.
              </p>
              <a
                href="https://survey.xop.ai/2025-ai-msps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Take the Survey
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-sm text-gray-400 mt-3">Takes 10-15 minutes • Completely anonymous</p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Questions?</h2>
            
            <p className="mb-6">
              If you have any questions about the survey or would like to discuss your AI journey, feel free to reach out. We're here to help the entire MSP community succeed with AI.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}