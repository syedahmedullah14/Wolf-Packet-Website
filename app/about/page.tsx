"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Lightbulb, Target, Rocket } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="about-section relative py-20 md:py-32 text-gray-200">
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">About WolfPacket-ET</h1>
              <p className="text-lg md:text-xl text-gray-300">
                We're a team of technology experts dedicated to empowering businesses through innovative IT solutions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Our Story</h2>
                <p className="text-lg text-gray-300 mb-6">
                  WolfPacket is a modern IT solutions provider focused on delivering value-driven technology services.
                  We help businesses achieve digital transformation through strategic IT consulting, tailored software
                  development, quality assurance, and cloud-based infrastructure solutions.
                </p>
                <p className="text-lg text-gray-300">
                  Whether you're modernizing legacy systems or building new digital experiences, our team delivers with
                  precision and reliability. We believe in building long-term partnerships with our clients,
                  understanding their unique challenges, and delivering solutions that drive real business value.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/hero2.avif" alt="About WolfPacket" fill className="object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Our Values</h2>
              <p className="text-lg text-gray-300">These core principles guide everything we do at WolfPacket.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full bg-gray-800 border border-gray-700 hover:border-wolf-yellow">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-wolf-yellow">
                      <Users className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-gray-100">Client Partnership</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      We don't just serve clients; we partner with them. Your success is our success, and we're
                      committed to building relationships that last beyond individual projects.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full bg-gray-800 border border-gray-700 hover:border-wolf-yellow">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-wolf-yellow">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-gray-100">Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Technology never stands still, and neither do we. We're constantly exploring new approaches,
                      tools, and methodologies to deliver better solutions for our clients.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full bg-gray-800 border border-gray-700 hover:border-wolf-yellow">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-wolf-yellow">
                      <Target className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-gray-100">Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      We hold ourselves to the highest standards in everything we do. From code quality to client
                      communication, excellence is our baseline, not our goal.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full bg-gray-800 border border-gray-700 hover:border-wolf-yellow">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-wolf-yellow">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-gray-100">Adaptability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      In a rapidly changing technology landscape, adaptability is key. We embrace change, and help our clients navigate technological shifts with confidence.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Our Approach</h2>
              <p className="text-lg text-gray-300">
                At WolfPacket, we believe in a collaborative, transparent approach to IT solutions. We work closely with
                our clients to understand their unique challenges and goals, then leverage our technical expertise to
                deliver solutions that drive real business value.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                Our team combines deep technical knowledge with business acumen, ensuring that our solutions not only
                solve immediate problems but also support long-term growth and innovation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
