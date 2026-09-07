import Image from "next/image"

type Logo = {
  name: string
  href: string
  src?: string
  /** Rendered height. Set per mark so the row reads even by eye, not by pixel size. */
  height: string
  width: number
  naturalWidth: number
  naturalHeight: number
}

/*
  Optical sizing: heavy marks (C&S) sit smaller, thin or wide wordmarks
  (MATTER, OhioHealth) sit larger, and the tall Leadership Initiatives mark is
  given more height so its footprint matches the wordmarks around it.
*/
const logos: Logo[] = [
  { name: "OhioHealth", href: "https://www.ohiohealth.com/", src: "/images/ohiohealth.png", height: "h-9 md:h-11", width: 190, naturalWidth: 2190, naturalHeight: 480 },
  { name: "Brother's Brother Foundation", href: "https://brothersbrother.org/", src: "/images/bbf-logo.png", height: "h-9 md:h-10", width: 190, naturalWidth: 587, naturalHeight: 152 },
  { name: "MATTER 360", href: "https://www.matter.ngo/matter360/", src: "/images/matter-logo.png", height: "h-8 md:h-9", width: 130, naturalWidth: 261, naturalHeight: 68 },
  { name: "C&S, the Institute for Citizens & Scholars", href: "https://cands.org/", src: "/images/cands.png", height: "h-7 md:h-9", width: 100, naturalWidth: 2400, naturalHeight: 840 },
  { name: "Ohio HOSA", href: "https://ohiohosa.org/", src: "/images/hosa.png", height: "h-9 md:h-11", width: 120, naturalWidth: 5000, naturalHeight: 1712 },
  { name: "Leadership Initiatives", href: "https://lichangesummer.org/", src: "/images/leadershipinitiatives.png", height: "h-12 md:h-14", width: 40, naturalWidth: 479, naturalHeight: 704 },
]

function LogoLink({ logo }: { logo: Logo }) {
  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${logo.name} (opens in a new tab)`}
      className="inline-flex items-center transition-opacity duration-150 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {logo.src ? (
        <Image
          src={logo.src}
          alt={logo.name}
          width={logo.naturalWidth}
          height={logo.naturalHeight}
          sizes={`${logo.width}px`}
          className={`${logo.height} w-auto object-contain brightness-0 invert`}
        />
      ) : (
        // Typographic wordmark until the organization's own mark is supplied.
        <span className="text-center text-[1.375rem] font-bold leading-none tracking-[-0.02em] md:text-[1.625rem]">
          {logo.name}
        </span>
      )}
    </a>
  )
}

export default function Collaborators() {
  return (
    <div aria-labelledby="collaborators-heading" className="mt-10">
      <h2 id="collaborators-heading" className="text-sm text-white/60">
        In collaboration with
      </h2>
      <ul className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-5 md:flex-nowrap md:justify-between md:gap-x-8">
        {logos.map((logo) => (
          <li key={logo.name} className="flex min-h-10 items-center justify-center">
            <LogoLink logo={logo} />
          </li>
        ))}
      </ul>
    </div>
  )
}
