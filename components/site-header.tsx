"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="bg-black text-white py-2 px-4 text-sm">
        <div className="container flex justify-between items-center mx-auto">
          <a href="tel:+97143901646" className="hover:text-gray-300">
            +97143901646
          </a>
          <a href="mailto:info@xenoferite.com" className="hover:text-gray-300">
            info@xenoferite.com
          </a>
        </div>
      </div>
      <div className={cn("transition-all duration-200", isScrolled ? "bg-white shadow-md" : "bg-transparent")}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/xenoferite-logo.svg" alt="Xenoferite" className="h-8 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isScrolled ? "text-gray-900" : "text-white",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-900" : "text-white")} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className="text-lg font-medium">
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

