"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative py-20 md:py-32 text-gray-200">
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">Contact Us</h1>
              <p className="text-lg md:text-xl text-gray-300">
                Have questions or looking for a tailored IT solution? Reach out to our team today.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Get in Touch</h2>
                <p className="text-lg text-gray-300 mb-8">
                  We're here to help with all your IT needs. Contact us using the information below or fill out the form
                  to send us a message.
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
              <div className="bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-gray-100">Send Us a Message</h3>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Our Location</h2>
              <p className="text-lg text-gray-300">Visit us at our office in Dubai, UAE.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5455090540347!2d55.31151!3d25.2528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE1JzEwLjEiTiA1NcKwMTgnNDEuNCJF!5e0!3m2!1sen!2sus!4v1621436761619!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WolfpackET Office Location"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
