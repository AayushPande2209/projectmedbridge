import Image from "next/image"

const inventory = [
  ["9,393", "boxes of 3M N95 respirators"],
  ["20,736", "reusable hot and cold therapy packs"],
]

export default function ShipmentStory() {
  return (
    <section id="first-shipment" className="scroll-mt-16 bg-[#f5f5f3] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-9">
          <div>
            <p className="mb-3 text-base font-semibold text-brand-red">First shipment · August 2026</p>
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              OhioHealth surplus, moved into humanitarian use.
            </h2>
          </div>
        </div>

        <div className="border border-black bg-white">
          <div className="grid items-stretch lg:grid-cols-12">
            <figure className="grid min-w-0 grid-rows-[1fr_auto] lg:col-span-8 lg:min-h-[620px] lg:border-r lg:border-black">
              <div className="relative aspect-[4/3] bg-neutral-200 md:aspect-[16/10] lg:aspect-auto lg:min-h-0">
                <Image
                  src="/images/medbridge-first-shipment.jpg"
                  alt="Ben Kurian and Naman Soni at the completed OhioHealth medical supply pickup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
              <figcaption className="border-t border-black px-5 py-4 text-sm text-neutral-600">
                Ben Kurian and Naman Soni after the second pickup, August 6, 2026.
              </figcaption>
            </figure>

            <div className="flex min-w-0 flex-col border-t border-black lg:col-span-4 lg:border-t-0">
              <div className="bg-black p-6 text-white md:p-8">
                <p className="text-6xl font-bold leading-none tracking-[-0.055em] md:text-7xl">30,000</p>
                <p className="mt-3 text-lg">pounds of usable supplies redirected</p>
              </div>

              <div className="grid grid-cols-2 border-b border-black">
                <div className="border-r border-black p-5 md:p-6">
                  <p className="text-3xl font-semibold tracking-tight">~50</p>
                  <p className="mt-1 text-sm text-neutral-600">pallets</p>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-3xl font-semibold tracking-tight">$250K</p>
                  <p className="mt-1 text-sm text-neutral-600">estimated value</p>
                </div>
              </div>

              <div>
                {inventory.map(([value, label]) => (
                  <div key={value} className="border-b border-black p-5 md:p-6">
                    <p className="text-2xl font-semibold tracking-tight">{value}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-1 flex-col items-center justify-center p-6 text-center md:p-8">
                <p className="text-sm font-semibold">Destination</p>
                <a href="https://brothersbrother.org/" target="_blank" rel="noopener noreferrer" className="mt-4 block w-fit">
                  <Image
                    src="/images/bbf-logo.png"
                    alt="Brother's Brother Foundation"
                    width={220}
                    height={57}
                    className="h-auto w-[190px] brightness-0"
                  />
                </a>
                <p className="mt-4 text-sm text-neutral-600">Pittsburgh, Pennsylvania</p>
              </div>
              <a
                href="/press/project-medbridge-first-shipment-release.pdf"
                target="_blank"
                className="flex min-h-20 items-center justify-center border-t border-black bg-brand-red px-5 text-center text-sm font-semibold text-white hover:bg-brand-red-dark"
              >
                Read the press release
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
