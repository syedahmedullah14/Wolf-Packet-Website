"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Cloud, Code, Database } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"

export default function SoftwareDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className=" relative py-20 md:py-32 text-white">
      <Image src="/it.png" alt="IT Consulting" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Software Development</h1>
              <p className="text-lg md:text-2xl text-white">
                Custom software solutions designed to meet your unique business needs and drive growth.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Software Solutions</h2>
                <p className="text-lg text-gray-400 mb-6">
                  We provide full-cycle software development services — from discovery to deployment and beyond. Our
                  team builds secure, scalable, and high-performing software solutions across web, mobile, and
                  enterprise platforms.
                </p>
                <p className="text-lg text-gray-400">
                  Our development process is collaborative and transparent, ensuring that your vision is realized
                  through iterative development, regular feedback, and continuous improvement. We focus on creating
                  software that not only meets your current needs but can also adapt and scale as your business grows.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/tech3.jpeg" alt="Software Development" fill className="object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Services</h2>
              <p className="text-lg text-gray-400">
                We offer a comprehensive range of software development services to meet your business needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full border-2 hover:border-wolf-blue">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Globe className="h-6 w-6" />
                    </div>
                    <CardTitle>Web Application Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Custom-built platforms tailored to your business model and user experience goals. We create
                      responsive, intuitive web applications that deliver exceptional user experiences across all
                      devices.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full border-2 hover:border-wolf-blue">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <CardTitle>Mobile App Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Native and cross-platform mobile solutions that engage users on the go. We develop mobile
                      applications that provide seamless experiences across iOS and Android platforms.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full border-2 hover:border-wolf-blue">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Cloud className="h-6 w-6" />
                    </div>
                    <CardTitle>SaaS Product Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Scalable, cloud-based software products designed for subscription-based delivery. We help you
                      build and launch SaaS products that can scale with your business and user base.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full border-2 hover:border-wolf-blue">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Code className="h-6 w-6" />
                    </div>
                    <CardTitle>API & Library Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Building robust APIs and reusable libraries that connect and extend your software ecosystem. We
                      create well-documented, secure APIs that enable seamless integration with other systems.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full border-2 hover:border-wolf-blue">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Database className="h-6 w-6" />
                    </div>
                    <CardTitle>Cloud-Native Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Applications built to fully leverage cloud scalability, flexibility, and speed. We design and
                      develop cloud-native applications that take full advantage of modern cloud infrastructure.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full border-2 hover:border-wolf-blue">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Globe className="h-6 w-6" />
                    </div>
                    <CardTitle>Enterprise System Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                    Seamlessly connecting new software with your existing IT infrastructure, databases, and third-party platforms to ensure unified operations and smooth data flow across your organization.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
              <p className="text-lg text-gray-400">
                We follow a structured yet flexible development process to ensure successful project delivery.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-gray-400">
                  We work closely with you to understand your business goals, user needs, and technical requirements.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Design & Planning</h3>
                <p className="text-gray-400">
                  We create detailed designs and technical specifications to guide the development process.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-gray-400">
                  Our developers build your solution using modern technologies and best practices.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Testing & Deployment</h3>
                <p className="text-gray-400">
                  We thoroughly test your software and deploy it to your preferred environment.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Software Solution?</h2>
              <p className="text-lg text-gray-400 mb-8">
                Contact us today to discuss your software development needs and discover how WolfPacket can help bring
                your vision to life.
              </p>
              <Button asChild size="lg" className="bg-wolf-blue hover:bg-wolf-blue/90">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
