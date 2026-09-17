"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Arrow } from "@/components/ui/Arrow";

export function Navbar({ projectCount }: { projectCount: number }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link href="/" aria-label="Muhammed Abdulhadi — home" className="brand">
          m<span className="brand-dot">.</span>
          <span className="brand-label">
            MUHAMMED
            <br />
            ABDULHADI
          </span>
        </Link>
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={"main-nav " + (open ? "is-open" : "")}
        >
          <Link href="/#projects" onClick={() => setOpen(false)}>
            Work
            <span className="nav-count">
              {String(projectCount).padStart(2, "0")}
            </span>
          </Link>
          <Link href="/#about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/resume" onClick={() => setOpen(false)}>
            Résumé <Arrow diagonal />
          </Link>
          <Link
            className="nav-contact"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <span className="status-dot" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
