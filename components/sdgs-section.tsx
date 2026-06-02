import Image from "next/image"

const sdgs = [
  {
    number: 3,
    title: "Good Health and Well-being",
    src: "/images/sdgs/sdg-03.svg",
    href: "https://sdgs.un.org/goals/goal3",
    alignment:
      "We redirect surplus supplies to clinics that lack basic medical materials.",
  },
  {
    number: 12,
    title: "Responsible Consumption and Production",
    src: "/images/sdgs/sdg-12.svg",
    href: "https://sdgs.un.org/goals/goal12",
    alignment:
      "Every pallet we move is a pallet that doesn't reach the landfill.",
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    src: "/images/sdgs/sdg-10.svg",
    href: "https://sdgs.un.org/goals/goal10",
    alignment:
      "Excess for one clinic becomes access for another.",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    src: "/images/sdgs/sdg-17.svg",
    href: "https://sdgs.un.org/goals/goal17",
    alignment:
      "We coordinate with hospitals and international distributors to move supplies where they're needed most.",
  },
] as const

export default function SdgsSection() {
  return (
    <section id="sdgs" className="py-24 bg-white border-b border-border/35">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">
          SDG Alignment
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance mb-16">
          Aligned with the UN Sustainable Development Goals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {sdgs.map((goal) => (
            <a
              key={goal.number}
              href={goal.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`UN SDG ${goal.number}: ${goal.title}`}
              className="group flex flex-col items-center gap-5 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
            >
              <div className="relative aspect-square w-full max-w-[180px] sm:max-w-[200px] rounded-2xl border border-border overflow-hidden bg-muted">
                <Image
                  src={goal.src}
                  alt={`UN Sustainable Development Goal ${goal.number}: ${goal.title}`}
                  fill
                  className="object-cover transition-opacity group-hover:opacity-90"
                  sizes="(max-width: 640px) 80vw, 200px"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-foreground leading-snug group-hover:text-brand-red transition-colors">
                  {goal.title}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {goal.alignment}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
