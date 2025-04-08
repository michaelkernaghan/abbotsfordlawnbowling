export default function Membership() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Membership</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Become a Member?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Joining the Abbotsford Lawn Bowling Club gives you access to a welcoming community of lawn bowling 
              enthusiasts and a range of benefits designed to enhance your experience.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access to club facilities and equipment</li>
              <li>Participation in club tournaments and events</li>
              <li>Free coaching and skill development</li>
              <li>Social gatherings and community events</li>
              <li>Discounts on club merchandise</li>
              <li>Insurance coverage while playing</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Membership Types</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Full Membership</h4>
                <p className="text-gray-600">$150/year</p>
                <p className="text-sm text-gray-600">Includes all club privileges and voting rights</p>
              </div>
              <div>
                <h4 className="font-semibold">Junior Membership</h4>
                <p className="text-gray-600">$75/year</p>
                <p className="text-sm text-gray-600">For members under 18 years of age</p>
              </div>
              <div>
                <h4 className="font-semibold">Social Membership</h4>
                <p className="text-gray-600">$50/year</p>
                <p className="text-sm text-gray-600">For non-playing members who want to participate in social events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How to Join</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">1. Visit the Club</h3>
            <p className="text-gray-600">
              Come by during our open hours to meet members and see our facilities
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">2. Try the Sport</h3>
            <p className="text-gray-600">
              Take advantage of our free introductory sessions to learn the basics
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">3. Complete Application</h3>
            <p className="text-gray-600">
              Fill out the membership form and submit it with your payment
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Membership Application</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700">
                Membership Type
              </label>
              <select
                id="membershipType"
                name="membershipType"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="full">Full Membership</option>
                <option value="junior">Junior Membership</option>
                <option value="social">Social Membership</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          Have questions about membership? We're here to help!
        </p>
        <div className="bg-green-50 p-6 rounded-lg">
          <p className="text-gray-600">
            Email: info@abbotsfordlawnbowling.ca
          </p>
          <p className="text-gray-600">
            Phone: (555) 123-4567
          </p>
          <p className="text-gray-600">
            Address: Jubilee Park, Abbotsford, BC
          </p>
        </div>
      </section>
    </div>
  )
} 