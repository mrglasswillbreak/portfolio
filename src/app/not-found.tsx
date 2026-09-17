import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
export default function NotFound() {
  return (
    <section className="shell not-found">
      <p className="eyebrow accent">404 / A wrong turn</p>
      <h1>
        Nothing to see <span className="serif-word">here.</span>
      </h1>
      <p>
        This page may have moved. There’s plenty of work to explore back home.
      </p>
      <Link href="/" className="button button-primary">
        Back to the portfolio <Arrow />
      </Link>
    </section>
  );
}
