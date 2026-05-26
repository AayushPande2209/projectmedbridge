import { ExternalLink, Play } from "lucide-react"

const PITCH_VIDEO_ID = "8lhsXuLN2Fc"
const CYL_PROGRAM_URL = "https://cands.org/carnegie-young-leaders/"

export default function FeaturedSection() {
  return (
    <section id="featured" className="py-16 md:py-20 bg-white border-y border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">
          Featured
        </p>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance">
              One of 100 teams in the country chosen to build this.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Project MedBridge was selected for{" "}
              <a
                href={CYL_PROGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Carnegie Young Leaders for Civic Preparedness
              </a>
              , a national fellowship from the Institute for Citizens &amp; Scholars backed by
              Carnegie Corporation of New York.
              The fellowship comes with up to{" "}
              <strong className="font-semibold text-foreground">$7,500</strong> in project funding,
              a year of coaching, and a national network of young civic leaders working on
              problems their communities can't afford to ignore.
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${PITCH_VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-text inline-flex items-center gap-2 w-fit text-sm"
            >
              Watch our pitch on YouTube
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border overflow-hidden bg-muted shadow-sm">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${PITCH_VIDEO_ID}`}
                  title="Project MedBridge Carnegie Young Leaders pitch video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-brand-ice border-t border-border/60">
                <Play size={14} className="text-brand-red shrink-0" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  The two-minute pitch that got us into the fellowship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}