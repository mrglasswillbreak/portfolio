import { selfData, skillsData } from "@/constant";

const sameAsLinks = [
  selfData.socials_username.github
    ? `https://github.com/${selfData.socials_username.github}`
    : null,
  selfData.socials_username.linkedin
    ? `https://linkedin.com/in/${selfData.socials_username.linkedin}`
    : null,
  selfData.socials_username.twitter
    ? `https://twitter.com/${selfData.socials_username.twitter}`
    : null,
  selfData.socials_username.instagram
    ? `https://instagram.com/${selfData.socials_username.instagram}`
    : null,
].filter(Boolean);

export function generatePersonStructuredData() {
  const skills = skillsData.flatMap((category) =>
    category.data.map((skill) => skill.title)
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: selfData.name,
    givenName: selfData.first_name,
    familyName: selfData.last_name,
    jobTitle: selfData.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: selfData.workFor,
    },
    email: selfData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: selfData.current_location.city,
      addressRegion: selfData.current_location.state,
      addressCountry: selfData.current_location.country,
    },
    sameAs: sameAsLinks,
    url: "https://github.com/mrglasswillbreak",
    description: selfData.bio,
    knowsAbout: skills,
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "mrglasswillbreak - Portfolio",
    url: "https://github.com/mrglasswillbreak",
    description:
      "mrglasswillbreak's portfolio featuring GitHub projects and modern web development",
    author: {
      "@type": "Person",
      name: selfData.name,
    },
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: selfData.name,
    url: "https://github.com/mrglasswillbreak",
    logo: "https://github.com/mrglasswillbreak.png",
    description: selfData.bio,
    founder: {
      "@type": "Person",
      name: selfData.name,
    },
    sameAs: sameAsLinks,
  };
}

export function generateResumeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: "mrglasswillbreak Resume",
    description: "Professional resume and profile information for mrglasswillbreak",
    url: "https://github.com/mrglasswillbreak",
    author: {
      "@type": "Person",
      name: selfData.name,
      email: selfData.email,
      jobTitle: selfData.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: selfData.workFor,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: selfData.current_location.city,
        addressRegion: selfData.current_location.state,
        addressCountry: selfData.current_location.country,
      },
      sameAs: sameAsLinks,
    },
    dateModified: new Date().toISOString(),
    fileFormat: "application/pdf",
    contentUrl: "https://github.com/mrglasswillbreak",
    downloadUrl: "https://github.com/mrglasswillbreak",
    keywords: [
      "Software Developer",
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Open Source",
      "GitHub",
      "Remote",
    ],
  };
}
