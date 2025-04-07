import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Abbotsford Lawn Bowling Club
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Where Tradition Meets Community
            </p>
            <button className="btn btn-primary">
              Join Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Learn to Bowl</h3>
              <p>Beginner-friendly lessons and coaching available for all ages.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Social Events</h3>
              <p>Regular social gatherings and tournaments throughout the season.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p>Join our friendly community of lawn bowling enthusiasts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Our Club</h2>
              <p className="mb-4">
                The Abbotsford Lawn Bowling Club, also known as the Jubilee Lawn Bowling Club,
                has been a cornerstone of the community for decades. We welcome players of all
                skill levels to enjoy this traditional sport in a friendly, inclusive environment.
              </p>
              <button className="btn btn-secondary">
                Learn More
              </button>
            </div>
            <div className="relative h-64 md:h-96">
              {/* Placeholder for club image */}
              <div className="absolute inset-0 bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 