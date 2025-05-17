"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, Code2, TestTube } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import ServiceCard from "@/components/service-card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="solutions-section relative py-20 md:py-32 text-white">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg md:text-xl text-gray-100">
                Explore our core services — each designed to solve your IT challenges and drive long-term success.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Can Help</h2>
              <p className="text-lg text-gray-400">
                At WolfPacket, we offer a comprehensive range of IT services designed to help businesses of all sizes
                leverage technology for growth and innovation. Whether you need strategic guidance, custom software, or
                quality assurance, our team has the expertise to deliver results.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <ServiceCard
                title="IT Consulting"
                description="Strategic analysis and expert guidance for IT modernization, infrastructure optimization, cloud migration, and digital transformation."
                icon={<BarChart3 className="h-6 w-6" />}
                href="/services/it-consulting"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <ServiceCard
                title="Software Development"
                description="End-to-end design, development, and support for web, mobile, and enterprise applications — including APIs, SaaS, and cloud-native platforms."
                icon={<Code2 className="h-6 w-6" />}
                href="/services/software-development"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <ServiceCard
                title="Testing and QA"
                description="Comprehensive quality assurance for functionality, performance, security, and usability — powered by ISTQB-certified test engineers."
                icon={<TestTube className="h-6 w-6" />}
                href="/services/testing-qa"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-gray-400 mb-8">
                Contact us today to discuss your IT needs and discover how WolfPacket can help your business thrive.
              </p>
              <Button asChild size="lg" className="bg-wolf-blue hover:bg-wolf-blue/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
