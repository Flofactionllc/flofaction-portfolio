import React from 'react';
import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Digital Marketing & Web Design Services | Flo Faction',
  description: 'Comprehensive digital marketing and web design services including SEO, marketing automation, social media management, and custom web solutions.',
  keywords: 'digital marketing, web design, SEO, marketing automation, social media, web development, online marketing',
  openGraph: {
    title: 'Digital Marketing & Web Design Services | Flo Faction',
    description: 'Comprehensive digital marketing and web design services including SEO, marketing automation, and custom solutions.',
    type: 'website',
    url: 'https://www.flofaction.com/marketing',
    siteName: 'Flo Faction LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing & Web Design Services | Flo Faction',
    description: 'Comprehensive digital marketing and web design services including SEO, marketing automation, and custom solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Flo Faction
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium">
                Portfolio
              </Link>
              <Link href="/insurance" className="text-gray-700 hover:text-blue-600 font-medium">
                Insurance
              </Link>
              <Link href="/music" className="text-gray-700 hover:text-blue-600 font-medium">
                Music
              </Link>
              <Link href="/emergency-management" className="text-gray-700 hover:text-blue-600 font-medium">
                Emergency
              </Link>
              <Link href="/videography" className="text-gray-700 hover:text-blue-600 font-medium">
                Videography
              </Link>
              <Link href="/marketing" className="text-blue-600 font-semibold">
                Marketing
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing & Web Design
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive digital marketing and web design services to grow your business online. 
              From SEO and social media to custom web development and marketing automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete digital marketing solutions to help your business thrive online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO & Search Marketing */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO & Search Marketing</h3>
              <p className="text-gray-600 mb-6">
                Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Keyword Research & Strategy</li>
                <li>• On-Page Optimization</li>
                <li>• Technical SEO</li>
                <li>• Local SEO</li>
              </ul>
            </div>

            {/* Social Media Marketing */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Media Marketing</h3>
              <p className="text-gray-600 mb-6">
                Build your brand presence and engage with your audience across all major social media platforms.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Content Strategy & Creation</li>
                <li>• Community Management</li>
                <li>• Paid Social Advertising</li>
                <li>• Influencer Partnerships</li>
              </ul>
            </div>

            {/* Web Design & Development */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Design & Development</h3>
              <p className="text-gray-600 mb-6">
                Custom websites and web applications designed for performance, user experience, and conversions.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Custom Website Design</li>
                <li>• E-commerce Solutions</li>
                <li>• Mobile-First Development</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* Marketing Automation */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing Automation</h3>
              <p className="text-gray-600 mb-6">
                Streamline your marketing processes with automated campaigns, lead nurturing, and customer journey optimization.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Email Marketing Automation</li>
                <li>• Lead Nurturing Campaigns</li>
                <li>• Customer Journey Mapping</li>
                <li>• Analytics & Reporting</li>
              </ul>
            </div>

            {/* Content Marketing */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Marketing</h3>
              <p className="text-gray-600 mb-6">
                Create compelling content that attracts, engages, and converts your target audience across all channels.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Blog Writing & Strategy</li>
                <li>• Video Content Creation</li>
                <li>• Infographics & Visual Content</li>
                <li>• Content Distribution</li>
              </ul>
            </div>

            {/* Paid Advertising */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Paid Advertising</h3>
              <p className="text-gray-600 mb-6">
                Drive immediate results with targeted paid advertising campaigns across Google, Facebook, and other platforms.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Google Ads Management</li>
                <li>• Facebook & Instagram Ads</li>
                <li>• LinkedIn Advertising</li>
                <li>• Campaign Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology to deliver results-driven marketing campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We analyze your business, competitors, and target audience to create a comprehensive strategy.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a customized marketing plan with clear objectives and measurable KPIs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">We execute the strategy with high-quality content, campaigns, and technical implementation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">We continuously monitor, analyze, and optimize campaigns for maximum ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's work together to create a comprehensive digital marketing strategy that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Start Your Project
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Flo Faction</h3>
              <p className="text-gray-400">
                Professional business services including digital marketing, insurance, music production, and emergency management.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/marketing" className="hover:text-white">Digital Marketing</Link></li>
                <li><Link href="/insurance" className="hover:text-white">Insurance</Link></li>
                <li><Link href="/music" className="hover:text-white">Music Production</Link></li>
                <li><Link href="/emergency-management" className="hover:text-white">Emergency Management</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/videography" className="hover:text-white">Videography</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-400 space-y-2">
                <p>Email: flofaction.insurance@gmail.com</p>
                <p>Phone: +1 (772) 208-9646</p>
                <p>Location: Florida, USA</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Flo Faction LLC. All rights reserved.</p>
          </div>
        </div>
        
      {/* Creative Services AI Agent Widget */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Chat with Our Creative Services Specialist</h2>
            <p className="text-xl text-orange-50 max-w-2xl mx-auto">Get personalized creative solutions 24/7 with our AI-powered Creative Services specialist powered by ElevenLabs</p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <script src="https://convai.elevenlabs.io/conva.js" async></script>
            <elevenlabs-convai agent-id="agent_6001kca6z251frmbs8x6btw88tfr"></elevenlabs-convai>
          </div>
        </div>
      </section>
      </footer>
    </div>
  );
}
