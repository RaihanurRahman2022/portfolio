"use client"

import { useState, useEffect } from "react"

interface AnimatedDesignationProps {
  designations: string[]
  className?: string
}

export function AnimatedDesignation({ designations, className = "" }: AnimatedDesignationProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentDesignation = designations[currentIndex]

    if (isTyping) {
      if (currentText.length < currentDesignation.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentDesignation.slice(0, currentText.length + 1))
        }, 100) // Typing speed
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Pause duration
        return () => clearTimeout(timeout)
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 50) // Deleting speed (faster than typing)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % designations.length)
          setIsTyping(true)
        }, 500) // Pause before next designation
        return () => clearTimeout(timeout)
      }
    }
  }, [currentText, currentIndex, isTyping, designations])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500) // Cursor blink speed

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      <span
        className={`inline-block w-0.5 h-6 bg-current ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
      >
        |
      </span>
    </span>
  )
}
