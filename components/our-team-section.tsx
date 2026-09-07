import Image from "next/image"
import { Mail } from "lucide-react"

const team = [
  { name: "Ben Kurian", title: "Team Lead", image: "/images/ben-kurian.jpg", email: "ben@projectmedbridge.org" },
  { name: "Naman Soni", title: "Operations", image: "/images/naman-soni.jpg", email: "naman@projectmedbridge.org" },
  { name: "Aayush Pande", title: "Technology", image: "/images/aayush-pande.jpg", email: "aayush@projectmedbridge.org" },
  { name: "Vahin Dubey", title: "Outreach", image: "/images/vahin-dubey.jpg", email: "vahin@projectmedbridge.org" },
  { name: "Arjun Pandya", title: "Partnerships", image: "/images/arjun-pandya.jpg", email: "arjun@projectmedbridge.org" },
]

export default function OurTeamSection() {
  return (
    <section id="team" className="scroll-mt-16 border-b border-black bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold leading-none tracking-[-0.03em] sm:text-5xl">Meet the team.</h2>

        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:mt-12 lg:grid-cols-5">
          {team.map((member) => (
            <li key={member.name} className="flex flex-col border border-black bg-white">
              <div className="relative aspect-square w-full overflow-hidden border-b border-black bg-paper">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 210px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
                <h3 className="font-semibold leading-tight">{member.name}</h3>
                <p className="mt-1 text-sm text-black/62">{member.title}</p>
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium underline decoration-black/30 underline-offset-[3px] transition-colors hover:text-brand-red hover:decoration-brand-red"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  Email
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
