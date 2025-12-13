import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Portfolio | Flo Faction',
  description: 'Professional portfolio showcasing our expertise in AI systems, business consulting, insurance, music production, and emergency management services.',
  keywords: 'portfolio, AI systems, business consulting, insurance, music production, emergency management, professional services',
  openGraph: {
    title: 'Portfolio | Flo Faction',
    description: 'Professional portfolio showcasing our expertise in AI systems, business consulting, insurance, music production, and emergency management services.',
    type: 'website',
    url: 'https://www.flofaction.com/portfolio',
    siteName: 'Flo Faction LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Flo Faction',
    description: 'Professional portfolio showcasing our expertise in AI systems, business consulting, insurance, music production, and emergency management services.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
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
              <Link href="/portfolio" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Portfolio
              </Link>
              <Link href="/insurance" className="text-gray-700 hover:text-blue-600 font-medium">
                Insurance
              </Link>
              <Link href="/music" className="text-gray-700 hover:text-blue-600 font-medium">
                Music
              </Link>
              <Link href="/emergency" className="text-gray-700 hover:text-blue-600 font-medium">
                Emergency
              </Link>
              <Link href="/ai-services" className="text-gray-700 hover:text-blue-600 font-medium">
                AI Services
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
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of successful projects across AI systems, business consulting, insurance, music production, and emergency management.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse expertise across multiple industries and service areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Systems */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Systems</h3>
              <p className="text-gray-600 mb-6">
                Advanced AI solutions including machine learning models, automation systems, and intelligent business applications.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Custom AI Development</li>
                <li>• Machine Learning Models</li>
                <li>• Automation Systems</li>
                <li>• Business Intelligence</li>
              </ul>
            </div>

            {/* Business Consulting */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Consulting</h3>
              <p className="text-gray-600 mb-6">
                Strategic business consulting services to help organizations optimize operations and achieve growth objectives.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Strategic Planning</li>
                <li>• Process Optimization</li>
                <li>• Digital Transformation</li>
                <li>• Performance Analysis</li>
              </ul>
            </div>

            {/* Insurance Services */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Insurance Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive insurance solutions including auto, home, life, health, and business insurance coverage.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Auto Insurance</li>
                <li>• Home Insurance</li>
                <li>• Life Insurance</li>
                <li>• Business Insurance</li>
              </ul>
            </div>

            {/* Music Production */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Music Production</h3>
              <p className="text-gray-600 mb-6">
                Professional music production services including beat making, sync licensing, and custom compositions.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Beat Production</li>
                <li>• Sync Licensing</li>
                <li>• Custom Compositions</li>
                <li>• Audio Engineering</li>
              </ul>
            </div>

            {/* Emergency Management */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Management</h3>
              <p className="text-gray-600 mb-6">
                Professional emergency management services including disaster preparedness and response coordination.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Emergency Planning</li>
                <li>• Response Coordination</li>
                <li>• Community Resources</li>
                <li>• Training Programs</li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Marketing</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive digital marketing services including SEO, social media, and web design solutions.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• SEO Services</li>
                <li>• Social Media Marketing</li>
                <li>• Web Design</li>
                <li>• Content Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            LetLet'sapos;s discuss how our expertise can help your business succeed across any of these service areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Start a Project
            </Link>
            <Link href="/ai-services" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Explore AI Services
            </Link>
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
                Professional business services including insurance, music production, emergency management, and AI solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/insurance" className="hover:text-white">Insurance</Link></li>
                <li><Link href="/music" className="hover:text-white">Music Production</Link></li>
                <li><Link href="/emergency" className="hover:text-white">Emergency Management</Link></li>
                <li><Link href="/ai-services" className="hover:text-white">AI Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
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
                {/* ElevenLabs Conversation Widget - Portfolio Navigator */}
                <elevenlabs-convai agent-id="agent_7001kcah4rmff4fa13hz68jc0jw2" />
      </footer>
    </div>
  );
}
