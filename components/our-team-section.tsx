import Image from "next/image"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const team = [
  {
    name: "Ben Kurian",
    title: "Team Lead",
    email: "ben@projectmedbridge.org",
    image: "/images/ben-kurian.jpg",
  },
  {
    name: "Naman Soni",
    title: "Operations",
    email: "naman@projectmedbridge.org",
    image: "/images/naman-soni.jpg",
  },
  {
    name: "Aayush Pande",
    title: "Technology",
    email: "aayush@projectmedbridge.org",
    image: "/images/aayush-pande.jpg",
  },
  {
    name: "Vahin Dubey",
    title: "Outreach",
    email: "vahin@projectmedbridge.org",
    image: "/images/vahin-dubey.jpg",
  },
  {
    name: "Arjun Pandya",
    title: "Partnerships",
    email: "arjun@projectmedbridge.org",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
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
                <Button
                  asChild
                  variant="pill-outline"
                  size="sm"
                  className="mt-3 text-[12px] font-medium"
                >
                  <a
                    href={`mailto:${member.email}`}
                    title={member.email}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Email</span>
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
