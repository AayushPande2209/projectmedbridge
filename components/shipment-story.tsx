import Image from "next/image"
import { pressReleasePath } from "@/lib/site"

const supportingMetrics = [
  ["~50", "pallets"],
  ["$250K", "estimated value"],
  ["9,393", "boxes of 3M N95 respirators"],
  ["20,736", "reusable hot and cold therapy packs"],
] as const

export default function ShipmentStory() {
  return (
    <section id="first-shipment" className="scroll-mt-16 border-b border-black bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold text-brand-red">Inaugural shipment · August 2026</p>
        <h2 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
          We gave OhioHealth&apos;s COVID-era surplus a second life.
        </h2>

        {/*
          One 1px-rule grid. The black background shows through the 1px gaps and
          padding, so every rule is the same black and nothing double-borders.
          Desktop: photo (7) | metrics (5) on row 1, caption | button on row 2.
          The photo cell has no intrinsic height on desktop; it takes the height
          the metrics column needs, so there is never a leftover blank zone.
        */}
        <div className="mt-10 grid gap-px bg-black p-px md:mt-12 lg:grid-cols-[7fr_5fr] lg:grid-rows-[auto_auto]">
          <div className="relative aspect-square bg-white lg:col-start-1 lg:row-start-1 lg:aspect-auto">
            <Image
              src="/images/medbridge-first-shipment.jpg"
              alt="Ben Kurian and Naman Soni sitting on the back of the loaded truck"
              fill
              sizes="(max-width: 1024px) 100vw, 672px"
              className="object-cover object-[50%_25%]"
            />
          </div>

          <p className="flex min-h-14 items-center bg-white px-5 py-3 text-[0.8125rem] leading-snug text-black/62 lg:col-start-1 lg:row-start-2">
            Ben Kurian and Naman Soni after the second pickup, August 6, 2026.
          </p>

          <div className="grid gap-px bg-black lg:col-start-2 lg:row-start-1 lg:grid-rows-[auto_auto_1fr]">
            <div className="bg-brand-red px-6 py-7 text-white md:px-7 md:py-8">
              <p className="text-[4.25rem] font-bold leading-[0.9] tracking-[-0.04em] md:text-[4.75rem]">30,000</p>
              <p className="mt-2 text-2xl font-medium leading-none tracking-[-0.01em] md:text-[1.75rem]">pounds</p>
              <p className="mt-3 text-base text-white/75">redirected for reuse</p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-black">
              {supportingMetrics.map(([value, label]) => (
                <div key={label} className="bg-white px-5 py-5 md:px-6">
                  <p className="text-[1.75rem] font-bold leading-none tracking-[-0.03em]">{value}</p>
                  <p className="mt-2 text-sm leading-snug text-black/62">{label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center bg-white px-5 py-6 md:px-6">
              <p className="text-sm text-black/62">Delivered to</p>
              <a
                href="https://brothersbrother.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-fit transition-opacity hover:opacity-60"
              >
                <Image
                  src="/images/bbf-logo.png"
                  alt="Brother's Brother Foundation"
                  width={587}
                  height={152}
                  sizes="150px"
                  className="h-9 w-auto brightness-0 md:h-10"
                />
              </a>
              <p className="mt-4 font-semibold leading-tight">Brother&apos;s Brother Foundation</p>
              <p className="mt-1 text-sm text-black/62">Pittsburgh, Pennsylvania</p>
            </div>
          </div>

          <a
            href={pressReleasePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-black min-h-14 lg:col-start-2 lg:row-start-2"
          >
            Read the press release
          </a>
        </div>
      </div>
    </section>
  )
}
