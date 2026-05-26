export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">The Problem</p>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Bold Statement & Key Metric */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance">
              A critical gap in local healthcare distribution.
            </h2>
          </div>

          {/* Right Column: Sentence-based Narrative Form */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground font-normal text-lg md:text-xl leading-relaxed">
              Every year, U.S. hospitals discard thousands of pounds of unused, unexpired medical supplies. <a href="https://pubmed.ncbi.nlm.nih.gov/25318453/">The World Journal of Surgery</a> estimates <strong className="font-bold">2 million pounds</strong> are recoverable annually, representing <strong className="font-bold">$15.4 million</strong> in potential donations that instead enter the waste stream.
            </p>
            <p className="text-foreground font-normal text-lg md:text-xl leading-relaxed">
              Despite this, Central Ohio has had no mechanism for redistributing hospital surplus. Without a dedicated pathway to capture and redirect these materials, perfectly viable, sterile supplies are left to expire on hospital shelves and ultimately end up in landfills.
            </p>
            <p className="text-foreground font-normal text-lg md:text-xl leading-relaxed">
              Local hospitals throw out gauze, bandages, and diagnostic instruments by the pallet. Across the world, free clinics and under-resourced health organizations ration the same supplies <strong className="font-bold">by the piece.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

