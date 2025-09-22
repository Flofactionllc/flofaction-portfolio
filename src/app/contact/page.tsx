import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
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
              <Link href="/contact" className="text-blue-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Flo Faction LLC
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for comprehensive business solutions, professional services, and creative excellence
          </p>
        </div>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">flofactionllc@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(772) 208-9646</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Port St. Lucie, Florida</p>
                    <p className="text-sm text-gray-500">Serving clients nationwide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🏢</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Information</h3>
                    <p className="text-gray-600">Flo Faction LLC</p>
                    <p className="text-sm text-gray-500">EIN #85-2167111</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="insurance">Insurance & Financial Services</option>
                    <option value="music">Music & Creative Services</option>
                    <option value="emergency">Emergency Management</option>
                    <option value="technology">AI & Technology Solutions</option>
                    <option value="consulting">Business Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project or needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold mb-2">Insurance & Finance</h3>
              <p className="text-gray-600 text-sm mb-4">Life insurance, retirement planning, and financial consulting</p>
              <Link href="/insurance" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Learn More →
              </Link>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-lg font-semibold mb-2">Music & Creative</h3>
              <p className="text-gray-600 text-sm mb-4">Sync licensing, audio engineering, and content creation</p>
              <Link href="/music" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Learn More →
              </Link>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-lg font-semibold mb-2">Emergency Management</h3>
              <p className="text-gray-600 text-sm mb-4">AI-powered emergency response and disaster management</p>
              <Link href="/emergency" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Learn More →
              </Link>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-semibold mb-2">Business Solutions</h3>
              <p className="text-gray-600 text-sm mb-4">AI implementation, web development, and digital marketing</p>
              <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Learn More →
              </Link>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">How quickly do you respond to inquiries?</h3>
              <p className="text-gray-700">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly at (772) 208-9646.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Do you offer free consultations?</h3>
              <p className="text-gray-700">
                Yes! We offer free initial consultations for most services. This allows us to 
                understand your needs and provide customized recommendations.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">What areas do you serve?</h3>
              <p className="text-gray-700">
                While we're based in Port St. Lucie, Florida, we serve clients nationwide 
                for most services, especially insurance, technology, and music services.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">What makes Flo Faction different?</h3>
              <p className="text-gray-700">
                We combine technical expertise with creative excellence, offering comprehensive 
                solutions across multiple industries with a personal touch and proven results.
              </p>
            </Card>
          </div>
        </section>

        {/* Team Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Paul Edwards - CEO & Founder</h3>
              <p className="text-gray-700 mb-4">
                Paul brings over 10 years of experience in AI technology, music industry expertise, 
                and business development. He holds a Master's degree in Early Childhood Development 
                from Walden University and is a licensed insurance agent.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
                <li>CEO of Flo Faction LLC (EIN #85-2167111)</li>
                <li>Licensed insurance agent in Florida</li>
                <li>Music industry professional with 100+ placements</li>
                <li>AI technology consultant and implementer</li>
                <li>Emergency management specialist</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">L. Edwards - Co-Founder & Education Director</h3>
              <p className="text-gray-700 mb-4">
                L. Edwards brings extensive experience in education and childcare management, 
                with a Master's degree in Early Childhood Development from Walden University. 
                She's launching Little Sprouts Early Learning Center in Spring 2025.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
                <li>Master's degree in Early Childhood Development</li>
                <li>20+ years in education and childcare management</li>
                <li>Former owner of senior living care facility</li>
                <li>Co-owner of Flo Faction LLC and Flo Faction Insurance</li>
                <li>Currently authoring educational book</li>
              </ul>
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
                  Comprehensive business solutions for the modern world
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/insurance" className="hover:text-white">Insurance & Finance</Link></li>
                  <li><Link href="/music" className="hover:text-white">Music & Creative</Link></li>
                  <li><Link href="/emergency" className="hover:text-white">Emergency Management</Link></li>
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
    </div>
  );
}
