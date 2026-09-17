import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
