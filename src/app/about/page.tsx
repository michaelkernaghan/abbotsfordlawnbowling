import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">About Our Club</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              The Abbotsford Lawn Bowling Club, also known as the Jubilee Lawn Bowling Club, was established in 1950. 
              For over 70 years, we have been a cornerstone of the Abbotsford community, providing a welcoming space 
              for people to enjoy the sport of lawn bowling.
            </p>
            <p className="text-gray-600">
              Located in the beautiful Mill Lake Park, our club has grown from a small group of enthusiasts to a vibrant 
              community of players of all ages and skill levels.
            </p>
          </div>
          <div className="relative h-64">
            <Image
              src="/images/albc-mayor-bowling.jpg"
              alt="Mayor participating in lawn bowling"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is Lawn Bowling?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Lawn bowling is a precision sport where players roll biased balls (called bowls) towards a smaller 
              target ball called the "jack". The objective is to get your bowls as close as possible to the jack.
            </p>
            <p className="text-gray-600 mb-4">
              The game combines elements of strategy, skill, and social interaction, making it enjoyable for 
              players of all ages and abilities. It's a low-impact sport that provides both physical exercise 
              and mental stimulation.
            </p>
          </div>
          <div className="relative h-64">
            <Image
              src="/images/albc-bowlers-with-banner.jpg"
              alt="Lawn bowlers with club banner"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64">
            <Image
              src="/images/MillLakePark-map.png"
              alt="Mill Lake Park location map"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              Our club is located in Mill Lake Park, offering:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Well-maintained bowling greens</li>
              <li>Modern clubhouse facilities</li>
              <li>Equipment storage</li>
              <li>Social gathering spaces</li>
              <li>Accessible parking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Health Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Physical Health</h3>
            <p className="text-gray-600">
              Low-impact exercise that improves balance, coordination, and flexibility
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Mental Health</h3>
            <p className="text-gray-600">
              Strategic thinking and concentration help keep the mind sharp
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Social Benefits</h3>
            <p className="text-gray-600">
              Build friendships and connect with others in a welcoming environment
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="text-gray-600 mb-4">
          New to lawn bowling? No problem! We offer:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Beginner-friendly lessons</li>
          <li>Equipment provided for new players</li>
          <li>Coaching from experienced members</li>
          <li>Social events to meet other players</li>
        </ul>
        <a
          href="/membership"
          className="inline-block bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
        >
          Join Our Club
        </a>
      </section>
    </div>
  )
} 