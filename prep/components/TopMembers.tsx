import Image from 'next/image'

interface MemberCardProps {
  name: string
  location: string
  age: string
  imageSrc: string
  imageAlt: string
}

function MemberCard({ name, location, age, imageSrc, imageAlt }: MemberCardProps) {
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
        <p className="text-gray-600 text-sm">{location} . {age}</p>
      </div>
    </div>
  )
}

export default function TopMembers() {
  // Using placeholder images - you can replace these with actual member images
  const members = [
    {
      name: 'Angel Hopkins',
      location: 'Canada',
      age: '32',
      imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      imageAlt: 'Angel Hopkins',
    },
    {
      name: 'Angel Hopkins',
      location: 'Canada',
      age: '32',
      imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      imageAlt: 'Angel Hopkins',
    },
    {
      name: 'Angel Hopkins',
      location: 'Canada',
      age: '32',
      imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
      imageAlt: 'Angel Hopkins',
    },
    {
      name: 'Teszt Elecking',
      location: 'Canada',
      age: '32',
      imageSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
      imageAlt: 'Teszt Elecking',
    },
    {
      name: 'Gyan-Baffour',
      location: 'Canada',
      age: '32',
      imageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
      imageAlt: 'Gyan-Baffour',
    },
    {
      name: 'Andrea Guido',
      location: 'Canada',
      age: '32',
      imageSrc: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop',
      imageAlt: 'Andrea Guido',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-[#B76E79]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Subtitle */}
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
            Top Members
          </p>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001F54] mb-8">
            Soulsync Top Members
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

        {/* Profile Cards Grid - 6 cards in single row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
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
  )
}

