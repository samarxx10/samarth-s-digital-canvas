import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Section } from "./Section";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern, animated personal portfolio built with React, showcasing my work and skills with smooth interactions.",
    stack: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/samarxx10",
    demo: "#",
  },
  {
    title: "DSA Practice Tracker",
    desc: "A tracker to log LeetCode progress, categorize problems by topic and visualize streaks over time.",
    stack: ["JavaScript", "React", "LocalStorage"],
    github: "https://github.com/samarxx10",
    demo: null,
  },
  {
    title: "Algorithm Visualizer",
    desc: "Interactive visualizer for sorting and pathfinding algorithms — built to make CS concepts click.",
    stack: ["JavaScript", "HTML5 Canvas", "CSS"],
    github: "https://github.com/samarxx10",
    demo: null,
  },
  {
    title: "Mini Web Apps Collection",
    desc: "A growing set of mini projects — calculators, weather apps, todo lists — built while learning frontend.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/samarxx10",
    demo: null,
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Things I've <span className="gradient-text">built</span></>}
      subtitle="A selection of projects I've worked on while learning and experimenting."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group gradient-border relative overflow-hidden p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px] hover:shadow-purple/40"
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-purple/10 to-blue/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex items-start justify-between">
                <span className="font-mono text-xs text-purple">
                  0{i + 1}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-purple hover:text-foreground"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-purple hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-purple">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
