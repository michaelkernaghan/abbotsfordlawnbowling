export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="membership">Membership Inquiry</option>
                    <option value="events">Event Information</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>

        <div>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    Jubilee Park<br />
                    Abbotsford, BC
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">
                    info@abbotsfordlawnbowling.ca
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">
                    (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Hours of Operation</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              {/* Map component or iframe would go here */}
              <p className="text-gray-500">Map will be displayed here</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 