"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Code2, TestTube, CheckCircle, Mail, Phone, MapPin } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import ServiceCard from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative py-20 md:py-32 text-gray-200">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-100">
                  Empowering Your Business with Smart IT Solutions
                </h1>
                <p className="text-lg md:text-xl text-gray-300">
                  We architect, implement, manage, and secure IT environments that support innovation, agility, and
                  growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-wolf-yellow text-gray-900 hover:bg-wolf-yellow/90">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <Link href="/services">Our Services</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                {/* <Image
                  src="/images/hero-image.png"
                  alt="IT Solutions"
                  width={600}
                  height={400}
                  className="rounded-lg"
                /> */}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">About WolfPacket-ET</h2>
              <p className="text-lg text-gray-300">
                WolfPacket is a modern IT solutions provider focused on delivering value-driven technology services. We
                help businesses achieve digital transformation through strategic IT consulting, tailored software
                development, quality assurance, and cloud-based infrastructure solutions. Whether you're modernizing
                legacy systems or building new digital experiences, our team delivers with precision and reliability.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="solutions-section relative py-20 text-gray-200">
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Our Services</h2>
              <p className="text-lg text-gray-300">
                Explore our core services — each designed to solve your IT challenges and drive long-term success.
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

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-wolf-yellow text-gray-900 hover:bg-wolf-yellow/90">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section relative py-20 text-gray-200">
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Why Choose Us</h2>
              <p className="text-lg text-gray-300">
                At WolfPackET, we don't just offer IT services — we build technology partnerships. Whether you're a
                growing startup or a large enterprise, our solutions are designed to scale with you. We bring clarity to
                complex tech problems and deliver support that empowers your team and business.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <Card className="dark-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-100">
                    <CheckCircle className="h-5 w-5 mr-2 text-wolf-yellow" />
                    Complete IT Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">
                    For businesses of all sizes — tailored to your exact needs
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="dark-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-100">
                    <CheckCircle className="h-5 w-5 mr-2 text-wolf-yellow" />
                    Skilled & Passionate Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">Dedicated to your success</CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Card className="dark-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-100">
                    <CheckCircle className="h-5 w-5 mr-2 text-wolf-yellow" />
                    Scalable Technology Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">That grow with your business</CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Card className="dark-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-100">
                    <CheckCircle className="h-5 w-5 mr-2 text-wolf-yellow" />
                    Client-First Mindset
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">
                    Focused on solving real problems, not just selling services
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Contact Us</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Have questions or looking for a tailored IT solution? Reach out to our team today.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                        <Mail className="h-5 w-5 text-wolf-yellow" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-200">Email</h3>
                      <p className="text-gray-400">info@wolfpacket.net</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                        <Phone className="h-5 w-5 text-wolf-yellow" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-200">Phone</h3>
                      <p className="text-gray-400">+971 58 581 4358</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                        <MapPin className="h-5 w-5 text-wolf-yellow" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-200">Address</h3>
                      <p className="text-gray-400">
                        WOLF PACK ELECTRONICS TRADING LLC
                        <br />
                        PO Box 27724, OF13-585, Arabian Sky 9th Floor
                        <br />
                        City Bank Building, Oud Metha, Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-100">Send Us a Message</h3>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
