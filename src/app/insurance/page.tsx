import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Insurance Services | Flo Faction',
  description: 'Comprehensive insurance services including auto, home, life, health, and business insurance. Expert consultation and competitive rates for all your insurance needs.',
  keywords: 'insurance, auto insurance, home insurance, life insurance, health insurance, business insurance, insurance quotes',
  openGraph: {
    title: 'Insurance Services | Flo Faction',
    description: 'Comprehensive insurance services including auto, home, life, health, and business insurance. Expert consultation and competitive rates.',
    type: 'website',
    url: 'https://www.flofaction.com/insurance',
    siteName: 'Flo Faction LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance Services | Flo Faction',
    description: 'Comprehensive insurance services including auto, home, life, health, and business insurance. Expert consultation and competitive rates.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
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
              <Link href="/insurance" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
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
              Insurance Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive insurance solutions to protect what matters most. Get expert consultation and competitive rates for all your insurance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Get Free Quote
              </button>
              <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                View Coverage Options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Insurance Coverage Types
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive insurance solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Auto Insurance */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Auto Insurance</h3>
              <p className="text-gray-600 mb-6">
                Protect your vehicle and yourself with comprehensive auto insurance coverage at competitive rates.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Liability Coverage</li>
                <li>• Collision & Comprehensive</li>
                <li>• Uninsured Motorist</li>
                <li>• Roadside Assistance</li>
              </ul>
            </div>

            {/* Home Insurance */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Home Insurance</h3>
              <p className="text-gray-600 mb-6">
                Safeguard your home and belongings with comprehensive home insurance coverage.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Dwelling Coverage</li>
                <li>• Personal Property</li>
                <li>• Liability Protection</li>
                <li>• Additional Living Expenses</li>
              </ul>
            </div>

            {/* Life Insurance */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Life Insurance</h3>
              <p className="text-gray-600 mb-6">
                Secure your family's future with life insurance coverage that meets your needs and budget.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Term Life Insurance</li>
                <li>• Whole Life Insurance</li>
                <li>• Universal Life Insurance</li>
                <li>• Final Expense Coverage</li>
              </ul>
            </div>

            {/* Health Insurance */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Insurance</h3>
              <p className="text-gray-600 mb-6">
                Access quality healthcare with comprehensive health insurance plans for individuals and families.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Individual Health Plans</li>
                <li>• Family Coverage</li>
                <li>• Medicare Supplement</li>
                <li>• Dental & Vision</li>
              </ul>
            </div>

            {/* Business Insurance */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Insurance</h3>
              <p className="text-gray-600 mb-6">
                Protect your business with comprehensive commercial insurance coverage tailored to your industry.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• General Liability</li>
                <li>• Professional Liability</li>
                <li>• Commercial Property</li>
                <li>• Workers' Compensation</li>
              </ul>
            </div>

            {/* Specialty Insurance */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialty Insurance</h3>
              <p className="text-gray-600 mb-6">
                Unique coverage options for specialized needs including boats, RVs, and other valuable assets.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Boat & Watercraft</li>
                <li>• RV & Motorhome</li>
                <li>• Umbrella Insurance</li>
                <li>• Flood Insurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Free Insurance Quote
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and wewe'llapos;ll get back to you with a personalized quote
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Insurance Needed
                </label>
                <select
                  id="insuranceType"
                  name="insuranceType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select insurance type</option>
                  <option value="auto">Auto Insurance</option>
                  <option value="home">Home Insurance</option>
                  <option value="life">Life Insurance</option>
                  <option value="health">Health Insurance</option>
                  <option value="business">Business Insurance</option>
                  <option value="specialty">Specialty Insurance</option>
                  <option value="multiple">Multiple Types</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your insurance needs..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect What Matters Most?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get expert insurance consultation and find the perfect coverage for your needs at competitive rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Call Now: (772) 208-9646
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
      </footer>
              {/* ElevenLabs Conversation Widget - Insurance Agent */}
        <elevenlabs-convai agent-id="agent_9501ka7zqvgwfsrrzzxwyrshjmcx" />
        <script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          async
          type="text/javascript"
        />
    </div>
  );
}
