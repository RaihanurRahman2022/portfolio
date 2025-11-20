"use client"

import { motion } from "framer-motion"
import { Code2, Server, Terminal, ArrowRight } from "lucide-react"

export function TechJourneyTimeline() {
    const journey = [
        {
            year: "2016-2020",
            title: "The Foundation",
            role: "Competitive Programmer",
            description: "Mastered algorithms & data structures with C++. Solved 2500+ problems.",
            icon: Terminal,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
        },
        {
            year: "2020-Present",
            title: "Enterprise Scale",
            role: "Senior Software Engineer",
            description: "Building scalable ERPs with Angular, .NET, and Microservices at SELISE.",
            icon: Server,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20",
        },
        {
            year: "Future Focus",
            title: "High Performance",
            role: "Go Developer",
            description: "Building ultra-fast, concurrent backend systems and cloud-native tools.",
            icon: Code2,
            color: "text-cyan-500",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20",
            highlight: true,
        },
    ]

    return (
        <div className="relative py-10">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden md:block transform -translate-x-1/2" />

            <div className="space-y-12">
                {journey.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Content Side */}
                        <div className="flex-1 w-full">
                            <div className={`p-6 rounded-xl border backdrop-blur-sm hover:shadow-lg transition-all duration-300 ${item.bg} ${item.border} ${item.highlight ? 'ring-2 ring-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]' : ''}`}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-sm font-bold px-3 py-1 rounded-full bg-background/50 ${item.color}`}>
                                        {item.year}
                                    </span>
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                <div className="text-sm font-semibold text-muted-foreground mb-2">{item.role}</div>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </div>

                        {/* Center Node */}
                        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-muted shadow-lg">
                            <div className={`w-4 h-4 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                            {index < journey.length - 1 && (
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -bottom-10 text-muted-foreground/50 hidden md:block"
                                >
                                    <ArrowRight className="w-4 h-4 rotate-90" />
                                </motion.div>
                            )}
                        </div>

                        {/* Empty Side for Balance */}
                        <div className="flex-1 hidden md:block" />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
