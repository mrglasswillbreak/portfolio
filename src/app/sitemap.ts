import { MetadataRoute } from "next";
import { projectsData } from "@/constant/projects";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...projectsData.map((project) => ({
      url: site.url + "/projects/" + project.slug,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: site.url + "/resume", changeFrequency: "monthly", priority: 0.6 },
  ];
}
