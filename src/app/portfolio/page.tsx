import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function PortfolioPage() {
  const H = (props: React.HTMLAttributes<HTMLHeadingElement>) =>
    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2" {...props} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Flo Faction Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions, professional services, and creative excellence across multiple industries
          </p>
        </div>

        {/* Paul Edwards - CEO & Founder */}
        <section className="mb-16">
          <H>Paul Edwards — CEO & Founder</H>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Professional Background</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>CEO of Flo Faction LLC (EIN #85-2167111) - Comprehensive business solutions provider</li>
                <li>10+ years in AI technology implementation and business process automation</li>
                <li>Master&apos;s degree in Early Childhood Development from Walden University</li>
                <li>Licensed insurance agent specializing in life insurance, retirement planning, and financial consulting</li>
                <li>Music industry professional with 100+ successful sync licensing placements</li>
                <li>Emergency management specialist with GuardianAI platform development</li>
                <li>Content creation and digital marketing expert with proven ROI results</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Core Business Services</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Insurance & Finance</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Life Insurance</li>
                    <li>• Retirement Planning</li>
                    <li>• Financial Consulting</li>
                    <li>• Business Insurance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Technology & AI</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI Implementation</li>
                    <li>• Business Automation</li>
                    <li>• Web Development</li>
                    <li>• Digital Marketing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Music & Creative</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sync Licensing</li>
                    <li>• Audio Engineering</li>
                    <li>• Beat Production</li>
                    <li>• Music Supervision</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Emergency & Media</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Emergency Management</li>
                    <li>• Videography</li>
                    <li>• Photography</li>
                    <li>• Content Creation</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Key Achievements & Metrics</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$2M+</div>
                  <div className="text-sm text-gray-600">Cost Savings Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Music Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">AI Implementations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* L. Edwards - Co-Founder */}
        <section className="mb-16">
          <H>L. Edwards — Co-Founder & Education Director</H>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Educational Background</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Master&apos;s degree in Early Childhood Development from Walden University</li>
                <li>20+ years experience in education and childcare management</li>
                <li>Former owner and operator of senior living care facility in Apopka, FL (1990s)</li>
                <li>Extensive experience from substitute teacher to director/owner roles</li>
                <li>Community leader with deep expertise in family services and program development</li>
                <li>Co-owner of Flo Faction LLC and Flo Faction Insurance</li>
                <li>Currently authoring educational book — coming soon</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Upcoming Venture</h3>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-gray-800 mb-2">Little Sprouts Early Learning Center</h4>
                <p className="text-gray-700 mb-3">
                  Opening Spring 2025 in Port St. Lucie, Florida
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Licensed early childhood education facility</li>
                  <li>• Ages 6 weeks to 5 years</li>
                  <li>• State-of-the-art learning environment</li>
                  <li>• Experienced, certified staff</li>
                  <li>• Flexible scheduling options</li>
                  <li>• Parent engagement programs</li>
                </ul>
                <div className="mt-3 text-sm text-blue-600 font-semibold">
                  Pre-enrollment now open • Contact: (772) 208-9646
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Business Services Overview */}
        <section className="mb-16">
          <H>Comprehensive Business Services</H>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Insurance & Financial Services</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Life Insurance (Term, Whole, Universal)</li>
                <li>• Retirement Planning & 401(k) Management</li>
                <li>• Business Insurance & Risk Management</li>
                <li>• Financial Consulting & Investment Planning</li>
                <li>• Estate Planning & Wealth Transfer</li>
                <li>• Health Insurance & Medicare Planning</li>
              </ul>
              <div className="mt-4 text-xs text-gray-500">
                Licensed in Florida • Licensed Insurance Agent
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Technology & AI Solutions</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI System Implementation & Integration</li>
                <li>• Business Process Automation</li>
                <li>• Web Design & Development</li>
                <li>• Digital Marketing & SEO</li>
                <li>• Predictive Analytics & Data Visualization</li>
                <li>• Emergency Management Systems</li>
              </ul>
              <div className="mt-4 text-xs text-gray-500">
                Python, JavaScript, React, Next.js • AWS Certified
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Music & Creative Services</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sync Licensing & Music Supervision</li>
                <li>• Audio Engineering & Production</li>
                <li>• Beat Production & Sound Design</li>
                <li>• Videography & Photography</li>
                <li>• Content Creation & Marketing</li>
                <li>• Studio Coordination & Management</li>
              </ul>
              <div className="mt-4 text-xs text-gray-500">
                Pro Tools, Fruity Loops • LCP Studios Partnership
              </div>
            </Card>
          </div>
        </section>

        {/* Key Partnerships & Collaborations */}
        <section className="mb-16">
          <H>Key Partnerships & Collaborations</H>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Music Industry Partners</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">LCP Studios (Port Saint Lucie)</h4>
                  <p className="text-sm text-gray-600">Lightchild Partnership - Full-service recording facility with professional audio engineering</p>
                  <span className="text-xs text-blue-600">50+ projects completed</span>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Audio Nerds (South Florida)</h4>
                  <p className="text-sm text-gray-600">Premier recording studio with advanced mixing and mastering capabilities</p>
                  <span className="text-xs text-blue-600">30+ projects completed</span>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Cryptk (In-house Producer)</h4>
                  <p className="text-sm text-gray-600">Beat production specialist and creative director with long-term collaboration</p>
                  <span className="text-xs text-blue-600">100+ tracks produced</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Business & Technology Partners</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Fortune 500 Companies</h4>
                  <p className="text-sm text-gray-600">AI implementation and business process optimization</p>
                  <span className="text-xs text-green-600">$2M+ in cost savings delivered</span>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Government Agencies</h4>
                  <p className="text-sm text-gray-600">Emergency management and disaster response systems</p>
                  <span className="text-xs text-green-600">GuardianAI platform deployed</span>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Startups & Scale-ups</h4>
                  <p className="text-sm text-gray-600">Technology consulting and growth acceleration</p>
                  <span className="text-xs text-green-600">95% client satisfaction rate</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Service Pricing */}
        <section className="mb-16">
          <H>Service Pricing & Packages</H>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Professional Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">AI Consultation & Strategy</span>
                  <span className="font-semibold">$200/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Insurance & Financial Consulting</span>
                  <span className="font-semibold">$150/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Web Design & Development</span>
                  <span className="font-semibold">$5,000-$25,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Digital Marketing Campaigns</span>
                  <span className="font-semibold">$2,000-$10,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Emergency Management Systems</span>
                  <span className="font-semibold">$10,000-$50,000</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Music & Creative Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sync Licensing & Supervision</span>
                  <span className="font-semibold">$2,500-$10,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Audio Production & Engineering</span>
                  <span className="font-semibold">$100-$200/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Beat Production</span>
                  <span className="font-semibold">$500-$2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Videography & Photography</span>
                  <span className="font-semibold">$1,000-$5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Content Creation & Marketing</span>
                  <span className="font-semibold">$1,500-$7,500</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact & Next Steps */}
        <section>
          <H>Contact & Next Steps</H>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-semibold w-24">Email:</span>
                  <span className="text-blue-600">flofactionllc@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24">Phone:</span>
                  <span className="text-blue-600">(772) 208-9646</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24">Location:</span>
                  <span className="text-gray-600">Port St. Lucie, Florida</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24">Hours:</span>
                  <span className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM EST</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/emergency" className="block text-blue-600 hover:text-blue-800">
                  → GuardianAI Emergency Management Platform
                </Link>
                <Link href="/music" className="block text-blue-600 hover:text-blue-800">
                  → Music Projects & Sync Licensing
                </Link>
                <Link href="/insurance" className="block text-blue-600 hover:text-blue-800">
                  → Insurance & Financial Services
                </Link>
                <Link href="/contact" className="block text-blue-600 hover:text-blue-800">
                  → Contact Form & Consultation Request
                </Link>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Flo Faction LLC • EIN #85-2167111 • Licensed in Florida</p>
          <p>Comprehensive business solutions for the modern world</p>
        </div>
      </div>
    </div>
  );
}
