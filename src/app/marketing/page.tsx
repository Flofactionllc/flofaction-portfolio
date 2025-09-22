import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function MarketingPage() {
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
              <Link href="/insurance" className="text-gray-700 hover:text-blue-600 font-medium">
                Insurance
              </Link>
              <Link href="/music" className="text-gray-700 hover:text-blue-600 font-medium">
                Music
              </Link>
              <Link href="/emergency" className="text-gray-700 hover:text-blue-600 font-medium">
                Emergency
              </Link>
              <Link href="/videography" className="text-gray-700 hover:text-blue-600 font-medium">
                Videography
              </Link>
              <Link href="/marketing" className="text-blue-600 font-medium">
                Marketing
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
            Digital Marketing & Web Design Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered marketing strategies, web design, SEO optimization, and comprehensive digital solutions to grow your business
          </p>
        </div>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Digital Marketing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">🌐</div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Web Design & Development</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Custom website design and development</li>
                <li>Responsive design for all devices</li>
                <li>E-commerce and online store setup</li>
                <li>Content management systems</li>
                <li>Website maintenance and updates</li>
                <li>Performance optimization and speed</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">📈</div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">SEO & Digital Marketing</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Search engine optimization (SEO)</li>
                <li>Pay-per-click (PPC) advertising</li>
                <li>Social media marketing and management</li>
                <li>Content marketing and strategy</li>
                <li>Email marketing campaigns</li>
                <li>Analytics and performance tracking</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">🎯</div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">AI-Powered Solutions</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>AI-driven marketing automation</li>
                <li>Predictive analytics and insights</li>
                <li>Chatbot development and integration</li>
                <li>Personalized customer experiences</li>
                <li>Automated lead generation</li>
                <li>Smart content optimization</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-600">Web Design & Development</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Website Design (Small Business)</span>
                  <span className="font-semibold">$2,000-$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Website Design (Enterprise)</span>
                  <span className="font-semibold">$5,000-$15,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">E-commerce Store Setup</span>
                  <span className="font-semibold">$3,000-$10,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Website Maintenance</span>
                  <span className="font-semibold">$200-$500/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Custom Development</span>
                  <span className="font-semibold">$100-$200/hour</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-600">Digital Marketing Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">SEO Optimization</span>
                  <span className="font-semibold">$600-$2,500/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Social Media Management</span>
                  <span className="font-semibold">$600-$2,000/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">PPC Campaign Management</span>
                  <span className="font-semibold">$800-$3,000/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Content Marketing</span>
                  <span className="font-semibold">$1,200-$3,500/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Email Marketing</span>
                  <span className="font-semibold">$400-$1,500/month</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* AI-Powered Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI-Powered Marketing Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Marketing Automation</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Automated lead nurturing campaigns</li>
                <li>Smart email marketing sequences</li>
                <li>Behavioral targeting and personalization</li>
                <li>Automated social media posting</li>
                <li>Lead scoring and qualification</li>
                <li>Customer journey optimization</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Analytics & Insights</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Predictive analytics for customer behavior</li>
                <li>Real-time performance monitoring</li>
                <li>ROI tracking and optimization</li>
                <li>Competitive analysis and benchmarking</li>
                <li>Customer lifetime value prediction</li>
                <li>Market trend analysis and forecasting</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* What We Do vs What We Cannot Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service Expectations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">What We Will Do</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Design and develop professional websites</li>
                <li>Implement SEO best practices and optimization</li>
                <li>Create and manage digital marketing campaigns</li>
                <li>Provide detailed analytics and reporting</li>
                <li>Optimize for mobile and desktop performance</li>
                <li>Integrate AI-powered marketing tools</li>
                <li>Provide ongoing support and maintenance</li>
                <li>Deliver measurable results and ROI</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">What We Cannot Do</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Guarantee specific ranking positions</li>
                <li>Promise overnight success or instant results</li>
                <li>Provide legal advice or compliance services</li>
                <li>Guarantee specific conversion rates</li>
                <li>Work without proper content and materials</li>
                <li>Provide services without a signed agreement</li>
                <li>Guarantee results without client cooperation</li>
                <li>Provide unlimited revisions beyond scope</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology & Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-600">Web Development</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
                <li>Next.js, React, and TypeScript</li>
                <li>Tailwind CSS and modern frameworks</li>
                <li>Node.js and Express.js</li>
                <li>MongoDB and PostgreSQL databases</li>
                <li>Cloud hosting and CDN optimization</li>
                <li>SSL certificates and security</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-600">Marketing Tools</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
                <li>Google Analytics and Search Console</li>
                <li>Facebook Ads Manager and Instagram</li>
                <li>Mailchimp and email marketing platforms</li>
                <li>HubSpot and CRM integration</li>
                <li>SEMrush and SEO analysis tools</li>
                <li>Canva and design software</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-600">AI & Automation</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
                <li>ChatGPT and AI content generation</li>
                <li>Marketing automation platforms</li>
                <li>Predictive analytics tools</li>
                <li>Chatbot development frameworks</li>
                <li>Machine learning for optimization</li>
                <li>Custom AI solution development</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Local Business Website</h3>
              <p className="text-gray-700 mb-4">
                <strong>Client:</strong> South Florida Restaurant Chain<br/>
                <strong>Challenge:</strong> Outdated website with poor mobile experience<br/>
                <strong>Solution:</strong> Complete redesign with mobile-first approach<br/>
                <strong>Results:</strong> 300% increase in online orders, 150% improvement in mobile traffic
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Technologies Used:</strong> Next.js, Tailwind CSS, integrated online ordering system, 
                  SEO optimization, and social media integration.
                </p>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">E-commerce SEO Campaign</h3>
              <p className="text-gray-700 mb-4">
                <strong>Client:</strong> Online Retail Business<br/>
                <strong>Challenge:</strong> Low organic search visibility and traffic<br/>
                <strong>Solution:</strong> Comprehensive SEO strategy with content marketing<br/>
                <strong>Results:</strong> 400% increase in organic traffic, 250% improvement in conversion rate
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Strategy:</strong> Keyword research, technical SEO, content creation, 
                  link building, and ongoing optimization and monitoring.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact & Consultation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get Your Digital Marketing Strategy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-600">Ready to Grow Your Business?</h3>
              <p className="text-gray-700 mb-4">
                Whether you need a new website, digital marketing strategy, or AI-powered automation, 
                we&apos;re here to help your business succeed online with measurable results and 
                professional expertise.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold w-24">Email:</span>
                  <span className="text-green-600">flofactionllc@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24">Phone:</span>
                  <span className="text-green-600">(772) 208-9646</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24">Location:</span>
                  <span className="text-gray-600">Port St. Lucie, Florida</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24">Service Area:</span>
                  <span className="text-gray-600">Nationwide Remote Services</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-600">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/portfolio" className="block text-green-600 hover:text-green-800">
                  → View Complete Portfolio
                </Link>
                <Link href="/contact" className="block text-green-600 hover:text-green-800">
                  → Contact Form & Consultation
                </Link>
                <Link href="/videography" className="block text-green-600 hover:text-green-800">
                  → Videography & Photography
                </Link>
                <Link href="/music" className="block text-green-600 hover:text-green-800">
                  → Music & Creative Services
                </Link>
                <Link href="/emergency" className="block text-green-600 hover:text-green-800">
                  → Emergency Management
                </Link>
                <Link href="/insurance" className="block text-green-600 hover:text-green-800">
                  → Insurance & Financial Services
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
                  Digital marketing and web design solutions
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Marketing Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Web Design & Development</li>
                  <li>SEO & Digital Marketing</li>
                  <li>AI-Powered Solutions</li>
                  <li>Content Marketing</li>
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
