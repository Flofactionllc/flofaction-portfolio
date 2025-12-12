import React from 'react';
import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'AI Services & AGI Development | Flo Faction',
  description: 'Advanced AI services including AGI development, autonomous systems, AI tool integration, and intelligent automation for business optimization.',
  keywords: 'AI services, AGI, artificial general intelligence, autonomous systems, AI automation, machine learning, AI integration',
  openGraph: {
    title: 'AI Services & AGI Development | Flo Faction',
    description: 'Advanced AI services including AGI development, autonomous systems, and intelligent automation.',
    type: 'website',
    url: 'https://www.flofaction.com/ai-services',
    siteName: 'Flo Faction LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Services & AGI Development | Flo Faction',
    description: 'Advanced AI services including AGI development, autonomous systems, and intelligent automation.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-purple-600">
                Flo Faction
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/portfolio" className="text-gray-700 hover:text-purple-600 font-medium">
                Portfolio
              </Link>
              <Link href="/insurance" className="text-gray-700 hover:text-purple-600 font-medium">
                Insurance
              </Link>
              <Link href="/music" className="text-gray-700 hover:text-purple-600 font-medium">
                Music
              </Link>
              <Link href="/emergency-management" className="text-gray-700 hover:text-purple-600 font-medium">
                Emergency
              </Link>
              <Link href="/videography" className="text-gray-700 hover:text-purple-600 font-medium">
                Videography
              </Link>
              <Link href="/marketing" className="text-gray-700 hover:text-purple-600 font-medium">
                Marketing
              </Link>
              <Link href="/ai-services" className="text-purple-600 font-semibold">
                AI Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Services & AGI Development
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advanced AI services focused on AGI development, autonomous systems, and intelligent automation. 
              Building the future of artificial intelligence for business optimization and autonomous operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start AI Integration
              </button>
              <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                View AI Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Capabilities & Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to enhance your business operations and move toward autonomous intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AGI Development */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AGI Development</h3>
              <p className="text-gray-600 mb-6">
                Advanced artificial general intelligence development focused on autonomous reasoning, learning, and decision-making capabilities.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Autonomous Reasoning Systems</li>
                <li>• Self-Learning Algorithms</li>
                <li>• Multi-Domain Intelligence</li>
                <li>• Cognitive Architecture Design</li>
              </ul>
            </div>

            {/* AI Tool Integration */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Tool Integration</h3>
              <p className="text-gray-600 mb-6">
                Seamless integration of cutting-edge AI tools and frameworks into your existing business systems and workflows.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Tool Discovery & Analysis</li>
                <li>• Automated Integration</li>
                <li>• Performance Optimization</li>
                <li>• Continuous Monitoring</li>
              </ul>
            </div>

            {/* Autonomous Systems */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Autonomous Systems</h3>
              <p className="text-gray-600 mb-6">
                Self-operating systems that can make decisions, execute tasks, and adapt without human intervention.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Self-Managing Workflows</li>
                <li>• Adaptive Decision Making</li>
                <li>• Automated Problem Solving</li>
                <li>• Continuous Self-Improvement</li>
              </ul>
            </div>

            {/* Machine Learning Pipeline */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ML Pipeline Development</h3>
              <p className="text-gray-600 mb-6">
                End-to-end machine learning pipelines for data processing, model training, and deployment automation.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Data Processing Automation</li>
                <li>• Model Training & Validation</li>
                <li>• Automated Deployment</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>

            {/* Intelligent Automation */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Automation</h3>
              <p className="text-gray-600 mb-6">
                Smart automation systems that learn from patterns and optimize business processes continuously.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Process Optimization</li>
                <li>• Predictive Analytics</li>
                <li>• Smart Workflow Design</li>
                <li>• Adaptive Automation</li>
              </ul>
            </div>

            {/* AI Research & Development */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI R&D Services</h3>
              <p className="text-gray-600 mb-6">
                Cutting-edge research and development in artificial intelligence, focusing on next-generation capabilities.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Advanced AI Research</li>
                <li>• Prototype Development</li>
                <li>• Technology Evaluation</li>
                <li>• Innovation Consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AGI Development Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AGI Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach to developing artificial general intelligence and autonomous systems
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Research & Analysis</h3>
              <p className="text-gray-600">Comprehensive analysis of current AI tools, frameworks, and methodologies to identify integration opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Architecture Design</h3>
              <p className="text-gray-600">Design intelligent system architecture that can adapt, learn, and evolve toward greater autonomy.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Build and deploy AI systems with autonomous capabilities and self-improvement mechanisms.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Evolution</h3>
              <p className="text-gray-600">Continuous monitoring, learning, and evolution of AI systems toward greater intelligence and autonomy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tool Integration Framework */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Tool Integration Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Systematic approach to discovering, evaluating, and integrating AI tools into your business ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Automated Tool Discovery</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">YouTube Channel Analysis</h4>
                    <p className="text-gray-600">Automated analysis of AI-focused YouTube channels to identify trending tools and technologies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tool Evaluation Matrix</h4>
                    <p className="text-gray-600">Comprehensive evaluation framework to assess AI tools for compatibility, performance, and integration potential.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automated Integration</h4>
                    <p className="text-gray-600">Seamless integration pipeline that automatically configures and deploys compatible AI tools.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Current AI Stack</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Core AI Framework</h4>
                  <p className="text-gray-600">Next.js, TypeScript, Tailwind CSS with AI integration capabilities</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Automation Systems</h4>
                  <p className="text-gray-600">Git-based synchronization, automated deployment, and monitoring systems</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Content Management</h4>
                  <p className="text-gray-600">Integrated CMS with AI-powered content generation and optimization</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Analytics & Intelligence</h4>
                  <p className="text-gray-600">Advanced analytics with machine learning insights and predictive capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build the Future of AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's work together to develop advanced AI systems and move toward artificial general intelligence and full autonomy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Start AI Development
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
      
      {/* ElevenLabs AI Agent */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Assistant - Powered by ElevenLabs
            </h2>
            <p className="text-lg text-gray-600">
              Get instant answers to your questions about AI services, emergency management, insurance, and more. Our intelligent assistant is available 24/7.
            </p>
          </div>

          {/* Language Selection */}
          <div className="mb-6 max-w-2xl mx-auto">
            <label htmlFor="language-select" className="block text-sm font-medium text-gray-700 mb-2">
              Select Language:
            </label>
            <select
              id="language-select"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            >
              <option value="en">English</option>
              <option value="es">Espanol (Spanish)</option>
              <option value="fr">Francais (French)</option>
              <option value="de">Deutsch (German)</option>
              <option value="it">Italiano (Italian)</option>
              <option value="pt">Portugues (Portuguese)</option>
              <option value="ja">Nihongo (Japanese)</option>
              <option value="zh">Zhongwen (Chinese)</option>
              <option value="ko">Hangugeo (Korean)</option>
            </select>
          </div>

          {/* ElevenLabs Agent Widget */}
          <div className="flex flex-col items-center justify-center mt-8">
            <div className="w-full max-w-2xl">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg">
                <div id="elevenlabs-agent" style={{minHeight: '500px'}}></div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Get answers anytime, day or night</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Multi-Language</h3>
              <p className="text-gray-600">Communicate in your preferred language</p>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Instant Responses</h3>
              <p className="text-gray-600">Fast and accurate information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Flo Faction</h3>
              <p className="text-gray-400">
                Professional business services including AI development, emergency management, insurance, and music production.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/ai-services" className="hover:text-white">AI Services</Link></li>
                <li><Link href="/emergency-management" className="hover:text-white">Emergency Management</Link></li>
                <li><Link href="/insurance" className="hover:text-white">Insurance</Link></li>
                <li><Link href="/music" className="hover:text-white">Music Production</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/marketing" className="hover:text-white">Marketing</Link></li>
                <li><Link href="/videography" className="hover:text-white">Videography</Link></li>
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
    </div>
  );
}
