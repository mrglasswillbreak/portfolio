import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { inter, mono } from "./fonts";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { site } from "@/lib/site";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
} from "@/lib/structured-data";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Muhammed Abdulhadi — Full-stack Developer",
    template: "%s | Muhammed Abdulhadi",
  },
  description: site.description,
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: { google: "1c8e801d4931baa4" },
  openGraph: {
    title: "Muhammed Abdulhadi — Full-stack Developer",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Abdulhadi — Thoughtful design. Useful things.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Abdulhadi — Full-stack Developer",
    description: site.description,
    images: ["/images/thumbnail.png"],
    creator: "@mrglaswontbreak",
  },
  icons: {
    icon: [
      { url: "/images/logo.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};
export const viewport: Viewport = { themeColor: "#101210" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top" className={inter.variable + " " + mono.variable}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              generatePersonStructuredData(),
              generateWebsiteStructuredData(),
            ]),
          }}
        />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
