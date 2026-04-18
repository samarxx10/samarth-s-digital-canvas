export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-blue/25 blur-3xl animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan/20 blur-3xl animate-blob [animation-delay:-12s]" />
    </div>
  );
}
