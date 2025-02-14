"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.jfif" alt="Wolfpacket Logo" width={100} height={10} />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#about-us" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-gray-900">
              Portfolio
            </Link>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 bg-white">
            <Link href="/" className="py-2 text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="py-2 text-gray-700 hover:text-gray-900">
              About Us
            </Link>
            <Link href="/services" className="py-2 text-gray-700 hover:text-gray-900">
              Services
            </Link>
            <Link href="/portfolio" className="py-2 text-gray-700 hover:text-gray-900">
              Portfolio
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

