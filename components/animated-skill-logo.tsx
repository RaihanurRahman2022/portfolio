"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface AnimatedSkillLogoProps {
  name: string
  logo: string
  delay?: number
}

export function AnimatedSkillLogo({ name, logo, delay = 0 }: AnimatedSkillLogoProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 100)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.1,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="flex flex-col items-center p-4 rounded-lg bg-card border hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      <div className="w-12 h-12 mb-3 flex items-center justify-center">
        <img
          src={logo || "/placeholder.svg"}
          alt={`${name} logo`}
          className="w-full h-full object-contain group-hover:brightness-110 transition-all duration-300"
        />
      </div>
      <span className="text-sm font-medium text-center group-hover:text-primary transition-colors duration-300">
        {name}
      </span>
    </motion.div>
  )
}
