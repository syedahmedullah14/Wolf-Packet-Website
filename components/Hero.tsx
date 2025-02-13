import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="relative h-screen">
      <Image
        src="hero.jpg"
        alt="City Skyline"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">We Provide Best IT Solutions</h1>
            <p className="text-xl mb-8">
              We architect, implement, manage and secure IT solutions that help you achieve your most ambitious goals.
            </p>
            <Link
              href="/contact"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

