"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
}

const ServiceCard = ({ title, description, icon, href }: ServiceCardProps) => {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
      <Card className="h-full service-card bg-gray-900 border border-gray-800 hover:border-wolf-yellow">
        <CardHeader>
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-wolf-yellow">
            {icon}
          </div>
          <CardTitle className="text-xl text-gray-100">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-gray-400">{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button
            asChild
            variant="ghost"
            className="p-0 hover:bg-transparent text-wolf-yellow hover:text-wolf-yellow/90"
          >
            <Link href={href} className="flex items-center">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default ServiceCard
