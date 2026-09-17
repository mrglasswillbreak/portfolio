import type { Metadata } from "next";
import { site } from "@/lib/site";
import { generateResumeStructuredData } from "@/lib/structured-data";
export const metadata: Metadata = {
  title: "Résumé",
  description: "View and download Muhammed Abdulhadi’s résumé.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Muhammed Abdulhadi — Résumé",
    description: "Background, skills, and experience.",
    url: site.url + "/resume",
    images: ["/images/thumbnail.png"],
  },
};
export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateResumeStructuredData()),
        }}
      />
      {children}
    </>
  );
}
