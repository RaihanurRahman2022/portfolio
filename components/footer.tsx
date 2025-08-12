import Link from "next/link"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">© 2025 MD Raihanur Rahman. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/RaihanurRahman2022"
              className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/raihanur"
              className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://wa.me/8801881898980"
              className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
            >
              <MessageCircle className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:raihanur.rahman.2022@gmail.com"
              className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted md:mr-16"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
