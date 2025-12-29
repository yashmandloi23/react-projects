export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Heart Icon */}
          <div className="flex justify-center mb-4">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>

          {/* Subtitle */}
          <p className="text-primary text-lg font-medium mb-3">
            How Does It Work
          </p>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001F54] mb-8">
            Step to Find Your Soul Mate
          </h2>

          {/* Decorative Line with Heart */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-gray-300 flex-1 max-w-[100px]"></div>
            <svg
              className="w-6 h-6 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="h-px bg-gray-300 flex-1 max-w-[100px]"></div>
          </div>
        </div>

        {/* Three Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Step 1: Create A Profile */}
          <div className="text-center">
            {/* Icon Circle */}
            <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-[#B76E79]/20 bg-white flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for profile card icon */}
              <div className="w-32 h-40 bg-yellow-50 rounded-lg border border-gray-200 shadow-sm relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-200 rounded-full"></div>
                <div className="absolute bottom-8 left-2 flex gap-1">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                </div>
              </div>
            </div>

            <h3 className="text-xl lg:text-2xl font-bold text-[#001F54] mb-4">
              Create A Profile
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn from them and try to make it to this bored. this will for
              sure boost you visibility and increase your chances to find you
              loved one.
            </p>
          </div>

          {/* Step 2: Find Matches */}
          <div className="text-center">
            {/* Icon Circle */}
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for matches icon */}
              <div className="relative w-32 h-32">
                {/* Two figures */}
                <div className="absolute left-0 bottom-0 w-12 h-16 bg-red-200 rounded-t-full"></div>
                <div className="absolute right-0 bottom-0 w-12 h-16 bg-blue-200 rounded-t-full"></div>
                {/* Phone icon above */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gray-100 rounded-lg border-2 border-gray-300">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="absolute bottom-4 left-2 w-3 h-3 bg-blue-300 rounded-full"></div>
                  <div className="absolute bottom-4 right-2 w-3 h-3 bg-pink-300 rounded-full"></div>
                </div>
              </div>
            </div>

            <h3 className="text-xl lg:text-2xl font-bold text-[#001F54] mb-4">
              Find Matches
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn from them and try to make it to this bored. this will for
              sure boost you visibility and increase your chances to find you
              loved one.
            </p>
          </div>

          {/* Step 3: Start Dating */}
          <div className="text-center">
            {/* Icon Circle */}
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-[#001F54] flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for dating icon */}
              <div className="relative w-36 h-32">
                {/* Table */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-lg"></div>
                {/* Vase with flowers */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-gray-300 rounded-t-lg">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="absolute -top-1 left-0 w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="absolute -top-1 right-0 w-2 h-2 bg-red-400 rounded-full"></div>
                </div>
                {/* Couple */}
                <div className="absolute bottom-16 left-2 w-8 h-12 bg-red-300 rounded-t-full"></div>
                <div className="absolute bottom-16 right-2 w-8 h-12 bg-white rounded-t-full"></div>
                {/* Hearts */}
                <div className="absolute top-2 left-4 w-3 h-3 text-pink-300">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 text-pink-300">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-xl lg:text-2xl font-bold text-[#001F54] mb-4">
              Start Dating
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn from them and try to make it to this bored. this will for
              sure boost you visibility and increase your chances to find you
              loved one.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



