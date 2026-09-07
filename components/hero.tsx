"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import Collaborators from "@/components/collaborators"

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const image = imageRef.current
    if (!image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const offset = Math.min(window.scrollY * 0.06, 42)
      image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.045)`
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="relative flex min-h-[640px] flex-col justify-end overflow-hidden bg-black text-white md:min-h-[690px]">
      <div ref={imageRef} className="absolute -inset-y-8 inset-x-0 will-change-transform">
        <Image
          src="/images/hero.jpg"
          alt="The Columbus, Ohio skyline over the Scioto River"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_42%]"
        />
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.72)_34%,rgba(0,0,0,0.96)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-9 pt-24 md:pb-11 md:pt-28">
        <h1 className="max-w-5xl text-[2.75rem] font-bold leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-[4.9rem]">
          One hospital&apos;s trash is{" "}
          <br className="hidden md:block" />
          another&apos;s treasure.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/82 sm:text-xl">
          Project MedBridge is Central Ohio&apos;s first medical redistribution network, moving supplies
          from local hospitals to underresourced clinics around the globe.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
          <a href="#donate" className="btn btn-red sm:px-6">
            Donate supplies
          </a>
          <a
            href="#first-shipment"
            className="text-sm font-semibold underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white sm:text-base"
          >
            See the inaugural shipment
          </a>
        </div>
        <Collaborators />
      </div>
    </section>
  )
}
