"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, XCircle, Info, X } from "lucide-react"
import { cn } from "@/lib/utils"

export type ToastType = "success" | "error" | "info"

export interface Toast {
    id: string
    type: ToastType
    title: string
    message: string
}

interface ToastItemProps {
    toast: Toast
    onDismiss: (id: string) => void
}

function ToastItem({ toast, onDismiss }: ToastItemProps) {
    const [isExiting, setIsExiting] = useState(false)

    const handleDismiss = () => {
        setIsExiting(true)
        setTimeout(() => onDismiss(toast.id), 300)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleDismiss()
        }, 5000)

        return () => clearTimeout(timer)
    }, [toast.id])

    const icons = {
        success: CheckCircle2,
        error: XCircle,
        info: Info,
    }

    const Icon = icons[toast.type]

    const styles = {
        success: {
            bg: "bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20",
            border: "border-green-500/50",
            icon: "text-green-500",
            glow: "shadow-[0_0_20px_rgba(34,197,94,0.3)]",
        },
        error: {
            bg: "bg-gradient-to-r from-red-500/10 to-rose-500/10 dark:from-red-500/20 dark:to-rose-500/20",
            border: "border-red-500/50",
            icon: "text-red-500",
            glow: "shadow-[0_0_20px_rgba(239,68,68,0.3)]",
        },
        info: {
            bg: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20",
            border: "border-blue-500/50",
            icon: "text-blue-500",
            glow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]",
        },
    }

    const style = styles[toast.type]

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-lg border backdrop-blur-md transition-all duration-300",
                style.bg,
                style.border,
                style.glow,
                isExiting
                    ? "animate-out slide-out-to-right-full opacity-0"
                    : "animate-in slide-in-from-right-full"
            )}
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />

            <div className="relative p-4 pr-10">
                <div className="flex items-start gap-3">
                    <div className={cn("flex-shrink-0 mt-0.5", style.icon)}>
                        <Icon className="w-5 h-5 animate-in zoom-in-50 duration-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm mb-1">{toast.title}</h3>
                        <p className="text-sm text-muted-foreground">{toast.message}</p>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <div
                        className={cn(
                            "h-full animate-progress origin-left",
                            toast.type === "success" && "bg-green-500",
                            toast.type === "error" && "bg-red-500",
                            toast.type === "info" && "bg-blue-500"
                        )}
                    />
                </div>
            </div>

            {/* Close button */}
            <button
                onClick={handleDismiss}
                className={cn(
                    "absolute top-4 right-3 rounded-full p-1 transition-colors hover:bg-white/10",
                    style.icon
                )}
                aria-label="Close"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    )
}

interface ToastContainerProps {
    toasts: Toast[]
    onDismiss: (id: string) => void
}

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
    if (toasts.length === 0) return null

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 max-w-sm w-full">
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
            ))}
        </div>
    )
}
