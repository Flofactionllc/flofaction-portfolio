import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Flo Faction</h3>
            <p className="text-gray-400">
              Professional business services including insurance, music production, emergency management, videography, digital marketing, and AI solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/insurance" className="hover:text-white">Insurance</Link></li>
              <li><Link href="/music" className="hover:text-white">Music Production</Link></li>
              <li><Link href="/emergency-management" className="hover:text-white">Emergency Management</Link></li>
              <li><Link href="/videography" className="hover:text-white">Videography</Link></li>
              <li><Link href="/marketing" className="hover:text-white">Digital Marketing</Link></li>
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
    </footer>
  );
}