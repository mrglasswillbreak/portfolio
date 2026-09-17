import { site } from "@/lib/site";
import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
export default function Resume() {
  return (
    <section className="shell resume-page">
      <div className="resume-header">
        <div>
          <span className="eyebrow accent">The background</span>
          <h1>
            My <span className="serif-word">résumé.</span>
          </h1>
          <p>A closer look at my background, skills, and experience.</p>
        </div>
        <div className="resume-actions">
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="button button-outline"
          >
            Open PDF <Arrow diagonal />
          </a>
          <a
            href={site.resume}
            download="Muhammed_Abdulhadi_Resume.pdf"
            className="button button-primary"
          >
            Download résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <a
        href={site.resume}
        target="_blank"
        rel="noreferrer"
        className="resume-preview"
        aria-label="Open the original résumé PDF"
      >
        <Image
          src="/images/resume-preview.webp"
          alt="A page preview of Muhammed Abdulhadi’s résumé. Open or download the original PDF for selectable text."
          width={1416}
          height={2000}
          priority
          sizes="(max-width: 800px) 95vw, 1000px"
        />
      </a>
      <p className="resume-fallback">
        This preview shows the original PDF. For selectable text,{" "}
        <a href={site.resume} target="_blank" rel="noreferrer">
          open it in a new tab
        </a>{" "}
        or download a copy.
      </p>
    </section>
  );
}
