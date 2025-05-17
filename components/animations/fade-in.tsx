"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  duration?: number
}

const FadeIn = ({ children, delay = 0, direction = "up", className = "", duration = 0.5 }: FadeInProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return { y: 40, opacity: 0 }
      case "down":
        return { y: -40, opacity: 0 }
      case "left":
        return { x: 40, opacity: 0 }
      case "right":
        return { x: -40, opacity: 0 }
      case "none":
        return { opacity: 0 }
      default:
        return { y: 40, opacity: 0 }
    }
  }

  const variants = {
    hidden: getDirectionVariants(),
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
