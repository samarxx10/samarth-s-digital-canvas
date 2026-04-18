import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Samarth Goyal — CS Student & Developer" },
      {
        name: "description",
        content:
          "Portfolio of Samarth Goyal — Computer Science student, developer and problem solver. Building meaningful applications with React, C++ and Java.",
      },
      { property: "og:title", content: "Samarth Goyal — CS Student & Developer" },
      {
        property: "og:description",
        content: "Turning ideas into code. Explore my projects, skills and journey.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
