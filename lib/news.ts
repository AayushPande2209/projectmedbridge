export type NewsStory = {
  slug: string
  kicker: string
  date: string
  title: string
  summary: string
  image: string
  imageAlt: string
  href: string
  linkLabel: string
  /** Optional funding figure given typographic emphasis in the layout. */
  funding?: { amount: string; label: string }
}

export const carnegieProgramUrl = "https://cands.org/carnegie-young-leaders/"

export const newsStories: NewsStory[] = [
  {
    slug: "delaware-source-first-shipment",
    kicker: "Delaware Source",
    date: "August 26, 2026",
    title: "Olentangy students turn OhioHealth surplus into medical aid",
    summary:
      "Hannah Martin spoke with our team about how we redirected 30,000 pounds of surplus medical supplies.",
    image: "/images/medbridge-shipment-boxes.jpg",
    imageAlt: "Pallets of boxed medical supplies inside the freight trailer",
    href: "https://www.delawaresource.com/2026/08/26/one-mans-trash-another-mans-treasure-olentangy-students-turn-ohiohealth-surplus-into-medical-aid/",
    linkLabel: "Read the article",
  },
  {
    slug: "2026-carnegie-young-leaders",
    kicker: "Institute for Citizens & Scholars",
    date: "July 27, 2026",
    title: "Project MedBridge joins the 2026 Carnegie Young Leaders class",
    summary:
      "Ben represented MedBridge at the national kickoff convening in New Jersey, joining young civic leaders from across the country.",
    image: "/images/cyl-convening.jpg",
    imageAlt: "Ben Kurian with fellow Carnegie Young Leaders at the 2026 convening",
    href: "https://www.youtube.com/watch?v=8lhsXuLN2Fc",
    linkLabel: "Watch our winning pitch video",
    funding: { amount: "$7,500", label: "in project funding" },
  },
]
