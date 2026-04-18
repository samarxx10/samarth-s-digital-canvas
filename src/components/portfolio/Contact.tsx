import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Section } from "./Section";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "goyalsamarth4888@gmail.com",
    href: "mailto:goyalsamarth4888@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/samarth-goyal",
    href: "https://www.linkedin.com/in/samarth-goyal-8023222b5",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/samarxx10",
    href: "https://github.com/samarxx10",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's <span className="gradient-text">build</span> something</>}
      subtitle="Have an idea, an opportunity, or just want to say hi? My inbox is open."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="gradient-border relative overflow-hidden p-8">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple/30 blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-3xl font-bold leading-tight">
              Open to internships, <span className="gradient-text">collaborations</span> and great conversations.
            </h3>
            <a
              href="mailto:goyalsamarth4888@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple to-blue px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Send an email
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="mt-3 ml-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="gradient-border group flex items-center gap-5 p-5 transition-all hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple/20 to-blue/20 text-purple">
                <l.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {l.label}
                </div>
                <div className="truncate font-medium">{l.value}</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
