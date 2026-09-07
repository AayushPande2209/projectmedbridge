export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 md:py-24 bg-[#f5f5f3] border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.035em]">
              Usable medical supplies are being thrown away.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 leading-relaxed pt-1 border-t border-black pt-6">
            <p className="text-foreground text-base md:text-lg leading-relaxed">
              Every year, U.S. hospitals throw out thousands of pounds of unused, unexpired supplies.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/25318453/">The World Journal of Surgery</a> estimates{" "}
              2 million pounds are recoverable annually, worth about $15.4 million, that instead go to waste.
            </p>
            <p className="text-foreground text-base md:text-lg leading-relaxed">
              Central Ohio hospitals have not had a reliable way to move that surplus to clinics that still need it.
              Unused sterile supplies sit until they expire, then they are discarded.
            </p>
            <p className="text-foreground text-base md:text-lg leading-relaxed">
              That includes gauze, bandages, respirators, and diagnostic instruments, often by the pallet. Clinics
              elsewhere run short of the same items.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
