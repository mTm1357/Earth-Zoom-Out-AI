import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e40af",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://earthzoomoutai.top'),
  title: "Earth Zoom Out AI Free",
  description: "Free earth zoom out AI tool.Create stunning earth zoom out effects from any photo. Transform images into cinematic space videos. Try now!",
  authors: [{ name: "Earth Zoom Out AI" }],
  creator: "Earth Zoom Out AI",
  publisher: "Earth Zoom Out AI",
  robots: "index, follow",
  alternates: {
    canonical: "https://earthzoomoutai.top"
  },
  openGraph: {
    title: "Earth Zoom Out AI Free - Create Epic Space Videos from Photos",
    description: "Free Earth zoom out AI tool! Create stunning earth zoom out effects and space videos from any photo. Transform images into cinematic earth zoom out to universe animations.",
    type: "website",
    locale: "en_US",
    siteName: "Earth Zoom Out AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Earth Zoom Out AI - Free Earth Zoom Effect Generator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Earth Zoom Out AI Free - Create Epic Space Videos from Photos",
    description: "Free Earth zoom out AI tool! Create stunning earth zoom out effects and space videos from any photo.",
    creator: "@earthzoomoutai",
    images: ["/twitter-image.jpg"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://earthzoomoutai.top" />

        {/* Icons */}
        <link rel="icon" href="/favicon-16.svg?v=2" type="image/svg+xml" sizes="16x16" />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg?v=2" type="image/svg+xml" sizes="180x180" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Additional structured data for local SEO */}
        <meta name="geo.position" content="40.7128;-74.0060" />
        <meta name="ICBM" content="40.7128, -74.0060" />

        {/* Mobile optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Earth Zoom Out AI Free",
              "alternateName": ["Earth Zoom Effect Generator", "Free Earth Zoom Out Tool"],
              "description": "Free Earth zoom out AI tool to create stunning earth zoom out effects and space videos from any photo. Transform images into cinematic earth zoom out to universe animations.",
              "url": "https://earthzoomoutai.top",
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "Web Browser",
              "keywords": "earth zoom out free, earth zoom out effect, earth zoom effect, earth zoom out gratis, earth zoom out effect free, earth zoom out ai, earth zoom, zoom earth live, earth zoom out to universe",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "featureList": [
                "Free earth zoom out effect generator",
                "AI-powered earth zoom out to universe",
                "Photo to space video transformation",
                "Real-time earth zoom effect preview",
                "4K video output",
                "Mobile-friendly interface"
              ],
              "creator": {
                "@type": "Organization",
                "name": "Earth Zoom Out AI"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1247"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
