import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/constant/projects";
import { site } from "@/lib/site";
import { Arrow } from "@/components/ui/Arrow";
export function Projects() {
  return (
    <section
      className="section shell"
      id="projects"
      aria-labelledby="work-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-index">01 / Selected work</p>
          <h2 id="work-heading">
            Ideas, made <span className="serif-word">real.</span>
          </h2>
        </div>
        <p>
          Four projects. Different problems.
          <br />
          The same care for the details.
        </p>
      </div>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <article
            className={"project-row project-" + project.slug}
            key={project.slug}
          >
            <Link
              href={"/projects/" + project.slug}
              className="project-visual"
              aria-label={"Read the " + project.name + " case study"}
              style={
                { "--project-color": project.color } as React.CSSProperties
              }
            >
              <div className="project-image-frame">
                <div className="browser-chrome" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <small>{new URL(project.demo).hostname}</small>
                  <Arrow diagonal />
                </div>
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  width={project.images[0].width}
                  height={project.images[0].height}
                  sizes="(max-width: 800px) 92vw, 58vw"
                  className="project-screenshot"
                />
              </div>
              <span className="project-visual-link" aria-hidden="true">
                <Arrow diagonal />
              </span>
            </Link>
            <div className="project-copy">
              <div className="project-meta">
                <span className="project-number">0{index + 1}</span>
                <span className="eyebrow">{project.category}</span>
              </div>
              <h3>
                <Link href={"/projects/" + project.slug}>{project.name}</Link>
              </h3>
              <p className="project-headline">{project.headline}</p>
              <p className="project-description">{project.description}</p>
              <ul className="tech-list" aria-label="Technologies">
                {project.tech.slice(0, 4).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-actions">
                <Link href={"/projects/" + project.slug} className="text-link">
                  View case study <Arrow />
                </Link>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="quiet-link"
                  aria-label={"Visit " + project.name + " live site"}
                >
                  Live site <Arrow diagonal />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="more-work">
        <span>There’s always something else in the making.</span>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          More on GitHub <Arrow diagonal />
        </a>
      </div>
    </section>
  );
}
