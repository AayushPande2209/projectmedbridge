"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "First shipment", href: "#first-shipment" },
  { label: "News", href: "#news" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Our team", href: "#team" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white border-b-4 border-brand-red">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <Image
            src="/images/logo-dark.svg"
            alt="Project MedBridge Logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-foreground transition-colors hover:text-brand-red"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partnership"
            className="ml-2 px-4 py-2 text-[13px] font-semibold bg-brand-red text-white hover:bg-brand-red-dark transition-colors"
          >
            Become a partner
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-foreground transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

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
            className="px-4 py-2 text-sm font-semibold bg-brand-red text-white hover:bg-brand-red-dark transition-colors text-center"
          >
            Become a partner
          </a>
        </div>
      )}
    </header>
  )
}
