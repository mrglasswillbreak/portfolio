import Link from "next/link";
import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-heading">
      <div className="hero-kicker">
        <span className="eyebrow">Full-stack developer / Lagos, NG</span>
        <span className="availability">
          <span className="status-dot" /> Open to opportunities
        </span>
      </div>
      <h1 id="hero-heading" className="hero-title">
        Thoughtful design.
        <br />
        Useful <span className="serif-word">things.</span>
        <span className="hero-asterisk" aria-hidden="true">
          ✳
        </span>
      </h1>
      <div className="hero-bottom">
        <div className="hero-intro">
          <p>
            I’m <strong>Muhammed Abdulhadi</strong>.<br />I turn ideas into
            websites and applications
            <br className="desktop-break" /> that look good, feel right, and
            work hard.
          </p>
          <div className="hero-actions">
            <Link href="#projects" className="button button-primary">
              Explore my work <Arrow />
            </Link>
            <Link href="#contact" className="text-link">
              Let’s talk <Arrow diagonal />
            </Link>
          </div>
        </div>
        <Link
          href="/projects/turnright"
          className="hero-preview"
          aria-label="Explore TurnRight, a campus navigation project"
        >
          <div className="hero-preview-image">
            <Image
              src="/images/projects/turnright-map.webp"
              alt="TurnRight’s 3D campus map"
              fill
              sizes="(max-width: 700px) 42vw, 210px"
              priority
            />
          </div>
          <div className="hero-preview-info">
            <span className="eyebrow">In the spotlight</span>
            <span>
              TurnRight <Arrow diagonal />
            </span>
            <small>Finding a better way around.</small>
          </div>
        </Link>
      </div>
      <div className="hero-foot">
        <span className="eyebrow">Independent mind. End-to-end builder.</span>
        <a
          href="#projects"
          className="scroll-cue"
          aria-label="Scroll to selected work"
        >
          <span>Scroll to explore</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
