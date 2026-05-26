import Image from "next/image"
import Script from "next/script"
import { useEffect } from "react"

const team = [
  {
    name: "Ben Kurian",
    title: "Team Lead",
    email: "ben@projectmedbridge.org",
    highSchool: "Olentangy Liberty High School",
    image: "/images/ben-kurian.jpg",
  },
  {
    name: "Naman Soni",
    title: "Operations",
    email: "naman@projectmedbridge.org",
    highSchool: "Olentangy High School",
    image: "/images/naman-soni.jpg",
  },
  {
    name: "Aayush Pande",
    title: "Technology",
    email: "aayush@projectmedbridge.org",
    highSchool: "Olentangy Liberty High School",
    image: "/images/aayush-pande.jpg",
  },
  {
    name: "Vahin Dubey",
    title: "Outreach",
    email: "vahin@projectmedbridge.org",
    highSchool: "Olentangy Liberty High School",
    image: "/images/vahin-dubey.jpg",
  },
  {
    name: "Arjun Pandya",
    title: "Partnerships",
    email: "arjun@projectmedbridge.org",
    highSchool: "Olentangy High School",
    image: "/images/arjun-pandya.jpg",
  },
]

export default function OurTeamSection() {
  useEffect(() => {
    // Lucide icons are injected by the CDN; ensure icons render after hydration.
    const w = window as unknown as { lucide?: { createIcons?: () => void } }
    const tryCreate = () => w.lucide?.createIcons?.()

    tryCreate()
    const interval = window.setInterval(() => {
      tryCreate()
    }, 250)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="team" className="py-24 bg-background border-b border-border/35">
      <Script
        src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"
        strategy="afterInteractive"
      />
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">
          OUR TEAM
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance mb-12">
          The students coordinating every pickup and call.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {team.map((member) => (
            <article
              key={member.name}
              className="h-[420px] flex flex-col rounded-2xl border border-border/10 bg-card px-4 py-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden shadow-sm bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                />
              </div>

              <div className="mt-4 flex flex-col items-start text-left">
                <h3 className="text-[17px] font-bold text-foreground leading-tight">
                  {member.name}
                </h3>

                <p className="text-[14px] font-medium text-muted-foreground mt-1">
                  {member.title}
                </p>

                <div className="mt-2 flex items-center gap-2 text-[13px] text-muted-foreground/80">
                  <i
                    data-lucide="building-2"
                    className="h-4 w-4 text-muted-foreground/70"
                    aria-hidden="true"
                  />
                  <span>{member.highSchool}</span>
                </div>

                <button
                  type="button"
                  className="mt-3 inline-flex items-center gap-2 rounded-full border border-border/20 bg-transparent px-3 py-2 text-[13px] font-medium text-muted-foreground hover:border-brand-red/60 hover:text-brand-red transition-colors"
                  title={member.email}
                  aria-label={`Email ${member.name}`}
                  onClick={() => {
                    window.location.href = `mailto:${member.email}`
                  }}
                >
                  <i
                    data-lucide="mail"
                    className="h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span>Email</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
