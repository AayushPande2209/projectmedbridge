import Image from "next/image"
import { instagramUrl, linkedInUrl, pressReleasePath, siteEmail } from "@/lib/site"

const footerLinks = {
  Organization: [
    { label: "Inaugural shipment", href: "#first-shipment" },
    { label: "News and updates", href: "#news" },
    { label: "Process", href: "#how-supplies-move" },
    { label: "Team", href: "#team" },
  ],
  Resources: [
    { label: "Donate supplies", href: "#donate" },
    { label: "Press release", href: pressReleasePath },
  ],
  Connect: [
    { label: "Instagram", href: instagramUrl },
    { label: "LinkedIn", href: linkedInUrl },
    { label: "Email", href: `mailto:${siteEmail}` },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <a href="#" className="inline-block" aria-label="Project MedBridge home">
              <Image src="/images/logo-light.svg" alt="Project MedBridge" width={138} height={40} className="h-9 w-auto" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-snug text-white/70">
              One hospital&apos;s trash is another&apos;s treasure.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="md:col-span-2">
              <p className="text-sm text-white/50">{group}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => {
                  const external = link.href.startsWith("http")
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/30 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Project MedBridge. All rights reserved.</p>
          <p>Columbus, Ohio</p>
        </div>
      </div>
    </footer>
  )
}
