import Image from "next/image"

const footerLinks = {
  Organization: [
    { label: "The Problem", href: "#problem" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Our Team", href: "#team" },
  ],
  Resources: [
    { label: "Become a Partner", href: "#partnership" },
  ],
  Connect: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/projectmedbridge/" },
    { label: "Email Us", href: "mailto:pmedbridge@gmail.com" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] text-white/80 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center mb-4">
              <Image
                src="/images/logo-light.svg"
                alt="Project MedBridge Logo"
                width={138}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </a>
            <p className="text-sm leading-relaxed text-white/50 text-pretty">
              One hospital&apos;s trash is another&apos;s treasure.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">{group}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Project MedBridge. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Columbus, Ohio
          </p>
        </div>
      </div>
    </footer>
  )
}
