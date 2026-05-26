import Image from "next/image"

const team = [
  {
    name: "Ben Kurian",
    title: "Team Lead",
    image: "/images/ben-kurian.jpg",
  },
  {
    name: "Naman Soni",
    title: "Operations",
    image: "/images/naman-soni.jpg",
  },
  {
    name: "Aayush Pande",
    title: "Technology",
    image: "/images/aayush-pande.jpg",
  },
  {
    name: "Vahin Dubey",
    title: "Outreach",
    image: "/images/vahin-dubey.jpg",
  },
  {
    name: "Arjun Pandya",
    title: "Partnerships",
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
