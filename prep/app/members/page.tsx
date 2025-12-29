'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DownloadApp from '@/components/DownloadApp'
import Image from 'next/image'

interface Member {
  name: string
  location: string
  age: string
  imageSrc: string
  imageAlt: string
}

function MemberCard({ name, location, age, imageSrc, imageAlt }: Member) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#001F54] mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">
          {location}, {age}
        </p>
      </div>
    </div>
  )
}

export default function MembersPage() {
  const [selectedGender, setSelectedGender] = useState('All')
  const [selectedCountry, setSelectedCountry] = useState('All')
  const [selectedAge, setSelectedAge] = useState('All')
  const [selectedHeight, setSelectedHeight] = useState('All')

  const members: Member[] = [
    {
      name: 'Angel Medina',
      location: 'Canada',
      age: '24',
      imageSrc:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      imageAlt: 'Angel Medina',
    },
    {
      name: 'Angelina Jolie',
      location: 'Canada',
      age: '24',
      imageSrc:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
      imageAlt: 'Angelina Jolie',
    },
    {
      name: 'Tessa Elsdina',
      location: 'Canada',
      age: '24',
      imageSrc:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
      imageAlt: 'Tessa Elsdina',
    },
    {
      name: 'Owen Butler',
      location: 'Canada',
      age: '24',
      imageSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
      imageAlt: 'Owen Butler',
    },
    {
      name: 'Andrea Smith',
      location: 'Canada',
      age: '24',
      imageSrc:
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop',
      imageAlt: 'Andrea Smith',
    },
    {
      name: 'Rajan Kumar',
      location: 'Canada',
      age: '24',
      imageSrc:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      imageAlt: 'Rajan Kumar',
    },
    // Repeat for more members
    ...Array.from({ length: 19 }).map((_, i) => ({
      name: ['Angel Medina', 'Angelina Jolie', 'Tessa Elsdina', 'Owen Butler', 'Andrea Smith'][
        i % 5
      ],
      location: 'Canada',
      age: '24',
      imageSrc: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop',
      ][i % 5],
      imageAlt: ['Angel Medina', 'Angelina Jolie', 'Tessa Elsdina', 'Owen Butler', 'Andrea Smith'][
        i % 5
      ],
    })),
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb Section */}
        <section className="bg-white py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 mb-2">Home-Members</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001F54] mb-4">
              Soulsync dating Members
            </h1>
            <div className="flex justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-white py-6 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="text-[#001F54] font-semibold">
                Total Members: {members.length}
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                {/* Gender Filter */}
                <div className="relative">
                  <select
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                    className="appearance-none bg-white border-2 border-primary text-[#001F54] font-medium py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>All</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <svg
                      className="w-4 h-4 text-primary"
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

                {/* Country Filter */}
                <div className="relative">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="appearance-none bg-white border-2 border-primary text-[#001F54] font-medium py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option>Country</option>
                    <option>Canada</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>All</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <svg
                      className="w-4 h-4 text-primary"
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

                {/* Age Filter */}
                <div className="relative">
                  <select
                    value={selectedAge}
                    onChange={(e) => setSelectedAge(e.target.value)}
                    className="appearance-none bg-white border-2 border-primary text-[#001F54] font-medium py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option>Age</option>
                    <option>18-25</option>
                    <option>26-35</option>
                    <option>36-45</option>
                    <option>All</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <svg
                      className="w-4 h-4 text-primary"
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

                {/* Height Filter */}
                <div className="relative">
                  <select
                    value={selectedHeight}
                    onChange={(e) => setSelectedHeight(e.target.value)}
                    className="appearance-none bg-white border-2 border-primary text-[#001F54] font-medium py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option>Height</option>
                    <option>5'0" - 5'5"</option>
                    <option>5'6" - 5'11"</option>
                    <option>6'0" - 6'5"</option>
                    <option>All</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <svg
                      className="w-4 h-4 text-primary"
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

                {/* Search Button */}
                <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Load More */}
            <div className="mt-4 flex items-center justify-center gap-2 text-primary cursor-pointer hover:underline">
              <span>Load more</span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Members Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
              {members.map((member, index) => (
                <MemberCard
                  key={index}
                  name={member.name}
                  location={member.location}
                  age={member.age}
                  imageSrc={member.imageSrc}
                  imageAlt={member.imageAlt}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <DownloadApp />
      <Footer />
    </>
  )
}

