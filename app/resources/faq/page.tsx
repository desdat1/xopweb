'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function FAQPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const faqSections = [
    {
      title: "Getting Started & Implementation",
      faqs: [
        {
          question: "How do we get started with AI without disrupting our current operations?",
          answer: "Our pod-integrated solutions for ConnectWise Manage, Halo, and ServiceNow are add-ins that function directly inside your PSA - right within the ticketing system your engineers already use every day. There's no need for your team to learn a third-party application or change how they work. They continue operating in their familiar environment while we add powerful AI functionality: ticket analysis, sentiment analysis, Enterprise Search, and Ask AI functions that query historical tickets and relevant documentation. It's essentially a frictionless setup - your engineers don't need training on new systems because everything runs where they're already working."
        },
        {
          question: "Do you offer demo or trial environments?",
          answer: "Yes! We can implement a trial environment for any of our integrated solutions - ConnectWise Manage, Halo, or ServiceNow. We'll get you up and running with ticket analysis, AI-generated responses to clients, automated time entry capture, and more. During the trial engagement, we may not integrate all your data sources (such as SharePoint or IT Glue), but we can get the core PSA integration operational so you can experience the value firsthand. This lets your team evaluate the platform with real tickets in your actual environment."
        },
        {
          question: "What if our client documentation is not up to date? How do you handle poor data quality?",
          answer: "This is common - no MSP has perfect documentation. Our Ask AI bot now actively helps address this: when the bot can't find relevant documentation to solve a problem, it automatically creates a documentation ticket in that client's name. This means gaps and inaccuracies get tracked systematically without any extra effort from your engineers. The inadequate or missing documentation surfaces naturally through real-world usage and gets queued for improvement. In future versions, Ask AI will go even further - automatically creating draft documentation in IT Glue (or your documentation platform) as a starting point, so engineers don't have to build it from scratch."
        }
      ]
    },
    {
      title: "Platform Capabilities & Features",
      faqs: [
        {
          question: "How does voice AI work for MSPs? Can AI actually handle phone calls?",
          answer: "Yes - we offer two distinct voice AI solutions. The Phone Intake Agent handles overflow when your service desk is at capacity or provides after-hours support without needing an answering service. It's fully integrated with ConnectWise, ServiceNow, and Halo - it identifies the company and user in your ticketing system, authenticates them via SMS multi-factor authentication, asks targeted questions about their issue, determines priority, and creates a properly categorized ticket with full call transcript ready for your engineers to work. The second solution is the Conversation Monitor in our Full Resolve Engineer App - engineers can add an AI agent to live support calls that listens to the conversation and automatically generates ticket notes, summary, resolution notes, categorization, call status, and even recommends the proper time entry, all with a complete transcript. This removes clerical burden from engineers while building a rich knowledge base that improves future Ask AI responses for similar issues."
        },
        {
          question: "What does the Teams end user bot do? How is it different than Enterprise Search for end users?",
          answer: "Our Teams bot creates a direct communication channel between your end users and engineers through Microsoft Teams. It's trained on common end user issues to deflect simple tickets, but when escalation is needed, it seamlessly creates tickets in ConnectWise Manage with full context. Updates flow bidirectionally - engineers can update tickets and end users see responses in Teams. Enterprise Search for end users is different - it's a standalone revenue-generating product you sell to clients for $250+ monthly, allowing them to search their own documentation and systems independently. The Teams bot is about communication and ticket management; Enterprise Search is about client self-service and recurring revenue."
        },
        {
          question: "What underlying AI engine do you use?",
          answer: "Our platform is completely portable across AI engines - we support OpenAI, Google, Claude, and others with automatic failover capabilities between models. This gives you flexibility and protection against vendor lock-in or service disruptions. If one provider has issues, your operations continue seamlessly with another. This multi-model approach also allows us to optimize performance and cost by using the best AI engine for each specific task, ensuring you always have access to cutting-edge AI capabilities regardless of market changes."
        }
      ]
    },
    {
      title: "Integrations & Technical",
      faqs: [
        {
          question: "How does AI integration work with our existing ConnectWise/PSA tools?",
          answer: "We offer two products for each supported PSA - ConnectWise, Halo, and ServiceNow. The first is our pod-integrated solution that embeds directly inside your PSA as an add-in. This is more than just an integration - it's actually part of the application your engineers use every day, with zero friction and no new system to learn. We typically recommend starting here. The second is our Full Resolve Engineer App, which adds advanced capabilities like group scheduling, AI analysis on phone calls via Conversation Monitor, AI analysis of client environments, and Teams chatbot communication with end users. Every engineer license includes access to both products at no additional cost, so your team can use whichever fits their workflow - or both."
        },
        {
          question: "What other MSP PSAs do you integrate with besides ConnectWise?",
          answer: "We currently integrate directly with ConnectWise Manage (both on-premises and cloud-hosted versions), Halo PSA, and ServiceNow ITSM. Autotask PSA integration is scheduled for March 2026. If you're using a different PSA and would like to see integration support, we'd love to hear from you - customer demand directly influences our integration roadmap."
        },
        {
          question: "Can your AI run inside ConnectWise Manage?",
          answer: "Yes! Our pod-integrated solutions are add-ins that function directly inside ConnectWise Manage, Halo, and ServiceNow. Engineers don't need to switch to a separate application - the AI capabilities appear right within the ticketing interface they already use. This includes ticket analysis, sentiment analysis, Enterprise Search, Ask AI queries against historical tickets and documentation, AI-generated responses, and automated time entry capture. Your team continues working in their familiar PSA environment with powerful AI functionality layered in seamlessly."
        }
      ]
    },
    {
      title: "Pricing & Licensing",
      faqs: [
        {
          question: "How does engineer licensing work and what's included?",
          answer: "Our engineer licensing is straightforward: $55 per engineer per month. Each licensed engineer includes 50 end user Teams branded chatbots at no additional cost. So if your MSP licenses 50 engineers, you automatically get 2,500 end user MSP branded Teams chatbots included in your licensing. This scales directly - 10 engineers = 500 chatbots, 100 engineers = 5,000 chatbots. If you need additional end user Teams chatbot licenses beyond what's included, they're available in 500-user packs for easy scaling as your client base grows."
        },
        {
          question: "What about the Manager App - how much does it cost?",
          answer: "The Manager Application is included at no additional cost through June 2026 for existing Engineer App license holders. It includes five modules: AI Triage (routes tickets to the right engineer based on skills, workload, and client familiarity), Escalations Board (tracks tickets needing escalation), Client Health Board (AI-driven analysis of customer satisfaction, issues, and service metrics), Engineer Health Board (measures productivity, workload, and skill sets), and Group Scheduling. We're still determining whether these will be offered à la carte or as a bundle after the complimentary period. Right now, we're providing access to interested MSPs in exchange for feedback on improvements, features, and direction as we work toward general availability."
        },
        {
          question: "Do you charge for usage? What about all the tokens and conversations with Claude and ChatGPT?",
          answer: "You have two options for AI models. First, use our preferred models with a fixed-rate pricing structure - simple and predictable. Second, bring your own AI keys (we support OpenAI/ChatGPT, Anthropic/Claude, and Google Gemini) and receive reduced engineer licensing costs. For voice applications, both the Voice AI Intake Agent and the Conversation Monitor include a set number of minutes with your engineer licensing. Usage beyond those included minutes incurs additional charges based on actual workload. This hybrid approach lets you optimize costs based on your volume and preferences."
        }
      ]
    },
    {
      title: "Business & Revenue",
      faqs: [
        {
          question: "Can AI actually generate recurring revenue for our MSP, or just reduce costs?",
          answer: "Unlike cost-reduction-only solutions, our platform creates new revenue streams. Our white-labeled Enterprise Search and branded chatbot solutions can be sold directly to your clients starting at $250/month for the first 20 users, with 30-40% profit margins. These aren't just internal efficiency tools - they're productized solutions that your clients pay for separately. Many MSPs are generating an additional $15,000-30,000 monthly in MRR within their first year, completely separate from cost savings."
        },
        {
          question: "What is our anticipated ROI? How long does it take to achieve?",
          answer: "We develop customized 5-year ROI schedules that show how we build engineer efficiency over the years with improvements to documentation, enterprise search, automated clerical work (ticket entry, categorization, time entries, etc.) as well as end user ticket deflection and end user agentic automations. It takes time for both engineers and end users to adopt and benefit from these AI capabilities, which is why it's so important to start as soon as possible! The earlier you begin, the sooner you'll see compounding benefits from improved processes and automated efficiencies."
        },
        {
          question: "Do you offer deal registration for MSP clients?",
          answer: "Yes, we're launching a deal registration system soon that will secure exclusivity to your end user client for a six-month period following registration. In the meantime, please contact Matt directly with any opportunities to ensure they are exclusively yours to work on. Once launched, deal registration will also enable you to receive comprehensive pre-sales support including client meetings, strategy sessions, technical consultations, and assistance with proposal development. This helps you win more deals by leveraging our expertise and ensuring your clients get the best possible introduction to our AI solutions."
        }
      ]
    },
    {
      title: "Security & Compliance",
      faqs: [
        {
          question: "Security: Where is my data stored?",
          answer: "We maintain secure instances in the US, Canada, and Europe, allowing you to select data residency based on your compliance requirements. We conduct SOC2 Type 2 audits and maintain ISO 27001, HIPAA, and GDPR compliance certifications. We're happy to complete security questionnaires and share detailed compliance documentation as appropriate, subject to non-disclosure agreements. Your data security is paramount, and we work closely with MSPs to meet their specific compliance and regulatory requirements."
        },
        {
          question: "Do you use our data to train models?",
          answer: "No, there is zero data exfiltration and we do not fine-tune any models with your data. This is a core tenet of our platform. Additionally, we have a data leak prevention agent that prevents end users from entering sensitive personally identifiable information into the system. Your data remains completely private and is never used for training purposes by us or any third-party AI providers. We maintain strict data isolation to ensure your MSP's information and your clients' data stays secure and confidential."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* FAQ Header */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about implementing AI solutions in your MSP
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {/* Section Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-green-400 mb-2">
                    {section.title}
                  </h2>
                  <div className="h-px bg-gradient-to-r from-green-500 to-transparent"></div>
                </div>
                
                {/* FAQ Items in Section */}
                <div className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => {
                    const globalIndex = faqSections.slice(0, sectionIndex).reduce((acc, sec) => acc + sec.faqs.length, 0) + faqIndex;
                    return (
                      <div 
                        key={globalIndex} 
                        className={`bg-gray-900 border rounded-2xl transition-all duration-300 ${
                          expandedFAQ === globalIndex 
                            ? 'border-green-500 shadow-lg shadow-green-500/20' 
                            : 'border-gray-800 hover:border-green-500/50'
                        }`}
                      >
                        <button
                          onClick={() => setExpandedFAQ(expandedFAQ === globalIndex ? null : globalIndex)}
                          className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                        >
                          <div className="flex items-start gap-4">
                            <HelpCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                            <h3 className="text-xl font-semibold text-white pr-4">
                              {faq.question}
                            </h3>
                          </div>
                          {expandedFAQ === globalIndex ? (
                            <ChevronUp className="w-6 h-6 text-green-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {expandedFAQ === globalIndex && (
                          <div className="px-6 pb-6 animate-fadeIn">
                            <div className="border-t border-gray-700 pt-6 ml-10">
                              <p className="text-gray-300 text-lg leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">More Questions?</h2>
              <p className="text-xl text-gray-300 mb-6">
                Let's meet!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://xop.im/partner"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
                >
                  Schedule a Meeting
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-green-500 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-black transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}