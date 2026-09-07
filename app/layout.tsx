import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-T7THZ0JGMM'

export const metadata: Metadata = {
  title: 'Project MedBridge: Medical Supply Redistribution, Central Ohio',
  description:
    'Project MedBridge is a student-led medical supply redistribution network in Central Ohio. Its first shipment redirected nearly 30,000 pounds of OhioHealth surplus.',
  keywords: ['medical supplies', 'nonprofit', 'Central Ohio', 'healthcare', 'HOSA', 'surplus redistribution'],
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
