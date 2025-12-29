'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header className="bg-white">
      {/* Top Header Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-3 gap-3 sm:gap-0">
            {/* Left - Contact Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-6 text-sm">
              <div className="flex items-center gap-2 text-[#001F54]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91 123456789</span>
              </div>
              <div className="flex items-center gap-2 text-[#001F54]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Beverley, New York 224 USA</span>
              </div>
            </div>

            {/* Right - Social Media */}
            <div className="flex items-center gap-3 text-sm">
              <span className="text-[#001F54]">Find us on :</span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  className="text-[#001F54] hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="text-[#001F54] hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* Messenger */}
                <a
                  href="#"
                  className="text-[#001F54] hover:text-primary transition-colors"
                  aria-label="Messenger"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 4.925 0 11c0 2.51.932 4.81 2.475 6.565L.931 23.645l6.306-2.75C8.905 21.842 10.392 22 12 22c6.627 0 12-4.925 12-11S18.627 0 12 0zm1.196 13.877l-3.141-3.405L3.551 13.5l7.655-8.123 3.141 3.405L20.449 10.5l-7.253 3.377z" />
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a
                  href="#"
                  className="text-[#001F54] hover:text-primary transition-colors"
                  aria-label="X"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link
                href="/"
                className="text-primary font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-[#001F54] hover:text-primary font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="/community"
                className="text-[#001F54] hover:text-primary font-medium transition-colors"
              >
                Community
              </Link>
              <a
                href="#"
                className="text-[#001F54] hover:text-primary font-medium transition-colors"
              >
                Blog
              </a>

              {/* Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-[#001F54] hover:text-primary font-medium transition-colors flex items-center"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  Pages
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#001F54] hover:bg-gray-100"
                    >
                      Page 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#001F54] hover:bg-gray-100"
                    >
                      Page 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#001F54] hover:bg-gray-100"
                    >
                      Page 3
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="text-[#001F54] hover:text-primary font-medium transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/login"
              className="text-[#001F54] hover:text-primary font-medium transition-colors"
            >
              Sign In
            </Link>
              <a
                href="#"
                className="text-[#001F54] hover:text-primary font-medium transition-colors"
              >
                Help
              </a>
            <Link
              href="/register"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors inline-block"
            >
              Register
            </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-[#001F54] hover:text-primary focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
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
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="/"
              className="block px-3 py-2 text-primary font-medium hover:bg-gray-100 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="block px-3 py-2 text-[#001F54] font-medium hover:bg-gray-100 rounded-md"
            >
              Features
            </Link>
            <Link
              href="/community"
              className="block px-3 py-2 text-[#001F54] font-medium hover:bg-gray-100 rounded-md"
            >
              Community
            </Link>
            <a
              href="#"
              className="block px-3 py-2 text-[#001F54] font-medium hover:bg-gray-100 rounded-md"
            >
              Blog
            </a>

            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between px-3 py-2 text-[#001F54] font-medium hover:bg-gray-100 rounded-md"
              >
                Pages
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="pl-4 space-y-1">
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm text-[#001F54] hover:bg-gray-100 rounded-md"
                  >
                    Page 1
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm text-[#001F54] hover:bg-gray-100 rounded-md"
                  >
                    Page 2
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm text-[#001F54] hover:bg-gray-100 rounded-md"
                  >
                    Page 3
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="block px-3 py-2 text-[#001F54] font-medium hover:bg-gray-100 rounded-md"
            >
              Contact
            </a>
            <div className="pt-4 pb-2 border-t border-gray-200 space-y-2">
              <Link
                href="/login"
                className="block px-3 py-2 text-[#001F54] font-medium hover:bg-gray-100 rounded-md"
              >
                Sign In
              </Link>
              <a
                href="#"
                className="block px-3 py-2 text-[#001F54] font-medium hover:bg-gray-100 rounded-md"
              >
                Help
              </a>
              <Link
                href="/register"
                className="block w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-center"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
