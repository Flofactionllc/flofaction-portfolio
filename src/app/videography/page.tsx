import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function VideographyPage() {
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
              <Link href="/music" className="text-gray-700 hover:text-blue-600 font-medium">
                Music
              </Link>
              <Link href="/emergency" className="text-gray-700 hover:text-blue-600 font-medium">
                Emergency
              </Link>
              <Link href="/videography" className="text-blue-600 font-medium">
                Videography
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
            Professional Videography & Photography Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality video production, photography, and content creation for businesses, events, and creative projects
          </p>
        </div>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Video & Photo Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">🎬</div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Video Production</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Corporate videos and commercials</li>
                <li>Event coverage and documentation</li>
                <li>Music videos and creative content</li>
                <li>Social media video content</li>
                <li>Training and educational videos</li>
                <li>Real estate and property videos</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">📸</div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Photography Services</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Professional headshots and portraits</li>
                <li>Event photography and coverage</li>
                <li>Product photography for businesses</li>
                <li>Real estate and architectural photos</li>
                <li>Lifestyle and family photography</li>
                <li>Commercial and advertising photography</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl mb-4 text-center">✂️</div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Post-Production & Editing</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Professional video editing and color grading</li>
                <li>Photo editing and retouching</li>
                <li>Motion graphics and animation</li>
                <li>Audio editing and sound design</li>
                <li>Multi-format delivery and optimization</li>
                <li>Custom graphics and branding integration</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-600">Videography Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Video Production (Per Hour)</span>
                  <span className="font-semibold">$150-$750</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Video Production (Per Day)</span>
                  <span className="font-semibold">$750-$4,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Video Production (Per Project)</span>
                  <span className="font-semibold">$1,500-$15,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Video Editing (Your Videos)</span>
                  <span className="font-semibold">$75-$400/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Additional Copies</span>
                  <span className="font-semibold">10 Free Copies</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Revisions</span>
                  <span className="font-semibold">3 Included</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-600">Photography Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Photo Shoots (Per Hour)</span>
                  <span className="font-semibold">$75-$350</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Photo Shoots (Per Day)</span>
                  <span className="font-semibold">$500-$3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Photo Shoots (Per Project)</span>
                  <span className="font-semibold">$750-$10,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Photo Editing (Your Photos)</span>
                  <span className="font-semibold">$75-$300/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Additional Copies</span>
                  <span className="font-semibold">10 Free Copies</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Revisions</span>
                  <span className="font-semibold">3 Included</span>
                </div>
              </div>
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
                <li>Provide professional videography and photography services</li>
                <li>Deliver high-quality image and video capture</li>
                <li>Offer post-production editing and enhancement</li>
                <li>Provide event documentation and coverage</li>
                <li>Deliver files in multiple formats as requested</li>
                <li>Include 3 rounds of revisions in project pricing</li>
                <li>Provide 10 free additional copies per project</li>
                <li>Maintain professional equipment and backup systems</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">What We Cannot Do</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Guarantee viral success or social media growth</li>
                <li>Ensure brand recognition or guaranteed engagement</li>
                <li>Provide ongoing social media management</li>
                <li>Create guaranteed marketing results</li>
                <li>Provide unlimited revisions beyond included rounds</li>
                <li>Work without proper advance notice and planning</li>
                <li>Provide services without a deposit for large projects</li>
                <li>Guarantee specific weather conditions for outdoor shoots</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Client Preparation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Client Preparation Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Before Your Session</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Plan your content and shot list in advance</li>
                <li>Prepare any props, wardrobe, or materials needed</li>
                <li>Arrive well-rested and prepared</li>
                <li>Have backup copies of any reference materials</li>
                <li>Know your project goals and intended use</li>
                <li>Communicate any specific requirements or preferences</li>
                <li>Ensure all participants are aware of the schedule</li>
                <li>Have a backup plan for weather-dependent shoots</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Information to Bring</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Project brief and creative direction</li>
                <li>Reference examples of desired style</li>
                <li>Brand guidelines and color schemes</li>
                <li>Contact information for all participants</li>
                <li>Location details and access information</li>
                <li>Timeline and delivery requirements</li>
                <li>Usage rights and licensing needs</li>
                <li>Budget range and payment preferences</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Equipment & Technology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Equipment & Technology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-600">Video Equipment</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
                <li>Professional 4K cameras and lenses</li>
                <li>Stabilization systems and gimbals</li>
                <li>Professional lighting equipment</li>
                <li>High-quality audio recording systems</li>
                <li>Drone capabilities for aerial footage</li>
                <li>Backup equipment and redundancy systems</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-600">Photography Equipment</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
                <li>Professional DSLR and mirrorless cameras</li>
                <li>Full range of professional lenses</li>
                <li>Studio lighting and portable flash systems</li>
                <li>Backdrop and studio equipment</li>
                <li>Professional tripods and support systems</li>
                <li>Memory cards and backup storage</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-600">Post-Production Software</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
                <li>Adobe Creative Suite (Premiere Pro, After Effects)</li>
                <li>Final Cut Pro and DaVinci Resolve</li>
                <li>Adobe Photoshop and Lightroom</li>
                <li>Professional color grading tools</li>
                <li>Audio editing and mixing software</li>
                <li>Motion graphics and animation tools</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Portfolio Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Portfolio Examples</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Recent Projects</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Corporate Training Video</h4>
                  <p className="text-sm text-gray-600">Multi-camera production with professional editing and graphics</p>
                  <span className="text-xs text-purple-600">$3,500 project</span>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Real Estate Property Tour</h4>
                  <p className="text-sm text-gray-600">Drone footage with professional editing and music</p>
                  <span className="text-xs text-purple-600">$1,200 project</span>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Event Photography Coverage</h4>
                  <p className="text-sm text-gray-600">Full-day event with 500+ edited photos delivered</p>
                  <span className="text-xs text-purple-600">$2,000 project</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Specializations</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Music video production and editing</li>
                <li>Corporate and business content creation</li>
                <li>Event coverage and documentation</li>
                <li>Real estate and property marketing</li>
                <li>Social media content creation</li>
                <li>Training and educational videos</li>
                <li>Product photography and advertising</li>
                <li>Portrait and lifestyle photography</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Contact & Booking */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Book Your Project</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-600">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-4">
                Whether you need professional videography, photography, or content creation, 
                we&apos;re here to bring your vision to life with high-quality production 
                and professional results.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold w-24">Email:</span>
                  <span className="text-purple-600">flofactionllc@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24">Phone:</span>
                  <span className="text-purple-600">(772) 208-9646</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24">Location:</span>
                  <span className="text-gray-600">Port St. Lucie, Florida</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24">Service Area:</span>
                  <span className="text-gray-600">South Florida & Travel Available</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-600">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/portfolio" className="block text-purple-600 hover:text-purple-800">
                  → View Complete Portfolio
                </Link>
                <Link href="/contact" className="block text-purple-600 hover:text-purple-800">
                  → Contact Form & Consultation
                </Link>
                <Link href="/music" className="block text-purple-600 hover:text-purple-800">
                  → Music & Creative Services
                </Link>
                <Link href="/emergency" className="block text-purple-600 hover:text-purple-800">
                  → Emergency Management
                </Link>
                <Link href="/insurance" className="block text-purple-600 hover:text-purple-800">
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
                  Professional videography and photography services
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Video & Photo Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Video Production</li>
                  <li>Photography</li>
                  <li>Post-Production</li>
                  <li>Content Creation</li>
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
