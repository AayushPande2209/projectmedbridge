import {
  getSiteUrl,
  instagramUrl,
  linkedInUrl,
  ogImagePath,
  siteDescription,
  siteEmail,
  siteName,
} from '@/lib/site'

export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: siteName,
    description: siteDescription,
    url: getSiteUrl(),
    logo: getSiteUrl('/icon.svg'),
    image: getSiteUrl(ogImagePath),
    email: siteEmail,
    sameAs: [linkedInUrl, instagramUrl],
    areaServed: {
      '@type': 'Place',
      name: 'Central Ohio',
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    description: siteDescription,
    url: getSiteUrl(),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organization, website]),
      }}
    />
  )
}
