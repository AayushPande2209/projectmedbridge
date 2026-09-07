import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[min(680px,calc(100svh-4rem))] flex flex-col justify-end overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero.jpg"
          alt="Surplus medical supplies"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/25" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 md:pb-20 w-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-bold text-white leading-[1.02] tracking-[-0.04em] mb-7 max-w-4xl">
          One hospital&apos;s trash is another&apos;s
          <br />
          <span className="text-brand-red">treasure.</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl mb-9">
          We move usable surplus from Central Ohio hospitals to medical aid organizations that can put it back to work.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#partnership"
            className="px-6 py-3.5 bg-brand-red text-white font-semibold text-sm hover:bg-brand-red-dark transition-colors text-center"
          >
            Donate unused supplies
          </a>
          <a
            href="#first-shipment"
            className="px-2 py-3.5 text-white font-semibold text-sm underline decoration-white/40 underline-offset-4 hover:decoration-white transition-colors text-center"
          >
            See the first shipment
          </a>
        </div>
      </div>
    </section>
  )
}
