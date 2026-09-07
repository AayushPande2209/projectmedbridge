import Image from "next/image"

const steps = [
  {
    title: "Identify surplus",
    body: "A hospital tells us what unopened supplies it has available.",
    image: "/images/surplus-warehouse.jpg",
    imageAlt: "Usable medical supplies stored on warehouse shelves",
    imageClass: "object-cover object-center",
  },
  {
    title: "Coordinate transfer",
    body: "We match the inventory with a recipient and arrange pickup and freight.",
    image: "/images/freight-coordination.jpg",
    imageAlt: "Freight worker preparing a trailer for transport",
    imageClass: "object-cover object-[42%_50%]",
  },
  {
    title: "Reach care networks",
    body: "Our recipient partners place the supplies with healthcare teams that need them.",
    image: "/images/recipient-loading.jpg",
    imageAlt: "Supplies being loaded into a truck for distribution",
    imageClass: "object-cover object-center",
  },
]

export default function HowSuppliesMove() {
  return (
    <section id="how-supplies-move" className="scroll-mt-16 border-b border-black bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold leading-none tracking-[-0.03em] sm:text-5xl">How we work.</h2>

        <ol className="mt-10 grid gap-12 md:mt-14 md:grid-cols-3 md:gap-7 lg:gap-9">
          {steps.map((step) => (
            <li key={step.title}>
              <div className="relative aspect-[4/3] overflow-hidden border border-black bg-black">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={step.imageClass}
                />
                <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-black/62">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
