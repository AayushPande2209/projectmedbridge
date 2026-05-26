import Image from "next/image"

const partners = [
  { name: "C&S", src: "/images/c&s.png", href: "https://cands.org/" },
  { name: "Ohio HOSA", src: "/images/hosa.png", href: "https://ohiohosa.org/" },
  { name: "Leadership Initiatives", src: "/images/leadershipinitiatives.png", href: "https://lichangesummer.org/" },
  { name: "OhioHealth", src: "/images/ohiohealth.png", href: "https://www.ohiohealth.com/" },
]

export default function PartnerLogos() {
  return (
    <section className="bg-brand-ice border-y border-border/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-10 text-center">Supported by</p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.name}`}
              className="block transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={160}
                height={52}
                className="h-12 w-auto object-contain brightness-0"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
