import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-T7THZ0JGMM'

export const metadata: Metadata = {
  title: 'Project MedBridge — Medical Supply Redistribution, Central Ohio',
  description:
    'Project MedBridge is a student-led nonprofit that redistributes surplus medical supplies from healthcare providers to under-resourced communities across Central Ohio.',
  keywords: ['medical supplies', 'nonprofit', 'Central Ohio', 'healthcare', 'HOSA', 'surplus redistribution'],
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
