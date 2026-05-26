"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setOffset(window.scrollY * 0.3)
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0B0C10]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Surplus Medical Supplies Background"
            fill
            priority
            className="object-cover opacity-[0.25]"
          />
        </div>
        {/* Charcoal color overlay to blend */}
        <div className="absolute inset-0 bg-[#0B0C10]/70 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/30 via-transparent to-[#0B0C10]/95 z-10" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 w-full text-left">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-black text-white leading-[1.05] tracking-tight mb-8 max-w-5xl">
          One hospital's trash is another's
          <br />
          <span className="text-brand-red">treasure.</span>

        </h1>
        <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-3xl mb-12 text-pretty">
          Project MedBridge is Central Ohio's first student-led medical redistribution network: redirecting surplus hospital supplies to under-resourced clinics worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <a
            href="#partnership"
            className="px-8 py-4 rounded-md bg-brand-red text-white font-semibold text-sm hover:bg-brand-red-dark transition-colors shadow-lg shadow-brand-red/20 text-center"
          >
            Partner With Us
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-md border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors text-center"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  )
}

