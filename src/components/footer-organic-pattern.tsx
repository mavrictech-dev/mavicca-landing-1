export function FooterOrganicPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(187,247,208,0.08),transparent_58%)]" />

      <svg
        viewBox="0 0 180 180"
        className="absolute -left-8 -top-16 h-52 w-52 -rotate-12 text-emerald-100/14 blur-[0.5px]"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M42 116c4-44 40-76 102-72 8 60-28 98-78 92-24-3-38-18-24-20Z"
          strokeWidth="10"
        />
        <path d="M42 116c30-10 60-24 92-58" strokeWidth="6" />
        <path d="M76 92c18 4 35 2 50-7" strokeWidth="5" />
      </svg>

      <svg
        viewBox="0 0 160 260"
        className="absolute -bottom-24 right-0 h-80 w-48 text-lime-100/12 blur-[0.6px]"
        fill="currentColor"
      >
        <path
          d="M78 244C84 190 88 132 92 20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path d="M88 54C50 42 30 50 18 78c31 9 55 2 70-24Z" />
        <path d="M96 72c35-21 54-18 68 5-27 20-51 18-68-5Z" />
        <path d="M84 118C44 102 22 111 8 142c32 12 60 3 76-24Z" />
        <path d="M92 142c38-17 58-10 68 17-32 16-55 10-68-17Z" />
        <path d="M78 188c-35-12-56-3-66 25 30 10 53 2 66-25Z" />
        <path d="M86 206c34-15 54-8 64 14-28 16-51 10-64-14Z" />
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" opacity="0.55">
          <path d="M28 74c16-4 35-10 58-20" />
          <path d="M106 75c15 0 30 2 46 5" />
          <path d="M20 137c19-3 40-9 62-19" />
          <path d="M104 145c15 4 30 8 44 13" />
          <path d="M22 209c16-4 34-10 54-20" />
          <path d="M98 208c14 3 28 7 42 12" />
        </g>
      </svg>

      <svg
        viewBox="0 0 120 120"
        className="absolute left-[45%] top-1/2 hidden h-32 w-32 -translate-y-1/2 rotate-6 text-cyan-100/8 blur-[1px] sm:block"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M60 96V58" strokeWidth="5" />
        <path d="M58 62C34 58 24 42 26 24c24 2 38 14 32 38Z" strokeWidth="6" />
        <path d="M62 70c26-3 38-18 36-40-25 3-40 16-36 40Z" strokeWidth="6" />
      </svg>
    </div>
  );
}
