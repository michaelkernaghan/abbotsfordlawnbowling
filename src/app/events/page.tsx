export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Events & Tournaments</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-800 text-white p-4">
              <h3 className="text-xl font-semibold">Spring Open Tournament</h3>
              <p className="text-sm">May 15-16, 2024</p>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Join us for our annual Spring Open Tournament. Open to all skill levels with prizes for winners.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Registration: $25</span>
                <button className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-800 text-white p-4">
              <h3 className="text-xl font-semibold">Beginner's Workshop</h3>
              <p className="text-sm">June 1, 2024</p>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Free workshop for new players. Learn the basics of lawn bowling from experienced coaches.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Free Event</span>
                <button className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-800 text-white p-4">
              <h3 className="text-xl font-semibold">Summer Social</h3>
              <p className="text-sm">July 20, 2024</p>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                Annual summer social event with BBQ, games, and friendly competitions.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Members Only</span>
                <button className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                  RSVP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Regular Events</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h3 className="font-semibold">Monday Night Social</h3>
                <p className="text-gray-600">Every Monday, 6:00 PM - 8:00 PM</p>
              </div>
              <span className="text-sm text-gray-500">Open to all</span>
            </div>
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h3 className="font-semibold">Wednesday League</h3>
                <p className="text-gray-600">Every Wednesday, 1:00 PM - 4:00 PM</p>
              </div>
              <span className="text-sm text-gray-500">Members only</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Saturday Morning Practice</h3>
                <p className="text-gray-600">Every Saturday, 9:00 AM - 12:00 PM</p>
              </div>
              <span className="text-sm text-gray-500">Open to all</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Event Calendar</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="aspect-w-16 aspect-h-9">
            {/* Calendar component or iframe would go here */}
            <div className="bg-gray-100 rounded-lg flex items-center justify-center h-64">
              <p className="text-gray-500">Calendar will be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Host Your Event</h2>
        <div className="bg-green-50 p-6 rounded-lg">
          <p className="text-gray-600 mb-4">
            Interested in hosting a tournament or event at our club? We offer excellent facilities and support for:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Corporate events</li>
            <li>Birthday parties</li>
            <li>Team building activities</li>
            <li>Community gatherings</li>
          </ul>
          <button className="bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors">
            Contact Us About Hosting
          </button>
        </div>
      </section>
    </div>
  )
} 