import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Abbotsford Lawn Bowling Club</h3>
            <p className="mb-4">
              Located at Jubilee Park, Abbotsford, BC
            </p>
            <p>
              Promoting the sport of lawn bowling in our community since 1950.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-green-400">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-green-400">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Email: info@abbotsfordlawnbowling.ca</p>
            <p className="mb-4">Phone: (555) 123-4567</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400">
                Facebook
              </a>
              <a href="#" className="hover:text-green-400">
                Twitter
              </a>
              <a href="#" className="hover:text-green-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Abbotsford Lawn Bowling Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 