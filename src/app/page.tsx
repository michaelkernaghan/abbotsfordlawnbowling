import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/images/albc-facebook-banner.jpg"
          alt="Abbotsford Lawn Bowling Club Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Abbotsford Lawn Bowling Club
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Join us for fun, fitness, and friendship through the sport of lawn bowling
            </p>
            <Link
              href="/membership"
              className="bg-white text-green-800 px-8 py-3 rounded-md font-semibold hover:bg-green-100 transition-colors"
            >
              Join Our Club
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Club?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Join a welcoming community of lawn bowling enthusiasts</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fitness</h3>
              <p className="text-gray-600">Stay active with this low-impact sport suitable for all ages</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              <p className="text-gray-600">Participate in regular tournaments and social gatherings</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Lawn Bowling</h2>
              <p className="text-gray-600 mb-4">
                Lawn bowling is a precision sport where players roll biased balls (called bowls) towards a smaller target ball called the "jack". It's a game of strategy, skill, and social interaction that can be enjoyed by people of all ages and abilities.
              </p>
              <p className="text-gray-600 mb-4">
                Our club, established in 1950, is located in the beautiful Jubilee Park in Abbotsford, BC. We offer a welcoming environment for both beginners and experienced players.
              </p>
              <Link
                href="/about"
                className="inline-block bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/albc-some-bowlers.jpg"
                alt="Lawn bowlers in action"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8">
            Become a member today and start enjoying the benefits of lawn bowling
          </p>
          <Link
            href="/membership"
            className="bg-white text-green-800 px-8 py-3 rounded-md font-semibold hover:bg-green-100 transition-colors"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  )
} 