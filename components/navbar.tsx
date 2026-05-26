"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "The Problem", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Our Team", href: "#team" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <Image
            src={scrolled ? "/images/logo-dark.svg" : "/images/logo-light.svg"}
            alt="Project MedBridge Logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-red ${scrolled ? "text-muted-foreground" : "text-white/80"
                }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partnership"
            className="ml-2 px-4 py-2 text-sm font-semibold rounded-md bg-brand-red text-white hover:bg-brand-red-dark transition-colors"
          >
            Become a Partner
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors ${scrolled ? "text-foreground" : "text-white"
            }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-border px-6 pb-5 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-brand-red transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partnership"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 text-sm font-semibold rounded-md bg-brand-red text-white hover:bg-brand-red-dark transition-colors text-center"
          >
            Become a Partner
          </a>
        </div>
      )}
    </header>
  )
}
