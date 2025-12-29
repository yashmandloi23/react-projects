'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Testimonial {
  name: string
  title: string
  text: string
  imageSrc: string
  imageAlt: string
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1) // Start at second testimonial (index 1)

  const testimonials: Testimonial[] = [
    {
      name: 'Testimonial 1',
      title: 'Designer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      imageSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop',
      imageAlt: 'Customer 1',
    },
    {
      name: 'Pooja Suryanvasnshi',
      title: 'Designer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop',
      imageAlt: 'Pooja Suryanvasnshi',
    },
    {
      name: 'Testimonial 3',
      title: 'Developer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop',
      imageAlt: 'Customer 3',
    },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Swipe functionality
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  // Auto-play (optional - comment out if not needed)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goToNext()
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Subtitle */}
          <p className="text-primary text-lg font-medium mb-3">Testimonials</p>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001F54] mb-8">
            Listen What are saying Our Customers
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

        {/* Testimonial Content */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Left Side - Testimonial Text */}
          <div className="relative">
            {/* Large Quote Icon - Centered */}
            <div className="text-primary text-[120px] lg:text-[180px] font-serif leading-none mb-4 flex justify-center lg:justify-start">
              "
            </div>

            <div className="relative z-10 -mt-12 lg:-mt-16 pt-12 lg:pt-16">
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 text-center lg:text-left">
                {currentTestimonial.text}
              </p>

              <div className="text-center lg:text-left">
                <h3 className="text-xl lg:text-2xl font-bold text-[#001F54] mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-primary font-medium">
                  {'{' + currentTestimonial.title + '}'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Customer Image */}
          <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-md h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={currentTestimonial.imageSrc}
                alt={currentTestimonial.imageAlt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Heart Pagination Indicators */}
        <div className="flex justify-center items-center gap-4 mt-8 lg:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="focus:outline-none transition-all"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <svg
                className={`w-6 h-6 transition-colors ${
                  index === currentIndex
                    ? 'text-primary fill-primary'
                    : 'text-primary fill-none'
                }`}
                fill={index === currentIndex ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

