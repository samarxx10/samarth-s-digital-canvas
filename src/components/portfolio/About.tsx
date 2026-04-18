import { Code2, Brain, Rocket } from "lucide-react";
import { Section } from "./Section";

const traits = [
  { icon: Brain, title: "Problem Solver", text: "150+ DSA problems solved with focus on clean, optimal logic." },
  { icon: Code2, title: "Builder", text: "I love turning ideas into shipped, functional projects." },
  { icon: Rocket, title: "Always Learning", text: "Constantly exploring new tech, frameworks and tools." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>A bit <span className="gradient-text">about me</span></>}
    >
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a <span className="text-foreground">Computer Science student</span> who
            genuinely enjoys problem-solving and building things that work. Whether it's a
            tricky algorithm or a polished UI, the process of breaking it down and crafting
            the solution is what keeps me hooked.
          </p>
          <p>
            I love exploring new technologies and sharpening my skills through{" "}
            <span className="text-foreground">DSA</span> and{" "}
            <span className="text-foreground">real-world projects</span>. Currently focused on
            full-stack development with React and strengthening my foundations in C++ and Java.
          </p>
        </div>

        <div className="md:col-span-2 space-y-3">
          {traits.map((t) => (
            <div
              key={t.title}
              className="gradient-border p-5 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple/20 to-blue/20 text-purple">
                  <t.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
