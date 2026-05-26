import { basePath } from '@/lib/base-path'

export const siteName = 'Project MedBridge'
export const siteTitle =
  'Project MedBridge: Central Ohio\'s Medical Redistribution Network'
export const siteDescription =
  'Project MedBridge is Central Ohio\'s first student-led medical redistribution network, redirecting surplus hospital supplies to under-resourced clinics worldwide.'
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
export const siteEmail = 'pmedbridge@gmail.com'
export const linkedInUrl = 'https://www.linkedin.com/company/projectmedbridge/'

/** Production domain (apex). */
export const siteDomain = 'projectmedbridge.org'
/** Canonical public URL with www. */
export const siteUrl = `https://www.${siteDomain}`

export const ogImagePath = '/images/og.jpg'
export const ogImageWidth = 2400
export const ogImageHeight = 1260
export const ogImageAlt =
  'Project MedBridge — student-led medical supply redistribution in Central Ohio'

/** Absolute site origin without trailing slash. */
export function getSiteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
  if (fromEnv) return fromEnv
  return siteUrl
}

/** Full canonical URL including optional subpath (legacy GitHub Pages only). */
export function getSiteUrl(path = ''): string {
  const origin = getSiteOrigin()
  const bp = basePath.replace(/\/$/, '')
  const suffix = path ? (path.startsWith('/') ? path : `/${path}`) : ''
  return `${origin}${bp}${suffix}`
}

export function getMetadataBase(): URL {
  const url = getSiteUrl()
  return new URL(url.endsWith('/') ? url : `${url}/`)
}

export function withAssetPath(path: string): string {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}
