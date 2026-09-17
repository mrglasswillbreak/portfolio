import { ContactFormCard } from "@/components/Cards/ContactFormCard";
import { Arrow } from "@/components/ui/Arrow";
import { site } from "@/lib/site";
export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="shell section">
        <p className="eyebrow section-index">04 / What’s next?</p>
        <div className="contact-grid">
          <div>
            <h2 id="contact-heading">
              Have something
              <br />
              in <span className="serif-word">mind?</span>
              <span className="accent">↗</span>
            </h2>
            <p className="contact-intro">
              A product to build, a team to join, or an idea worth exploring.
              I’d love to hear about it.
            </p>
            <a className="contact-email" href={"mailto:" + site.email}>
              {site.email}
              <Arrow diagonal />
            </a>
            <div className="contact-availability">
              <span className="status-dot" />
              <span>
                Open to roles & collaborations
                <br />
                <small>Lagos, Nigeria · Remote / Hybrid</small>
              </span>
            </div>
          </div>
          <ContactFormCard />
        </div>
      </div>
    </section>
  );
}
