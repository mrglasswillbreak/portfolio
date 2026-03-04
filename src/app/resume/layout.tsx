import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - mrglasswillbreak",
  description:
    "View and download mrglasswillbreak's resume.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - mrglasswillbreak",
    description:
      "View and download mrglasswillbreak's resume and experience.",
    url: "https://github.com/mrglasswillbreak",
    siteName: "mrglasswillbreak",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "mrglasswillbreak Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - mrglasswillbreak",
    description:
      "View mrglasswillbreak's professional resume and experience as a student developer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      <link
        rel="preload"
        href="/docs/Aarab_Nishchal_Resume.pdf"
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
