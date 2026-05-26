import { ClipboardList, Truck, HeartHandshake } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Reach out",
    body:
      "Fill out the intake form below. Tell us a bit about your facility and the kinds of surplus you have sitting around, and we'll take it from there.",
  },
  {
    icon: Truck,
    title: "We pick it up",
    body:
      "We coordinate a collection day at your facility and bring freight directly to your dock. One scheduled stop, FTL pickup; no logistical burden on your end.",
  },
  {
    icon: HeartHandshake,
    title: "Your surplus goes global",
    body:
      "Everything we collect ships to Project C.U.R.E., the world's largest distributor of donated medical supplies. From there, it reaches hospitals and clinics in 135+ countries.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white border-b border-border/35">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">Process</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance mb-16">
          Three steps. Zero burden on your team.
        </h2>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <Icon size={44} className="text-brand-red" strokeWidth={1.2} />
                  <span className="text-5xl font-light text-border/60 select-none">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3 text-xl tracking-tight">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


