"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckSquare, Activity, Shield, User, Bug } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"

export default function TestingQAPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-white">
      <Image src="/it.png" alt="IT Consulting" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Testing and QA</h1>
              <p className="text-lg md:text-xl text-white">
                Comprehensive quality assurance to ensure your software performs flawlessly.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Assurance Excellence</h2>
                <p className="text-lg text-gray-400 mb-6">
                  Quality assurance is critical to product success, and at WolfPackET, we take it seriously. Our
                  ISTQB-certified QA engineers perform end-to-end testing of your applications to ensure reliability and
                  user satisfaction.
                </p>
                <p className="text-lg text-gray-400">
                  We implement comprehensive testing strategies that identify issues early in the development process,
                  reducing costs and ensuring a high-quality end product. Our testing approach is methodical, thorough,
                  and tailored to your specific application and business requirements.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/hero3.webp" alt="Testing and QA" fill className="object-cover" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Testing Capabilities</h2>
              <p className="text-lg text-gray-400">
                We offer a comprehensive range of testing services to ensure your software meets the highest quality
                standards.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full border-2 hover:border-wolf-blue">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckSquare className="h-6 w-6" />
                    </div>
                    <CardTitle>Functional Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Ensuring every feature works as intended across use cases. We verify that your application
                      functions correctly according to requirements and specifications.
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
                      <Bug className="h-6 w-6" />
                    </div>
                    <CardTitle>Integration Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Verifying that components and systems communicate seamlessly. We test how different parts of your
                      application work together to ensure smooth operation.
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
                      <Activity className="h-6 w-6" />
                    </div>
                    <CardTitle>Performance Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Stress-testing applications to ensure speed, scalability, and stability. We identify performance
                      bottlenecks and ensure your application can handle expected loads.
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
                      <User className="h-6 w-6" />
                    </div>
                    <CardTitle>Usability Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Evaluating user experience for accessibility, clarity, and ease of use. We ensure your application
                      provides a positive and intuitive user experience.
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
                      <Shield className="h-6 w-6" />
                    </div>
                    <CardTitle>Security Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Identifying and addressing vulnerabilities before they can be exploited. We conduct thorough
                      security assessments to protect your application and data.
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
                      <CheckSquare className="h-6 w-6" />
                    </div>
                    <CardTitle>Automation Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                    Implementing automated test scripts to accelerate release cycles, and ensure consistent quality across updates saving time and reducing manual effort
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* QA Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our QA Process</h2>
              <p className="text-lg text-gray-400">
                We follow a structured quality assurance process to ensure comprehensive testing and reliable results.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Test Planning</h3>
                <p className="text-gray-400">
                  We develop a comprehensive test strategy and plan tailored to your application.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Test Design</h3>
                <p className="text-gray-400">
                  We create detailed test cases and scenarios to cover all aspects of your application.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Test Execution</h3>
                <p className="text-gray-400">
                  We perform thorough testing according to the test plan and document all findings.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Reporting & Improvement</h3>
                <p className="text-gray-400">
                  We provide detailed reports and recommendations for continuous improvement.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ensure Your Software Quality</h2>
              <p className="text-lg text-gray-400 mb-8">
                Contact us today to discuss your testing and QA needs and discover how WolfPacket can help ensure your
                software meets the highest quality standards.
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
