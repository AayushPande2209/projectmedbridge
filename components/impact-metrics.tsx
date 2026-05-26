"use client"

import { useEffect, useRef, useState } from "react"
import { Package, Users, Building2, MapPin } from "lucide-react"

const stats = [
  {
    icon: Package,
    value: 4200,
    suffix: "+",
    label: "Supply Units Redistributed",
    description: "Gloves, gauze, syringes, diagnostic tools, and more",
  },
  {
    icon: Users,
    value: 60,
    suffix: "+",
    label: "Student Volunteers Engaged",
    description: "HOSA chapter members trained and deployed",
  },
  {
    icon: Building2,
    value: 8,
    suffix: "",
    label: "Healthcare Partners",
    description: "Hospitals and clinics participating as donors",
  },
  {
    icon: MapPin,
    value: 5,
    suffix: "",
    label: "Communities Reached",
    description: "Recipient clinics across Central Ohio",
  },
]

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const interval = setInterval(() => {
      start = Math.min(start + step, target)
      setCount(Math.floor(start))
      if (start >= target) clearInterval(interval)
    }, 16)
    return () => clearInterval(interval)
  }, [target, duration, active])
  return count
}

function StatCard({
  stat,
  active,
}: {
  stat: (typeof stats)[number]
  active: boolean
}) {
  const count = useCountUp(stat.value, 1800, active)
  const Icon = stat.icon
  return (
    <div className="flex flex-col gap-4 p-8 bg-white/5 border border-white/10 rounded-xl">
      <div className="w-10 h-10 rounded-lg bg-brand-red/20 flex items-center justify-center">
        <Icon size={20} className="text-brand-red" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-4xl font-semibold text-white tabular-nums">
          {count.toLocaleString()}
          {stat.suffix}
        </p>
        <p className="text-sm font-medium text-white/90 mt-1">{stat.label}</p>
        <p className="text-xs text-white/50 mt-1 leading-relaxed">{stat.description}</p>
      </div>
    </div>
  )
}

export default function ImpactMetrics() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="impact" className="py-24 bg-[#0B0C10]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">Our Impact</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight text-balance max-w-xl">
            Real Supplies. Real Communities. Measurable Change.
          </h2>
          <p className="text-white/60 leading-relaxed max-w-sm text-sm text-pretty">
            Every Boxing Day event generates transparent, verified data on supplies collected, volunteers deployed, and
            communities served.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={active} />
          ))}
        </div>

        <p className="mt-8 text-xs text-white/30 text-right">
          * Data reflects cumulative totals as of Q1 2025. Updated quarterly.
        </p>
      </div>
    </section>
  )
}
