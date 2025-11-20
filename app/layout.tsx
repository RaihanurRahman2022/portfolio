import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raihanur-rahman.netlify.app",
    title: "MD Raihanur Rahman - Software Engineer",
    description:
      "Full-Stack Developer specializing in React, .NET, and scalable web applications. Experienced in ERP systems and competitive programming.",
    siteName: "MD Raihanur Rahman Portfolio",
    images: [
      {
        url: "/profile-no-bg.png",
        width: 1200,
        height: 630,
        alt: "MD Raihanur Rahman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Raihanur Rahman - Software Engineer",
    description:
      "Full-Stack Developer specializing in React, .NET, and scalable web applications.",
    images: ["/profile-no-bg.png"],
  },
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
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
