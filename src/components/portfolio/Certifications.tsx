import { Award, ArrowUpRight, Calendar } from "lucide-react";
import { Section } from "./Section";

const certs = [
  {
    title: "Java Programming for Beginners",
    provider: "IBM (via Coursera)",
    desc: "Completed a comprehensive course covering core Java concepts including variables, control structures, object-oriented programming and basic application development.",
    date: "April 2026",
    href: "https://coursera.org/verify/U8LZ700N2G0V",
    badge: "J",
  },
  {
    title: "Generative AI: Introduction and Applications",
    provider: "IBM (via Coursera)",
    desc: "Learned the fundamentals of Generative AI, its real-world applications, and how modern AI systems are transforming industries.",
    date: "March 2026",
    href: "https://coursera.org/verify/H36866XA6YIS",
    badge: "G",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    provider: "IBM SkillsBuild",
    desc: "Gained foundational knowledge of Artificial Intelligence concepts, including machine learning basics and AI use cases in industry.",
    date: "March 2026",
    href: "https://www.credly.com/badges/482fae2b-5aaa-4d01-9452-f011c0800f56",
    badge: "AI",
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Verified <span className="gradient-text">credentials</span></>}
      subtitle="Courses I've completed to deepen my skills in programming and emerging technologies."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <article
            key={c.title}
            className="group gradient-border relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px] hover:shadow-blue/40"
          >
            <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-gradient-to-tr from-blue/15 to-purple/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex flex-1 flex-col">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple/25 to-blue/25 font-display text-base font-bold text-foreground shadow-[0_0_20px_-5px] shadow-purple/40">
                  {c.badge}
                </div>
                <span className="font-mono text-xs text-purple">
                  0{i + 1}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-purple sm:text-xl">
                {c.title}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                <span className="inline-flex items-center gap-1.5 font-mono text-blue">
                  <Award className="h-3.5 w-3.5" />
                  {c.provider}
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {c.date}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                {c.desc}
              </p>

              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-card/50 px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-purple hover:bg-purple/10 hover:text-foreground hover:shadow-[0_0_20px_-5px] hover:shadow-purple/60"
              >
                View Credential
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
