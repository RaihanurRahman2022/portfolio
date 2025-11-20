"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-background">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Gradient Orbs */}
            <motion.div
                animate={{
                    x: mousePosition.x * 0.05,
                    y: mousePosition.y * 0.05,
                }}
                transition={{ type: "spring", damping: 50, stiffness: 400 }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 mix-blend-screen pointer-events-none"
            />

            <motion.div
                animate={{
                    x: mousePosition.x * -0.05,
                    y: mousePosition.y * -0.05,
                }}
                transition={{ type: "spring", damping: 50, stiffness: 400 }}
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen pointer-events-none"
            />

            <motion.div
                animate={{
                    x: mousePosition.x * 0.02,
                    y: mousePosition.y * -0.02,
                }}
                transition={{ type: "spring", damping: 50, stiffness: 400 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] opacity-30 mix-blend-screen pointer-events-none"
            />
        </div>
    )
}
