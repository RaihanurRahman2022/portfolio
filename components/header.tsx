"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Download } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/MD_Raihanur_Rahman_Resume.pdf"
    link.download = "MD_Raihanur_Rahman_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "pt-4" : "pt-6"
          }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`mx-auto transition-all duration-300 rounded-full border backdrop-blur-md flex items-center justify-between px-6 py-3 ${isScrolled
                ? "bg-background/80 border-border shadow-lg max-w-5xl"
                : "bg-transparent border-transparent max-w-7xl"
              }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 z-50" onClick={handleNavClick}>
              <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary/20">
                <Image
                  src="/profile-no-bg.png"
                  alt="MD Raihanur Rahman"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>

            {/* Desktop Navigation - Floating Island Style */}
            <nav className="hidden md:flex items-center gap-1 bg-background/50 p-1 rounded-full border border-border/50 backdrop-blur-sm">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="default"
                size="sm"
                className="rounded-full"
                onClick={handleResumeDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4 z-50">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className={`text-4xl font-bold tracking-tight transition-colors ${pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-8"
              >
                <Button size="lg" className="rounded-full text-lg px-8" onClick={handleResumeDownload}>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
