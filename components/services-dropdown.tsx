"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ServiceItem {
  name: string
  description: string
  href: string
  icon: string
}

const services: ServiceItem[] = [
  {
    name: "IT Consulting",
    description: "Strategic guidance for IT modernization and transformation",
    href: "/services/it-consulting",
    icon: "/images/service-icons/it-consultation.png",
  },
  {
    name: "Software Development",
    description: "Custom software solutions for your business needs",
    href: "/services/software-development",
    icon: "/images/service-icons/software-development.png",
  },
  {
    name: "Testing and QA",
    description: "Comprehensive quality assurance for your applications",
    href: "/services/testing-qa",
    icon: "/images/service-icons/qa.png",
  },
  // {
  //   name: "Web Application Development",
  //   description: "Custom web applications tailored to your business",
  //   href: "/services/software-development#web",
  //   icon: "/images/service-icons/web-application-development.png",
  // },
  // {
  //   name: "Mobile App Development",
  //   description: "Native and cross-platform mobile solutions",
  //   href: "/services/software-development#mobile",
  //   icon: "/images/service-icons/mobile-app-development.png",
  // },
  // {
  //   name: "Cloud-Native Applications",
  //   description: "Applications built for cloud scalability and flexibility",
  //   href: "/services/software-development#cloud",
  //   icon: "/images/service-icons/cloud-native-applications.png",
  // },
  // {
  //   name: "SaaS Product Development",
  //   description: "Scalable, cloud-based software products",
  //   href: "/services/software-development#saas",
  //   icon: "/images/service-icons/saas-product-development.png",
  // },
  // {
  //   name: "API & Library Development",
  //   description: "Robust APIs and reusable libraries for your ecosystem",
  //   href: "/services/software-development#api",
  //   icon: "/images/service-icons/api-library-development.png",
  // },
]

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-wolf-yellow"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Services</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 md:left-auto z-10 mt-2 w-screen max-w-[calc(100vw-2rem)] sm:max-w-[320px] md:max-w-md rounded-md bg-gray-900 shadow-lg ring-1 ring-gray-700 services-dropdown-scroll services-dropdown"
            style={{
              maxHeight: "calc(100vh - 150px)",
              overflowY: "auto",
            }}
          >
            <div className="p-4 grid grid-cols-1 gap-4">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex items-start p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gray-800 text-wolf-yellow">
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.name}
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-100">{service.name}</p>
                    <p className="mt-1 text-xs text-gray-400">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
