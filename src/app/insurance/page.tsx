import Link from "next/link";
import { Card } from "@/components/ui/card";

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
              <Link href="/insurance" className="text-blue-600 font-medium">
                Insurance
              </Link>
              <Link href="/music" className="text-gray-700 hover:text-blue-600 font-medium">
                Music
              </Link>
              <Link href="/emergency" className="text-gray-700 hover:text-blue-600 font-medium">
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
            Insurance & Financial Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive insurance solutions, retirement planning, and financial consulting to secure your future
          </p>
        </div>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Insurance & Financial Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">🛡️</div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Life Insurance</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Term Life Insurance</li>
                <li>Whole Life Insurance</li>
                <li>Universal Life Insurance</li>
                <li>Variable Life Insurance</li>
                <li>Final Expense Insurance</li>
              </ul>
              <div className="mt-4 text-sm text-gray-500">
                Starting at $25/month
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">💰</div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Retirement Planning</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>401(k) Management</li>
                <li>IRA Planning & Rollovers</li>
                <li>Annuity Solutions</li>
                <li>Pension Planning</li>
                <li>Social Security Optimization</li>
              </ul>
              <div className="mt-4 text-sm text-gray-500">
                Consultation: $150/hour
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">🏢</div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Business Insurance</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>General Liability</li>
                <li>Professional Liability</li>
                <li>Workers' Compensation</li>
                <li>Business Property</li>
                <li>Cyber Liability</li>
              </ul>
              <div className="mt-4 text-sm text-gray-500">
                Custom quotes available
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">🏥</div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Health Insurance</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Individual Health Plans</li>
                <li>Family Health Coverage</li>
                <li>Medicare Planning</li>
                <li>Supplemental Insurance</li>
                <li>Dental & Vision</li>
              </ul>
              <div className="mt-4 text-sm text-gray-500">
                Licensed in Florida
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Financial Consulting</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Investment Planning</li>
                <li>Estate Planning</li>
                <li>Tax Strategy</li>
                <li>Wealth Management</li>
                <li>Risk Assessment</li>
              </ul>
              <div className="mt-4 text-sm text-gray-500">
                $200/hour consultation
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">🚗</div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Auto & Property</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Auto Insurance</li>
                <li>Homeowners Insurance</li>
                <li>Renters Insurance</li>
                <li>Umbrella Coverage</li>
                <li>Flood Insurance</li>
              </ul>
              <div className="mt-4 text-sm text-gray-500">
                Competitive rates
              </div>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Flo Faction Insurance?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Our Expertise</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Licensed insurance agent in Florida</li>
                <li>10+ years of financial planning experience</li>
                <li>Specialized knowledge in life insurance and retirement planning</li>
                <li>Comprehensive understanding of tax implications</li>
                <li>Proven track record of client satisfaction</li>
                <li>Ongoing education and certification maintenance</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Our Approach</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Personalized financial assessments</li>
                <li>Customized insurance solutions</li>
                <li>Transparent pricing and explanations</li>
                <li>Ongoing support and policy reviews</li>
                <li>Claims assistance and advocacy</li>
                <li>Regular check-ins and updates</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Young Professional - Brandon</h3>
              <p className="text-gray-700 mb-4">
                <strong>Client:</strong> Brandon Lamont Battee, 38, Health and Safety Officer<br/>
                <strong>Challenge:</strong> Needed comprehensive life insurance with maximum cash value growth<br/>
                <strong>Solution:</strong> Whole Life policy with $400 base + $1,600 overfunding = $2,000 total monthly<br/>
                <strong>Result:</strong> Low death benefit, maximum overfunding for faster cash value growth
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Policy Details:</strong> MassMutual Access WL, $2,000 monthly premium, 
                  optimized for cash value accumulation and tax advantages.
                </p>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Retirement Planning Success</h3>
              <p className="text-gray-700 mb-4">
                <strong>Client:</strong> Mid-career professional, 45 years old<br/>
                <strong>Challenge:</strong> Maximize retirement savings and minimize tax burden<br/>
                <strong>Solution:</strong> Comprehensive retirement strategy with multiple vehicles<br/>
                <strong>Result:</strong> 40% increase in projected retirement income
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Strategy:</strong> 401(k) optimization, IRA rollover, annuity integration, 
                  and tax-efficient withdrawal planning.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Pricing & Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing & Packages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-600">Individual Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Life Insurance Consultation</span>
                  <span className="font-semibold">$150/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Retirement Planning</span>
                  <span className="font-semibold">$200/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Financial Consulting</span>
                  <span className="font-semibold">$200/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Policy Review & Analysis</span>
                  <span className="font-semibold">$100/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Claims Assistance</span>
                  <span className="font-semibold">$75/hour</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-600">Comprehensive Packages</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Complete Financial Planning</h4>
                  <p className="text-sm text-gray-600">Life insurance + retirement planning + investment strategy</p>
                  <span className="text-green-600 font-semibold">$2,500-$5,000</span>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Business Insurance Package</h4>
                  <p className="text-sm text-gray-600">General liability + professional liability + workers' comp</p>
                  <span className="text-green-600 font-semibold">$1,500-$3,000</span>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Family Protection Plan</h4>
                  <p className="text-sm text-gray-600">Life insurance + health + auto + home coverage</p>
                  <span className="text-green-600 font-semibold">$2,000-$4,000</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact & Consultation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get Your Free Consultation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-600">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-4">
                Schedule a free consultation to discuss your insurance and financial needs. 
                We'll provide a comprehensive assessment and customized recommendations 
                to help you achieve your financial goals.
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
                  <span className="font-semibold w-24">Hours:</span>
                  <span className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM EST</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-600">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/insurance/intake" className="block text-green-600 hover:text-green-800">
                  → Insurance Intake Form
                </Link>
                <Link href="/portfolio" className="block text-green-600 hover:text-green-800">
                  → View Complete Portfolio
                </Link>
                <Link href="/contact" className="block text-green-600 hover:text-green-800">
                  → Contact Form & Consultation
                </Link>
                <Link href="/music" className="block text-green-600 hover:text-green-800">
                  → Music & Creative Services
                </Link>
                <Link href="/emergency" className="block text-green-600 hover:text-green-800">
                  → Emergency Management
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
                  Licensed insurance and financial services
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Insurance Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Life Insurance</li>
                  <li>Retirement Planning</li>
                  <li>Business Insurance</li>
                  <li>Health Insurance</li>
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
              <p className="text-sm mt-2">Licensed Insurance Agent in Florida</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
