'use client'

import { 
  Zap, CheckCircle, TrendingUp, DollarSign, Clock, 
  Users, Star, ArrowRight, Target, Shield
} from 'lucide-react'

export default function EngineerAppPDFPage() {
  const keyFeatures = [
    "AI-powered search across IT Glue, SharePoint, and historical tickets",
    "Intelligent ticket categorization and time entry automation", 
    "Context-aware responses based on client environments",
    "Seamless ConnectWise Manage integration",
    "50 end-user Teams chatbots included per engineer license"
  ]

  const roiBenefits = [
    { metric: "45%", description: "Average time savings per ticket" },
    { metric: "2.5hrs", description: "Daily time saved per engineer" },
    { metric: "$18K", description: "Annual savings per engineer" },
    { metric: "85%", description: "Engineer satisfaction improvement" }
  ]

  return (
    <div className="min-h-screen bg-white text-black print:bg-white print:text-black" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header with Branding */}
      <header className="bg-black text-white p-6 print:p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">xop.ai</div>
            <div className="text-sm opacity-75">×</div>
            <div className="text-xl font-semibold">Rezolve.ai</div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-75">AI Solutions for MSPs</div>
            <div className="text-lg font-semibold">Product Overview</div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6 print:p-4">
        {/* Hero Section */}
        <section className="mb-8 print:mb-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center print:w-12 print:h-12">
              <Zap className="w-8 h-8 text-white print:w-6 print:h-6" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3 text-gray-900 print:text-2xl">Engineer App v4</h1>
              <p className="text-xl text-gray-600 mb-4 print:text-base">
                AI-Powered Engineering Assistant That Transforms MSP Service Delivery
              </p>
              <div className="flex items-center gap-4 text-sm print:text-xs">
                <div className="flex items-center gap-1 text-green-600">
                  <Star className="w-4 h-4" />
                  <span className="font-semibold">Most Popular Solution</span>
                </div>
                <div className="flex items-center gap-1 text-blue-600">
                  <Users className="w-4 h-4" />
                  <span>500+ MSP Engineers Using</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Key Features & Capabilities</h2>
          <div className="space-y-3">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 print:w-4 print:h-4" />
                <span className="text-gray-700 print:text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ROI Benefits Grid */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Proven ROI & Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
            {roiBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center print:p-3">
                <div className="text-3xl font-bold text-green-600 mb-2 print:text-2xl">{benefit.metric}</div>
                <div className="text-sm text-gray-600 print:text-xs">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6 print:grid-cols-3 print:gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-blue-600 font-bold print:text-sm">1</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">Connect Your Systems</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                Integrates with ConnectWise, IT Glue, SharePoint, and other tools
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-green-600 font-bold print:text-sm">2</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">AI Learns Your Environment</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                Trains on your client configurations and historical resolutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-purple-600 font-bold print:text-sm">3</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">Engineers Get Instant Answers</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                Context-aware responses with automated time entries and solutions
              </p>
            </div>
          </div>
        </section>

        {/* Pricing & Value Proposition */}
        <section className="mb-8 print:mb-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 print:p-4">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900 print:text-xl">Pricing & Licensing</h2>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-green-600 print:text-3xl">$55</span>
                  <span className="text-gray-600 print:text-sm">per engineer/month</span>
                </div>
                <div className="space-y-2 text-sm text-gray-700 print:text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 print:w-3 print:h-3" />
                    <span>Includes 50 end-user Teams chatbots per license</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 print:w-3 print:h-3" />
                    <span>No usage or token charges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 print:w-3 print:h-3" />
                    <span>Full ConnectWise integration</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900 mb-2 print:text-xl">ROI Calculator</div>
                  <div className="text-sm text-gray-600 mb-3 print:text-xs">10 Engineers × $18K Annual Savings</div>
                  <div className="text-3xl font-bold text-green-600 print:text-2xl">$180K</div>
                  <div className="text-sm text-gray-500 print:text-xs">Annual Value</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Story */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Client Success Story</h2>
          <div className="bg-gray-50 rounded-xl p-6 print:p-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 print:w-10 print:h-10">
                <span className="text-white font-bold print:text-sm">MS</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1 print:text-sm">Midwest Solutions Group</div>
                <div className="text-sm text-gray-600 mb-3 print:text-xs">45 Engineers, Multi-Location MSP</div>
                <blockquote className="text-gray-700 italic mb-3 print:text-sm">
                  "Engineer App v4 transformed our service delivery. Our engineers now resolve tickets 45% faster, 
                  and customer satisfaction scores improved by 28%. The ROI was evident within the first month."
                </blockquote>
                <div className="grid grid-cols-3 gap-4 text-center print:grid-cols-3 print:gap-2">
                  <div>
                    <div className="font-bold text-green-600 print:text-sm">45%</div>
                    <div className="text-xs text-gray-500">Faster Resolution</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-600 print:text-sm">28%</div>
                    <div className="text-xs text-gray-500">Higher Satisfaction</div>
                  </div>
                  <div>
                    <div className="font-bold text-purple-600 print:text-sm">$810K</div>
                    <div className="text-xs text-gray-500">Annual Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white rounded-xl p-6 text-center print:p-4 print:bg-gray-900">
          <h2 className="text-2xl font-bold mb-3 print:text-xl">Ready to Transform Your MSP Operations?</h2>
          <p className="text-gray-300 mb-4 print:text-sm">
            Join 500+ MSP engineers who are already saving 2.5 hours daily with AI-powered assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center print:flex-col print:gap-2">
            <div className="flex items-center gap-2 bg-green-600 px-6 py-3 rounded-full font-semibold print:px-4 print:py-2">
              <Target className="w-5 h-5 print:w-4 print:h-4" />
              <span className="print:text-sm">Schedule Demo: xop.im/partner</span>
            </div>
            <div className="text-gray-300 print:text-xs">
              Contact: matt@xop.ai | 555-XOP-DEMO
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 p-4 text-center text-sm text-gray-600 mt-8 print:mt-6 print:text-xs">
        <div className="max-w-4xl mx-auto flex justify-between items-center print:flex-col print:gap-2">
          <div>© 2024 XOP.ai - AI Solutions for Managed Service Providers</div>
          <div className="flex gap-4 print:gap-2">
            <span>xop.ai</span>
            <span>•</span>
            <span>Rezolve.ai</span>
            <span>•</span>
            <span>Enterprise AI Platform</span>
          </div>
        </div>
      </footer>
    </div>
  )
}