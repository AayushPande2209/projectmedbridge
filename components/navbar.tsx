"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const navLinks = [
  { label: "Inaugural shipment", href: "#first-shipment" },
  { label: "News", href: "#news" },
  { label: "Process", href: "#how-supplies-move" },
  { label: "Team", href: "#team" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        solid ? "border-black bg-white" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="relative block h-8 w-[120px]" aria-label="Project MedBridge home">
          <Image
            src="/images/logo-dark.svg"
            alt="Project MedBridge"
            width={120}
            height={40}
            className={`absolute inset-0 h-8 w-auto transition-opacity duration-300 ${solid ? "opacity-100" : "opacity-0"}`}
            priority
          />
          <Image
            src="/images/logo-light.svg"
            alt=""
            width={120}
            height={40}
            className={`absolute inset-0 h-8 w-auto transition-opacity duration-300 ${solid ? "opacity-0" : "opacity-100"}`}
            aria-hidden="true"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-300 ${
                solid ? "text-black hover:text-brand-red" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#donate" className="btn btn-red ml-1 px-4 py-2.5">
            Donate supplies
          </a>
        </nav>

        <button
          type="button"
          className={`flex h-10 items-center justify-center px-2 text-sm transition-colors duration-300 md:hidden ${
            solid ? "text-black" : "text-white"
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-black bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-black py-4 text-base text-black"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={() => setMenuOpen(false)}
              className="btn btn-red my-5 py-3.5"
            >
              Donate supplies
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
