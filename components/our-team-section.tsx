import Image from "next/image"
import { Mail } from "lucide-react"

const team = [
  {
    name: "Ben Kurian",
    title: "Team Lead",
    image: "/images/ben-kurian.jpg",
    email: "ben@projectmedbridge.org",
  },
  {
    name: "Naman Soni",
    title: "Operations",
    image: "/images/naman-soni.jpg",
    email: "naman@projectmedbridge.org",
  },
  {
    name: "Aayush Pande",
    title: "Technology",
    image: "/images/aayush-pande.JPG",
    email: "aayush@projectmedbridge.org",
  },
  {
    name: "Vahin Dubey",
    title: "Outreach",
    image: "/images/vahin-dubey.jpg",
    email: "vahin@projectmedbridge.org",
  },
  {
    name: "Arjun Pandya",
    title: "Partnerships",
    image: "/images/arjun-pandya.JPG",
    email: "arjun@projectmedbridge.org",
  },
]

export default function OurTeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.035em]">
            Our team
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {team.map((member) => (
            <article key={member.name} className="flex flex-col gap-4">
              <div className="relative aspect-square w-full max-w-[200px] overflow-hidden bg-neutral-100">
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
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-foreground hover:text-brand-red transition-colors"
                >
                  <Mail size={13} aria-hidden="true" />
                  Email
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
