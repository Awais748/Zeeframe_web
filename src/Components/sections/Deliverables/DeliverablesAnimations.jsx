// All animations are aria-hidden decorative elements — SEO & screen-reader safe

export const CheckIcon = () => (
  <svg width="220" height="40" viewBox="0 0 220 40" fill="none">
    <rect
      x="0"
      y="9"
      width="150"
      height="2"
      rx="1"
      fill="rgba(243,254,0,0.8)"
    />
    <rect
      x="0"
      y="29"
      width="120"
      height="2"
      rx="1"
      fill="rgba(243,254,0,0.8)"
    />
    <path
      d="M168 11L173 17L182 8"
      stroke="#F3FE00"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M168 24L173 30L182 21"
      stroke="#F3FE00"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const JourneyIcon = () => (
  <svg
    width="140"
    height="60"
    viewBox="0 0 140 60"
    fill="none"
    className="overflow-visible"
  >
    <circle
      cx="12"
      cy="30"
      r="6"
      fill="#F3FE00"
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms]"
    />
    <rect
      x="18"
      y="28.7"
      width="45"
      height="1.6"
      rx="0.8"
      fill="rgba(243,254,0,0.3)"
      className="opacity-0 -translate-x-2.5 scale-x-0 origin-left group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 transition-all duration-[800ms]"
    />
    <circle
      cx="72"
      cy="30"
      r="9"
      fill="rgba(243,254,0,0.3)"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="blur-[1px] opacity-0 -translate-x-[60px] scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-[800ms]"
    />
    <rect
      x="81"
      y="11.7"
      width="45"
      height="1.6"
      rx="0.8"
      fill="rgba(243,254,0,0.3)"
      className="opacity-0 -translate-x-[120px] scale-x-[0.3] origin-right group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 transition-all duration-[800ms]"
    />
    <circle
      cx="131"
      cy="12.5"
      r="5"
      fill="#F3FE00"
      className="opacity-0 -translate-x-[120px] scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-[800ms]"
    />
    <rect
      x="81"
      y="47.7"
      width="45"
      height="1.6"
      rx="0.8"
      fill="rgba(243,254,0,0.3)"
      className="opacity-0 -translate-x-[120px] scale-x-[0.3] origin-right group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 transition-all duration-[800ms]"
    />
    <circle
      cx="131"
      cy="48.5"
      r="5"
      fill="#F3FE00"
      className="opacity-0 -translate-x-[120px] scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-[800ms]"
    />
  </svg>
);

export const BallsAnimation = () => (
  <svg
    width="180"
    height="34"
    viewBox="0 0 200 64"
    fill="none"
    className="overflow-hidden"
  >
    <circle
      cx="10"
      cy="34"
      r="10"
      fill="#F3FE00"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="opacity-0 -translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
    />
    <circle
      cx="45"
      cy="50"
      r="14"
      fill="rgba(243,254,0,0.3)"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="blur-[2px] opacity-0 -translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[600ms]"
    />
    <circle
      cx="80"
      cy="34"
      r="9"
      fill="#F3FE00"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="opacity-0 -translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700"
    />
    <circle
      cx="120"
      cy="50"
      r="12"
      fill="rgba(243,254,0,0.3)"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="blur-[2px] opacity-0 -translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[600ms]"
    />
    <circle
      cx="155"
      cy="34"
      r="9"
      fill="#F3FE00"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="opacity-0 -translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
    />
    <circle
      cx="185"
      cy="50"
      r="7"
      fill="rgba(243,254,0,0.3)"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="blur-[1px] opacity-0 -translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
    />
  </svg>
);

export const ChecklistAnim = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[800ms] pointer-events-none"
  >
    <CheckIcon />
  </div>
);

export const BarsChartAnim = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 flex items-center justify-center gap-2 pointer-events-none"
  >
    {[
      { h: 18, solid: false },
      { h: 28, solid: true },
      { h: 14, solid: false },
      { h: 24, solid: true },
      { h: 16, solid: false },
    ].map(({ h, solid }, i) => (
      <span
        key={i}
        className={`w-4 rounded opacity-0 scale-y-0 origin-bottom group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-700 ${
          solid ? "bg-[#F3FE00]" : "bg-[rgba(243,254,0,0.22)] blur-[1px]"
        }`}
        style={{
          height: h,
          transitionDelay: `${i * 80}ms`,
        }}
      />
    ))}
  </div>
);

export const JourneyGridAnim = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 flex items-center justify-center pointer-events-none"
  >
    <JourneyIcon />
  </div>
);

export const BallsAnim = () => (
  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-0 bottom-1 flex items-center justify-center overflow-hidden pointer-events-none"
  >
    <BallsAnimation />
  </div>
);

export const cardAnimations = [
  ChecklistAnim,
  BarsChartAnim,
  JourneyGridAnim,
  BallsAnim,
];
