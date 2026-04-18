import { Trophy, Code2, Flame, GitBranch } from "lucide-react";
import { Section } from "./Section";

const stats = [
  { icon: Code2, value: "150+", label: "DSA Problems Solved", sub: "on LeetCode" },
  { icon: Trophy, value: "Multiple", label: "Coding Contests", sub: "Active participant" },
  { icon: Flame, value: "Daily", label: "Practice Streak", sub: "Consistency over intensity" },
  { icon: GitBranch, value: "Open", label: "to Collaboration", sub: "GitHub: @samarxx10" },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={<>Milestones & <span className="gradient-text">stats</span></>}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="gradient-border group p-6 transition-transform hover:-translate-y-1"
          >
            <s.icon className="h-6 w-6 text-purple" />
            <div className="mt-5 font-display text-3xl font-bold gradient-text">
              {s.value}
            </div>
            <div className="mt-1 font-medium text-foreground/90">{s.label}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="gradient-border overflow-hidden p-6">
          <h3 className="mb-4 font-display font-semibold">GitHub Stats</h3>
          <img
            src="https://github-readme-stats.vercel.app/api?username=samarxx10&show_icons=true&hide_border=true&bg_color=00000000&title_color=a78bfa&icon_color=60a5fa&text_color=cbd5e1"
            alt="Samarth's GitHub stats"
            className="w-full"
            loading="lazy"
          />
        </div>
        <div className="gradient-border overflow-hidden p-6">
          <h3 className="mb-4 font-display font-semibold">Top Languages</h3>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=samarxx10&layout=compact&hide_border=true&bg_color=00000000&title_color=a78bfa&text_color=cbd5e1"
            alt="Samarth's top languages"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
}
