import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#B76E79]/10 flex-1 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full  lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001F54] leading-tight mb-6">
              New Places,
              <br />
              Unforgettable
              <br />
              dating.
            </h1>
            <p className="text-lg sm:text-xl text-[#001F54] mb-8 leading-relaxed">
              Still looking for your significant other? Loven is the place for
              you! Join us now to meet single men and women worldwide.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-xl">
              <Image
                src="/hero.png"
                alt="Happy couple"
                width={700}
                height={800}
                className="rounded-lg object-cover h-[500px] lg:h-[600px] w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
