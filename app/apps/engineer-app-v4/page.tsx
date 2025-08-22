'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { 
  Shield, Zap, Target, Search, Bot, Phone, Mail, Clock,
  CheckCircle, TrendingUp, Users, Star, MessageCircle,
  FileText, BarChart3, Headphones, ArrowRight, Database
} from 'lucide-react'

export default function EngineerAppV4Page() {
  const coreCapabilities = [
    {
      title: "AI-Powered Enterprise Search",
      icon: <Search className="w-6 h-6" />,
      description: "Search across IT Glue, SharePoint, historical tickets, and documentation with environment-specific context",
      benefits: ["Instant access to client configurations", "Historical resolution patterns", "Environment-aware responses"]
    },
    {
      title: "Voice Agent Integration", 
      icon: <Phone className="w-6 h-6" />,
      description: "Voice AI assists with call handling, documentation, and ticket creation from phone conversations",
      benefits: ["Auto-document phone calls", "Voice-to-ticket conversion", "Call summary generation"]
    },
    {
      title: "Email Agent Assistance",
      icon: <Mail className="w-6 h-6" />,
      description: "AI processes incoming emails, categorizes tickets, and suggests responses based on context",
      benefits: ["Smart email categorization", "Automated response drafts", "Priority detection"]
    },
    {
      title: "Teams Chatbot Integration",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Seamless integration with MSP-branded Teams chatbots for end-user deflection",
      benefits: ["30%+ ticket deflection", "Bidirectional updates", "Context preservation"]
    }
  ]

  const workflowIntegrations = [
    {
      step: "Ticket Received",
      description: "Via phone (Voice AI), email (Email Agent), or Teams (Chatbot)",
      tech: "Multi-channel ingestion with full context capture"
    },
    {
      step: "AI Analysis", 
      description: "Enterprise Search finds relevant docs, configs, and past resolutions",
      tech: "Environment-specific training on client systems"
    },
    {
      step: "Engineer Assistance",
      description: "AI suggests solutions, auto-fills time entries, provides context",
      tech: "Intelligent overlay within ConnectWise interface"
    },
    {
      step: "Resolution & Learning",
      description: "System learns from successful resolutions for future improvements",
      tech: "Continuous learning and optimization"
    }
  ]

  const roiMetrics = [
    { metric: "45%", label: "Time savings per ticket", color: "text-green-400" },
    { metric: "2.5hrs", label: "Daily time saved per engineer", color: "text-blue-400" },
    { metric: "$18K", label: "Annual savings per engineer", color: "text-purple-400" },
    { metric: "30%+", label: "Tickets deflected before reaching engineers", color: "text-orange-400" }
  ]


  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 animate-pulse">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              Engineer App v4
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Complete AI-Powered Engineering Assistant with Integrated Voice, Email, and Search Capabilities
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              The only MSP platform that combines Enterprise Search, Voice AI, Email Agents, and Teams Chatbots 
              into one seamless ConnectWise overlay experience
            </p>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span className="font-medium">Most Popular Solution</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span className="font-medium">Thousands of Engineers Using</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integrated AI Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engineer App v4 brings together all your AI tools into one powerful platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">
                    {capability.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                    <p className="text-gray-300 mb-4">{capability.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {capability.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Workflow */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Everything Works Together</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Voice AI, Email Agents, Enterprise Search, and Teams Chatbots create a unified experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {workflowIntegrations.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center h-full min-h-[280px] flex flex-col">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.step}</h3>
                  <p className="text-gray-300 mb-3 text-sm flex-grow">{step.description}</p>
                  <p className="text-xs text-green-400 italic mt-auto">{step.tech}</p>
                </div>
                {index < workflowIntegrations.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Impact Metrics */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven ROI & Impact</h2>
            <p className="text-xl text-gray-300">
              Real results from MSPs using the complete integrated platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {roiMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-center">
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>{metric.metric}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pricing & Value */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Complete Platform Pricing</h2>
            <p className="text-xl text-gray-300">
              Everything included - no separate charges for Voice AI, Email Agents, or Enterprise Search
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-green-400">$55</span>
                  <span className="text-xl text-gray-300">per engineer/month</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Complete AI platform with all capabilities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>50 end-user Teams chatbots included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Voice AI, Email Agents, Enterprise Search</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>ConnectWise Manage integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>No usage or token charges</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-black/50 rounded-xl p-6">
                  <div className="text-2xl font-bold text-white mb-2">ROI Calculator</div>
                  <div className="text-sm text-gray-400 mb-4">10 Engineers × $18K Annual Savings</div>
                  <div className="text-4xl font-bold text-green-400 mb-2">$180K</div>
                  <div className="text-sm text-gray-500 mb-4">Annual Value</div>
                  <div className="text-xs text-gray-400">
                    Platform cost: $66K/year • Net savings: $114K/year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Advanced Technical Features</h2>
            <p className="text-xl text-gray-300">
              Built for MSPs who demand enterprise-grade AI with complete integration
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <Database className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Environment-Specific Training</h3>
              <p className="text-gray-300 mb-4">
                AI trained on your client's specific configurations, not generic knowledge bases
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Client application stacks</li>
                <li>• Historical ticket resolutions</li>
                <li>• MSP procedures and workflows</li>
                <li>• Custom documentation</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <Shield className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-gray-300 mb-4">
                SOC2 Type 2, ISO 27001, HIPAA, and GDPR compliant with zero data exfiltration
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Data residency control</li>
                <li>• No model training on your data</li>
                <li>• Multi-provider AI failover</li>
                <li>• Complete audit trails</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">ConnectWise Integration</h3>
              <p className="text-gray-300 mb-4">
                Deep API integration with both cloud and on-premises ConnectWise environments
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Intelligent overlay interface</li>
                <li>• Automated time entries</li>
                <li>• Bidirectional data sync</li>
                <li>• Workflow preservation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Engineering Team Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of MSP engineers who are saving 2.5 hours daily with our complete AI platform
          </p>
          
          <div className="bg-black/30 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">AI Assistance Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">&lt;1hr</div>
                <div className="text-sm text-gray-400">Implementation Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">Zero</div>
                <div className="text-sm text-gray-400">Workflow Disruption</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/roi"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              <BarChart3 className="w-5 h-5" />
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}