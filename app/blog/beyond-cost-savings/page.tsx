'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { 
  Calendar, Clock, User, TrendingUp, DollarSign, 
  Building, CheckCircle, Target, Zap,
  Users, Star, ArrowRight, Calculator
} from 'lucide-react'

export default function BeyondCostSavingsPage() {
  const revenueTiers = [
    { clients: '10', monthly: '$2,500', annual: '$30K', cumulative: '$30K' },
    { clients: '25', monthly: '$6,250', annual: '$75K', cumulative: '$105K' },
    { clients: '50', monthly: '$12,500', annual: '$150K', cumulative: '$255K' },
    { clients: '75', monthly: '$18,750', annual: '$225K', cumulative: '$480K' }
  ]

  const revenueDrivers = [
    { 
      product: 'Enterprise Search for End Users', 
      price: '$250/month', 
      margin: '35%', 
      description: 'White-labeled AI search across client documentation' 
    },
    { 
      product: 'Branded Teams Chatbot', 
      price: '$350/month', 
      margin: '40%', 
      description: 'Custom AI assistant for internal client support' 
    },
    { 
      product: 'Voice AI Integration', 
      price: '$500/month', 
      margin: '30%', 
      description: 'AI-powered phone support and call handling' 
    },
    { 
      product: 'Custom AI Workflows', 
      price: '$750/month', 
      margin: '45%', 
      description: 'Bespoke automation for client-specific processes' 
    }
  ]

  const successStories = [
    {
      msp: 'Midwest Tech Solutions',
      employees: '45 engineers',
      revenue: '$28K monthly',
      highlight: 'Sold Enterprise Search to 80% of their client base within 6 months'
    },
    {
      msp: 'Pacific Coast MSP',
      employees: '28 engineers', 
      revenue: '$19K monthly',
      highlight: 'Voice AI became their fastest-growing service offering'
    },
    {
      msp: 'Atlantic Business Services',
      employees: '67 engineers',
      revenue: '$34K monthly', 
      highlight: 'Created AI consulting practice generating additional $15K/month'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Article Header */}
        <header className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              Revenue Generation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Beyond Cost Savings: How MSPs Are Generating $250K+ Annual Recurring Revenue with White-Labeled AI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              While other MSPs focus on AI for internal efficiency, forward-thinking providers are 
              building entirely new revenue streams with productized AI solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 22, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Matt Ruck, xop.ai</span>
            </div>
          </div>
        </header>

        {/* Revenue Growth Chart */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">The AI Revenue Trajectory</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 text-gray-300">AI Clients</th>
                    <th className="text-center py-4 text-gray-300">Monthly Revenue</th>
                    <th className="text-center py-4 text-gray-300">Annual Revenue</th>
                    <th className="text-right py-4 text-gray-300">Cumulative</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueTiers.map((tier, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-4 font-semibold">{tier.clients} clients</td>
                      <td className="text-center py-4 text-green-400 font-bold">{tier.monthly}</td>
                      <td className="text-center py-4 text-blue-400 font-bold">{tier.annual}</td>
                      <td className="text-right py-4 text-purple-400 font-bold">{tier.cumulative}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center text-sm text-gray-400">
              * Based on average $250/month per client starting point
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">The Revenue Revolution MSPs Are Missing</h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Most MSPs view AI as a cost center – a way to make engineers more efficient, reduce 
            support tickets, or automate internal processes. And while those benefits are real 
            and significant, they're missing the bigger opportunity: AI as a direct revenue generator.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            The MSPs who are winning in 2024 aren't just using AI internally. They're packaging 
            AI capabilities as white-labeled products and selling them directly to their clients. 
            The result? New recurring revenue streams that can exceed $250,000 annually within 
            the first 18 months.
          </p>

          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              The MSP Revenue Reality Check
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">Traditional Approach</div>
                <div className="text-sm text-gray-300">AI = Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">Hybrid Approach</div>
                <div className="text-sm text-gray-300">AI = Cost Reduction + Some Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">Revenue-First Approach</div>
                <div className="text-sm text-gray-300">AI = Major Revenue Generator</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-blue-400">The Four Pillars of AI Revenue</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Successful MSPs are building AI revenue around four core product categories, 
            each with different pricing models and profit margins:
          </p>

          {/* Revenue Drivers Table */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden my-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="text-left py-4 px-6 text-gray-300">Product</th>
                    <th className="text-center py-4 px-6 text-gray-300">Starting Price</th>
                    <th className="text-center py-4 px-6 text-gray-300">Profit Margin</th>
                    <th className="text-left py-4 px-6 text-gray-300">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueDrivers.map((driver, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-4 px-6 font-semibold text-blue-400">{driver.product}</td>
                      <td className="text-center py-4 px-6 text-green-400 font-bold">{driver.price}</td>
                      <td className="text-center py-4 px-6 text-purple-400 font-bold">{driver.margin}</td>
                      <td className="py-4 px-6 text-gray-300 text-sm">{driver.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-blue-400">Case Study: Enterprise Search as a Revenue Engine</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Let's dive deep into the most successful AI revenue generator: white-labeled Enterprise Search. 
            This isn't the same search your engineers use internally – it's a completely separate product 
            that your clients pay for independently.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Here's how it works: You deploy AI-powered search that's trained on your client's specific 
            documentation, procedures, and knowledge base. Their employees can instantly find answers 
            to policy questions, locate forms, understand procedures, and access company information 
            without calling HR or creating tickets.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4 text-blue-400">Client Value Proposition</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Employees find answers in seconds, not hours
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Reduces internal helpdesk volume significantly
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Works across all company documentation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Branded with their company identity
                </li>
              </ul>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4 text-green-400">MSP Revenue Model</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  $250/month for first 20 users
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  $10/month per additional user
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  35% profit margin minimum
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  100% recurring monthly revenue
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-blue-400">Real MSP Success Stories</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            These aren't theoretical numbers. Real MSPs are generating substantial AI revenue right now:
          </p>

          <div className="space-y-6 my-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">{story.msp}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{story.employees}</span>
                    <span className="text-green-400 font-bold">{story.revenue}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">
                  "{story.highlight}"
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-6 text-blue-400">The Pricing Psychology That Works</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Here's what most MSPs get wrong about AI pricing: they price it like a technology service 
            instead of a business solution. Successful MSPs price AI based on business value, not 
            technical complexity.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            For a 50-person company, paying $250/month for Enterprise Search that eliminates 
            20+ hours of weekly "searching for information" time is an obvious ROI positive decision. 
            That's $125,000 annually in employee productivity at a cost of $3,000.
          </p>

          <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4">ROI Calculation for Clients</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>50 employees × 30 minutes daily searching:</span>
                <span className="font-semibold">25 hours/day</span>
              </div>
              <div className="flex justify-between">
                <span>Annual time cost ($50/hour average):</span>
                <span className="font-semibold">$325,000</span>
              </div>
              <div className="flex justify-between">
                <span>Enterprise Search annual cost:</span>
                <span className="font-semibold">$3,600</span>
              </div>
              <div className="border-t border-purple-600 pt-3">
                <div className="flex justify-between text-green-400 font-bold">
                  <span>Client ROI (50% time savings):</span>
                  <span>4,400%</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-blue-400">Building Your AI Revenue Pipeline</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The MSPs generating $250K+ in AI revenue follow a systematic approach to client acquisition 
            and product deployment. It starts with identifying the right client profile and delivering 
            immediate, measurable value.
          </p>

          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-6">The 90-Day Revenue Ramp</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">30</span>
                </div>
                <h4 className="font-semibold mb-2">Days 1-30</h4>
                <p className="text-sm text-gray-400">Identify 5-10 ideal clients, develop value propositions, initiate conversations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">60</span>
                </div>
                <h4 className="font-semibold mb-2">Days 31-60</h4>
                <p className="text-sm text-gray-400">Deploy first 2-3 Enterprise Search implementations, gather success metrics</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">90</span>
                </div>
                <h4 className="font-semibold mb-2">Days 61-90</h4>
                <p className="text-sm text-gray-400">Scale to 8-10 clients, introduce additional AI products, establish referral process</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-blue-400">The Competitive Advantage Window</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Right now, most clients have never seen AI solutions like Enterprise Search or branded 
            chatbots. You have a brief window where you can establish yourself as the AI innovation 
            leader in your market before this becomes commoditized.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            The MSPs who move first are locking in clients for multi-year AI contracts and building 
            defensible revenue streams. Those who wait will find themselves competing on price for 
            commoditized AI services.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4 text-green-400">First Mover Advantages</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Premium pricing as innovation leader
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Multi-year contract opportunities
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Client loyalty through proven results
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Referral-driven growth
                </li>
              </ul>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4 text-red-400">Late Adopter Challenges</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  Commodity pricing pressure
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  Client expectations already set
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  Established competitor relationships
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  "Me too" positioning
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-blue-400">Your Next Steps to $250K+ AI Revenue</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Building substantial AI revenue requires the right platform, proper positioning, and 
            systematic execution. The MSPs succeeding today started with a clear revenue-first 
            strategy, not just internal efficiency goals.
          </p>

          <ol className="list-none space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">1</span>
              </div>
              <div>
                <span className="font-semibold text-white">Identify Your Ideal AI Revenue Clients:</span>
                <span className="text-gray-300"> 50+ employee companies with documented processes and strong IT engagement</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">2</span>
              </div>
              <div>
                <span className="font-semibold text-white">Start with Enterprise Search:</span>
                <span className="text-gray-300"> Easiest to demonstrate value and fastest path to revenue</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">3</span>
              </div>
              <div>
                <span className="font-semibold text-white">Price Based on Business Value:</span>
                <span className="text-gray-300"> Calculate client ROI and price accordingly, not based on your costs</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">4</span>
              </div>
              <div>
                <span className="font-semibold text-white">Scale Systematically:</span>
                <span className="text-gray-300"> Use success stories from early clients to accelerate new client acquisition</span>
              </div>
            </li>
          </ol>
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Revenue Engine?</h2>
          <p className="text-xl text-gray-300 mb-8">
            See how white-labeled AI solutions can transform your MSP from cost-focused to revenue-generating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://xop.im/partner"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              <Calculator className="w-5 h-5" />
              Calculate Your AI Revenue Potential
            </Link>
            <Link
              href="/apps/enterprise-search-end-users"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-black transition-all"
            >
              <Building className="w-5 h-5" />
              Explore Enterprise Search
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}