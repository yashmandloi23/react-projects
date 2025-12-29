import Image from 'next/image'

export default function WhyChooseSoulsync() {
  return (
    <section className="py-16 lg:py-24 bg-[#B76E79]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Subtitle */}
          <p className="text-[#001F54] text-sm uppercase tracking-wide mb-3">
            Our Website
          </p>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001F54] mb-8">
            Why Choose Soulsync
          </h2>

          {/* Decorative Line with Heart */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-primary flex-1 max-w-[100px]"></div>
            <svg
              className="w-6 h-6 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="h-px bg-primary flex-1 max-w-[100px]"></div>
          </div>
        </div>

        {/* Content Grid - 60/40 split */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-center">
          {/* Left Column - 60% - Features */}
          <div className="flex flex-col gap-8 lg:gap-10 justify-center">
            {/* Top Row - Two Features - Centered Vertically */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Feature 1: Simple to Use */}
              <div className="text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#001F54] mb-4">
                  Simple to Use
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Soulsync is very easy to use just choose your and your partner's
                  gender, age, and location, and you're all set!
                </p>
              </div>

              {/* Feature 2: Cool Community */}
              <div className="text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#001F54] mb-4">
                  Cool Community
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Besides being #1 dating service, we have a supportive and
                  understanding community that's always ready to help.
                </p>
              </div>
            </div>

            {/* Bottom Row - One Feature Centered Horizontally */}
            <div className="flex justify-center">
              <div className="text-center max-w-full md:max-w-[70%]">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#001F54] mb-4">
                  Smart Matching
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  our matching system is based on geolocation and interests. It
                  helps you find the best people to meet or spend time with.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - 40% - Image with Centered Play Button */}
          <div className="relative order-first lg:order-last">
            <div className="relative w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=800&fit=crop"
                alt="Happy couple"
                fill
                className="object-cover rounded-lg"
              />
              
              {/* Play Button Overlay - Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-20 h-20 lg:w-24 lg:h-24 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all backdrop-blur-sm shadow-lg"
                  aria-label="Play video"
                >
                  <svg
                    className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

