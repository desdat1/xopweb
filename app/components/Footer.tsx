import Link from 'next/link'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  const solutions = [
    { name: 'Engineer Efficiency', href: '/solutions/engineer-efficiency' },
    { name: 'Service Desk Visibility', href: '/solutions/service-desk-visibility' },
    { name: 'Client Health & Retention', href: '/solutions/client-retention' },
    { name: 'Team Development', href: '/solutions/team-development' },
    { name: 'Client-Facing AI', href: '/solutions/client-facing-ai' },
    { name: 'AI Voice Solutions', href: '/solutions/voice-agents' },
  ]

  const apps = [
    { name: 'AI Engineer Assist', href: '/apps/engineer-assist' },
    { name: 'TECHS Command Centre', href: '/apps/manager-app' },
    { name: 'End User AI', href: '/apps/end-user-chatbot' },
  ]

  const resources = [
    { name: 'FAQs', href: '/resources/faq' },
    { name: 'News / Blog', href: '/blog' },
    { name: 'Integrations', href: '/solutions/integrated-stack' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="relative mt-20 border-t border-gray-800">
      {/* Partnership CTA Section */}
      <div className="bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 text-gradient">Ready to Transform Your MSP?</h3>
            <p className="text-gray-300 mb-6">
              Join forward-thinking MSPs leveraging AI to deliver exceptional service and drive growth
            </p>
            <Link
              href="https://xop.im/partner"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all"
            >
              Become a Partner
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <img src="/xop-logo.png" alt="xop.ai" className="h-16" />
              </div>
              <p className="text-gray-400 mb-6">
                AI Solutions Designed by MSPs, For MSPs. Powered by 30+ years of MSP experience.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="tel:202-525-8159" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>202-525-8159</span>
                </a>
                <a href="mailto:matt@xop.ai" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>matt@xop.ai</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <div>
                    <p>PO Box 14114</p>
                    <p>Myrtle Beach, SC 29587</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-bold mb-4 text-green-400">Solutions</h4>
              <ul className="space-y-2">
                {solutions.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apps */}
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Our Apps</h4>
              <ul className="space-y-2">
                {apps.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Company */}
            <div>
              <h4 className="font-bold mb-4 text-purple-400">Resources</h4>
              <ul className="space-y-2">
                {resources.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; 2026 xop.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}