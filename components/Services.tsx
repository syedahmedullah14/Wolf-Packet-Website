import Image from "next/image"

const services = [
  {
    title: "IT Consulting",
    icon: "/icons/it-consulting.svg",
    description:
      "In-depth analysis of your IT needs, challenges, and the existing IT ecosystem. Expert assistance in achieving the goals of IT modernization, IT infrastructure optimization and ongoing management, cloud migration. Digital transformation of business workflows.",
  },
  {
    title: "Software Development",
    icon: "/icons/software-dev.svg",
    description:
      "Design, development, and support of enterprise software: web and mobile applications, cloud development, libraries and APIs. SaaS product development.",
  },
  {
    title: "Testing And QA",
    icon: "/icons/testing-qa.svg",
    description:
      "Fully managed functional, integration, performance, usability, and security testing of web, mobile, desktop applications, DWHs, and SaaS apps. ISTQB-certified test engineers.",
  },
]

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2"># OUR SERVICES</h2>
        <h3 className="text-4xl font-bold text-center mb-12">Provide Exclusive Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mb-4">
                <Image src={service.icon || "/placeholder.svg"} alt={service.title} width={32} height={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

