import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import Experience from "@/components/Experience";
import { TechBlog } from "@/components/TechBlog";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <TechBlog />
      <Projects />
      <Contact />
    </main>
  );
}

