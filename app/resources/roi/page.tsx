'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { Calculator, Users, Clock, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

export default function ROIPage() {
  const roiFactors = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Engineering Team Analysis",
      description: "Number of engineers, average salaries, and utilization rates"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-400" />,
      title: "Ticket Metrics Review",
      description: "Average time per ticket, resolution patterns, and efficiency bottlenecks"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "End User Environment",
      description: "Number of supported users, service complexity, and support volume"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      title: "Automation Opportunities",
      description: "Identify repetitive tasks, workflow improvements, and efficiency gains"
    }
  ]

  const benefits = [
    "Multi-year projection based on your actual environment",
    "Cost savings analysis from engineer efficiency gains",
    "Revenue opportunity assessment from client solutions", 
    "Break-even timeline and payback period calculation",
    "Competitive advantage quantification",
    "Implementation roadmap with phased ROI realization"
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Custom ROI Analysis
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a personalized multi-year ROI analysis based on your actual MSP environment, 
            engineering team, and client base
          </p>
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8">
            <Calculator className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Tailored to Your Business</h2>
            <p className="text-lg text-gray-300">
              We'll work with you to develop a comprehensive ROI analysis that accounts for your 
              specific environment, team structure, and business goals
            </p>
          </div>
        </div>
      </section>

      {/* Analysis Factors */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Analyze</h2>
            <p className="text-xl text-gray-300">
              Our ROI analysis considers all aspects of your MSP operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {roiFactors.map((factor, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  {factor.icon}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{factor.title}</h3>
                    <p className="text-gray-400">{factor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Analysis */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Ticket Analysis</h2>
            <p className="text-xl text-gray-300 mb-8">
              We'll analyze your historical ticket data to identify specific automation opportunities 
              and quantify potential time savings
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">Ticket Volume</div>
                <div className="text-gray-300">Monthly patterns & peaks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">Resolution Time</div>
                <div className="text-gray-300">Average handling duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">Complexity</div>
                <div className="text-gray-300">Automation potential scoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Benefits */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Custom ROI Report Includes</h2>
            <p className="text-xl text-gray-300">
              A detailed analysis tailored specifically to your MSP
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to See Your ROI Potential?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to build a comprehensive ROI analysis based on your actual 
              MSP environment and business objectives
            </p>
            
            <a
              href="https://xop.im/partner"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 px-10 py-5 rounded-full font-semibold text-lg hover:opacity-90 transition-all transform hover:scale-105"
            >
              <Calculator className="w-6 h-6" />
              Request ROI Analysis
              <ArrowRight className="w-6 h-6" />
            </a>

            <p className="text-sm text-gray-400 mt-6">
              Free consultation • No commitment required • Typically delivered within 1-2 weeks
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}