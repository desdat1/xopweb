'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import Link from 'next/link'
import {
  ChevronRight, BarChart3, Users, AlertCircle, TrendingUp, Clock, Shield,
  Target, Zap, Brain, CheckCircle, Award, MessageCircle, Settings,
  AlertTriangle, Star, DollarSign, Mail, Search, Calendar, FileText
} from 'lucide-react'

export default function ManagerAppPage() {
  const [activePSA, setActivePSA] = useState('connectwise')
  const [activeModule, setActiveModule] = useState('triage')

  const psaOptions = [
    {
      id: 'connectwise',
      name: "ConnectWise Manage",
      shortName: "ConnectWise",
      logo: "/connectwise-logo.png",
      accentColor: "text-red-400",
      gradientFrom: "from-red-600",
      gradientTo: "to-orange-500",
      available: true,
      video: "/triage-video.mp4"
    },
    {
      id: 'halo',
      name: "Halo PSA",
      shortName: "Halo PSA",
      logo: "/halo-logo.png",
      accentColor: "text-cyan-400",
      gradientFrom: "from-cyan-600",
      gradientTo: "to-blue-500",
      available: true,
      video: "/triage-video.mp4"
    },
    {
      id: 'servicenow',
      name: "ServiceNow ITSM",
      shortName: "ServiceNow",
      logo: "/servicenow-logo.png",
      accentColor: "text-green-400",
      gradientFrom: "from-green-600",
      gradientTo: "to-emerald-500",
      available: true,
      video: "/triage-video.mp4"
    },
    {
      id: 'autotask',
      name: "Autotask PSA",
      shortName: "Autotask",
      logo: "/autotask.png",
      accentColor: "text-orange-400",
      gradientFrom: "from-orange-600",
      gradientTo: "to-amber-500",
      available: false,
      comingSoon: "March 2026"
    }
  ]

  const activePSAData = psaOptions.find(p => p.id === activePSA)!

  const modules = [
    {
      id: 'triage',
      title: 'AI Triage',
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-500',
      description: 'Intelligent ticket routing based on skills and workload',
      video: '/triage-video.mp4'
    },
    {
      id: 'escalations',
      title: 'Escalations Board',
      icon: <AlertTriangle className="w-8 h-8" />,
      color: 'from-red-600 to-orange-500',
      description: 'Human and AI-generated escalation tracking',
      video: '/escalations-video.mp4'
    },
    {
      id: 'client-reports',
      title: 'Client Reports',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-green-600 to-emerald-500',
      description: 'Client satisfaction and profitability reporting',
      video: '/client-health-video.mp4'
    },
    {
      id: 'team-performance',
      title: 'Engineer & Team Performance',
      icon: <Award className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-500',
      description: 'Analytics with weekly coaching insights',
      video: null
    },
    {
      id: 'scheduler',
      title: 'Scheduler',
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-teal-600 to-cyan-500',
      description: 'AI-powered scheduling and resource planning',
      video: null
    }
  ]

  const moduleDetails = {
    triage: {
      subtitle: 'Intelligent Resource Matching',
      features: [
        {
          icon: <Brain className="w-6 h-6 text-blue-400" />,
          title: 'Skills Analysis',
          description: 'AI analyzes ticket content from voice calls, email processing, and direct entry to match requirements with engineer skills, certifications, and historical success patterns.'
        },
        {
          icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
          title: 'Workload Assessment',
          description: 'System evaluates current engineer workload to ensure optimal distribution and prevent burnout.'
        },
        {
          icon: <Target className="w-6 h-6 text-blue-400" />,
          title: 'Confidence Ranking',
          description: 'Provides 2-3 engineer suggestions with AI confidence levels for each assignment recommendation.'
        },
        {
          icon: <Zap className="w-6 h-6 text-blue-400" />,
          title: 'Automated Assignment',
          description: 'Once configured, automatically assigns tickets when AI confidence threshold is met (e.g., 90% certainty).'
        }
      ],
      benefits: [
        'Reduce ticket assignment time from minutes to seconds',
        'Improve first-time resolution rates by 40%',
        'Balance workload across engineering team',
        'Ensure tickets go to most qualified engineers'
      ],
      process: [
        'New ticket arrives in your PSA',
        'AI analyzes ticket content and requirements',
        'System evaluates engineer skills and current workload',
        'Provides ranked assignment suggestions with confidence scores',
        'Manager approves or system auto-assigns based on threshold'
      ]
    },
    escalations: {
      subtitle: 'Proactive Issue Detection',
      features: [
        {
          icon: <Users className="w-6 h-6 text-red-400" />,
          title: 'Human Escalations',
          description: 'Track escalations from engineers via voice calls, Teams messages, or direct entry when they recognize they need assistance or are encountering difficulties.'
        },
        {
          icon: <Brain className="w-6 h-6 text-red-400" />,
          title: 'AI-Generated Alerts',
          description: 'AI analyzes voice call sentiment, email communication patterns, Enterprise Search queries, and progress indicators across all channels to identify at-risk tickets before they become critical.'
        },
        {
          icon: <MessageCircle className="w-6 h-6 text-red-400" />,
          title: 'Multi-Channel Communication Analysis',
          description: 'Monitors communication frequency and quality across voice calls, email responses, Teams interactions, and ticket updates to ensure comprehensive client engagement.'
        },
        {
          icon: <Clock className="w-6 h-6 text-red-400" />,
          title: 'End-User Impact',
          description: 'Assesses disruption to end user work day and prioritizes escalations based on business impact.'
        }
      ],
      benefits: [
        'Identify problem tickets before they become critical',
        'Reduce escalations by 30% through early intervention',
        'Improve client satisfaction scores',
        'Enable proactive management decisions'
      ],
      process: [
        'System continuously monitors all active tickets',
        'AI scores tickets based on multiple risk variables',
        'Escalations board highlights at-risk tickets',
        'Managers receive alerts for tickets needing attention',
        'Take immediate action to prevent client issues'
      ]
    },
    'client-reports': {
      subtitle: 'Comprehensive Client Reporting',
      features: [
        {
          icon: <Star className="w-6 h-6 text-green-400" />,
          title: 'Satisfaction Scoring',
          description: 'Numerical assessment of CSAT scores and post-ticket survey responses to gauge client happiness.'
        },
        {
          icon: <BarChart3 className="w-6 h-6 text-green-400" />,
          title: 'Resolution Tracking',
          description: 'Monitor number of tickets resolved and track resolution patterns to identify service trends.'
        },
        {
          icon: <AlertTriangle className="w-6 h-6 text-green-400" />,
          title: 'Escalation Analysis',
          description: 'Track escalation frequency as an indicator of potentially troublesome client relationships.'
        },
        {
          icon: <DollarSign className="w-6 h-6 text-green-400" />,
          title: 'Profitability Gauge',
          description: 'Compare labor hours expended against budgeted hours to determine client profitability (no complex financial metrics).'
        }
      ],
      benefits: [
        'Identify at-risk client relationships early',
        'Focus attention on most profitable clients',
        'Improve overall client satisfaction scores',
        'Reduce client churn through proactive intervention'
      ],
      process: [
        'System aggregates data from multiple touchpoints',
        'Calculates client health scores in real-time',
        'Identifies clients requiring immediate attention',
        'Provides actionable recommendations for improvement',
        'Tracks progress over time with trend analysis'
      ]
    },
    'team-performance': {
      subtitle: 'Engineer Development & Recognition',
      features: [
        {
          icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
          title: 'Performance Metrics',
          description: 'Track work output, resolution speed, and quality metrics for each engineer on your team.'
        },
        {
          icon: <Star className="w-6 h-6 text-purple-400" />,
          title: 'CSAT Tracking',
          description: 'Monitor individual engineer satisfaction scores from client feedback and post-ticket surveys.'
        },
        {
          icon: <AlertCircle className="w-6 h-6 text-purple-400" />,
          title: 'Escalation Monitoring',
          description: 'Track escalation frequency per engineer to identify coaching opportunities and high performers.'
        },
        {
          icon: <Award className="w-6 h-6 text-purple-400" />,
          title: 'Weekly Insights',
          description: 'Rotating weekly/bi-weekly insights with recognition recommendations and coaching suggestions.'
        }
      ],
      benefits: [
        'Identify top performers for recognition',
        'Spot engineers needing additional coaching',
        'Improve overall team performance',
        'Make data-driven personnel decisions'
      ],
      process: [
        'System analyzes all engineer activities and outcomes',
        'Generates individual performance scorecards',
        'Identifies patterns in repeat service calls',
        'Provides weekly coaching and recognition insights',
        'Tracks team performance trends over time'
      ]
    },
    scheduler: {
      subtitle: 'AI-Powered Resource Planning',
      features: [
        {
          icon: <Calendar className="w-6 h-6 text-teal-400" />,
          title: 'Smart Scheduling',
          description: 'AI optimizes engineer schedules based on skills, availability, travel time, and client preferences.'
        },
        {
          icon: <Users className="w-6 h-6 text-teal-400" />,
          title: 'Resource Optimization',
          description: 'Balance workload across team members while considering expertise and geographic proximity.'
        },
        {
          icon: <Clock className="w-6 h-6 text-teal-400" />,
          title: 'Appointment Management',
          description: 'Coordinate on-site visits, remote sessions, and project work with intelligent time blocking.'
        },
        {
          icon: <Zap className="w-6 h-6 text-teal-400" />,
          title: 'Conflict Resolution',
          description: 'Automatically detect and resolve scheduling conflicts with smart rescheduling suggestions.'
        }
      ],
      benefits: [
        'Maximize engineer utilization rates',
        'Reduce travel time between appointments',
        'Improve client appointment satisfaction',
        'Eliminate double-booking and conflicts'
      ],
      process: [
        'Service request or project requires scheduling',
        'AI analyzes engineer skills and availability',
        'System considers travel time and client location',
        'Optimal time slots are suggested or auto-scheduled',
        'Calendar sync ensures real-time availability'
      ]
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">AI Manager Application</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Service Desk Management
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            Unified AI Platform for Service Desk Management - Intelligence from Voice Calls, Email Processing,
            Enterprise Search, and Teams Interactions Automatically Feed Manager Insights
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            Your engineers use Voice AI, Email Agents, Teams Chatbots, and Enterprise Search daily.
            Manager App consolidates all this intelligence into actionable insights for ticket assignment,
            escalation prevention, client health monitoring, and team performance optimization.
          </p>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full">
              <Award className="w-4 h-4" />
              <span className="font-medium">Pre-Release Access</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-full font-semibold hover:opacity-90 transform hover:scale-105 transition-all"
            >
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* PSA Selector Tabs */}
      <section className="px-6 py-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Select Your PSA Platform</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {psaOptions.map((psa) => (
              <button
                key={psa.id}
                onClick={() => setActivePSA(psa.id)}
                className={`relative flex items-center px-4 py-3 rounded-xl transition-all ${
                  activePSA === psa.id
                    ? `bg-gradient-to-r ${psa.gradientFrom} ${psa.gradientTo} shadow-lg`
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <div className={`bg-white rounded-lg p-2 ${activePSA === psa.id ? '' : 'opacity-70'}`}>
                  <img src={psa.logo} alt={psa.name} className="h-8 w-auto" />
                </div>
                {!psa.available && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {psa.comingSoon}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PSA-specific content or Coming Soon */}
      {!activePSAData.available ? (
        <section className="px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className={`bg-gray-900/50 border border-orange-500/50 rounded-2xl p-12`}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500/20 mb-6">
                <Clock className="w-10 h-10 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Coming {activePSAData.comingSoon}</h3>
              <p className="text-gray-300 mb-8">
                We're working hard to bring AI Manager Application to {activePSAData.name}.
                Join the waitlist to be notified when it's available.
              </p>
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-orange-400">Planned Features</h4>
                <div className="grid gap-3 text-left max-w-md mx-auto">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span>AI Triage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span>Escalations Board</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span>Client Reports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span>Engineer & Team Performance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span>Scheduler</span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all"
              >
                Join Waitlist
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Module Selector */}
          <section className="px-6 py-16 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
              {/* Module Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                      activeModule === module.id
                        ? `bg-gradient-to-r ${module.color} text-white`
                        : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                    }`}
                  >
                    {module.icon}
                    <span className="font-medium">{module.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Module Details */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2">
                    {modules.find(m => m.id === activeModule)?.title}
                  </h3>
                  <p className="text-xl text-gray-300">
                    {moduleDetails[activeModule as keyof typeof moduleDetails]?.subtitle}
                  </p>
                </div>

                {/* Video Section - if module has video */}
                {modules.find(m => m.id === activeModule)?.video && (
                  <div className="mb-12">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-700 bg-black aspect-video">
                      <video
                        key={activeModule}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                      >
                        <source src={modules.find(m => m.id === activeModule)?.video!} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                )}

                {/* Coming Soon Video Placeholder */}
                {!modules.find(m => m.id === activeModule)?.video && (
                  <div className="mb-12">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-700 bg-gray-900/50 aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Clock className="w-8 h-8 text-gray-500" />
                        </div>
                        <p className="text-gray-400 text-lg">Video Coming Soon</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Features */}
                  <div>
                    <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                      <Settings className="w-6 h-6 text-blue-400" />
                      Key Features
                    </h4>
                    <div className="space-y-6">
                      {moduleDetails[activeModule as keyof typeof moduleDetails]?.features.map((feature, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg">
                            {feature.icon}
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">{feature.title}</h5>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits & Process */}
                  <div className="space-y-8">
                    {/* Benefits */}
                    <div>
                      <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-green-400" />
                        Key Benefits
                      </h4>
                      <div className="space-y-3">
                        {moduleDetails[activeModule as keyof typeof moduleDetails]?.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div>
                      <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <Clock className="w-6 h-6 text-purple-400" />
                        How It Works
                      </h4>
                      <div className="space-y-4">
                        {moduleDetails[activeModule as keyof typeof moduleDetails]?.process.map((step, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <span className="text-gray-300">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Integration Section */}
          <section className="px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Unified AI Intelligence Platform</h2>
              <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Manager App consolidates intelligence from all AI touchpoints - Voice calls automatically transcribed,
                emails processed by AI agents, Teams chatbot interactions, and Enterprise Search patterns -
                all feeding into {activePSAData.name} for comprehensive management insights
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-black/50 border border-gray-800 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Voice AI Integration</h3>
                  <p className="text-gray-400 text-sm">
                    Call transcriptions and sentiment analysis automatically feed escalation and performance tracking
                  </p>
                </div>

                <div className="bg-black/50 border border-gray-800 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Email Agent Data</h3>
                  <p className="text-gray-400 text-sm">
                    Email processing patterns and resolution data enhance assignment algorithms and client health scoring
                  </p>
                </div>

                <div className="bg-black/50 border border-gray-800 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Teams Chatbot Analytics</h3>
                  <p className="text-gray-400 text-sm">
                    End-user interaction patterns and deflection success rates inform team performance metrics
                  </p>
                </div>

                <div className="bg-black/50 border border-gray-800 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Enterprise Search Insights</h3>
                  <p className="text-gray-400 text-sm">
                    Knowledge gap analysis from search patterns helps identify training needs and process improvements
                  </p>
                </div>
              </div>

              <div className={`bg-gradient-to-r ${activePSAData.gradientFrom}/20 ${activePSAData.gradientTo}/20 border ${activePSAData.accentColor.replace('text-', 'border-').replace('-400', '-500/30')} rounded-xl p-6 text-center`}>
                <h3 className="text-xl font-semibold mb-3">Complete {activePSAData.name} Integration</h3>
                <p className="text-gray-300">
                  All AI-generated insights automatically sync with {activePSAData.name} - no workflow changes required.
                  Manager App works as an intelligent overlay that enhances your existing processes with predictive analytics.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ROI Section */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Service Desk Operations</h2>
            <p className="text-xl text-gray-300 mb-8">
              By consolidating intelligence from Voice AI, Email Agents, Teams Chatbots, and Enterprise Search,
              Manager App provides unprecedented visibility into service desk operations and team performance
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-black/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-sm text-gray-400">Faster Ticket Assignment</div>
              </div>
              <div className="bg-black/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
                <div className="text-sm text-gray-400">Reduction in Escalations</div>
              </div>
              <div className="bg-black/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
                <div className="text-sm text-gray-400">Improvement in Client Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://xop.im/partner"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Join the Waitlist
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-blue-500/30 px-8 py-4 rounded-full font-semibold hover:bg-blue-500/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
