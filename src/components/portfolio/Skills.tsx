import { Section } from "./Section";

const groups = [
  {
    label: "Languages",
    items: ["C++", "Java"],
  },
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>My <span className="gradient-text">toolkit</span></>}
      subtitle="Technologies and tools I use to build, ship and solve."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.label} className="gradient-border p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">{g.label}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                0{groups.indexOf(g) + 1}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm text-foreground/90 transition-all hover:border-purple/50 hover:text-foreground hover:shadow-[0_0_20px_-5px] hover:shadow-purple/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
