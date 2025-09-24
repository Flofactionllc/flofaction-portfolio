import Link from 'next/link'

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Digital Marketing & Web Design</h1>
        <div className="text-center">
          <p className="text-lg mb-4">Comprehensive Digital Marketing and Web Design Services</p>
          <p className="text-gray-600 mb-8">SEO, marketing automation, and custom solutions</p>
          <Link href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
