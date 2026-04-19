import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Section } from "./Section";

const projects = [
  {
    title: "Employee Management System",
    desc: "A modern React-based web application to manage employee data efficiently. Add, update, delete and view employee details with a clean, interactive interface designed to simplify record handling and boost productivity.",
    stack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/samarxx10/Employee-Management-System",
    demo: "https://ems-react-app-six.vercel.app/",
  },
  {
    title: "Notes Application",
    desc: "A responsive React-based notes management app that lets users create, edit and delete notes with ease. Features a friendly interface for organizing thoughts and tasks efficiently.",
    stack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/samarxx10/Notes-Application-Project",
    demo: "https://notes-application-react-seven.vercel.app/",
  },
  {
    title: "Music Player",
    desc: "A web-based music player built with HTML, CSS and JavaScript. Play, pause and navigate through songs with smooth, interactive playback controls.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/samarxx10/Music-Player",
    demo: "https://samarxx10.github.io/Music-Player/",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Things I've <span className="gradient-text">built</span></>}
      subtitle="A selection of projects I've shipped while learning, experimenting and solving real problems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group gradient-border relative flex flex-col overflow-hidden p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px] hover:shadow-purple/50"
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-purple/20 to-blue/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex flex-1 flex-col">
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
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-purple hover:bg-purple/10 hover:text-foreground hover:shadow-[0_0_20px_-5px] hover:shadow-purple/60"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-blue hover:bg-blue/10 hover:text-foreground hover:shadow-[0_0_20px_-5px] hover:shadow-blue/60"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple group-hover:to-blue sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
                {p.desc}
              </p>

              <div className="mt-auto pt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-foreground/90"
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
