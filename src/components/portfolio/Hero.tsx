import { ArrowRight, Mail, Sparkles, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Typing } from "./Typing";
import samarthPhoto from "@/assets/samarth.jpg";

const RESUME_URL = "https://raw.githubusercontent.com/samarxx10/Resume/main/resume.pdf";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Profile photo with glowing gradient border */}
          <div className="group relative">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-purple via-blue to-cyan opacity-80 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-lg" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-purple via-blue to-cyan" />
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-background bg-background sm:h-44 sm:w-44 transition-transform duration-500 group-hover:scale-105">
              <img
                src={samarthPhoto}
                alt="Samarth Goyal"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple" />
            </span>
            Available for opportunities
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
            <span className="block text-foreground">Samarth</span>
            <span className="block gradient-text">Goyal.</span>
          </h1>

          <div className="font-display text-2xl text-muted-foreground sm:text-3xl md:text-4xl">
            <Typing
              words={[
                "Turning ideas into code.",
                "Building meaningful apps.",
                "Solving problems daily.",
                "Crafting clean interfaces.",
              ]}
            />
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm a passionate developer who enjoys solving problems and building meaningful
            applications — from competitive DSA to full-stack web projects.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple to-blue px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-8px] shadow-purple/60 transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan via-blue to-purple px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-8px] shadow-blue/60 transition-all hover:scale-105 hover:shadow-[0_12px_40px_-8px] hover:shadow-purple/70"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5 text-muted-foreground">
            <a href="https://github.com/samarxx10" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/samarth-goyal-8023222b5" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href="mailto:goyalsamarth4888@gmail.com" aria-label="Email" className="transition-colors hover:text-foreground">
              <Mail className="h-5 w-5" />
            </a>
            <span className="ml-2 hidden sm:inline-flex items-center gap-1.5 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-purple" />
              CS Student · Developer · Problem Solver
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
