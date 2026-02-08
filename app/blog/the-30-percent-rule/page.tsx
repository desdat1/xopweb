'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { 
  Calendar, Clock, User, TrendingUp, Calculator, 
  Shield, CheckCircle, AlertCircle, DollarSign,
  Phone, Mail, BarChart3, Target
} from 'lucide-react'

export default function The30PercentRulePage() {
  const stats = [
    { value: '1,000', label: 'Average Monthly Level 1 Tickets', icon: <AlertCircle className="w-6 h-6" /> },
    { value: '300', label: 'Tickets Deflected at 30%', icon: <Shield className="w-6 h-6" /> },
    { value: '225', label: 'Hours Saved Monthly', icon: <Clock className="w-6 h-6" /> },
    { value: '$180K', label: 'Annual Engineering Savings', icon: <DollarSign className="w-6 h-6" /> }
  ]

  const deflectionExamples = [
    { category: 'Password Resets', percentage: '85%', impact: 'High Volume' },
    { category: 'Software Installation', percentage: '60%', impact: 'Medium Complexity' },
    { category: 'Network Connectivity', percentage: '45%', impact: 'Common Issues' },
    { category: 'Application How-To', percentage: '70%', impact: 'Documentation Based' },
    { category: 'Policy Questions', percentage: '90%', impact: 'Rule Based' }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Article Header */}
        <header className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              MSP Operations
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The 30% Rule: Why Level 1 Ticket Deflection is the New MSP Metric That Matters
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Move beyond reactive support to proactive deflection. The MSPs winning today are 
              eliminating 30%+ of Level 1 tickets before they reach human engineers.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>July 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Matt Ruck, xop.ai</span>
            </div>
          </div>
        </header>

        {/* Key Stats Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">The 30% Rule in Numbers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-green-400 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6 text-green-400">The Reality Check: MSPs Are Drowning</h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Let's start with an uncomfortable truth: most MSPs are drowning in Level 1 tickets. 
            Password resets, basic software questions, "how do I..." requests – the kind of tickets 
            that any reasonably intelligent end user could resolve themselves if they just had the 
            right information at the right time.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            But here's what's really happening: your most expensive resource – skilled engineers – 
            are spending 40-60% of their time on these routine requests. Meanwhile, complex projects 
            sit in the backlog, strategic initiatives get delayed, and your best talent gets frustrated 
            doing work that doesn't challenge them.
          </p>

          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-400" />
              The Hidden Cost Calculator
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Average engineer salary (loaded):</span>
                <span className="font-semibold">$85,000/year</span>
              </div>
              <div className="flex justify-between">
                <span>Hourly rate:</span>
                <span className="font-semibold">$40.87</span>
              </div>
              <div className="flex justify-between">
                <span>Level 1 tickets per month:</span>
                <span className="font-semibold">1,000</span>
              </div>
              <div className="flex justify-between">
                <span>Average resolution time:</span>
                <span className="font-semibold">45 minutes</span>
              </div>
              <div className="border-t border-gray-600 pt-3">
                <div className="flex justify-between text-red-400 font-bold">
                  <span>Monthly cost of Level 1 tickets:</span>
                  <span>$30,652</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-green-400">Enter the 30% Rule</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The most successful MSPs we work with have discovered something powerful: if you can 
            deflect just 30% of Level 1 tickets through intelligent automation, you don't just 
            save money – you fundamentally transform your service delivery model.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            But not all deflection is created equal. The secret isn't generic chatbots or 
            knowledge base searches. It's AI that's trained on your client's specific environment, 
            application stack, and historical resolution patterns.
          </p>

          {/* Deflection Examples */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-6">What Gets Deflected: Real Examples</h3>
            <div className="space-y-4">
              {deflectionExamples.map((example, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-medium">{example.category}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-blue-400 font-bold">{example.percentage}</span>
                    <span className="text-sm text-gray-400">{example.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-green-400">Why Generic Solutions Fail</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Most MSPs try generic chatbots or knowledge base solutions and get disappointing results. 
            Here's why: they're not trained on the specific context that matters.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            When a user asks "How do I reset my password?", a generic bot gives generic instructions. 
            But when an AI system knows that this specific client uses Azure AD with conditional 
            access policies and has a custom self-service portal, it can provide the exact steps 
            that actually work in that environment.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4 text-red-400">Generic Chatbot Response</h4>
              <p className="text-gray-300 text-sm">
                "To reset your password, go to your IT department's website and look for 
                the password reset option, or contact your administrator."
              </p>
              <div className="mt-4 text-red-400 text-sm font-medium">
                Result: User still creates ticket
              </div>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4 text-green-400">Trained AI Response</h4>
              <p className="text-gray-300 text-sm">
                "Go to portal.contoso.com, click 'Forgot Password', enter your email 
                (yourname@contoso.com), check your mobile for the verification code, 
                then create a new password following your company's complexity requirements."
              </p>
              <div className="mt-4 text-green-400 text-sm font-medium">
                Result: Problem solved in 2 minutes
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-green-400">The Compound Benefits</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            When you hit the 30% deflection rate, something magical happens. It's not just about 
            the immediate time savings – though 225 hours per month is significant. It's about 
            what becomes possible when your engineers aren't constantly interrupted by routine requests.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-lg font-bold mb-3">Phone Volume Drops</h4>
              <p className="text-gray-300 text-sm">
                End users get instant answers instead of calling the helpdesk. 
                Phone volume typically drops 60-75%.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <h4 className="text-lg font-bold mb-3">Email Tickets Reduce</h4>
              <p className="text-gray-300 text-sm">
                Fewer email tickets mean faster response times for complex issues 
                that actually require human expertise.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <Target className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-lg font-bold mb-3">Strategic Focus</h4>
              <p className="text-gray-300 text-sm">
                Engineers can finally focus on high-value projects, infrastructure 
                improvements, and strategic initiatives.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-green-400">The Revenue Opportunity</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Here's where it gets really interesting: the same AI system that deflects internal 
            tickets can become a revenue-generating product for your clients. That Teams chatbot 
            that's saving your engineers 225 hours per month? Your clients will pay $250+ monthly 
            for their own version.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Suddenly, you're not just saving costs – you're creating new recurring revenue streams 
            with 30-40% profit margins. The same technology investment delivers both operational 
            efficiency and revenue growth.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-green-400">Getting Started: The Implementation Reality</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The key to reaching 30% deflection isn't the technology – it's the training data. 
            You need AI that understands:
          </p>

          <ul className="list-none space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Your client's specific application stack and configurations</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Historical ticket resolutions and proven solutions</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Your MSP's preferred troubleshooting methodologies</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Client-specific policies, procedures, and documentation</span>
            </li>
          </ul>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            The MSPs who succeed start with comprehensive data ingestion and training, then 
            gradually expand deflection categories as the system learns and improves.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-green-400">The Competitive Reality</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            While you're reading this, other MSPs are already implementing these systems. 
            The early adopters aren't just saving money – they're winning new clients by 
            demonstrating superior service delivery and offering AI-powered solutions 
            that their competitors can't match.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            The 30% rule isn't just a nice-to-have efficiency gain. It's becoming table stakes 
            for competitive MSPs. The question isn't whether to implement ticket deflection – 
            it's how quickly you can get there.
          </p>
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Implement the 30% Rule?</h2>
          <p className="text-xl text-gray-300 mb-8">
            See how AI-powered ticket deflection can transform your MSP operations and create new revenue streams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://xop.im/partner"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              <Calculator className="w-5 h-5" />
              Calculate Your ROI
            </Link>
            <Link
              href="/apps/end-user-chatbot"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-green-500 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-black transition-all"
            >
              <Shield className="w-5 h-5" />
              Learn About AI End User Chatbot
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}