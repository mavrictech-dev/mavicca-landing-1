const ambientLeaves = [
  { left: "4%", delay: "-4s", duration: "16s", size: "h-10 w-10", color: "text-emerald-500/35" },
  { left: "15%", delay: "-11s", duration: "22s", size: "h-7 w-7", color: "text-lime-600/30" },
  { left: "27%", delay: "-7s", duration: "18s", size: "h-9 w-9", color: "text-emerald-400/32" },
  { left: "39%", delay: "-15s", duration: "25s", size: "h-6 w-6", color: "text-lime-500/28" },
  { left: "52%", delay: "-3s", duration: "20s", size: "h-11 w-11", color: "text-emerald-600/30" },
  { left: "66%", delay: "-13s", duration: "24s", size: "h-8 w-8", color: "text-cyan-500/24" },
  { left: "78%", delay: "-8s", duration: "17s", size: "h-9 w-9", color: "text-emerald-500/34" },
  { left: "91%", delay: "-18s", duration: "26s", size: "h-7 w-7", color: "text-lime-600/30" },
] as const;

export function AmbientFallingLeaves() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      {ambientLeaves.map((leaf) => (
        <span
          key={`${leaf.left}-${leaf.duration}`}
          className={`global-falling-leaf absolute -top-16 ${leaf.size} ${leaf.color}`}
          style={{
            left: leaf.left,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
          }}
        >
          <svg
            viewBox="0 0 32 32"
            className="h-full w-full drop-shadow-[0_6px_12px_rgba(6,78,59,0.16)]"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.8"
          >
            <path d="M5 21C7 10 16 4 27 5c1 12-6 21-17 21-4 0-6-2-5-5Z" />
            <path d="M5 21c7-2 13-7 20-14" />
          </svg>
        </span>
      ))}
    </div>
  );
}
