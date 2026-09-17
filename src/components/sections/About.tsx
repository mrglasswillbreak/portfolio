import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
const capabilities = [
  {
    number: "01",
    title: "Interfaces with intention",
    copy: "Responsive websites, considered interactions, and clear visual systems. The details people see and feel.",
    tags: "React / Next.js / TypeScript / CSS",
  },
  {
    number: "02",
    title: "More than a front page",
    copy: "APIs, databases, authentication, and content tools. The foundations that make a product useful every day.",
    tags: "Node.js / PostgreSQL / APIs / CMS",
  },
  {
    number: "03",
    title: "Built to keep moving",
    copy: "From the first idea to deployment, with attention to accessibility, search visibility, and maintainable code.",
    tags: "Git / Vercel / SEO / Accessibility",
  },
];
export function About() {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="shell section">
        <div className="about-grid">
          <div>
            <p className="eyebrow section-index">02 / A little about me</p>
            <h2 id="about-heading">
              Curious by nature.
              <br />
              <span className="serif-word">Builder</span> by choice.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Muhammed, a full-stack developer based in Lagos, Nigeria. I
              enjoy the space where visual design meets practical
              problem-solving.
            </p>
            <p>
              My background in graphic design shapes how I build for the web:
              start with what people need, make the important things clear, and
              keep refining the details. Today, that means everything from
              content-managed websites to an offline campus map.
            </p>
            <p>
              I’m open to junior full-stack roles and freelance collaborations,
              working remotely or in a hybrid team.
            </p>
            <Link href="/resume" className="text-link">
              Get to know my background <Arrow diagonal />
            </Link>
          </div>
        </div>
        <div className="capabilities">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span className="eyebrow capability-number">{item.number} /</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span className="capability-tags">{item.tags}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
