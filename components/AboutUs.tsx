import Image from "next/image"

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-red-500 font-semibold mb-2"># ABOUT US</h2>
            <h3 className="text-4xl font-bold mb-4">Increasing Business Success With Technology</h3>
            <p className="text-gray-600 mb-4">
              We provide only high-quality software and services to our clients. We guarantee you will get tangible
              business value from your IT investments, enjoy healthy project processes, professional and motivated
              teams, effective communication between xenoferite, your teams, and stakeholders.
            </p>
            <p className="text-gray-600">
              To achieve this, wolf packet has developed a comprehensive quality management system that resides in
              quality-centered leadership, committed employees, transparent KPIs, data-driven decision-making,
              continuous process improvement, quality controls throughout the SDLC, and more.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="relative h-96">
              <Image
                src="contact.avif"
                alt="About Us"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

