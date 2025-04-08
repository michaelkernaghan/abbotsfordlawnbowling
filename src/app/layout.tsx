import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abbotsford Lawn Bowling Club',
  description: 'Welcome to the Abbotsford Lawn Bowling Club, located in Mill Lake Park, Abbotsford, BC.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-green-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>Email: abbotsfordlawnbowling@gmail.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: Mill Lake Park, Abbotsford, BC</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="hover:text-green-300">About Us</a></li>
                  <li><a href="/membership" className="hover:text-green-300">Membership</a></li>
                  <li><a href="/events" className="hover:text-green-300">Events</a></li>
                  <li><a href="/contact" className="hover:text-green-300">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/abbotsfordlawnbowlingclub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-300"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-green-700 text-center">
              <p>&copy; {new Date().getFullYear()} Abbotsford Lawn Bowling Club. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 