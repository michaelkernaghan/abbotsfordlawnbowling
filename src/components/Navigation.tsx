'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-green-600">
            ALBC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-green-600">
              About
            </Link>
            <Link href="/membership" className="text-gray-600 hover:text-green-600">
              Membership
            </Link>
            <Link href="/events" className="text-gray-600 hover:text-green-600">
              Events
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-green-600">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/about"
              className="block text-gray-600 hover:text-green-600"
            >
              About
            </Link>
            <Link
              href="/membership"
              className="block text-gray-600 hover:text-green-600"
            >
              Membership
            </Link>
            <Link
              href="/events"
              className="block text-gray-600 hover:text-green-600"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-green-600"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
} 