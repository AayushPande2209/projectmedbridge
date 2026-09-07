export type NewsStory = {
  slug: string
  category: string
  date: string
  title: string
  summary: string
  image: string
  imageAlt: string
  href: string
  linkLabel: string
}

export const newsStories: NewsStory[] = [
  {
    slug: "delaware-source-first-shipment",
    category: "In the news",
    date: "August 26, 2026",
    title: "Delaware Source: One man's trash, another man's treasure",
    summary:
      "Delaware Source followed the full story: one cold email, nearly 50 pallets, two pickup days, and the persistence it took to find a humanitarian distribution partner.",
    image: "/images/medbridge-shipment-boxes.jpg",
    imageAlt: "Pallets of medical supplies inside a freight trailer",
    href: "https://www.delawaresource.com/2026/08/26/one-mans-trash-another-mans-treasure-olentangy-students-turn-ohiohealth-surplus-into-medical-aid/",
    linkLabel: "Read the Delaware Source article",
  },
  {
    slug: "2026-carnegie-young-leaders-convening",
    category: "Recognition",
    date: "July 27, 2026",
    title: "Selected for the 2026 Carnegie Young Leaders class",
    summary:
      "Project MedBridge was one of 71 teams chosen nationwide, and one of two from Ohio. Ben Kurian attended the kickoff in New Brunswick, New Jersey. The program includes $7,500 in project support.",
    image: "/images/cyl-convening.jpg",
    imageAlt: "Ben Kurian with fellow Carnegie Young Leaders at the 2026 kickoff convening",
    href: "https://www.youtube.com/watch?v=8lhsXuLN2Fc",
    linkLabel: "Watch the pitch video",
  },
]
