import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Flo Faction
              </Link>
            </div>
            <div className="flex items-center space-x-6">
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
                Emergency Management
              </Link>
              <Link href="/videography" className="text-gray-700 hover:text-blue-600 font-medium">
                Videography
              </Link>
              <Link href="/marketing" className="text-gray-700 hover:text-blue-600 font-medium">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Flo Faction LLC
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive business solutions, professional services, and creative excellence across multiple industries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Our Portfolio
            </Link>
            <Link
              href="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Insurance & Finance</h3>
            <p className="text-gray-600 mb-4">Life insurance, retirement planning, and financial consulting</p>
            <Link href="/insurance" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold mb-2">Music & Creative</h3>
            <p className="text-gray-600 mb-4">Sync licensing, audio engineering, and content creation</p>
            <Link href="/music" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl font-semibold mb-2">Emergency Management</h3>
            <p className="text-gray-600 mb-4">AI-powered emergency response and disaster management</p>
            <Link href="/emergency-management" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold mb-2">Videography & Photography</h3>
            <p className="text-gray-600 mb-4">Professional video production, photography, and content creation</p>
            <Link href="/videography" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-gray-600 mb-4">Web design, SEO, social media, and AI-powered marketing</p>
            <Link href="/marketing" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-semibold mb-2">Business Solutions</h3>
            <p className="text-gray-600 mb-4">AI implementation, consulting, and comprehensive business services</p>
            <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About Flo Faction LLC
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Flo Faction LLC (EIN #85-2167111) is a comprehensive business solutions provider led by Paul Edwards,
                CEO and Founder. With over 10 years of experience in AI technology, music industry expertise,
                and business development, we deliver innovative solutions across multiple industries.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team combines technical expertise with creative excellence, serving clients from Fortune 500
                companies to individual entrepreneurs. We specialize in insurance and financial services,
                music production and sync licensing, emergency management systems, and cutting-edge technology solutions.
              </p>
              <Link
                href="/portfolio"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Our Complete Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Flo Faction LLC</h3>
              <p className="text-gray-400">
                Comprehensive business solutions for the modern world
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/insurance" className="hover:text-white">Insurance & Finance</Link></li>
                <li><Link href="/music" className="hover:text-white">Music & Creative</Link></li>
                <li><Link href="/emergency-management" className="hover:text-white">Emergency Management</Link></li>
                <li><Link href="/videography" className="hover:text-white">Videography & Photography</Link></li>
                <li><Link href="/marketing" className="hover:text-white">Digital Marketing</Link></li>
                <li><Link href="/portfolio" className="hover:text-white">Business Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>flofactionllc@gmail.com</li>
                <li>(772) 208-9646</li>
                <li>Port St. Lucie, Florida</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Flo Faction LLC. All rights reserved. EIN #85-2167111</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
