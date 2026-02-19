'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function FAQPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const faqSections = [
    {
      title: "Getting Started & Implementation",
      faqs: [
        {
          question: "How do we get started with AI without disrupting our current operations?",
          answer: "Our platform is designed for seamless integration with zero disruption to your existing workflows. We start with our Enterprise Search solution, which works as an overlay to your current systems - your engineers continue using ConnectWise, ServiceNow, or Halo PSA exactly as before, but now have AI-powered search across IT Glue, SharePoint, and historical tickets. The implementation takes just hours, not weeks, and your team sees immediate value. From there, we gradually introduce additional capabilities like the Engineer App and voice agents, all while maintaining your current processes."
        },
        {
          question: "Do you offer demo or trial environments?",
          answer: "Currently we do not. Demand is extremely high and we currently do not have the capacity to spin up demo environments. To be useful, demo environments would require substantial integration work into your PSA and ingestion of IT Glue, SharePoint, Confluence, and other systems - which is a significant project for each prospect. However, in Q1 2026 we will offer a proof of concept demo environment with limited PSA integration for qualified customers. Until then, we're happy to provide detailed demonstrations of existing client environments and comprehensive onboarding once you're ready to move forward."
        },
        {
          question: "What if our client documentation is not up to date? How do you handle poor data quality?",
          answer: "This is common - no MSP has perfect documentation, and that's completely normal. The first several months of onboarding and use by your engineers will naturally expose weaknesses in your documentation. We track inaccurate or missing data in our backend and meet with you twice monthly to review what documentation needs to be improved or created. This process actually helps strengthen your overall documentation quality over time. Rather than being a barrier to getting started, imperfect documentation becomes an opportunity for systematic improvement guided by real-world AI usage patterns."
        }
      ]
    },
    {
      title: "Platform Capabilities & Features",
      faqs: [
        {
          question: "How does voice AI work for MSPs? Can AI actually handle phone calls?",
          answer: "Yes - we're the only MSP AI platform with comprehensive voice capabilities. Our Phone Intake Agent answers calls 24/7, gathers detailed information from clients, and creates complete tickets in ConnectWise, ServiceNow, or Halo PSA automatically. Our Conversation Monitor (coming soon) will join existing calls to auto-document everything discussed. This isn't just call forwarding - it's intelligent conversation handling that captures context, understands technical issues, and ensures zero information loss. MSPs using voice AI report 100% call capture and can provide true 24/7 support without adding staff."
        },
        {
          question: "What does the Teams end user bot do? How is it different than Enterprise Search for end users?",
          answer: "Our Teams bot creates a direct communication channel between your end users and engineers through Microsoft Teams. It's trained on common end user issues to deflect simple tickets, but when escalation is needed, it seamlessly creates tickets in your PSA (ConnectWise, ServiceNow, or Halo PSA) with full context. Updates flow bidirectionally - engineers can update tickets and end users see responses in Teams. Enterprise Search for end users is different - it's a standalone revenue-generating product you sell to clients for $250+ monthly, allowing them to search their own documentation and systems independently. The Teams bot is about communication and ticket management; Enterprise Search is about client self-service and recurring revenue."
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
          question: "How does AI integration work with our existing PSA tools?",
          answer: "Our platform integrates natively with ConnectWise, ServiceNow, Halo PSA, and Autotask through deep API connections, not just surface-level plugins. Tickets created by our voice agents appear instantly in your PSA with full context. Our Enterprise Search pulls data directly from your PSA, IT Glue, and your other tools to provide contextual results. The Engineer App works as an intelligent overlay - your technicians see AI-generated responses, time entries, and solutions right within their familiar interface. Everything syncs bidirectionally, so your existing workflows, reporting, and processes remain unchanged."
        },
        {
          question: "What PSA platforms do you integrate with?",
          answer: "We fully integrate with ConnectWise Manage (both on-premises and cloud-hosted versions), ServiceNow, and Halo PSA. All three platforms have complete integration with our Engineer App, Enterprise Search, Voice AI Agents, and branded chatbots. We also now fully support Autotask PSA. If you're using a different PSA and would like to see integration support, we'd love to hear from you - customer demand directly influences our integration roadmap."
        },
        {
          question: "Can your AI run inside my PSA?",
          answer: "No, not currently. It's easier for us to innovate rapidly by building our solutions inside our dedicated applications - the Engineer App, Manager App, and Enterprise Search for MSPs. This approach allows us to move fast with new features, updates, and improvements without being constrained by third-party platform limitations. While our apps integrate seamlessly with ConnectWise, ServiceNow, and Halo PSA through APIs for ticket creation, updates, and data sync, the AI functionality runs in our purpose-built environment where we can deliver the best possible experience."
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
          answer: "We're currently offering the Manager Application at no cost through the end of 2025 for existing Engineer App license holders. This 6-month complimentary access is in exchange for your valuable feedback and assistance with product direction and strategy. The Manager App will eventually be licensed per user, but we haven't established final pricing yet. This is a new offering and we want to ensure we build exactly what MSP leadership needs before setting pricing. If you're currently using the Engineer App, you can get immediate access to help shape this powerful management tool."
        },
        {
          question: "Do you charge for usage? What about all the tokens and conversations with Claude and ChatGPT?",
          answer: "No, we do not pass AI usage charges on to you. All the tokens, conversations, and processing with Claude, ChatGPT, and other AI engines are included in your licensing costs. We want our pricing to be extremely predictable - no surprise bills based on usage. If we encounter an overuse or abuse situation, we'll contact you directly to resolve the issue rather than charging overage fees. Our revenue grows as your MSP grows and as you sell AI solutions to your clients, creating a true partnership model rather than nickel-and-diming you for AI consumption."
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
          <div className="mt-16">
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="hidden md:flex justify-center">
                  <Image
                    src="/illustrations/bot3.png"
                    alt="AI Assistant ready to help"
                    width={280}
                    height={280}
                    className="w-48 h-48 lg:w-56 lg:h-56 object-contain"
                  />
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">More Questions?</h2>
                  <p className="text-xl text-gray-300 mb-6">
                    Let's meet!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}