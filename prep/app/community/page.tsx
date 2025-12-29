'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DownloadApp from '@/components/DownloadApp'
import Image from 'next/image'

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('Information')

  const tabs = ['Information', 'Activity', 'Friends', 'Posts', 'Media', 'More']

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb Section */}
        <section className="bg-white border-b border-gray-200 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 mb-3 text-center">Home-Teszt Elecking</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001F54] mb-6 text-center">
              Member Single Profile
            </h1>
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

            {/* Profile Section - Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start mb-16">
              {/* Left Column - Profile Image */}
              <div className="lg:col-span-1">
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop"
                    alt="Teszt Elecking"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right Column - Profile Info */}
              <div className="lg:col-span-2">
                {/* Follower/Following Stats */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-[#001F54] mb-2">
                      121
                    </div>
                    <div className="text-lg text-primary font-medium">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-[#001F54] mb-2">
                      133
                    </div>
                    <div className="text-lg text-primary font-medium">Following</div>
                  </div>
                </div>

                {/* User Details */}
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#001F54] mb-4">
                    Teszt Elecking
                  </h2>
                  <p className="text-gray-600 mb-3 text-lg">Active 2 Minutes Ago</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="w-5 h-5"
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
                    <span className="text-lg">Canada, North America</span>
                  </div>
                </div>

                {/* Profile Navigation Tabs */}
                <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-3 font-medium transition-colors ${
                        activeTab === tab
                          ? 'text-primary border-b-2 border-primary'
                          : 'text-gray-600 hover:text-primary'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Information Sections */}
        <section className="bg-white py-12 lg:py-16 min-h-screen w-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-12">
              {/* Left Column - Basic Information */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#001F54] mb-8">
                  Basic Information
                </h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-[#001F54] font-semibold">Name:</span>
                    <span className="text-gray-700">Teszt Elecking</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-[#001F54] font-semibold">Gender:</span>
                    <span className="text-gray-700">Female</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-[#001F54] font-semibold">Between Age:</span>
                    <span className="text-gray-700">32</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-[#001F54] font-semibold">Education:</span>
                    <span className="text-gray-700">Graduate Degree</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-[#001F54] font-semibold">Marital Status:</span>
                    <span className="text-gray-700">Single</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-[#001F54] font-semibold">Date of Birth:</span>
                    <span className="text-gray-700">31/07/1998</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-[#001F54] font-semibold">Work As:</span>
                    <span className="text-gray-700">Designer</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-[#001F54] font-semibold">City:</span>
                    <span className="text-gray-700">Canada, North America</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Filter search Member */}
              <div className="bg-[#B76E79]/10 rounded-lg p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#001F54] mb-4">
                  Filter search Member
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Serious Dating With Lovely Meet Your Perfect Match is Just a Click Away.
                </p>

                <form className="space-y-6">
                  {/* I Am a */}
                  <div>
                    <label className="block text-sm font-medium text-[#001F54] mb-2">
                      I Am a
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white text-gray-700">
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                        <svg
                          className="w-5 h-5 text-primary"
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
                      </div>
                    </div>
                  </div>

                  {/* Looking For */}
                  <div>
                    <label className="block text-sm font-medium text-[#001F54] mb-2">
                      Looking For
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white text-gray-700">
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                        <svg
                          className="w-5 h-5 text-primary"
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
                      </div>
                    </div>
                  </div>

                  {/* Age Range */}
                  <div>
                    <label className="block text-sm font-medium text-[#001F54] mb-2">
                      Age Range
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <select className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white text-gray-700">
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>25</option>
                          <option>30</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                          <svg
                            className="w-5 h-5 text-primary"
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
                        </div>
                      </div>
                      <div className="relative">
                        <select className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white text-gray-700">
                          <option>36</option>
                          <option>40</option>
                          <option>45</option>
                          <option>50</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                          <svg
                            className="w-5 h-5 text-primary"
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
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Choose Your Country */}
                  <div>
                    <label className="block text-sm font-medium text-[#001F54] mb-2">
                      Choose Your Country
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white text-gray-700">
                        <option>Select Country</option>
                        <option>Canada</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>India</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                        <svg
                          className="w-5 h-5 text-primary"
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
                      </div>
                    </div>
                  </div>

                  {/* Choose Your Interests */}
                  <div>
                    <label className="block text-sm font-medium text-[#001F54] mb-2">
                      Choose Your Interests
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white text-gray-700">
                        <option>Select Interests</option>
                        <option>Travel</option>
                        <option>Music</option>
                        <option>Sports</option>
                        <option>Reading</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                        <svg
                          className="w-5 h-5 text-primary"
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
                      </div>
                    </div>
                  </div>

                  {/* Find Your Partner Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                  >
                    Find Your Partner
                  </button>
                </form>
              </div>
            </div>

            {/* Myself Summary Section */}
            <div className="mt-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#001F54] mb-6">
                Myself Summary
              </h2>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 lg:p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet consectetur. Semper varius gravida gravida
                  interdum faucibus. Posuere consectetur cras enim odio. Sit lacus id sed
                  adipiscing et est molestie. Quis nisi pulvinar metus ac ipsum aenean
                  magna pharetra sem.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Semper varius gravida gravida
                  interdum faucibus. Posuere consectetur cras enim odio. Sit lacus id sed
                  adipiscing et est molestie. Quis nisi pulvinar metus ac ipsum aenean
                  magna pharetra sem. Lorem ipsum dolor sit amet consectetur. Semper varius
                  gravida gravida interdum faucibus. Posuere consectetur cras enim odio.
                  Sit lacus id sed adipiscing et est molestie. Quis nisi pulvinar metus ac
                  ipsum aenean magna pharetra sem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Content Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  10K+
                </div>
                <div className="text-xl text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  500+
                </div>
                <div className="text-xl text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  50+
                </div>
                <div className="text-xl text-gray-600">Countries</div>
              </div>
            </div>

            {/* Community Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#001F54] mb-6">
                  Why Join Our Community?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#001F54] mb-2">
                        Supportive Environment
                      </h3>
                      <p className="text-gray-600">
                        Our community is built on respect, kindness, and
                        understanding. Everyone is welcome and valued.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#001F54] mb-2">
                        Regular Events
                      </h3>
                      <p className="text-gray-600">
                        Join our virtual and local events to meet new people and
                        build connections in a fun, relaxed setting.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#001F54] mb-2">
                        Verified Members
                      </h3>
                      <p className="text-gray-600">
                        All members go through a verification process to ensure
                        a safe and authentic community experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#B76E79]/10 rounded-lg p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#001F54] mb-6">
                  Community Guidelines
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span className="text-gray-700">
                      Be respectful and kind to all members
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span className="text-gray-700">
                      Use authentic photos and information
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span className="text-gray-700">
                      Respect privacy and boundaries
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span className="text-gray-700">
                      Report any suspicious behavior
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span className="text-gray-700">
                      Have fun and be yourself!
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Join CTA */}
            <div className="bg-primary text-white rounded-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Start your journey to meaningful connections today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/register"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Sign Up Now
                </a>
                <a
                  href="/login"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <DownloadApp />
      <Footer />
    </>
  )
}
