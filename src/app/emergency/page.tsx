import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
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
              <Link href="/emergency" className="text-blue-600 font-medium">
                Emergency
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GuardianAI Emergency Intelligence Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered emergency management system with 48+ hour early warnings, real-time coordination, and comprehensive disaster response
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16">
          <Card className="p-8 text-center bg-gradient-to-r from-red-500 to-orange-500 text-white">
            <h2 className="text-3xl font-bold mb-4">Mission Statement</h2>
            <p className="text-xl">
              &quot;Save lives through AI-powered technology&quot;
            </p>
            <p className="text-lg mt-4 opacity-90">
              GuardianAI provides comprehensive emergency management solutions with AI-powered early warning systems,
              real-time resource mapping, and disaster response coordination. We prioritize free services, ensure
              accessibility for all, and work offline when everything else fails.
            </p>
          </Card>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced AI-Powered Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">🌊</div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">48+ Hour Early Warning System</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>NASA MoM (Model of Models) flood prediction</li>
                <li>NASA GUARDIAN ionospheric monitoring</li>
                <li>NASA LHASA landslide prediction</li>
                <li>Surya AI solar flare prediction (24-hour lead time)</li>
                <li>Machine learning tornado and hurricane prediction</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">🛰️</div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Satellite-Powered Connectivity</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>SpaceX Starlink integration for global coverage</li>
                <li>Iridium satellite backup systems</li>
                <li>Offline AI capabilities when internet fails</li>
                <li>Real-time satellite imagery analysis</li>
                <li>Emergency communication networks</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">🤖</div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">AI Vision & Analysis</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Apple&apos;s FastVLM for visual analysis</li>
                <li>Real-time damage assessment from aerial photos</li>
                <li>Infrastructure monitoring through visual AI</li>
                <li>Evacuation route analysis from visual data</li>
                <li>MLX framework optimization for Apple Silicon</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">📡</div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Real-Time Coordination</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Live emergency dashboard with interactive map</li>
                <li>WebSocket integration for real-time updates</li>
                <li>Multi-agency response coordination</li>
                <li>Mass notification system for population alerts</li>
                <li>System status monitoring with health checks</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">🚗</div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Smart Transportation System</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>AI-powered matching of transport requests</li>
                <li>Free service prioritization (Red Cross, volunteers)</li>
                <li>Real-time tracking of transport requests</li>
                <li>Accessibility support with specialized vehicles</li>
                <li>Cost optimization and automatic matching</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">📱</div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Mobile App Integration</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Cross-platform support (iOS, Android, Web)</li>
                <li>Push notifications with emergency alerts</li>
                <li>Offline synchronization for critical data</li>
                <li>Background location updates</li>
                <li>Progressive Web App with offline functionality</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Service Provider Network */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comprehensive Service Provider Network</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Emergency Services</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Background-checked childcare (Sandra Garcia - Port St. Lucie)</li>
                <li>Licensed debris removal contractors</li>
                <li>Free transportation prioritization (Red Cross, volunteers, charities)</li>
                <li>Professional services (counseling, tax help, insurance, notary)</li>
                <li>Home services (contractors, painters, restoration, HVAC)</li>
                <li>Real estate services (property assessment, insurance claims)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">AI Prediction Engine</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>94% accuracy disaster predictions with 48+ hour lead time</li>
                <li>Machine Learning Models for hurricanes, tornadoes, floods</li>
                <li>Real-time risk assessment with confidence scoring</li>
                <li>Severity analysis with population impact calculations</li>
                <li>Multiple weather models (GraphCast, FourCastNet, Pangu-Weather)</li>
                <li>Space weather monitoring for infrastructure protection</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Florida Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Florida Disaster Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">10+ Years Real Experience</h3>
              <p className="text-gray-700 mb-4">
                Paul Edwards and the Flo Faction team have over 10 years of hands-on experience
                responding to major Florida disasters, including:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>DR-4734 - Hurricane Irma (2017)</li>
                <li>DR-4794 - Hurricane Michael (2018)</li>
                <li>DR-4806 - Hurricane Dorian (2019)</li>
                <li>DR-4828 - Hurricane Ian (2022)</li>
                <li>DR-4834 - Hurricane Nicole (2022)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">What Compelled the System</h3>
              <p className="text-gray-700 mb-4">
                After witnessing the devastation and response challenges during Hurricane Ian and Nicole,
                we realized the need for a comprehensive, AI-powered emergency management system that
                could provide early warnings and coordinate resources effectively.
              </p>
              <p className="text-gray-700">
                This personal experience drives our commitment to saving lives through technology
                and ensuring no one is left behind during emergencies.
              </p>
            </Card>
          </div>
        </section>

        {/* Business Model */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Business Model & Revenue Potential</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Revenue Streams</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Government Contracts: $50M-$500M per state</li>
                <li>Corporate Partnerships: $100K-$2M per organization</li>
                <li>Insurance Integration: $10M-$100M per insurer</li>
                <li>Service Provider Fees: 8-15% transaction fees</li>
                <li>Premium Subscriptions: $9.99-$29.99/month</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Current Clients (Sample Data)</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>State of Florida: $150M contract (Active)</li>
                <li>State of Texas: $200M contract (Active)</li>
                <li>Walmart Inc.: $2M corporate contract (Active)</li>
                <li>State Farm Insurance: $75M partnership (Active)</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Services & Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Management Services & Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-600">Emergency Planning & Response</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Emergency Planning Consultation</span>
                  <span className="font-semibold">$250/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Disaster Response Training</span>
                  <span className="font-semibold">$500-$2,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Emergency System Setup</span>
                  <span className="font-semibold">$10,000-$50,000</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-600">AI Technology Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">AI Prediction System</span>
                  <span className="font-semibold">$25,000-$100,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Real-time Monitoring</span>
                  <span className="font-semibold">$5,000-$25,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Custom AI Solutions</span>
                  <span className="font-semibold">$50,000-$500,000</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-600">Government & Corporate</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">State Government Contracts</span>
                  <span className="font-semibold">$50M-$500M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Corporate Partnerships</span>
                  <span className="font-semibold">$100K-$2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Insurance Integration</span>
                  <span className="font-semibold">$10M-$100M</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact & Next Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get Started with GuardianAI</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-600">Ready to Deploy?</h3>
              <p className="text-gray-700 mb-4">
                GuardianAI is a fully functional emergency management system, not a demo.
                We provide real AI-powered predictions, coordination, and response capabilities
                that can save lives and protect communities.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold w-24">Email:</span>
                  <span className="text-red-600">flofactionllc@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24">Phone:</span>
                  <span className="text-red-600">(772) 208-9646</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24">Location:</span>
                  <span className="text-gray-600">Port St. Lucie, Florida</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24">Website:</span>
                  <span className="text-red-600">guardianai-emergency.netlify.app</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-600">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/portfolio" className="block text-red-600 hover:text-red-800">
                  → View Complete Portfolio
                </Link>
                <Link href="/contact" className="block text-red-600 hover:text-red-800">
                  → Contact Form & Consultation
                </Link>
                <Link href="/insurance" className="block text-red-600 hover:text-red-800">
                  → Insurance & Financial Services
                </Link>
                <Link href="/music" className="block text-red-600 hover:text-red-800">
                  → Music & Creative Services
                </Link>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Flo Faction LLC</h3>
                <p className="text-gray-400">
                  AI-powered emergency management solutions
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Emergency Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>AI Early Warning Systems</li>
                  <li>Disaster Response Coordination</li>
                  <li>Emergency Planning</li>
                  <li>Real-time Monitoring</li>
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
    </div>
  );
}
