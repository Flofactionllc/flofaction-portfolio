import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Music & Sync Licensing | Flo Faction',
  description: 'Professional music production, beat making, sync licensing, and audio engineering services. Custom compositions and music licensing for film, TV, and commercial projects.',
  keywords: 'music production, beat making, sync licensing, audio engineering, custom music, film music, commercial music, music licensing',
  openGraph: {
    title: 'Music & Sync Licensing | Flo Faction',
    description: 'Professional music production, beat making, sync licensing, and audio engineering services. Custom compositions and music licensing.',
    type: 'website',
    url: 'https://www.flofaction.com/music',
    siteName: 'Flo Faction LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Music & Sync Licensing | Flo Faction',
    description: 'Professional music production, beat making, sync licensing, and audio engineering services. Custom compositions and music licensing.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
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
              <Link href="/music" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
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
              Music & Sync Licensing
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional music production, beat making, and sync licensing services. Custom compositions and music licensing for film, TV, and commercial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Request Music Quote
              </button>
              <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Listen to Our Work
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
              Music Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive music production and licensing solutions for all your creative needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beat Production */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Beat Production</h3>
              <p className="text-gray-600 mb-6">
                Professional beat making and music production services for artists, producers, and content creators.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Custom Beat Creation</li>
                <li>• Genre-Specific Production</li>
                <li>• Mixing & Mastering</li>
                <li>• Stems & Trackouts</li>
              </ul>
            </div>

            {/* Sync Licensing */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sync Licensing</h3>
              <p className="text-gray-600 mb-6">
                Music licensing for film, TV, commercials, and digital content. Professional sync placement services.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Film & TV Licensing</li>
                <li>• Commercial Music</li>
                <li>• Digital Content</li>
                <li>• Royalty Management</li>
              </ul>
            </div>

            {/* Custom Composition */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Composition</h3>
              <p className="text-gray-600 mb-6">
                Original music composition and arrangement services tailored to your specific project requirements.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Original Compositions</li>
                <li>• Arrangement Services</li>
                <li>• Orchestration</li>
                <li>• Sound Design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Music Store Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Music Store
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our collection of professional beats and tracks available for licensing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Beat 1 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hip-Hop Beat</h3>
              <p className="text-sm text-gray-600 mb-4">Dark trap beat with heavy 808s</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-purple-600">$49</span>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                  Preview
                </button>
              </div>
            </div>

            {/* Beat 2 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pop Instrumental</h3>
              <p className="text-sm text-gray-600 mb-4">Upbeat pop track with catchy melody</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">$39</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  Preview
                </button>
              </div>
            </div>

            {/* Beat 3 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">R&B Soul</h3>
              <p className="text-sm text-gray-600 mb-4">Smooth R&B track with soulful vibes</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">$59</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                  Preview
                </button>
              </div>
            </div>

            {/* Beat 4 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-red-400 to-orange-400 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Electronic</h3>
              <p className="text-sm text-gray-600 mb-4">High-energy electronic dance track</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-red-600">$69</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors">
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Music?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            LetLet'sapos;s work together to bring your musical vision to life with professional production and licensing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Start Your Project
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Browse Music Library
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
                {/* ElevenLabs Conversation Widget - Music Production Specialist */}
                <elevenlabs-convai agent-id="agent_3701kcagrryxep98ckfd4ssn00sz" />
      </footer>
    </div>
  );
}
