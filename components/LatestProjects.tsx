import Image from "next/image"

const projects = [
  {
    image: "project.jfif",
    title: "Project 1",
  },
  {
    image: "project.jfif",
    title: "Project 2",
  },
  {
    image: "project.jfif",
    title: "Project 3",
  },
  {
    image: "project.jfif",
    title: "Manufacturing",
  },
  {
    image: "project.jfif",
    title: "Project 5",
  },
  {
    image: "project.jfif",
    title: "Project 6",
  },
]

const LatestProjects = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative h-64 group overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestProjects

