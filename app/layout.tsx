import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import JsonLd from '@/components/json-ld'
import {
  getMetadataBase,
  getSiteUrl,
  ogImageAlt,
  ogImageHeight,
  ogImagePath,
  ogImageWidth,
  siteDescription,
  siteEmail,
  siteKeywords,
  siteLocale,
  siteName,
  siteTitle,
} from '@/lib/site'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-T7THZ0JGMM'

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: siteName,
  authors: [{ name: siteName, url: getSiteUrl() }],
  creator: siteName,
  publisher: siteName,
  category: 'Nonprofit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteLocale,
    url: '/',
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImagePath,
        secureUrl: ogImagePath,
        width: ogImageWidth,
        height: ogImageHeight,
        alt: ogImageAlt,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: {
      url: ogImagePath,
      alt: ogImageAlt,
      width: ogImageWidth,
      height: ogImageHeight,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  manifest: '/site.webmanifest',
  other: {
    'og:email': siteEmail,
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  )
}
