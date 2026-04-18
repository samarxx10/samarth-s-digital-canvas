export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-purple to-blue text-xs font-bold text-primary-foreground">
            S
          </div>
          <span>Designed & built by Samarth Goyal</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Crafted with React + Tailwind
        </p>
      </div>
    </footer>
  );
}
