"use client"

import { motion } from "framer-motion"
import { Database, Server, Shield, FileJson, Globe, ArrowRight, ArrowDown, HardDrive, Lock } from "lucide-react"

export function ArchitectureDiagram() {
    const nodes = [
        {
            id: "client",
            label: "Client",
            icon: Globe,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20",
            description: "Web Browser / CLI",
        },
        {
            id: "router",
            label: "Gin Router",
            icon: Server,
            color: "text-cyan-400",
            bg: "bg-cyan-400/10",
            border: "border-cyan-400/20",
            description: "HTTP Request Handler",
        },
        {
            id: "middleware",
            label: "Middleware",
            icon: Shield,
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "border-purple-400/20",
            description: "JWT Auth & Logging",
        },
        {
            id: "services",
            label: "Services",
            icon: HardDrive,
            color: "text-green-400",
            bg: "bg-green-400/10",
            border: "border-green-400/20",
            description: "File Ops & User Logic",
        },
        {
            id: "data",
            label: "Data Layer",
            icon: Database,
            color: "text-orange-400",
            bg: "bg-orange-400/10",
            border: "border-orange-400/20",
            description: "PostgreSQL & File System",
        },
    ]

    return (
        <div className="w-full">
            {/* Flow Diagram */}
            <div className="relative w-full overflow-x-auto overflow-y-visible mb-8 scrollbar-thin pb-2 -mx-2 sm:-mx-4 lg:mx-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-center justify-start lg:justify-center gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 px-2 sm:px-4 lg:px-0 lg:w-full lg:max-w-full">
                {nodes.map((node, index) => (
                    <div key={node.id} className="relative flex flex-col items-center w-full sm:w-auto flex-shrink-0">
                        {/* Node */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
                            className={`relative z-10 w-full sm:w-auto sm:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px] 2xl:min-w-[260px] min-h-[140px] lg:min-h-[160px] xl:min-h-[180px] 2xl:min-h-[200px] rounded-xl border backdrop-blur-md flex flex-col items-center justify-center p-5 sm:p-6 lg:p-7 xl:p-8 2xl:p-10 gap-3 sm:gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl ${node.bg} ${node.border} group`}
                        >
                            <div className={`p-3 sm:p-4 lg:p-4 xl:p-5 2xl:p-6 rounded-full bg-background/80 ${node.color} flex-shrink-0`}>
                                <node.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12" />
                            </div>
                            <div className="flex flex-col items-center text-center w-full">
                                <span className="font-bold text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl mb-1 sm:mb-2">{node.label}</span>
                                <span className="text-[10px] sm:text-xs lg:text-sm xl:text-base text-muted-foreground leading-relaxed px-1 sm:px-2">{node.description}</span>
                            </div>

                            {/* Pulse Effect */}
                            <div className={`absolute inset-0 rounded-xl ${node.bg} opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity`} />
                        </motion.div>

                        {/* Desktop Arrow (horizontal flow for lg screens) */}
                        {index < nodes.length - 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15 + 0.1 }}
                                className="hidden lg:flex absolute -right-4 xl:-right-5 2xl:-right-6 top-1/2 -translate-y-1/2 text-primary/70 z-20 items-center justify-center"
                            >
                                <ArrowRight className="w-6 h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 animate-pulse" />
                            </motion.div>
                        )}

                        {/* Tablet Arrow (2-column layout) */}
                        {index < nodes.length - 1 && index % 2 === 0 && index < 4 && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15 + 0.1 }}
                                className="hidden sm:block lg:hidden absolute -right-6 top-1/2 -translate-y-1/2 text-muted-foreground/60 z-20"
                            >
                                <ArrowRight className="w-5 h-5 animate-pulse" />
                            </motion.div>
                        )}

                        {/* Mobile arrow */}
                        {index < nodes.length - 1 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 + 0.1 }}
                                className="sm:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/60 z-20"
                            >
                                <ArrowDown className="w-6 h-6 animate-pulse" />
                            </motion.div>
                        )}

                        {/* Tablet down arrows for column transitions */}
                        {(index === 1 || index === 3) && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 + 0.1 }}
                                className="hidden sm:block lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/60 z-20"
                            >
                                <ArrowDown className="w-5 h-5 animate-pulse" />
                            </motion.div>
                        )}
                    </div>
                ))}
                </div>
            </div>

            {/* Legend/Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-3 sm:p-4 rounded-lg border bg-card/50 backdrop-blur-sm hover:shadow-md transition-shadow"
                >
                    <h4 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                        <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" /> Security
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Requests are intercepted by middleware for JWT validation before reaching business logic.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="p-3 sm:p-4 rounded-lg border bg-card/50 backdrop-blur-sm hover:shadow-md transition-shadow"
                >
                    <h4 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                        <FileJson className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" /> Concurrency
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        File operations run in separate goroutines to prevent blocking the main thread.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="p-3 sm:p-4 rounded-lg border bg-card/50 backdrop-blur-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1"
                >
                    <h4 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                        <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" /> Persistence
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Metadata is stored in PostgreSQL via GORM, while physical files reside in secured storage.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
