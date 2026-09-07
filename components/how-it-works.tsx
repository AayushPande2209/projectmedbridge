const stages = [
  ["Hospital", "Identifies sealed, usable surplus"],
  ["Project MedBridge", "Matches the load and coordinates pickup"],
  ["Aid partner", "Places supplies with healthcare facilities"],
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-black py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-bold leading-none tracking-[-0.04em] md:text-5xl">How supplies move</h2>
          <p className="max-w-md text-base leading-relaxed text-white/65 md:justify-self-end">
            One coordinated route from excess hospital inventory to healthcare organizations that can use it.
          </p>
        </div>

        <div className="mt-12 border-y border-white/40 py-10 md:py-14">
          <svg viewBox="0 0 1200 330" role="img" aria-labelledby="route-title route-description" className="hidden h-auto w-full md:block">
            <title id="route-title">Medical supply redistribution route</title>
            <desc id="route-description">Boxes leave a hospital warehouse, travel by freight truck, and arrive at a receiving clinic.</desc>

            <path d="M205 174H995" fill="none" stroke="#D90429" strokeWidth="5" />
            <path d="m970 155 28 19-28 19" fill="none" stroke="#D90429" strokeWidth="5" />

            <g transform="translate(50 62)" stroke="white" strokeWidth="4" fill="black">
              <path d="M15 90h270v145H15z" />
              <path d="M0 90 150 20l150 70" />
              <path d="M48 124h62v45H48zM120 124h62v45h-62zM192 124h62v45h-62zM84 179h62v45H84zM156 179h62v45h-62z" />
            </g>

            <g transform="translate(475 102)" stroke="white" strokeWidth="4" fill="black">
              <path d="M0 25h175v105H0zM175 58h70l45 45v27H175z" />
              <circle cx="55" cy="145" r="24" />
              <circle cx="225" cy="145" r="24" />
              <path d="M190 73h42l30 30h-72z" />
            </g>

            <g transform="translate(890 37)" stroke="white" strokeWidth="4" fill="black">
              <path d="M20 90h260v190H20zM0 90 150 10l150 80" />
              <path d="M125 123h50v50h50v50h-50v50h-50v-50H75v-50h50z" fill="#D90429" stroke="none" />
            </g>
          </svg>

          <div className="relative grid gap-8 md:hidden">
            <div className="absolute bottom-10 left-5 top-10 w-0.5 bg-brand-red" aria-hidden="true" />
            {stages.map(([title, detail], index) => (
              <div key={title} className="relative grid grid-cols-[2.5rem_1fr] gap-5">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center border border-white bg-black font-mono text-xs text-brand-red">0{index + 1}</div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden grid-cols-3 divide-x divide-white/30 md:grid">
          {stages.map(([title, detail], index) => (
            <div key={title} className={`py-6 ${index === 0 ? "pr-8" : index === 2 ? "pl-8" : "px-8"}`}>
              <p className="text-lg font-semibold">{title}</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
