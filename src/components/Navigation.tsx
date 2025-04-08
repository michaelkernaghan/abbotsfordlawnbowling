'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-10 h-10 mr-3">
                <Image
                  src="/images/albc-logo.jpg"
                  alt="ALBC Logo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-bold">Abbotsford Lawn Bowling</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link href="/about" className="hover:bg-green-700 px-3 py-2 rounded-md">
                About
              </Link>
              <Link href="/membership" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Membership
              </Link>
              <Link href="/events" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Events
              </Link>
              <Link href="/contact" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/membership"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
            >
              Membership
            </Link>
            <Link
              href="/events"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 