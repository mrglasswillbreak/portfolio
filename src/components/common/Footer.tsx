import Link from "next/link";
import { site } from "@/lib/site";
import { Arrow } from "@/components/ui/Arrow";
export function Footer() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top">
        <Link href="/" className="footer-name">
          Muhammed Abdulhadi<span>.</span>
        </Link>
        <a href="#top" className="text-link">
          Back to top{" "}
          <span className="up-arrow">
            <Arrow />
          </span>
        </a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} · Made with intention in Lagos.</p>
        <div>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub <Arrow diagonal />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Arrow diagonal />
          </a>
          <a href={"mailto:" + site.email}>
            Email <Arrow diagonal />
          </a>
        </div>
      </div>
    </footer>
  );
}
