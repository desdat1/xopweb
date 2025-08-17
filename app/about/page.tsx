'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center animate-fadeIn">About xop.ai</h1>
          
          {/* Matt's Photo and Intro */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-16 animate-fadeIn delay-200">
            <div className="w-full md:w-1/3">
              <Image
                src="/Matt.webp"
                alt="Matt Ruck, CEO of xop.ai"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-semibold mb-4 text-green-400">Meet Matt Ruck</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                With over 30 years of experience in the MSP industry, Matt brings a unique perspective to AI implementation. As the former CEO of designDATA, a $30M MSP, Matt understands the challenges and opportunities facing managed service providers today.
              </p>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="mb-16 animate-fadeIn delay-300">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Our Story</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                After successfully building and running designDATA for decades, Matt saw an opportunity to revolutionize how MSPs operate. In 2021, he founded xop.ai with a clear vision: bring practical, ROI-driven AI solutions to the MSP community.
              </p>
              <p>
                Having spent years testing and implementing various AI technologies within his own MSP, Matt discovered that most AI solutions were either too complex, too expensive, or simply didn't deliver on their promises. This firsthand experience drove him to create xop.ai — a company that bridges the gap between cutting-edge AI technology and real-world MSP operations.
              </p>
              <p>
                Today, xop.ai leverages exclusive access to Rezolve.ai's enterprise AI platform to deliver solutions specifically tailored for MSPs. Every tool we offer has been battle-tested in real MSP environments, ensuring they solve actual problems and deliver measurable results.
              </p>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="mb-16 animate-fadeIn delay-400">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Our Mission</h2>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <p className="text-lg text-gray-300 leading-relaxed italic">
                "AI is about to fundamentally reshape the MSP landscape. In the next few years, we'll see a clear divide emerge between MSPs that embrace AI and those that don't. The early adopters will gain unprecedented operational efficiencies, allowing them to deliver superior service at lower costs. Those who wait will find themselves trapped in a vicious cycle—watching their margins shrink as AI-enabled competitors undercut their pricing while delivering better service. We exist to ensure you're on the winning side of this transformation, helping you gain that critical 20-30% efficiency advantage before it's too late."
              </p>
              <p className="text-right mt-4 text-green-400">- Matt Ruck, CEO</p>
            </div>
          </div>

          {/* Partnership Section */}
          <div className="mb-16 animate-fadeIn delay-500">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Our Partnership with Rezolve.ai</h2>
            <p className="text-gray-300 leading-relaxed">
              xop.ai has secured exclusive MSP distribution rights for Rezolve.ai's powerful AI platform. This partnership gives our clients access to enterprise-grade AI technology that would typically be reserved for Fortune 500 companies. By combining Rezolve.ai's technical excellence with our deep MSP expertise, we deliver solutions that are both powerful and practical — designed by MSPs, for MSPs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}