import Link from "next/link";

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-red-600">
                Flo Faction LLC
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600">Home</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-red-600">Portfolio</Link>
              <Link href="/insurance" className="text-gray-700 hover:text-red-600">Insurance</Link>
              <Link href="/music" className="text-gray-700 hover:text-red-600">Music</Link>
              <Link href="/emergency-management" className="text-red-600 font-semibold">Emergency Management</Link>
              <Link href="/videography" className="text-gray-700 hover:text-red-600">Videography</Link>
              <Link href="/marketing" className="text-gray-700 hover:text-red-600">Marketing</Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            GuardianAI Emergency Intelligence Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered emergency management system with 48+ hour early warning capabilities. 
            FastVLM, MLX, and satellite connectivity for comprehensive disaster preparedness.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Get Started
            </Link>
            <Link href="#features" className="border border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Advanced Emergency Management Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-600 mb-4">48+ Hour Early Warning</h3>
              <p className="text-gray-600">
                Advanced AI algorithms provide early warning of potential disasters up to 48 hours in advance, 
                giving communities crucial time to prepare and evacuate.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">FastVLM Integration</h3>
              <p className="text-gray-600">
                Apple&apos;s FastVLM technology enables real-time visual analysis of satellite imagery, 
                weather patterns, and environmental data for accurate threat assessment.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">MLX Optimization</h3>
              <p className="text-gray-600">
                MLX framework provides optimized machine learning processing on Apple Silicon, 
                ensuring fast and efficient emergency response calculations.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Satellite Connectivity</h3>
              <p className="text-gray-600">
                Direct satellite communication ensures emergency alerts reach communities even 
                when traditional communication networks are compromised.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Real-time Coordination</h3>
              <p className="text-gray-600">
                AI-powered coordination system manages emergency response teams, resources, 
                and evacuation routes in real-time for maximum efficiency.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Smart Transportation</h3>
              <p className="text-gray-600">
                Intelligent transportation management optimizes evacuation routes, 
                traffic flow, and emergency vehicle access during crisis situations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Florida Experience Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Florida Disaster Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Built with extensive experience in Florida&apos;s unique disaster landscape, 
                GuardianAI understands the specific challenges of hurricanes, flooding, 
                and other natural disasters common to the region.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">✓</span>
                  Hurricane tracking and prediction
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">✓</span>
                  Flood risk assessment
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">✓</span>
                  Evacuation route optimization
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">✓</span>
                  Emergency shelter management
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Current Clients</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Port St. Lucie Emergency Management</h4>
                  <p className="text-gray-600">Comprehensive emergency management system</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">St. Lucie County Fire Rescue</h4>
                  <p className="text-gray-600">Advanced fire and rescue coordination</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Florida Emergency Management</h4>
                  <p className="text-gray-600">State-wide disaster preparedness system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Model Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Business Model & Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">Basic Plan</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">$2,500/month</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>24-hour early warning</li>
                <li>Basic AI analysis</li>
                <li>Email alerts</li>
                <li>Standard support</li>
              </ul>
              <Link href="/contact" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Get Started
              </Link>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg text-center border-2 border-orange-500">
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">Professional Plan</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">$5,000/month</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>48-hour early warning</li>
                <li>Advanced AI analysis</li>
                <li>Multi-channel alerts</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <Link href="/contact" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Get Started
              </Link>
            </div>
            <div className="bg-yellow-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Enterprise Plan</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">Custom</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>72+ hour early warning</li>
                <li>Full AI suite</li>
                <li>Real-time coordination</li>
                <li>24/7 dedicated support</li>
                <li>Custom development</li>
              </ul>
              <Link href="/contact" className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Quick Links</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/portfolio" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Portfolio</h3>
              <p className="text-gray-600 text-sm">View our professional portfolio</p>
            </Link>
            <Link href="/insurance" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Insurance</h3>
              <p className="text-gray-600 text-sm">Insurance and financial services</p>
            </Link>
            <Link href="/music" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Music</h3>
              <p className="text-gray-600 text-sm">Music production and licensing</p>
            </Link>
            <Link href="/contact" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-600 text-sm">Get in touch with us</p>
            </Link>
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
                Professional business services including emergency management, 
                insurance, music production, and more.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/emergency-management" className="hover:text-white">Emergency Management</Link></li>
                <li><Link href="/insurance" className="hover:text-white">Insurance</Link></li>
                <li><Link href="/music" className="hover:text-white">Music Production</Link></li>
                <li><Link href="/videography" className="hover:text-white">Videography</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/marketing" className="hover:text-white">Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400">
                Port St. Lucie, FL<br />
                EIN: #85-2167111<br />
                <Link href="/contact" className="hover:text-white">Get in touch</Link>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Flo Faction LLC. All rights reserved.</p>
          </div>
        </div>
                {/* ElevenLabs Conversation Widget - Emergency Management Agent */}
                <elevenlabs-convai agent-id="agent_2101kcagw1hmexrbg0m48cb37knp" />
      </footer>
    </div>
  );
}

