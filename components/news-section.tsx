import Image from "next/image"
import { carnegieProgramUrl, newsStories } from "@/lib/news"

/*
  Two stories on one 1px-rule grid.
  Desktop rows: [photo 360px] [photo 144px] [kicker] [title] [summary] [action]
  The Delaware Source photo spans rows 1-2; the Carnegie column uses row 2 for
  the red funding block, so both photo areas end on the same edge and the text
  rows below share tracks (subgrid), which keeps the kickers, titles, and
  buttons on the same baselines.
*/
export default function NewsSection() {
  const [coverage, carnegie] = newsStories

  return (
    <section id="news" className="scroll-mt-16 border-b border-black bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold text-brand-red">News and updates</p>
        <h2 className="mt-3 text-4xl font-bold leading-none tracking-[-0.03em] sm:text-5xl">
          Making headlines, moving supplies.
        </h2>

        <div className="mt-10 grid gap-px bg-black p-px md:mt-12 lg:grid-cols-[7fr_5fr] lg:grid-rows-[360px_144px_auto_auto_1fr_auto]">
          {/* Delaware Source */}
          <div className="relative aspect-[3/2] bg-white lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto">
            <Image
              src={coverage.image}
              alt={coverage.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 672px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col bg-white px-6 pb-7 pt-6 md:px-8 md:pb-8 lg:col-start-1 lg:row-span-4 lg:row-start-3">
            <p className="text-sm text-black/62">
              {coverage.kicker} · {coverage.date}
            </p>
            <h3 className="mt-3 max-w-lg text-[1.75rem] font-bold leading-[1.1] tracking-[-0.02em] md:text-3xl">
              {coverage.title}
            </h3>
            <p className="mt-4 max-w-lg leading-relaxed text-black/75">{coverage.summary}</p>
            <div className="mt-auto pt-7">
              <a href={coverage.href} target="_blank" rel="noopener noreferrer" className="btn btn-black">
                {coverage.linkLabel}
              </a>
            </div>
          </div>

          {/* Carnegie Young Leaders */}
          <div className="relative aspect-[3/2] bg-white lg:col-start-2 lg:row-start-1 lg:aspect-auto">
            <Image
              src={carnegie.image}
              alt={carnegie.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-[64%_50%]"
            />
          </div>
          <div className="flex flex-col justify-center bg-brand-red px-6 py-6 text-white md:px-8 lg:col-start-2 lg:row-start-2">
            <p className="text-[3.25rem] font-bold leading-none tracking-[-0.04em] md:text-[3.5rem]">
              {carnegie.funding?.amount}
            </p>
            <p className="mt-2 text-base leading-none">{carnegie.funding?.label}</p>
          </div>
          <div className="flex flex-col bg-white px-6 pb-7 pt-6 md:px-8 md:pb-8 lg:col-start-2 lg:row-span-4 lg:row-start-3">
            <p className="text-sm text-black/62">
              <a href={carnegieProgramUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-red">
                {carnegie.kicker}
              </a>{" "}
              · {carnegie.date}
            </p>
            <h3 className="mt-3 text-[1.75rem] font-bold leading-[1.1] tracking-[-0.02em] md:text-3xl">{carnegie.title}</h3>
            <p className="mt-4 leading-relaxed text-black/75">{carnegie.summary}</p>
            <div className="mt-auto pt-7">
              <a href={carnegie.href} target="_blank" rel="noopener noreferrer" className="btn btn-black">
                {carnegie.linkLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
