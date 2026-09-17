import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projectsData } from "@/constant/projects";
import { Arrow } from "@/components/ui/Arrow";
import { site } from "@/lib/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const url = site.url + "/projects/" + project.slug;
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: project.name + " — " + site.name,
      description: project.description,
      url,
      type: "article",
      images: [
        {
          url: project.images[0].src,
          width: project.images[0].width,
          height: project.images[0].height,
          alt: project.images[0].alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name + " — " + site.name,
      description: project.description,
      images: [project.images[0].src],
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const index = projectsData.indexOf(project);
  const next = projectsData[(index + 1) % projectsData.length];
  const [cover, detail] = project.images;
  return (
    <article className="shell">
      <header className="case-hero">
        <Link href="/#projects" className="back-link">
          <Arrow /> Back to selected work
        </Link>
        <p className="eyebrow accent">
          0{index + 1} / {project.category}
        </p>
        <h1 className="case-title">{project.name}</h1>
        <p className="case-subtitle">{project.headline}</p>
        <div className="case-meta">
          <ul className="tech-list" aria-label="Project technologies">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="case-actions">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Visit live site <Arrow diagonal />
            </a>
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Source code <Arrow diagonal />
              </a>
            )}
          </div>
        </div>
      </header>
      <figure className="case-figure">
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          priority
          sizes="(max-width: 800px) 95vw, 90vw"
        />
        <figcaption>{cover.caption}</figcaption>
      </figure>
      <div className="case-body">
        <section className="case-overview">
          <div>
            <p className="eyebrow section-index">The project</p>
            <h2>
              From idea
              <br />
              to <span className="serif-word">interface.</span>
            </h2>
          </div>
          <p>{project.overview}</p>
        </section>
        <section className="case-features" aria-label="Implemented features">
          {project.features.map((feature, i) => (
            <article key={feature.title}>
              <span className="eyebrow accent">0{i + 1} /</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>
      </div>
      <figure className="case-figure">
        <Image
          src={detail.src}
          alt={detail.alt}
          width={detail.width}
          height={detail.height}
          sizes="(max-width: 800px) 95vw, 90vw"
        />
        <figcaption>{detail.caption}</figcaption>
      </figure>
      <section className="case-approach">
        <div className="case-overview">
          <div>
            <p className="eyebrow section-index">Under the surface</p>
            <h2>
              How it comes
              <br />
              <span className="serif-word">together.</span>
            </h2>
          </div>
          <div>
            <p>{project.approach}</p>
            {project.note && (
              <aside className="case-note">{project.note}</aside>
            )}
          </div>
        </div>
      </section>
      <Link href={"/projects/" + next.slug} className="next-project">
        <div>
          <span className="eyebrow">
            Next project / 0{projectsData.indexOf(next) + 1}
          </span>
          <h2>{next.name}</h2>
        </div>
        <Arrow diagonal />
      </Link>
    </article>
  );
}
