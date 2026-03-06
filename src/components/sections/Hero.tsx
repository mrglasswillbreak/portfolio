"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { selfData } from "@/constant";

import { quentine, mono } from "@/app/fonts";

export const Hero = () => {
  const ref = useRef(null);

  const handleContactScroll = () => {
    if (typeof window === "undefined") return;
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-start px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-full sm:max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="space-y-6">
            <motion.h1
              className={`${quentine.className} text-4xl md:text-6xl lg:text-7xl font-bold leading-tight break-words max-w-[14ch]`}
              style={{ color: "hsl(var(--primary))" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {selfData.name}
            </motion.h1>

            <motion.p
              className={`${mono.className} text-lg md:text-xl`}
              style={{ color: "hsl(var(--secondary))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {selfData.roles[0]}
            </motion.p>

            <motion.p
              className="text-base md:text-lg max-w-2xl leading-relaxed"
              style={{ color: "hsl(var(--foreground) / 0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {selfData.bio}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="relative group overflow-hidden btn-primary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/resume">
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30"
                    style={{ background: "var(--glass-shimmer)" }}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 font-medium">View Resume</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="relative group overflow-hidden border-primary/40 hover:border-primary/70 hover:bg-primary/5 shadow-lg transition-all duration-300"
                onClick={handleContactScroll}
              >
                <span className="relative z-10 font-medium">Let&apos;s Talk</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="rounded-xl border border-primary/20 bg-white/5 p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Availability
              </p>
              <p className="font-semibold text-primary">
                {selfData.availability.status}
              </p>
              <p className="text-sm text-muted-foreground">
                {selfData.availability.work_model}
              </p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-white/5 p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Based in
              </p>
              <p className="font-semibold text-primary">
                {selfData.current_location.city}
              </p>
              <p className="text-sm text-muted-foreground">
                {selfData.current_location.country}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
