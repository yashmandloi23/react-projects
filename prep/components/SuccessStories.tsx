import Image from 'next/image'

interface StoryCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

function StoryCard({ title, description, imageSrc, imageAlt }: StoryCardProps) {
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
      <div className="p-6">
        <h3 className="text-xl lg:text-2xl font-bold text-[#001F54] mb-4">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {description}
        </p>
        <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          Read More
        </button>
      </div>
    </div>
  )
}

export default function SuccessStories() {
  const stories = [
    {
      title: 'Image Post Formate',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageSrc:
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop',
      imageAlt: 'Happy couple',
    },
    {
      title: 'Couple Of Month',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageSrc:
        'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=400&fit=crop',
      imageAlt: 'Couple at night',
    },
    {
      title: 'Media For Blog Article',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageSrc:
        'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop',
      imageAlt: 'Couple moment',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Subtitle */}
          <p className="text-primary text-lg font-medium mb-3">
            Our Success Stories
          </p>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001F54] mb-8">
            Stories From The Hearts
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

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              description={story.description}
              imageSrc={story.imageSrc}
              imageAlt={story.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}



