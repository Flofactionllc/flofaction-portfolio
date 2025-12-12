import React from 'react';
import Link from "next/link";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './home.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <Navigation />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center space-y-8">
              {/* Animated Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white animate-fade-in-down">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-text-shimmer">
                    Flo Faction
                  </span>
                </h1>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
              </div>

              {/* Animated Tagline */}
              <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
                The Complete Business Intelligence Platform for Enterprise, Government, and Personal Solutions
              </p>

              {/* Company Overview */}
              <div className="grid md:grid-cols-2 gap-8 my-12 max-w-5xl mx-auto">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-200">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Who We Are</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Flo Faction is a comprehensive business intelligence and technology company serving Fortune 500 enterprises, government agencies, and personal clients. With proven expertise in AI development, financial intelligence, creative production, and strategic consulting.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
                  <h3 className="text-2xl font-bold text-pink-400 mb-4">Our Track Record</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Proven success in government contracting, AI research and development, enterprise software deployment, and creative media production. Trusted partner for mission-critical systems and innovative solutions.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up animation-delay-600">
                <Link href="#services" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50">
                  <span className="relative z-10">Explore Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
                <Link href="#contact" className="group relative px-8 py-4 border-2 border-purple-400 text-purple-300 font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-purple-500/20 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in">Our Expertise</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Enterprise-grade solutions across all major business domains</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* AI & Research */}
              <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105 animate-fade-in-up">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI & Research</h3>
                <p className="text-gray-300 mb-4">Cutting-edge AI development, machine learning solutions, and advanced research capabilities for enterprise transformation.</p>
                <div className="flex items-center text-cyan-400 group-hover:translate-x-2 transition-transform">Learn More →</div>
              </div>

              {/* Financial Intelligence */}
              <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 animate-fade-in-up animation-delay-200">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Financial Solutions</h3>
                <p className="text-gray-300 mb-4">Comprehensive financial intelligence, wealth management, insurance solutions, and investment advisory for individuals and enterprises.</p>
                <div className="flex items-center text-purple-400 group-hover:translate-x-2 transition-transform">Learn More →</div>
              </div>

              {/* Creative Media */}
              <div className="group bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl p-8 border border-pink-400/30 hover:border-pink-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:scale-105 animate-fade-in-up animation-delay-400">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Creative & Media</h3>
                <p className="text-gray-300 mb-4">Professional video production, audio engineering, music production, and multimedia content creation at the highest quality standards.</p>
                <div className="flex items-center text-pink-400 group-hover:translate-x-2 transition-transform">Learn More →</div>
              </div>

              {/* Government Contracting */}
              <div className="group bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-8 border border-amber-400/30 hover:border-amber-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 transform hover:scale-105 animate-fade-in-up animation-delay-600">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Government Solutions</h3>
                <p className="text-gray-300 mb-4">Specialized government contracting services, federal compliance solutions, and mission-critical system development.</p>
                <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform">Learn More →</div>
              </div>

              {/* Digital Marketing */}
              <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-8 border border-green-400/30 hover:border-green-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 transform hover:scale-105 animate-fade-in-up animation-delay-800">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Digital Marketing</h3>
                <p className="text-gray-300 mb-4">Strategic digital marketing, SEO optimization, social media management, and comprehensive web presence development.</p>
                <div className="flex items-center text-green-400 group-hover:translate-x-2 transition-transform">Learn More →</div>
              </div>

              {/* Business Consulting */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 animate-fade-in-up animation-delay-1000">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Business Consulting</h3>
                <p className="text-gray-300 mb-4">Strategic business consulting, enterprise transformation, operational optimization, and custom solution development.</p>
                <div className="flex items-center text-blue-400 group-hover:translate-x-2 transition-transform">Learn More →</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 animate-count-up">500+</div>
                <p className="text-gray-400 mt-2">Enterprise Clients</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 animate-count-up">50+</div>
                <p className="text-gray-400 mt-2">Government Contracts</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-pink-400 animate-count-up">1000+</div>
                <p className="text-gray-400 mt-2">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 animate-count-up">20+</div>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-400 mb-8 animate-fade-in-up">
              Partner with Flo Faction for enterprise-grade solutions backed by proven expertise and innovative technology.
            </p>
            <Link href="/contact" className="inline-block group relative px-12 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-cyan-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
              {/* ElevenLabs Conversation Widget - Main Assistant */}
        <elevenlabs-convai agent-id="agent_6801kca6phc8e9kr6kpk497eapsr" />
        <script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          async
          type="text/javascript"
        />
    </div>
  );
}
