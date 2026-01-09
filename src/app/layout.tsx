import "./globals.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "sonner";

import { inter, mono, nasalization, quentine } from "./fonts";

import { Keywords } from "@/constant";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  applicationName: "Aarab Nishchal",
  title: "Aarab Nishchal | Full Stack Developer & AI Engineer",
  description:
    "Aarab Nishchal is a student developer passionate about building modern web apps with Next.js, React, and open-source tools. Explore his projects, experiments, and developer portfolio.",
  authors: [
    {
      name: "Aarab Nishchal",
      url: "https://aarab.vercel.app",
    },
  ],
  creator: "Aarab Nishchal",
  referrer: "origin-when-cross-origin",
  category: "Portfolio",
  classification: "Software Development",
  keywords: Keywords,
  metadataBase: new URL("https://aarab.vercel.app"),


  alternates: {
    canonical: "https://aarab.vercel.app",
    languages: {
      "en-US": "https://aarab.vercel.app",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "1c8e801d4931baa4",
  },
  appleWebApp: {
    capable: true,
    title: "Aarab Nishchal",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",

  openGraph: {
    title: "Aarab Nishchal",
    description:
      "Explore Aarab Nishchal’s portfolio featuring projects in React, Next.js, AI, and developer tools. Discover a world of creative web applications and open-source experiments.",
    url: "https://aarab.vercel.app",
    siteName: "Aarab Nishchal",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Aarab Nishchal Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Aarab Nishchal",
    description:
      "Check out Aarab Nishchal’s personal portfolio and dev projects using Next.js, React, Tailwind, and modern web tech.",
    images: ["/images/thumbnail.png"],
    creator: "@aarab_ii",
    site: "@aarab_ii",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
        <Toaster position="bottom-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}
