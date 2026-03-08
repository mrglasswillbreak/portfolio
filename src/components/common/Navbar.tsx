"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { RiMenu4Fill, RiCloseLargeFill } from "react-icons/ri";

import { quentine } from "@/app/fonts";

import { Button } from "../ui/button";
import { createBlurDataURL } from "@/lib/BlurDataURL";
import { selfData } from "@/constant";

const NAV_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isResumePage = pathname === "/resume";

  useEffect(() => {
    const handleScrollProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = (window.scrollY / scrollable) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    handleScrollProgress();
    window.addEventListener("scroll", handleScrollProgress, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Optimize state updates to avoid unnecessary re-renders
      if (currentScrollY > 100 && !isScrolled) {
        setIsScrolled(true);
      } else if (currentScrollY <= 100 && isScrolled) {
        setIsScrolled(false);
      }

      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        if (!isVisible) setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        if (isVisible) {
          setIsVisible(false);
          setIsMenuOpen(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled, isVisible]);

  useEffect(() => {
    if (typeof window === "undefined" || pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: 0.35,
      }
    );

    NAV_SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
    }
  }, [pathname]);

  const handleSectionClick = (sectionId: string) => {
    if (typeof window === "undefined") return;

    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled ? "pt-0 px-2 sm:px-4" : "px-2 sm:px-2"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div
        className={`floating-nav rounded-2xl px-4 sm:px-6 py-3 bg-glass-bg transition-all duration-300 max-w-7xl mx-auto relative overflow-hidden ${
          isScrolled ? "shadow-xl" : "shadow-lg"
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-border/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-[width] duration-200"
            style={{ width: `${scrollProgress}%` }}
            aria-hidden
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-glass-bg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={40}
                height={40}
                placeholder="blur"
                loading="lazy"
                quality={100}
                blurDataURL={`${createBlurDataURL({
                  width: 40,
                  height: 40,
                })}`}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <span
              className={`${quentine.className} text-primary-foreground text-base sm:text-lg max-w-[58vw] sm:max-w-none truncate`}
            >
              {selfData.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 justify-center flex-1 px-4">
            {NAV_SECTIONS.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => handleSectionClick(id)}
                  className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                    isActive
                      ? "bg-primary/15 text-primary border border-primary/30 shadow-sm"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => handleSectionClick("contact")}
              className="hover:bg-primary/10 text-sm"
            >
              Contact
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
            >
              {isResumePage ? (
                <a href="/docs/Aarab_Nishchal_Resume.pdf" download="resume.pdf">
                  Download Resume
                </a>
              ) : (
                <Link href="/resume">
                  Resume
                </Link>
              )}
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <RiCloseLargeFill
                size={20}
                className="transition-transform duration-200"
              />
            ) : (
              <RiMenu4Fill
                size={20}
                className="transition-transform duration-200"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 border-t border-border/50 mt-4">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {NAV_SECTIONS.map(({ id, label }) => (
                <Button
                  key={id}
                  variant="ghost"
                  className="w-full justify-center text-sm"
                  onClick={() => {
                    handleSectionClick(id);
                    setIsMenuOpen(false);
                  }}
                >
                  {label}
                </Button>
              ))}
            </div>
            <div className="space-y-3">
              <Button
                variant="outline"
                asChild
                className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
              >
                {isResumePage ? (
                  <a
                    href="/docs/Aarab_Nishchal_Resume.pdf"
                    download="resume.pdf"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center"
                  >
                    Download Resume
                  </a>
                ) : (
                  <Link
                    href="/resume"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center"
                  >
                    Resume
                  </Link>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
