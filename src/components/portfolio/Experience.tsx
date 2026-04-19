import { GraduationCap, Award, BookOpen, Lightbulb } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: GraduationCap,
    title: "Computer Science Student",
    sub: "Pursuing degree · Focused on DSA & full-stack",
    text: "Building strong fundamentals in algorithms, data structures, and software engineering.",
  },
  {
    icon: Award,
    title: "Certifications & Courses",
    sub: "Online learning · Self-taught",
    text: "Completed courses in C++, Java, web development and Data Structures & Algorithms.",
  },
  {
    icon: BookOpen,
    title: "Learning Platforms",
    sub: "LeetCode · GeeksforGeeks · YouTube · MDN",
    text: "Continuously practicing and learning from the best resources available online.",
  },
];

const learning = [
  "Backend Development (Node.js, Express, APIs)",
  "Data Structures & Algorithms (DSA)",
  "Improving problem-solving skills",
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Learning"
      title={<>My <span className="gradient-text">journey</span> so far</>}
    >
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          {items.map((item, i) => (
            <div key={item.title} className="gradient-border relative p-6">
              <div className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple/20 to-blue/20 text-purple">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-purple">{item.sub}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gradient-border p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple/20 to-blue/20 text-purple">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h3 className="font-display font-semibold">Currently Learning</h3>
          </div>
          <ul className="space-y-3">
            {learning.map((l) => (
              <li key={l} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple to-blue" />
                {l}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl bg-secondary/50 p-4 text-xs text-muted-foreground">
            <span className="font-mono text-purple">// </span>
            Always learning. Always shipping.
          </div>
        </div>
      </div>
    </Section>
  );
}
