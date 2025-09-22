import Link from "next/link";
import { Card } from "@/components/ui/card";

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
              <Link href="/music" className="text-blue-600 font-medium">
                Music
              </Link>
              <Link href="/emergency-management" className="text-gray-700 hover:text-blue-600 font-medium">
                Emergency Management
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
            Music & Creative Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional music production, sync licensing, and creative services with industry-leading partnerships
          </p>
        </div>

        {/* Luap - The Artist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Luap - The Artist</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">About Luap</h3>
              <p className="text-gray-700 mb-4">
                Luap is the artistic persona of Paul Edwards, bringing together years of musical expertise,
                technical knowledge, and creative vision. With a unique blend of hip-hop, R&B, and contemporary
                sounds, Luap creates music that resonates across multiple platforms and audiences.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>100+ successful sync licensing placements</li>
                <li>Collaborations with major networks and streaming platforms</li>
                <li>Expertise in beat production and vocal engineering</li>
                <li>Strategic partnerships with top South Florida studios</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Musical Style & Expertise</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Genres</h4>
                  <p className="text-gray-600">Hip-Hop, R&B, Contemporary, Trap, Alternative</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Production Tools</h4>
                  <p className="text-gray-600">Fruity Loops (FL Studio), Pro Tools, Logic Pro, Ableton Live</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Specializations</h4>
                  <p className="text-gray-600">Beat Production, Vocal Engineering, Mixing, Mastering</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Fo Faction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fo Faction</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">About Fo Faction</h3>
              <p className="text-gray-700 mb-4">
                Fo Faction is the musical collective and production company that represents the creative
                vision of Luap and his collaborators. We specialize in creating high-quality music for
                sync licensing, commercial use, and artistic expression.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Original music production and composition</li>
                <li>Sync licensing for film, TV, and commercials</li>
                <li>Custom music for brands and businesses</li>
                <li>Collaborative projects with other artists</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Recent Projects</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Major Network Placements</h4>
                  <p className="text-sm text-gray-600">Netflix, Disney, major streaming platforms</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Commercial Campaigns</h4>
                  <p className="text-sm text-gray-600">Brand partnerships and advertising music</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Independent Releases</h4>
                  <p className="text-sm text-gray-600">Original tracks and collaborative projects</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Cryptk Collaboration */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cryptk - Production Partner</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">About Cryptk</h3>
              <p className="text-gray-700 mb-4">
                Cryptk is our in-house producer and creative director, bringing years of experience
                in beat production, sound design, and musical arrangement. His expertise in Fruity Loops
                and modern production techniques makes him an invaluable part of our creative team.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>100+ tracks produced for Fo Faction</li>
                <li>Expert in Fruity Loops (FL Studio)</li>
                <li>Specializes in trap, hip-hop, and contemporary beats</li>
                <li>Long-term collaboration with Luap and Fo Faction</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Production Capabilities</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Beat Production</h4>
                  <p className="text-gray-600">Original beats, custom compositions, and remixes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sound Design</h4>
                  <p className="text-gray-600">Unique sounds, samples, and audio effects</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Collaboration</h4>
                  <p className="text-gray-600">Working with artists, producers, and creative teams</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Studio Partnerships */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Studio Partnerships</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">LCP Studios (Port Saint Lucie)</h3>
              <p className="text-gray-700 mb-4">
                Our primary recording facility partnership with Lightchild, providing professional
                audio engineering and recording services. LCP Studios offers state-of-the-art
                equipment and acoustically treated spaces for high-quality productions.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Professional recording and mixing services</li>
                <li>State-of-the-art equipment and acoustics</li>
                <li>50+ projects completed together</li>
                <li>Lightchild partnership and collaboration</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Audio Nerds (South Florida)</h3>
              <p className="text-gray-700 mb-4">
                Premier recording studio with advanced mixing and mastering capabilities.
                Audio Nerds provides specialized services for high-end productions and
                commercial releases.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Advanced mixing and mastering services</li>
                <li>Specialized equipment for commercial releases</li>
                <li>30+ projects completed together</li>
                <li>Expertise in multiple genres and styles</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Services & Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Music Services & Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-600">Sync Licensing & Supervision</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Film & TV Placements</span>
                  <span className="font-semibold">$2,500-$10,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Commercial Campaigns</span>
                  <span className="font-semibold">$1,500-$7,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Music Supervision</span>
                  <span className="font-semibold">$200/hour</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-600">Audio Production & Engineering</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Recording & Mixing</span>
                  <span className="font-semibold">$100-$200/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Mastering Services</span>
                  <span className="font-semibold">$150-$300/track</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Vocal Engineering</span>
                  <span className="font-semibold">$75-$150/hour</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-600">Beat Production & Custom Music</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Original Beat Production</span>
                  <span className="font-semibold">$500-$2,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Custom Compositions</span>
                  <span className="font-semibold">$1,000-$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Full Song Production</span>
                  <span className="font-semibold">$2,000-$10,000</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact & Collaboration */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Let&apos;s Create Together</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-600">Ready to Collaborate?</h3>
              <p className="text-gray-700 mb-4">
                Whether you&apos;re looking for sync licensing, custom music production, or creative collaboration,
                we&apos;re here to bring your vision to life. Our team combines technical expertise with creative
                excellence to deliver exceptional results.
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
                <Link href="/emergency-management" className="block text-purple-600 hover:text-purple-800">
                  → Emergency Management Services
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
                  Music production and creative excellence
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Music Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Sync Licensing</li>
                  <li>Audio Production</li>
                  <li>Beat Production</li>
                  <li>Music Supervision</li>
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

