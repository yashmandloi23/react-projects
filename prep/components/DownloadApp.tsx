import Image from 'next/image'

export default function DownloadApp() {
  return (
    <section className="py-16 lg:py-24 bg-[#B76E79]/10 relative overflow-hidden">
      {/* Decorative Hearts */}
      <div className="absolute top-8 right-8 w-12 h-12 text-primary opacity-30">
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="absolute top-16 right-20 w-8 h-8 text-primary opacity-30 hidden lg:block">
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-16 w-10 h-10 text-primary opacity-30 hidden lg:block">
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-24 w-6 h-6 text-primary opacity-30 hidden lg:block">
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001F54] mb-4">
              Download App Our Soulsync
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001F54] mb-6">
              Easy Connect to Everyone
            </h3>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8">
              All it take is 30 seconds to download. Fast, Simple & Delightful.
              Meet genius people near you. Find meaningful connection effortless.
              Your perfect match is just a click away.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store Button */}
              <button className="flex items-center justify-center gap-3 bg-[#001F54] hover:bg-[#001F54]/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Available on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>

              {/* Google Play Button */}
              <button className="flex items-center justify-center gap-3 bg-[#001F54] hover:bg-[#001F54]/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Available on the</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Phone Image */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-xs lg:max-w-md">
              <Image
                src="/Rectangle.png"
                alt="Soulsync App on mobile"
                width={400}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

