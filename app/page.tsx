import React, { useState, useEffect } from 'react';
import { ChevronDown, BarChart3, Search, Users, Bot, ArrowRight, Check, Menu, X } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const products = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "MSP Enterprise Search",
      description: "Integrate ConnectWise, IT Glue, SharePoint. Reduce ticket resolution by 30-50%.",
      tag: "Powered by Rezolve.ai"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Engineer App v4",
      description: "AI assistant for engineers with ConnectWise Manage overlay.",
      tag: "Launching Sept 2025"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "MSP Client Bot",
      description: "White-labeled Teams chatbot for Level 1 ticket deflection.",
      tag: "Powered by Rezolve.ai"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "MSP Manager App",
      description: "AI-powered insights for service desk management.",
      tag: "Coming Dec 2025"
    }
  ];

  const stats = [
    { value: "28", label: "Years MSP Experience" },
    { value: "454%", label: "Year 1 ROI Average" },
    { value: "30M", label: "MSP Revenue Managed" },
    { value: "50%", label: "Ticket Reduction" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl">X</span>
              </div>
              <span className="text-xl font-bold">XOP.ai</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="hover:text-green-400 transition-colors">Solutions</a>
              <a href="#why" className="hover:text-green-400 transition-colors">Why XOP</a>
              <a href="#resources" className="hover:text-green-400 transition-colors">Resources</a>
              <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg transition-all transform hover:scale-105">
                Book Demo
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-6 py-4 space-y-4">
              <a href="#solutions" className="block hover:text-green-400">Solutions</a>
              <a href="#why" className="block hover:text-green-400">Why XOP</a>
              <a href="#resources" className="block hover:text-green-400">Resources</a>
              <button className="bg-green-500 w-full py-2 rounded-lg">Book Demo</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div 
            className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full mb-8"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <span className="text-sm font-medium">Exclusive MSP Partner for Rezolve.ai</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AI Solutions Designed
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              by MSPs, for MSPs
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
            28 years of MSP experience + cutting-edge Rezolve.ai technology = Real ROI for your business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105">
              See ROI Calculator
            </button>
            <button className="border border-gray-600 hover:border-green-500 px-8 py-4 rounded-lg text-lg font-medium transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-600" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-on-scroll"
                id={`stat-${index}`}
                style={{
                  opacity: isVisible[`stat-${index}`] ? 1 : 0,
                  transform: isVisible[`stat-${index}`] ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20" id="why">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="animate-on-scroll"
              id="problem-section"
              style={{
                opacity: isVisible['problem-section'] ? 1 : 0,
                transform: isVisible['problem-section'] ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'all 0.8s ease-out'
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We've sat in your chair
              </h2>
              <p className="text-xl text-gray-400 mb-6">
                After 28 years running a $30M MSP, I know the challenges you face daily. 
                That's why we've spent 4 years developing AI solutions that actually work in the real world.
              </p>
              <ul className="space-y-4">
                {[
                  "Keep clients happy & renewing",
                  "Achieve 50% gross margins",
                  "Enable business development",
                  "Generate new revenue streams"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl" />
              <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-4">Your Current Reality</h3>
                <div className="space-y-3 text-gray-400">
                  <p>❌ Engineers waste 40% of time searching for info</p>
                  <p>❌ Level 1 tickets eating into margins</p>
                  <p>❌ No visibility into service delivery metrics</p>
                  <p>❌ Clients demanding more for less</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">With XOP.ai</h3>
                  <div className="space-y-3">
                    <p>✅ 30-50% faster ticket resolution</p>
                    <p>✅ $11/endpoint new revenue stream</p>
                    <p>✅ 20-30% efficiency gains</p>
                    <p>✅ Happy clients = higher retention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-gray-900/50" id="solutions">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              MSP-First AI Solutions
            </h2>
            <p className="text-xl text-gray-400">
              Built specifically for MSPs, powered by enterprise-grade Rezolve.ai technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-black border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 animate-on-scroll"
                id={`product-${index}`}
                style={{
                  opacity: isVisible[`product-${index}`] ? 1 : 0,
                  transform: isVisible[`product-${index}`] ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-green-400">
                      {product.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-400">{product.tag}</span>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-green-400 group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl p-1">
            <div className="bg-black rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Calculate Your ROI
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-gray-400 mb-2">Number of Engineers</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none"
                    placeholder="10"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Avg Tickets/Month</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none"
                    placeholder="500"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 mb-2">Estimated Annual Savings</p>
                <p className="text-5xl font-bold text-green-400 mb-8">$127,000</p>
                <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105">
                  Get Full ROI Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500/20 to-blue-500/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your MSP?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join MSPs achieving 454% ROI in their first year
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105">
              Schedule a Demo
            </button>
            <button className="border border-gray-600 hover:border-green-500 px-8 py-4 rounded-lg text-lg font-medium transition-all">
              Download MSP Playbook
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl">X</span>
              </div>
              <span className="text-xl font-bold">XOP.ai</span>
            </div>
            <p className="text-gray-400">
              © 2025 XOP.ai - Exclusive MSP Partner for Rezolve.ai
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;