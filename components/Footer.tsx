import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/images/logo.png" alt="WolfpackET Logo" width={150} height={40} />
            </Link>
            <p className="text-gray-400 mb-4">
              We architect, implement, manage, and secure IT environments that support innovation, agility, and growth.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-wolf-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-wolf-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-wolf-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-wolf-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/it-consulting" className="text-gray-400 hover:text-wolf-yellow transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-development"
                  className="text-gray-400 hover:text-wolf-yellow transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/testing-qa" className="text-gray-400 hover:text-wolf-yellow transition-colors">
                  Testing & QA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-wolf-yellow" />
                <span className="text-gray-400">info@wolfpacket.net</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-wolf-yellow" />
                <span className="text-gray-400">+971 58 581 4358</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-wolf-yellow" />
                <span className="text-gray-400">
                  WOLF PACK ELECTRONICS TRADING LLC
                  <br />
                  PO Box 27724, OF13-585, Arabian Sky 9th Floor
                  <br />
                  City Bank Building, Oud Metha, Dubai, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} WolfpackET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
