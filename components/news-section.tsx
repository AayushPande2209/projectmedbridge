import Image from "next/image"
import { newsStories } from "@/lib/news"

export default function NewsSection() {
  const [coverage, carnegie] = newsStories

  return (
    <section id="news" className="scroll-mt-16 border-y border-black bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-4xl font-bold tracking-[-0.04em] md:text-5xl">News</h2>

        <div className="grid border border-black lg:grid-cols-12">
          <article className="lg:col-span-7 lg:border-r lg:border-black">
            <div className="relative aspect-[16/10] border-b border-black bg-neutral-200">
              <Image src={coverage.image} alt={coverage.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm text-neutral-600">Delaware Source · {coverage.date}</p>
              <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.025em]">{coverage.title.replace("Delaware Source: ", "")}</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-neutral-600">{coverage.summary}</p>
              <a href={coverage.href} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-brand-red">
                Read the article
              </a>
            </div>
          </article>

          <article className="border-t border-black lg:col-span-5 lg:border-t-0">
            <div className="relative aspect-[16/10] border-b border-black bg-neutral-200">
              <Image src={carnegie.image} alt={carnegie.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
            </div>
            <div className="grid grid-cols-[1fr_auto] border-b border-black">
              <p className="p-5 text-sm text-neutral-600">Carnegie Young Leaders</p>
              <p className="border-l border-black p-5 text-sm text-neutral-600">{carnegie.date}</p>
            </div>
            <div className="bg-brand-red p-6 text-white md:p-8">
              <p className="text-5xl font-bold tracking-[-0.05em] md:text-6xl">$7,500</p>
              <p className="mt-2 text-base">in project funding</p>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold leading-tight tracking-tight">Selected for the 2026 national class</h3>
              <p className="mt-4 leading-relaxed text-neutral-600">One of 71 teams nationwide and one of two selected from Ohio, with a year of coaching and project support.</p>
              <a href={carnegie.href} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex border border-black px-5 py-3 text-sm font-semibold hover:bg-black hover:text-white">
                Watch the pitch
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
