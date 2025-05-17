"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, Cloud, Workflow, CheckCircle } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"

export default function ITConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className=" relative py-20 md:py-32 text-white">
      <Image src="/it.png" alt="IT Consulting" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">IT Consulting</h1>
              <p className="text-lg md:text-2xl text-white">
                Strategic guidance and technical expertise to help your business evolve through technology.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategic IT Guidance</h2>
                <p className="text-lg text-gray-100 mb-6">
                  WolfPacket offers deep strategic insight and technical expertise to help businesses evolve through
                  technology. Our IT consulting service includes a comprehensive analysis of your current IT landscape,
                  identification of inefficiencies, and formulation of a scalable roadmap tailored to your goals.
                </p>
                <p className="text-lg text-gray-400">
                  We work closely with your team to understand your business objectives, challenges, and opportunities,
                  then develop a strategic plan that leverages technology to drive growth, efficiency, and innovation.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/tech2.jpg" alt="IT Consulting" fill className="object-cover" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Assist</h2>
              <p className="text-lg text-gray-400">
                Our IT consulting services cover a wide range of areas to help your business leverage technology
                effectively.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full border-2 hover:border-wolf-blue">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <RefreshCw className="h-6 w-6" />
                    </div>
                    <CardTitle>IT Modernization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Replacing outdated systems with innovative technologies that improve performance. We
                      help you identify legacy systems that are holding your business back and develop a plan to
                      modernize your IT infrastructure.
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
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <CardTitle>Infrastructure Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Streamlining your IT infrastructure for cost-efficiency, performance, and resilience. We analyze
                      your current infrastructure and recommend improvements to enhance reliability, security, and
                      scalability.
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
                    <CardTitle>Cloud Migration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Seamlessly moving your workloads, applications, and data to the cloud with minimal disruption. We
                      develop a comprehensive cloud migration strategy that addresses security, and
                      performance requirements.
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
                      <Workflow className="h-6 w-6" />
                    </div>
                    <CardTitle>Workflow Transformation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Digitally transforming manual processes to accelerate productivity and business outcomes. We
                      identify opportunities to automate and streamline workflows, reducing manual effort and improving
                      efficiency.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your IT?</h2>
              <p className="text-lg text-gray-400 mb-8">
                Contact us today to discuss your IT consulting needs and discover how WolfPacket can help your business
                thrive.
              </p>
              <Button asChild size="lg" className="bg-wolf-blue hover:bg-wolf-blue/90">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
