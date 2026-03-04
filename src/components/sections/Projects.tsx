"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { nasalization } from "@/app/fonts";
import { projectsData } from "@/constant";

import { ProjectCard } from "../Cards";

interface GithubProject {
  name: string;
  description: string;
  github_link: string;
  demo?: string;
  tech: string[];
}

interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics?: string[];
  language: string | null;
  fork: boolean;
  archived: boolean;
  stargazers_count: number;
  updated_at: string;
}

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-80px",
    amount: 0.1,
  });
  const [projects, setProjects] = useState<GithubProject[]>(projectsData);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/mrglasswillbreak/repos?per_page=100&sort=updated"
        );
        if (!res.ok) return;

        const repos = (await res.json()) as GithubRepo[];
        const mapped = repos
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return (
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            );
          })
          .slice(0, 6)
          .map((repo) => {
            const topics = repo.topics?.slice(0, 3) ?? [];
            const tech = [
              ...(repo.language ? [repo.language] : []),
              ...topics.filter(
                (topic) => topic.toLowerCase() !== repo.language?.toLowerCase()
              ),
            ].slice(0, 4);

            return {
              name: repo.name,
              description:
                repo.description ?? "A repository from my GitHub profile.",
              github_link: repo.html_url,
              demo:
                repo.homepage && repo.homepage.trim().length > 0
                  ? repo.homepage
                  : undefined,
              tech: tech.length > 0 ? tech : ["GitHub"],
            };
          });

        if (mapped.length > 0) {
          setProjects(mapped);
        }
      } catch {
        // Keep fallback static projects if GitHub API is unavailable.
      }
    };

    loadProjects();
  }, []);

  return (
    <section
      ref={ref}
      id="projects"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="mx-auto px-4 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2
            className={`${nasalization.className} text-4xl md:text-5xl font-bold text-primary`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Projects
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {projects.map((proj, index) => (
            <ProjectCard
              key={proj.name}
              index={index}
              title={proj.name}
              desc={proj.description}
              github={proj.github_link}
              demo={proj.demo}
              tech={proj.tech}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
