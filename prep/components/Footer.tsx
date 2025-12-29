import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Contact Info Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#001F54]">
            {/* Phone */}
            <div className="flex items-center gap-2">
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

            {/* Email */}
            <div className="flex items-center gap-2">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>soulsyc@example.com</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
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
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="SoulSync Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-[#001F54]">
                SoulSync
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          {/* Middle Column - Recent News */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-[#001F54] mb-6">
              Our Recent News
            </h3>
            <div className="space-y-4">
              {/* News Item 1 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Samantha Lee"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#001F54] font-semibold">Samantha Lee</p>
                  <p className="text-gray-600 text-sm">Active</p>
                </div>
              </div>

              {/* News Item 2 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Samantha Lee"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#001F54] font-semibold">Samantha Lee</p>
                  <p className="text-gray-600 text-sm">1 Hours Ago</p>
                </div>
              </div>

              {/* News Item 3 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Samantha Lee"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#001F54] font-semibold">Samantha Lee</p>
                  <p className="text-gray-600 text-sm">3 Hours Ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Newsletter Signup */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-[#001F54] mb-6">
              Our Newsletter Signup
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              By Subscribing to our mailing list you will always be update with
              the latest news from us.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary/10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            Copyright @ 2024 Soulsync Dating App All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}



