'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { Award, Users, TrendingUp, Globe, CheckCircle, Clock, Star } from 'lucide-react'

export default function CertifiedAIProfessionalPage() {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Licensing Discounts",
      description: "Receive discounts on both internal use and external resell to clients"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Client Referrals", 
      description: "Get referrals for end users looking for a new MSP or certified AI implementation partner"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Professional Recognition",
      description: "Stand out in the market with official certification credentials"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Competitive Advantage",
      description: "Differentiate your MSP with verified AI expertise and best practices"
    }
  ]

  const trainingAreas = [
    "Enterprise AI Search implementation and optimization",
    "AI automation strategy and deployment",
    "Data training, classification, and management best practices",
    "Client education and AI adoption frameworks",
    "Strategic AI integration into CBR/QBR processes",
    "Prospect engagement and AI solution positioning",
    "ROI demonstration and business case development",
    "Technical troubleshooting and optimization"
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-full">
              <Award className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Rezolve Certified
            </span>
            <br />
            <span className="text-white">AI Professional</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Embed AI expertise into your organization and the clients you serve. 
            Master enterprise AI implementation from initial prospect meetings to strategic client sessions.
          </p>
          <div className="flex items-center justify-center gap-4 text-orange-400 mb-8">
            <Clock className="w-6 h-6" />
            <span className="text-lg font-semibold">Coming in 2026</span>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Transform Your MSP with 
                <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> AI Expertise</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                The Rezolve Certified AI Professional designation trains your MSP staff on how to educate clients 
                on enterprise AI search, automations, data training, and classification.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Help your team embed AI expertise into your organization and strategically integrate AI solutions 
                from initial prospect meetings through CBR/QBR sessions and strategic client consultations.
              </p>
              <div className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Program Launch</h3>
                <p className="text-gray-300">
                  The certification program will be available in 2026. Join our early interest list to be 
                  notified when enrollment opens and receive exclusive preview materials.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-3xl p-8 border border-yellow-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h4 className="font-semibold text-white">Expert Training</h4>
                    <p className="text-sm text-gray-400">Comprehensive AI education</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-orange-400" />
                    </div>
                    <h4 className="font-semibold text-white">Certification</h4>
                    <p className="text-sm text-gray-400">Official credentials</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h4 className="font-semibold text-white">Business Growth</h4>
                    <p className="text-sm text-gray-400">Licensing discounts</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-8 h-8 text-orange-400" />
                    </div>
                    <h4 className="font-semibold text-white">Referrals</h4>
                    <p className="text-sm text-gray-400">New client opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Areas */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Training Curriculum</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master every aspect of AI implementation and client engagement through our structured learning program
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {trainingAreas.map((area, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-yellow-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-gray-300 text-lg">{area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Certification Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Certified AI Professionals receive exclusive advantages that drive business growth and client success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 h-full min-h-[200px] flex flex-col">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 flex-grow">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Integration */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-2xl p-8">
              <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Initial Client Meetings</h3>
              <p className="text-gray-300">
                Learn to position AI solutions from the first prospect conversation. Master the art of identifying 
                AI opportunities and presenting value propositions that resonate with potential clients.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-2xl p-8">
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">CBR/QBR Integration</h3>
              <p className="text-gray-300">
                Transform your business reviews with AI insights. Demonstrate ongoing value, identify expansion 
                opportunities, and strengthen client relationships through strategic AI implementation reviews.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-2xl p-8">
              <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Sessions</h3>
              <p className="text-gray-300">
                Position yourself as a strategic AI advisor. Guide clients through digital transformation initiatives 
                and help them leverage AI for competitive advantage and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Interest CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">Join the Early Interest List</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to know when the Rezolve Certified AI Professional program launches in 2026. 
              Get exclusive access to preview materials and early enrollment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://xop.im/partner"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
              >
                <Award className="w-5 h-5" />
                Express Interest
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}