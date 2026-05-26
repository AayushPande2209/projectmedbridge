import Image from "next/image"
import { Building2, Mail } from "lucide-react"

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
  return (
    <section id="team" className="py-24 bg-background border-b border-border/35">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">Our Team</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance mb-16">
          The students coordinating every pickup and call.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {team.map((member) => (
            <article key={member.name} className="flex flex-col items-center text-center gap-4">
              <div className="relative aspect-square w-full max-w-[200px] rounded-2xl border border-border overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{member.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{member.title}</p>
                <div className="mt-2 flex items-center justify-center gap-2 text-[11px] text-muted-foreground/80">
                  <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{member.highSchool}</span>
                </div>
                <a
                  href={`mailto:${member.email}`}
                  title={member.email}
                  aria-label={`Email ${member.name}`}
                  className="mt-3 inline-flex items-center gap-2 rounded-full border border-border/20 px-3 py-2 text-[12px] font-medium text-muted-foreground hover:border-brand-red/60 hover:text-brand-red transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Email</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
