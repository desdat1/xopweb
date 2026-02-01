'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import { CheckCircle, XCircle, MinusCircle, ChevronDown, ChevronUp, Crown, Star, Zap, Trophy, Target, Heart, AlertTriangle, Search, Phone, Mail, DollarSign } from 'lucide-react'

export default function ComparePage() {
  const [expandedAdvantage, setExpandedAdvantage] = useState<number | null>(0)
  const [activeComparisonTab, setActiveComparisonTab] = useState('overview')

  const competitiveAdvantages = [
    {
      badge: "Industry First",
      icon: "🏗️",
      title: "Complete Platform Solution",
      description: "The industry's only comprehensive AI platform addressing every aspect of MSP operations - from engineer efficiency to revenue generation.",
      features: [
        "Pod-integrated solutions embedded directly inside ConnectWise, Halo & ServiceNow",
        "Full Resolve Engineer App with advanced capabilities",
        "Manager App with 5 integrated management modules",
        "Revenue-generating client solutions",
        "Voice, email, and communication automation",
        "Contract management and entitlement verification"
      ],
      metrics: { primary: "10", secondary: "Solutions", tertiary: "100%", quaternary: "Coverage" }
    },
    {
      badge: "Zero Friction",
      icon: "⚡",
      title: "Pod-Integrated PSA Solutions",
      description: "AI that lives inside your PSA, not alongside it. Engineers don't learn a new system - they get AI capabilities directly in ConnectWise, Halo, or ServiceNow where they already work.",
      features: [
        "Native add-ins for ConnectWise Manage, Halo PSA & ServiceNow ITSM",
        "Deploys in under a week with zero workflow disruption",
        "Ticket analysis, sentiment detection & priority assessment",
        "Enterprise Search across IT Glue, SharePoint & historical tickets",
        "AI-generated responses with tone adjustment for audience",
        "Automatic time entry capture and categorization"
      ],
      metrics: { primary: "<1 week", secondary: "Deployment", tertiary: "Zero", quaternary: "Training Needed" }
    },
    {
      badge: "Exclusive Technology", 
      icon: "🔍",
      title: "Enterprise Search Excellence",
      description: "AI-powered search across IT Glue, SharePoint, historical tickets, and 250+ platforms. Market alternatives offer limited or no documentation access.",
      features: [
        "Deep IT Glue integration with AI search",
        "Semantic search across historical tickets", 
        "Multi-platform documentation access",
        "Full SharePoint content discovery and indexing",
        "Contextual results with relevance scoring"
      ],
      metrics: { primary: "250+", secondary: "Integrations", tertiary: "75%", quaternary: "Faster Research" }
    },
    {
      badge: "Market First",
      icon: "📞",
      title: "Voice AI Pioneer",
      description: "First and only platform with comprehensive voice AI capabilities - two distinct solutions for different use cases. Market solutions have zero voice automation.",
      features: [
        "Phone Intake Agent for overflow and after-hours support",
        "Full PSA integration with ConnectWise, Halo & ServiceNow",
        "SMS multi-factor authentication for caller verification",
        "Conversation Monitor joins live engineer calls for auto-documentation",
        "AI generates ticket notes, summary, resolution, categorization & time entry",
        "Complete call transcripts that enrich future Ask AI responses"
      ],
      metrics: { primary: "100%", secondary: "Call Capture", tertiary: "24/7", quaternary: "Availability" }
    },
    {
      badge: "AURA-Powered",
      icon: "🎯",
      title: "Predictive Ticket Health",
      description: "Revolutionary 6-point ticket health scoring system predicting issues 72 hours before traditional systems. Completely unique technology unavailable from market alternatives.",
      features: [
        "6-point AI scoring: sentiment, empathy, technical approach",
        "72-hour early warning for ticket issues",
        "Predictive analytics for escalation prevention",
        "Real-time ticket health monitoring",
        "Actionable recommendations for intervention"
      ],
      metrics: { primary: "72hr", secondary: "Early Warning", tertiary: "45%", quaternary: "Fewer Escalations" }
    },
    {
      badge: "Manager App Exclusive",
      icon: "🚨",
      title: "Escalations Board with AURA",
      description: "Proactive escalation management powered by AURA's 6-point scoring. Identifies tickets heading for trouble 72 hours before traditional systems. No competitor has predictive escalation technology.",
      features: [
        "AURA-powered predictive escalation identification",
        "Real-time ticket health scoring with alerts", 
        "Intervention recommendations with action items",
        "Automated manager alerts for at-risk tickets",
        "Historical escalation pattern analysis for prevention"
      ],
      metrics: { primary: "30%", secondary: "Fewer Escalations", tertiary: "50%", quaternary: "Faster Resolution" }
    },
    {
      badge: "Exclusive Offering",
      icon: "💰",
      title: "Revenue Generation Model", 
      description: "Exclusive white-labeled solutions creating new revenue streams for MSPs. No market alternatives offer productized solutions for recurring client revenue.",
      features: [
        "White-labeled enterprise search for clients",
        "Branded client chatbots with ticket integration",
        "$250+ monthly recurring revenue per client",
        "30-40% profit margins on deployed solutions",
        "Zero additional support burden - fully managed"
      ],
      metrics: { primary: "$250+", secondary: "Monthly MRR", tertiary: "55%", quaternary: "Profit Margin" }
    },
    {
      badge: "Manager App Exclusive",
      icon: "🎯",
      title: "AI Triage Module",
      description: "Intelligent ticket routing considering engineer skills, workload, client familiarity, and performance. No other solution offers this assignment intelligence within a dedicated manager application.",
      features: [
        "Skills-based routing with expertise matching",
        "Real-time workload balancing across team members",
        "Client familiarity scoring for relationship continuity",
        "Historical performance analysis for optimal assignment",
        "Complexity assessment for appropriate resource allocation"
      ],
      metrics: { primary: "40%", secondary: "Faster Assignment", tertiary: "85%", quaternary: "First-Match Accuracy" }
    },
    {
      badge: "Manager App Exclusive",
      icon: "❤️",
      title: "Client Health Board",
      description: "Comprehensive client relationship tracking aggregating ticket patterns, satisfaction trends, and service metrics. No other platform offers this client health intelligence.",
      features: [
        "Real-time client satisfaction scoring and trend analysis",
        "Ticket pattern analysis to identify recurring issues",
        "Service level compliance monitoring with SLA tracking",
        "Churn risk assessment with predictive analytics",
        "Automated alerts for declining client relationships"
      ],
      metrics: { primary: "35%", secondary: "Better Retention", tertiary: "90%", quaternary: "Risk Detection" }
    },
    {
      badge: "Manager App Exclusive",
      icon: "👥",
      title: "Engineer Health Board",
      description: "Comprehensive team performance tracking that goes beyond basic metrics to analyze engineer empathy, technical effectiveness, and growth opportunities.",
      features: [
        "Engineer empathy scoring from customer interactions",
        "Technical effectiveness analysis with solution quality metrics",
        "Individual and team productivity benchmarking",
        "Skills gap identification with training recommendations",
        "Performance trend analysis for career development planning"
      ],
      metrics: { primary: "25%", secondary: "Team Efficiency", tertiary: "40%", quaternary: "Skill Development" }
    },
    {
      badge: "Manager App Exclusive",
      icon: "📅",
      title: "Group Scheduling",
      description: "Intelligent scheduling capabilities for coordinating team resources, client meetings, and project work across your engineering team.",
      features: [
        "AI-assisted scheduling based on engineer availability",
        "Client preference and timezone awareness",
        "Project and maintenance window coordination",
        "Resource allocation optimization",
        "Integration with PSA calendars and scheduling"
      ],
      metrics: { primary: "30%", secondary: "Less Scheduling Time", tertiary: "95%", quaternary: "Booking Accuracy" }
    },
    {
      badge: "New Solution",
      icon: "📋",
      title: "Contract Management & Entitlement Verification",
      description: "AI-powered contract lifecycle management that ensures you capture all billable services and never miss a renewal. No competitor offers automated entitlement verification.",
      features: [
        "Automated contract ingestion and term extraction",
        "Real-time entitlement verification against actual usage",
        "Proactive renewal notifications with usage analytics",
        "Revenue leakage detection from unbilled services",
        "Compliance monitoring for SLA obligations"
      ],
      metrics: { primary: "5-15%", secondary: "Revenue Recovery", tertiary: "60%+", quaternary: "Time Savings" }
    }
  ]

  const comparisonData = {
    categories: [
      {
        name: "PSA Integration",
        icon: <Zap className="w-5 h-5" />,
        features: [
          { name: "Pod-Integrated PSA Add-ins", rezolve: "full", description: "AI embedded directly inside ConnectWise, Halo & ServiceNow" },
          { name: "ConnectWise Manage Integration", rezolve: "full", description: "Full integration with on-premises and cloud versions" },
          { name: "Halo PSA Integration", rezolve: "full", description: "Native pod integration with Halo PSA" },
          { name: "ServiceNow ITSM Integration", rezolve: "full", description: "Enterprise-grade ServiceNow integration" }
        ]
      },
      {
        name: "Engineer Assistance",
        icon: <Zap className="w-5 h-5" />,
        features: [
          { name: "Ticket Response Generation", rezolve: "full", description: "AI-powered contextual responses with tone adjustment" },
          { name: "Ticket Summarization", rezolve: "full", description: "Advanced multi-dimensional summaries with context" },
          { name: "Automatic Time Entry", rezolve: "full", description: "Intelligent time tracking with activity categorization" },
          { name: "Solution Recommendations", rezolve: "full", description: "AI-powered solutions from historical tickets & documentation" }
        ]
      },
      {
        name: "Enterprise Search",
        icon: <Search className="w-5 h-5" />,
        features: [
          { name: "IT Glue Search Integration", rezolve: "full", description: "Deep AI-powered search with contextual results" },
          { name: "Historical Ticket Search", rezolve: "full", description: "AI-powered semantic search across all historical tickets" },
          { name: "SharePoint Integration", rezolve: "full", description: "Full SharePoint search with AI-powered content discovery" },
          { name: "Multi-Platform Documentation", rezolve: "full", description: "250+ integrations including Hudu, ITBoost, Confluence" }
        ]
      },
      {
        name: "Voice & Communication",
        icon: <Phone className="w-5 h-5" />,
        features: [
          { name: "Phone Intake Agent", rezolve: "full", description: "Overflow & after-hours support with SMS MFA authentication" },
          { name: "Conversation Monitor", rezolve: "full", description: "Joins live calls, auto-generates notes, summary & time entries" },
          { name: "24/7 After-Hours Support", rezolve: "full", description: "Voice agents provide round-the-clock ticket creation" },
          { name: "Full Call Transcripts", rezolve: "full", description: "Complete transcripts enrich knowledge base for Ask AI" }
        ]
      },
      {
        name: "Email Intelligence",
        icon: <Mail className="w-5 h-5" />,
        features: [
          { name: "AI Email Categorization", rezolve: "full", description: "Advanced AI categorization with priority assessment" },
          { name: "Smart Auto-Replies", rezolve: "full", description: "Contextual responses with solution suggestions" },
          { name: "Email-to-Ticket Intelligence", rezolve: "full", description: "AI extracts context, creates complete tickets" }
        ]
      },
      {
        name: "Revenue Generation",
        icon: <DollarSign className="w-5 h-5" />,
        features: [
          { name: "White-labeled Enterprise Search", rezolve: "full", description: "Complete revenue-generating solution for clients" },
          { name: "Branded Client Chatbots", rezolve: "full", description: "White-labeled chatbots with ticket integration" },
          { name: "Recurring Revenue Model", rezolve: "full", description: "$250+ monthly per client with 30-40% margins" }
        ]
      },
      {
        name: "Management Platform",
        icon: <Target className="w-5 h-5" />,
        features: [
          { name: "Dedicated Manager Application", rezolve: "full", description: "Complete Manager App with 5 integrated modules" },
          { name: "AI Triage Module", rezolve: "full", description: "Intelligent routing based on skills, workload & client familiarity" },
          { name: "Escalations Board", rezolve: "full", description: "AURA-powered predictive escalation tracking" },
          { name: "Client Health Board", rezolve: "full", description: "AI-driven satisfaction analysis and churn prediction" },
          { name: "Engineer Health Board", rezolve: "full", description: "Productivity, workload and skill set tracking" },
          { name: "Group Scheduling", rezolve: "full", description: "AI-assisted team scheduling and resource coordination" }
        ]
      },
      {
        name: "Contract Management",
        icon: <DollarSign className="w-5 h-5" />,
        features: [
          { name: "Contract Ingestion & Parsing", rezolve: "full", description: "Automated extraction of terms, dates and obligations" },
          { name: "Entitlement Verification", rezolve: "full", description: "Real-time comparison of contracts vs actual usage" },
          { name: "Renewal Management", rezolve: "full", description: "Proactive notifications with usage analytics" },
          { name: "Revenue Leakage Detection", rezolve: "full", description: "Identify unbilled services automatically" }
        ]
      }
    ]
  }

  const applications = [
    {
      category: "MSP Internal Efficiency",
      color: "from-green-600 to-emerald-600",
      apps: [
        { name: "Pod-Integrated Engineer Assist", description: "AI embedded directly inside ConnectWise, Halo & ServiceNow - zero friction, no new system to learn", impact: "Deploy in <1 week" },
        { name: "Full Resolve Engineer App", description: "Advanced capabilities: Conversation Monitor, group scheduling, client environment analysis, Teams chatbot", impact: "40% faster resolution" },
        { name: "Manager App", description: "Five integrated modules: AI Triage, Escalations Board, Client Health, Engineer Health, Group Scheduling", impact: "30% reduction in escalations" },
        { name: "Enterprise Search for MSPs", description: "Unified AI search across ConnectWise, IT Glue, SharePoint, and historical tickets", impact: "50% faster resolution" },
        { name: "Contract Management", description: "Entitlement verification, renewal tracking, and revenue leakage detection", impact: "5-15% revenue recovery" }
      ]
    },
    {
      category: "End-User Revenue Solutions",
      color: "from-purple-600 to-pink-600",
      apps: [
        { name: "End User Teams Chatbot", description: "White-labeled AI chatbot for ticket deflection with seamless escalation to your PSA", impact: "20% ticket deflection" },
        { name: "Enterprise Search for End Users", description: "Revenue-generating standalone product - white-labeled enterprise search for client organizations", impact: "$250+ monthly MRR" }
      ]
    }
  ]

  const competitors = ["The Competition"]

  // Updated for new categories: PSA Integration (4), Engineer Assistance (4), Enterprise Search (4), Voice (4), Email (3), Revenue (3), Management (6), Contract (4) = 32 features
  const competitorResponses = [
    // PSA Integration
    'none', 'partial', 'none', 'none',
    // Engineer Assistance
    'partial', 'partial', 'full', 'none',
    // Enterprise Search
    'partial', 'none', 'none', 'none',
    // Voice & Communication
    'none', 'none', 'none', 'none',
    // Email Intelligence
    'partial', 'partial', 'partial',
    // Revenue Generation
    'none', 'none', 'none',
    // Management Platform
    'none', 'none', 'none', 'none', 'none', 'none',
    // Contract Management
    'none', 'none', 'none', 'none'
  ]

  const getFeatureIcon = (type: string) => {
    switch (type) {
      case 'full': return <CheckCircle className="w-5 h-5 text-green-400" />
      case 'partial': return <MinusCircle className="w-5 h-5 text-yellow-400" />
      default: return <XCircle className="w-5 h-5 text-red-400" />
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Feature Comparison</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Rezolve.ai compares across all critical MSP AI capabilities
            </p>
          </div>

          {/* Comparison Categories */}
          <div className="max-w-6xl mx-auto">
            {comparisonData.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-t-2xl p-4">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    {category.icon}
                    {category.name}
                  </h3>
                </div>
                
                <div className="bg-gray-900 border border-green-500/30 rounded-b-2xl overflow-hidden">
                  {/* Mobile-first table structure */}
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-full">
                      {/* Header */}
                      <thead>
                        <tr className="bg-gray-800 border-b border-gray-700">
                          <th className="p-3 md:p-4 font-semibold text-left text-sm md:text-base w-1/2">Feature</th>
                          <th className="p-3 md:p-4 font-semibold text-center bg-green-600/20 text-sm md:text-base w-1/4">
                            <Crown className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1" />
                            <div className="hidden sm:block">Rezolve.ai</div>
                            <div className="sm:hidden">Rezolve</div>
                          </th>
                          <th className="p-3 md:p-4 font-semibold text-center text-sm md:text-base w-1/4">
                            Competition
                          </th>
                        </tr>
                      </thead>
                      
                      {/* Features */}
                      <tbody>
                        {category.features.map((feature, featureIndex) => {
                          const globalFeatureIndex = comparisonData.categories.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.features.length, 0) + featureIndex;
                          return (
                            <tr key={featureIndex} className="border-b border-gray-700 last:border-b-0 hover:bg-gray-800/50">
                              <td className="p-3 md:p-4 align-top text-left">
                                <div className="font-medium text-left text-sm md:text-base">{feature.name}</div>
                                <div className="text-xs md:text-sm text-gray-400 mt-1 text-left hidden md:block">{feature.description}</div>
                              </td>
                              <td className="p-3 md:p-4 text-center align-middle bg-green-600/10 border-l border-r border-green-500/30">
                                <div className="flex justify-center items-center">
                                  {getFeatureIcon('full')}
                                </div>
                              </td>
                              <td className="p-3 md:p-4 text-center align-middle">
                                <div className="flex justify-center items-center">
                                  {getFeatureIcon(competitorResponses[globalFeatureIndex] || 'none')}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Five Applications Overview */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Review Our MSP Solutions - Internal & Client</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive applications designed for MSP efficiency, management, and end-user revenue generation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {applications.map((category, categoryIndex) => (
              <div key={categoryIndex} className={`bg-gradient-to-br ${category.color}/10 border border-green-500/30 rounded-2xl p-8`}>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.apps.map((app, appIndex) => (
                    <div key={appIndex} className="bg-black/50 rounded-xl p-6 border border-gray-700/50">
                      <div className="mb-3">
                        <h4 className="text-xl font-semibold text-green-400">{app.name}</h4>
                      </div>
                      <p className="text-gray-300 mb-3">{app.description}</p>
                      <div className="inline-flex items-center gap-2 text-green-400 font-semibold">
                        <Star className="w-4 h-4" />
                        {app.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Unmatched Competitive Advantages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary capabilities that set us apart from every other solution in the market
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="mb-4">
                <div 
                  className={`bg-gradient-to-r from-gray-900 to-gray-800 border rounded-2xl cursor-pointer transition-all duration-300 ${
                    expandedAdvantage === index ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-gray-700 hover:border-green-500/50'
                  }`}
                  onClick={() => setExpandedAdvantage(expandedAdvantage === index ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{advantage.icon}</span>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold uppercase">
                              {advantage.badge}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-green-400">{advantage.title}</h3>
                        </div>
                      </div>
                      {expandedAdvantage === index ? (
                        <ChevronUp className="w-6 h-6 text-green-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  {expandedAdvantage === index && (
                    <div className="px-6 pb-6 animate-fadeIn">
                      <div className="border-t border-gray-700 pt-6">
                        <p className="text-gray-300 text-lg mb-6">{advantage.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                              <Zap className="w-5 h-5" />
                              Key Capabilities
                            </h4>
                            <ul className="space-y-3">
                              {advantage.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                              <Target className="w-5 h-5" />
                              Business Impact
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                                <div className="text-3xl font-bold text-green-400">{advantage.metrics.primary}</div>
                                <div className="text-sm text-green-300">{advantage.metrics.secondary}</div>
                              </div>
                              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                                <div className="text-3xl font-bold text-green-400">{advantage.metrics.tertiary}</div>
                                <div className="text-sm text-green-300">{advantage.metrics.quaternary}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators Summary */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Rezolve.ai Dominates the Market</h2>
              <p className="text-xl text-gray-300">
                While competitors offer fragmented solutions, we deliver the complete AI platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-400">Traditional Market Solutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    Fragmented point solutions
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    No voice AI capabilities
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    Limited enterprise search
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    No revenue generation model
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    Basic or no manager applications
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    No predictive ticket health scoring
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-2">
                  <Crown className="w-6 h-6" />
                  Rezolve.ai Platform
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    Pod-integrated solutions inside ConnectWise, Halo & ServiceNow
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    Industry's only voice AI (Phone Intake + Conversation Monitor)
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    Advanced enterprise search (250+ integrations)
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    White-labeled revenue solutions
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    Dedicated Manager App with 5 modules
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    Contract management & entitlement verification
                  </li>
                </ul>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8">
                <h3 className="text-3xl font-bold mb-4">The Competitive Reality</h3>
                <p className="text-xl mb-6 max-w-2xl mx-auto">
                  Choose fragmented solutions, or choose the complete AI platform that revolutionizes your entire MSP operation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://xop.im/partner"
                    className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
                  >
                    <Trophy className="w-5 h-5" />
                    Schedule a Demo
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}