import { site } from "./site";
export function generatePersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: "Full-stack Developer",
    description: site.description,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [site.github, site.linkedin],
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Web Development",
    ],
  };
}
export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name + " — Portfolio",
    url: site.url,
    description: site.description,
    author: { "@type": "Person", name: site.name, url: site.url },
  };
}
export function generateResumeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: site.name + " — Résumé",
    url: site.url + "/resume",
    contentUrl: site.url + site.resume,
    encodingFormat: "application/pdf",
    author: { "@type": "Person", name: site.name, url: site.url },
  };
}
