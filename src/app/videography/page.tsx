import React from 'react';
import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Videography & Photography Services | Flo Faction',
  description: 'Professional videography and photography services including mobile and studio production with advanced equipment. High-quality visual content for all your needs.',
  keywords: 'videography, photography, video production, mobile production, studio production, visual content, professional photography',
  openGraph: {
    title: 'Videography & Photography Services | Flo Faction',
    description: 'Professional videography and photography services including mobile and studio production with advanced equipment.',
    type: 'website',
    url: 'https://www.flofaction.com/videography',
    siteName: 'Flo Faction LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Videography & Photography Services | Flo Faction',
    description: 'Professional videography and photography services including mobile and studio production with advanced equipment.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VideographyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
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
              Videography & Photography
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional videography and photography services with mobile and studio production capabilities. High-quality visual content for all your business and personal needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Get Quote
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                View Portfolio
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
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive visual content solutions for all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Production */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Video Production</h3>
              <p className="text-gray-600 mb-6">
                Professional video production services including corporate videos, promotional content, and event coverage.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Corporate Videos</li>
                <li>• Promotional Content</li>
                <li>• Event Coverage</li>
                <li>• Social Media Videos</li>
              </ul>
            </div>

            {/* Photography */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Photography</h3>
              <p className="text-gray-600 mb-6">
                Professional photography services including portraits, events, product photography, and commercial shoots.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Portrait Photography</li>
                <li>• Event Photography</li>
                <li>• Product Photography</li>
                <li>• Commercial Shoots</li>
              </ul>
            </div>

            {/* Mobile Production */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Production</h3>
              <p className="text-gray-600 mb-6">
                On-location video and photo production services with professional mobile equipment and setup.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• On-Location Shoots</li>
                <li>• Mobile Equipment</li>
                <li>• Flexible Scheduling</li>
                <li>• Quick Turnaround</li>
              </ul>
            </div>

            {/* Studio Production */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Studio Production</h3>
              <p className="text-gray-600 mb-6">
                Professional studio production with advanced lighting, sound equipment, and controlled environment.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Professional Studio</li>
                <li>• Advanced Lighting</li>
                <li>• High-Quality Audio</li>
                <li>• Controlled Environment</li>
              </ul>
            </div>

            {/* Post-Production */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Post-Production</h3>
              <p className="text-gray-600 mb-6">
                Professional video editing, color correction, and post-production services for polished final content.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Video Editing</li>
                <li>• Color Correction</li>
                <li>• Audio Enhancement</li>
                <li>• Motion Graphics</li>
              </ul>
            </div>

            {/* Equipment Rental */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Equipment Rental</h3>
              <p className="text-gray-600 mb-6">
                Professional camera, lighting, and audio equipment rental for your own production needs.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Camera Equipment</li>
                <li>• Lighting Systems</li>
                <li>• Audio Equipment</li>
                <li>• Accessories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Visual Content?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            LetLet'sapos;s work together to bring your vision to life with professional videography and photography services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Start Your Project
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
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
    </div>
  );
}