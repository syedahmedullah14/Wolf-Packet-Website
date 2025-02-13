import { Monitor, Clock, DollarSign, BarChart2, Code, Zap } from "lucide-react"

const features = [
  {
    icon: <Monitor className="w-8 h-8 text-red-500" />,
    title: "End-To-End Application Services",
    description:
      "Application services include app development, support, cloud migration, modernization, integration, security management, and more. xenoferite brings all-around services to turn your enterprise applications into max profit.",
  },
  {
    icon: <Clock className="w-8 h-8 text-red-500" />,
    title: "Dedicated 24\\7 Support",
    description:
      "In order to test their knowledge and confirm their qualifications and professional skills, our experts have the valid certificates in every applicable IT area of expertise.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-red-500" />,
    title: "Money-Back Guarantee",
    description:
      "A money-back guarantee is our customer satisfaction guarantee, if you arenot satisfied with a product or service, a refund will be made.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-red-500" />,
    title: "Agile And Fast Working",
    description: "Business processes today require more speed, flexibility and greater cohesion",
  },
  {
    icon: <Code className="w-8 h-8 text-red-500" />,
    title: "Some Apps Are Free",
    description: "There are many variaons of passages Lorem Ipsum available, but majority have",
  },
  {
    icon: <Zap className="w-8 h-8 text-red-500" />,
    title: "High Level Of Usability",
    description: "Usability is a quality attribute that assesses how easy user interfaces are to",
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-red-500 font-semibold text-center mb-2"># WHY CHOOSE US</h2>
        <h3 className="text-4xl font-bold text-center mb-12">We Run All Kinds Of Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-4">{feature.icon}</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

