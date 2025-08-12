import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "MD Raihanur Rahman - Software Engineer",
  description:
    "Full-Stack Developer specializing in React, .NET, and scalable web applications. Experienced in ERP systems and competitive programming.",
  generator: "v0.dev",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "ASP.NET Core", "MongoDB", "TypeScript"],
  authors: [{ name: "MD Raihanur Rahman" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
