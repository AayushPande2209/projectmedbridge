export const siteName = 'Project MedBridge'
export const siteTitle = 'Project MedBridge: Medical Supply Redistribution, Central Ohio'
export const siteDescription =
  'Project MedBridge is a student-led medical supply redistribution network in Central Ohio. Its first shipment moved 30,000 pounds of OhioHealth surplus into humanitarian use.'
export const siteKeywords = [
  'medical supplies',
  'nonprofit',
  'Central Ohio',
  'healthcare',
  'HOSA',
  'surplus redistribution',
  'Project MedBridge',
  'medical supply donation',
]
export const siteLocale = 'en_US'
export const siteEmail = 'contact@projectmedbridge.org'
export const linkedInUrl = 'https://www.linkedin.com/company/projectmedbridge/'
export const instagramUrl = 'https://www.instagram.com/project.medbridge/'
export const pressReleasePath = '/press/project-medbridge-first-shipment-release.pdf'

/** Production domain (apex). */
export const siteDomain = 'projectmedbridge.org'
/** Canonical public URL with www. */
export const siteUrl = `https://www.${siteDomain}`

export const ogImagePath = '/images/og.jpg'
export const ogImageWidth = 2400
export const ogImageHeight = 1260
export const ogImageAlt = 'Project MedBridge, student-led medical supply redistribution in Central Ohio'

/** Absolute site origin without trailing slash. */
export function getSiteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
  if (fromEnv) return fromEnv
  return siteUrl
}

/** Full canonical URL for a path on the site. */
export function getSiteUrl(path = ''): string {
  const origin = getSiteOrigin()
  const suffix = path ? (path.startsWith('/') ? path : `/${path}`) : ''
  return `${origin}${suffix}`
}

export function getMetadataBase(): URL {
  const url = getSiteUrl()
  return new URL(url.endsWith('/') ? url : `${url}/`)
}
