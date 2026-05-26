import Image from "next/image"
import { withBasePath } from "@/lib/base-path"

const partners = [
  { name: "C&S", src: withBasePath("/images/c&s.png"), href: "https://cands.org/" },
  { name: "Ohio HOSA", src: withBasePath("/images/hosa.png"), href: "https://ohiohosa.org/" },
  { name: "Leadership Initiatives", src: withBasePath("/images/leadershipinitiatives.png"), href: "https://lichangesummer.org/" },
  { name: "OhioHealth", src: withBasePath("/images/ohiohealth.png"), href: "https://www.ohiohealth.com/" },
]

type PartnerLogosProps = {
  /** `dark` = white logos on hero; `light` = black logos on light backgrounds */
  variant?: "light" | "dark"
}

export default function PartnerLogos({ variant = "light" }: PartnerLogosProps) {
  const isDark = variant === "dark"

  const content = (
    <>
      <p
        className={
          isDark
            ? "text-xs font-semibold tracking-widest uppercase text-white/50 mb-5 text-center"
            : "text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-10 text-center"
        }
      >
        Supported by
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 gap-y-6">
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
              className={
                isDark
                  ? "h-9 sm:h-11 w-auto object-contain brightness-0 invert opacity-90"
                  : "h-12 w-auto object-contain brightness-0"
              }
            />
          </a>
        ))}
      </div>
    </>
  )

  if (isDark) {
    return <div className="w-full pt-4 pb-16 md:pb-20">{content}</div>
  }

  return (
    <section className="bg-brand-ice border-y border-border/60">
      <div className="max-w-6xl mx-auto px-6 py-12">{content}</div>
    </section>
  )
}
