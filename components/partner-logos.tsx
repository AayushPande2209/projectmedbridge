import Image from "next/image"

const partners = [
  { name: "OhioHealth", src: "/images/ohiohealth.png", href: "https://www.ohiohealth.com/" },
  { name: "Brother's Brother Foundation", src: "/images/bbf-logo.png", href: "https://brothersbrother.org/" },
  { name: "MATTER", src: "/images/matter-logo.png", href: "https://www.matter.ngo/matter360/" },
  { name: "C&S", src: "/images/c&s.png", href: "https://cands.org/" },
  { name: "Ohio HOSA", src: "/images/hosa.png", href: "https://ohiohosa.org/" },
  { name: "Leadership Initiatives", src: "/images/leadershipinitiatives.png", href: "https://lichangesummer.org/" },
]

export default function PartnerLogos() {
  return (
    <section className="bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-sm text-muted-foreground mb-8 text-center">Partners and supporters</p>
        <div className="grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-3">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.name}`}
              className="flex min-h-14 items-center justify-center transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={175}
                height={52}
                className="h-auto max-h-12 max-w-[150px] lg:max-w-[185px] w-auto object-contain grayscale brightness-0"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
