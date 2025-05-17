// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Menu, X } from "lucide-react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import ServicesDropdown from "@/components/services-dropdown"

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   const menuVariants = {
//     open: { opacity: 1, x: 0 },
//     closed: { opacity: 0, x: "100%" },
//   }

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
//       <div className="container flex h-16 items-center justify-between">
//         <Link href="/" className="flex items-center space-x-2">
//           <Image src="/images/logo.png" alt="WolfpackET Logo" width={150} height={40} />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <Link href="/" className="text-sm font-medium transition-colors hover:text-wolf-yellow">
//             Home
//           </Link>
//           <Link href="/about" className="text-sm font-medium transition-colors hover:text-wolf-yellow">
//             About Us
//           </Link>
//           <ServicesDropdown />
//           <Link href="/contact" className="text-sm font-medium transition-colors hover:text-wolf-yellow">
//             Contact
//           </Link>
//           <Button asChild className="bg-wolf-yellow text-gray-900 hover:bg-wolf-yellow/90">
//             <Link href="/contact">Get Started</Link>
//           </Button>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-gray-200" onClick={toggleMenu} aria-label="Toggle Menu">
//           {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>

//         {/* Mobile Navigation */}
//         <motion.div
//           className={`fixed inset-y-0 right-0 z-50 w-full bg-gray-950 p-6 shadow-lg md:hidden ${
//             isOpen ? "block" : "hidden"
//           }`}
//           initial="closed"
//           animate={isOpen ? "open" : "closed"}
//           variants={menuVariants}
//           transition={{ duration: 0.3 }}
//         >
//           <div className="flex flex-col space-y-6 mt-16 ">
//             <Link
//               href="/"
//               className="text-lg font-medium transition-colors hover:text-wolf-yellow"
//               onClick={toggleMenu}
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className="text-lg font-medium transition-colors hover:text-wolf-yellow"
//               onClick={toggleMenu}
//             >
//               About Us
//             </Link>
//             <div className="space-y-4">
//               <p className="text-lg font-medium text-gray-200">Services</p>
//               <div className="pl-4 space-y-3 border-l border-gray-800">
//                 <Link
//                   href="/services/it-consulting"
//                   className="block text-base transition-colors hover:text-wolf-yellow"
//                   onClick={toggleMenu}
//                 >
//                   IT Consulting
//                 </Link>
//                 <Link
//                   href="/services/software-development"
//                   className="block text-base transition-colors hover:text-wolf-yellow"
//                   onClick={toggleMenu}
//                 >
//                   Software Development
//                 </Link>
//                 <Link
//                   href="/services/testing-qa"
//                   className="block text-base transition-colors hover:text-wolf-yellow"
//                   onClick={toggleMenu}
//                 >
//                   Testing & QA
//                 </Link>
//               </div>
//             </div>
//             <Link
//               href="/contact"
//               className="text-lg font-medium transition-colors hover:text-wolf-yellow"
//               onClick={toggleMenu}
//             >
//               Contact
//             </Link>
//             <Button asChild className="w-full bg-wolf-yellow text-gray-900 hover:bg-wolf-yellow/90">
//               <Link href="/contact" onClick={toggleMenu}>
//                 Get Started
//               </Link>
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </header>
//   )
// }

// export default Header
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ServicesDropdown from "@/components/services-dropdown"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="WolfpackET Logo" width={150} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-wolf-yellow">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-wolf-yellow">
            About Us
          </Link>
          <ServicesDropdown />
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-wolf-yellow">
            Contact
          </Link>
          <Button asChild className="bg-wolf-yellow text-gray-900 hover:bg-wolf-yellow/90">
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-200" onClick={toggleMenu} aria-label="Toggle Menu">
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Navigation */}
        {/* <motion.div
          className={`fixed inset-y-0 right-0 z-50 w-full bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/95 p-6 shadow-lg md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end mb-8">
            <button 
              className="text-gray-200 hover:text-wolf-yellow transition-colors" 
              onClick={toggleMenu} 
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <Link
              href="/"
              className="text-lg font-medium transition-colors hover:text-wolf-yellow"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium transition-colors hover:text-wolf-yellow"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-200">Services</p>
              <div className="pl-4 space-y-3 border-l border-gray-800">
                <Link
                  href="/services/it-consulting"
                  className="block text-base transition-colors hover:text-wolf-yellow"
                  onClick={toggleMenu}
                >
                  IT Consulting
                </Link>
                <Link
                  href="/services/software-development"
                  className="block text-base transition-colors hover:text-wolf-yellow"
                  onClick={toggleMenu}
                >
                  Software Development
                </Link>
                <Link
                  href="/services/testing-qa"
                  className="block text-base transition-colors hover:text-wolf-yellow"
                  onClick={toggleMenu}
                >
                  Testing & QA
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-lg font-medium transition-colors hover:text-wolf-yellow"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-wolf-yellow text-gray-900 hover:bg-wolf-yellow/90">
              <Link href="/contact" onClick={toggleMenu}>
                Get Started
              </Link>
            </Button>
          </div>
        </motion.div> */}
                {/* Mobile Navigation */}
          <motion.div
          className={`fixed inset-y-0 right-0 z-50 w-full bg-gray-900 p-6 shadow-lg md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end mb-8 bg-gray-900">
            <button 
              className="text-gray-200 hover:text-wolf-yellow transition-colors" 
              onClick={toggleMenu} 
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-3 flex flex-col space-y-6 bg-gray-900">
            <Link
              href="/"
              className="text-lg font-medium transition-colors hover:text-wolf-yellow"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium transition-colors hover:text-wolf-yellow"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-200">Services</p>
              <div className="pl-4 space-y-3 border-l border-gray-800">
                <Link
                  href="/services/it-consulting"
                  className="block text-base transition-colors hover:text-wolf-yellow"
                  onClick={toggleMenu}
                >
                  IT Consulting
                </Link>
                <Link
                  href="/services/software-development"
                  className="block text-base transition-colors hover:text-wolf-yellow"
                  onClick={toggleMenu}
                >
                  Software Development
                </Link>
                <Link
                  href="/services/testing-qa"
                  className="block text-base transition-colors hover:text-wolf-yellow"
                  onClick={toggleMenu}
                >
                  Testing & QA
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-lg font-medium transition-colors hover:text-wolf-yellow"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-wolf-yellow text-gray-900 hover:bg-wolf-yellow/90">
              <Link href="/contact" onClick={toggleMenu}>
                Get Started
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header