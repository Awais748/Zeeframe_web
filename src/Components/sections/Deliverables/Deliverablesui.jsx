// ===================================================================
// DeliverablesUI.jsx
// Sab supporting pieces ek file mein: Cards + Animations + Icons
// ===================================================================

/* -------------------------------------------------------------
   1. DECORATIVE HOVER-ANIMATION SVGs (asli friend wale exact same)
   ------------------------------------------------------------- */

const CheckIcon = () => (
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

const JourneyIcon = () => (
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
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-800"
    />
    <rect
      x="18"
      y="28.7"
      width="45"
      height="1.6"
      rx="0.8"
      fill="rgba(243,254,0,0.3)"
      className="opacity-0 -translate-x-2.5 scale-x-0 origin-left group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 transition-all duration-800"
    />
    <circle
      cx="72"
      cy="30"
      r="9"
      fill="rgba(243,254,0,0.3)"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="blur-[1px] opacity-0 -translate-x-[60px] scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-800"
    />
    <rect
      x="81"
      y="11.7"
      width="45"
      height="1.6"
      rx="0.8"
      fill="rgba(243,254,0,0.3)"
      className="opacity-0 -translate-x-30 scale-x-[0.3] origin-right group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 transition-all duration-800"
    />
    <circle
      cx="131"
      cy="12.5"
      r="5"
      fill="#F3FE00"
      className="opacity-0 -translate-x-30 scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-800"
    />
    <rect
      x="81"
      y="47.7"
      width="45"
      height="1.6"
      rx="0.8"
      fill="rgba(243,254,0,0.3)"
      className="opacity-0 -translate-x-[120px] scale-x-[0.3] origin-right group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 transition-all duration-800"
    />
    <circle
      cx="131"
      cy="48.5"
      r="5"
      fill="#F3FE00"
      className="opacity-0 -translate-x-30 scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-800"
    />
  </svg>
);

const BallsAnimation = () => (
  <svg
    width="160"
    height="50"
    viewBox="0 0 160 50"
    fill="none"
    className="overflow-visible"
  >
    <circle
      cx="10"
      cy="40"
      r="7"
      fill="#F3FE00"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
    />
    <circle
      cx="38"
      cy="60"
      r="11"
      fill="rgba(243,254,0,0.3)"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="blur-[2px] opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-600"
    />
    <circle
      cx="66"
      cy="40"
      r="6"
      fill="#F3FE00"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700"
    />
    <circle
      cx="98"
      cy="60"
      r="9"
      fill="rgba(243,254,0,0.3)"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="blur-[2px] opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-600"
    />
    <circle
      cx="126"
      cy="40"
      r="6"
      fill="#F3FE00"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
    />
    <circle
      cx="150"
      cy="60"
      r="5"
      fill="rgba(243,254,0,0.3)"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      className="blur-[1px] opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
    />
  </svg>
);

export const ChecklistAnim = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 flex items-center justify-center -translate-y-4 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-800 pointer-events-none z-0"
  >
    <CheckIcon />
  </div>
);

export const BarsChartAnim = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 flex items-end justify-center gap-3.5 pb-27 -translate-x-5 pointer-events-none z-0"
  >
    {[
      { h: 22, solid: false },
      { h: 36, solid: true },
      { h: 16, solid: false },
      { h: 30, solid: true },
      { h: 20, solid: false },
    ].map(({ h, solid }, i) => (
      <span
        key={i}
        style={{ height: h }}
        className={`w-5 rounded opacity-0 scale-y-0 origin-bottom group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-700 ${
          solid ? "bg-[#F3FE00]" : "bg-[rgba(243,254,0,0.22)] blur-[1px]"
        }`}
      />
    ))}
  </div>
);

export const JourneyGridAnim = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 flex items-center justify-center -translate-y-4 pointer-events-none z-0"
  >
    <JourneyIcon />
  </div>
);

export const BallsAnim = () => (
  <div
    aria-hidden="true"
    className="absolute left-[25%] bottom-[60%] pointer-events-none z-0"
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

/* MainCard ka static graphic — asli code mein yeh ek <Image> tha jo wrapper div ki
   scale/opacity animation follow karta tha. Yahan bhi isliye koi internal
   group-hover class nahi — poora graphic ek unit ki tarah wrapper se animate hota hai. */
const MainCardWidget = () => (
  <svg
    width="320"
    height="140"
    viewBox="0 0 320 140"
    fill="none"
    className="overflow-visible"
  >
    <defs>
      <radialGradient id="mcGoldFill" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#FDFDB8" />
        <stop offset="45%" stopColor="#F3FE00" />
        <stop offset="100%" stopColor="#8A8F00" />
      </radialGradient>
      <filter id="mcGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="14" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Box 1: small text-line bubble (faint border) */}
    <rect
      x="6"
      y="6"
      width="150"
      height="34"
      rx="8"
      stroke="rgba(243,254,0,0.28)"
      strokeWidth="1.5"
    />
    <rect
      x="20"
      y="19"
      width="90"
      height="6"
      rx="3"
      fill="rgba(243,254,0,0.28)"
    />

    {/* Box 2: bigger text-line bubble (bright border) */}
    <rect
      x="6"
      y="56"
      width="170"
      height="52"
      rx="10"
      stroke="#F3FE00"
      strokeWidth="1.5"
    />
    <rect x="20" y="70" width="120" height="6" rx="3" fill="#F3FE00" />
    <rect
      x="20"
      y="84"
      width="80"
      height="6"
      rx="3"
      fill="rgba(243,254,0,0.5)"
    />

    {/* Glowing gold chat-icon circle */}
    <circle
      cx="272"
      cy="70"
      r="34"
      fill="#F3FE00"
      opacity="0.35"
      filter="url(#mcGlow)"
    />
    <circle cx="272" cy="70" r="30" fill="url(#mcGoldFill)" />
    <path
      d="M258 60H286C288.2 60 290 61.8 290 64V76C290 78.2 288.2 80 286 80H268L260 87V80H258C255.8 80 254 78.2 254 76V64C254 61.8 255.8 60 258 60Z"
      fill="#141400"
    />
    <rect x="261" y="67" width="20" height="3" rx="1.5" fill="#F3FE00" />
    <rect x="261" y="73" width="12" height="3" rx="1.5" fill="#F3FE00" />
  </svg>
);

/* -------------------------------------------------------------
   2. CARD ICONS (top-left icon in har DeliverableCard)
   Sab stroke-based hain (currentColor) taake DeliverableCard ka
   group-hover:[&_svg_path]:stroke-[#F3FE00] selector kaam kare.
   ------------------------------------------------------------- */

const EvaluationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      d="M7.5 27.5C6.8125 27.5 6.22396 27.2552 5.73438 26.7656C5.24479 26.276 5 25.6875 5 25V22.5C5 22.1458 5.11979 21.849 5.35938 21.6094C5.59896 21.3698 5.89583 21.25 6.25 21.25C6.60417 21.25 6.90104 21.3698 7.14062 21.6094C7.38021 21.849 7.5 22.1458 7.5 22.5V25H22.5V22.5C22.5 22.1458 22.6198 21.849 22.8594 21.6094C23.099 21.3698 23.3958 21.25 23.75 21.25C24.1042 21.25 24.401 21.3698 24.6406 21.6094C24.8802 21.849 25 22.1458 25 22.5V25C25 25.6875 24.7552 26.276 24.2656 26.7656C23.776 27.2552 23.1875 27.5 22.5 27.5H7.5ZM5 5C5 4.3125 5.24479 3.72396 5.73438 3.23438C6.22396 2.74479 6.8125 2.5 7.5 2.5H16.4688C16.8021 2.5 17.1198 2.5625 17.4219 2.6875C17.724 2.8125 17.9896 2.98958 18.2188 3.21875L24.2812 9.28125C24.5104 9.51042 24.6875 9.77604 24.8125 10.0781C24.9375 10.3802 25 10.6979 25 11.0312V12.5C25 12.8542 24.8802 13.151 24.6406 13.3906C24.401 13.6302 24.1042 13.75 23.75 13.75C23.3958 13.75 23.099 13.6302 22.8594 13.3906C22.6198 13.151 22.5 12.8542 22.5 12.5V11.25H17.5C17.1458 11.25 16.849 11.1302 16.6094 10.8906C16.3698 10.651 16.25 10.3542 16.25 10V5H7.5V12.5C7.5 12.8542 7.38021 13.151 7.14062 13.3906C6.90104 13.6302 6.60417 13.75 6.25 13.75C5.89583 13.75 5.59896 13.6302 5.35938 13.3906C5.11979 13.151 5 12.8542 5 12.5V5ZM27.5 18.75H2.5C2.14583 18.75 1.84896 18.6302 1.60938 18.3906C1.36979 18.151 1.25 17.8542 1.25 17.5C1.25 17.1458 1.36979 16.849 1.60938 16.6094C1.84896 16.3698 2.14583 16.25 2.5 16.25H27.5C27.8542 16.25 28.151 16.3698 28.3906 16.6094C28.6302 16.849 28.75 17.1458 28.75 17.5C28.75 17.8542 28.6302 18.151 28.3906 18.3906C28.151 18.6302 27.8542 18.75 27.5 18.75Z"
      fill="currentColor"
    />
  </svg>
);

const AnalysisIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      d="M21.25 25C20.8958 25 20.599 24.8802 20.3594 24.6406C20.1198 24.401 20 24.1042 20 23.75V17.5C20 17.1458 20.1198 16.849 20.3594 16.6094C20.599 16.3698 20.8958 16.25 21.25 16.25H23.75C24.1042 16.25 24.401 16.3698 24.6406 16.6094C24.8802 16.849 25 17.1458 25 17.5V23.75C25 24.1042 24.8802 24.401 24.6406 24.6406C24.401 24.8802 24.1042 25 23.75 25H21.25ZM13.75 25C13.3958 25 13.099 24.8802 12.8594 24.6406C12.6198 24.401 12.5 24.1042 12.5 23.75V6.25C12.5 5.89583 12.6198 5.59896 12.8594 5.35938C13.099 5.11979 13.3958 5 13.75 5H16.25C16.6042 5 16.901 5.11979 17.1406 5.35938C17.3802 5.59896 17.5 5.89583 17.5 6.25V23.75C17.5 24.1042 17.3802 24.401 17.1406 24.6406C16.901 24.8802 16.6042 25 16.25 25H13.75ZM6.25 25C5.89583 25 5.59896 24.8802 5.35938 24.6406C5.11979 24.401 5 24.1042 5 23.75V12.5C5 12.1458 5.11979 11.849 5.35938 11.6094C5.59896 11.3698 5.89583 11.25 6.25 11.25H8.75C9.10417 11.25 9.40104 11.3698 9.64062 11.6094C9.88021 11.849 10 12.1458 10 12.5V23.75C10 24.1042 9.88021 24.401 9.64062 24.6406C9.40104 24.8802 9.10417 25 8.75 25H6.25Z"
      fill="currentColor"
    />
  </svg>
);

const MapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="currentColor"
  >
    <path
      d="M9.25047 21.5625C8.37547 22.2917 7.46401 22.625 6.5161 22.5625C5.56818 22.5 4.74005 22.1771 4.03172 21.5938C3.32339 21.0104 2.83901 20.2448 2.5786 19.2969C2.31818 18.349 2.49005 17.375 3.09422 16.375L5.43797 12.5C4.91714 12.0417 4.50568 11.4896 4.2036 10.8438C3.90151 10.1979 3.75047 9.5 3.75047 8.75C3.75047 7.375 4.24005 6.19792 5.21922 5.21875C6.19839 4.23958 7.37547 3.75 8.75047 3.75C10.1255 3.75 11.3026 4.23958 12.2817 5.21875C13.2609 6.19792 13.7505 7.375 13.7505 8.75C13.7505 10.125 13.2609 11.3021 12.2817 12.2812C11.3026 13.2604 10.1255 13.75 8.75047 13.75C8.56297 13.75 8.37547 13.7396 8.18797 13.7188C8.00047 13.6979 7.82339 13.6667 7.65672 13.625L5.25047 17.6875C5.0213 18.0625 4.94839 18.4323 5.03172 18.7969C5.11505 19.1615 5.29214 19.4583 5.56297 19.6875C5.8338 19.9167 6.15672 20.0469 6.53172 20.0781C6.90672 20.1094 7.2713 19.9792 7.62547 19.6875L20.7505 8.40625C21.6255 7.67708 22.5421 7.34896 23.5005 7.42188C24.4588 7.49479 25.2921 7.82292 26.0005 8.40625C26.7088 8.98958 27.188 9.75521 27.438 10.7031C27.688 11.651 27.5109 12.625 26.9067 13.625L24.563 17.5C25.0838 17.9583 25.4953 18.5104 25.7973 19.1562C26.0994 19.8021 26.2505 20.5 26.2505 21.25C26.2505 22.625 25.7609 23.8021 24.7817 24.7812C23.8026 25.7604 22.6255 26.25 21.2505 26.25C19.8755 26.25 18.6984 25.7604 17.7192 24.7812C16.7401 23.8021 16.2505 22.625 16.2505 21.25C16.2505 19.875 16.7401 18.6979 17.7192 17.7188C18.6984 16.7396 19.8755 16.25 21.2505 16.25C21.438 16.25 21.6203 16.2604 21.7973 16.2812C21.9744 16.3021 22.1463 16.3333 22.313 16.375L24.7505 12.3125C24.9796 11.9375 25.0526 11.5677 24.9692 11.2031C24.8859 10.8385 24.7088 10.5417 24.438 10.3125C24.1671 10.0833 23.8442 9.95312 23.4692 9.92188C23.0942 9.89062 22.7296 10.0208 22.3755 10.3125L9.25047 21.5625ZM10.5161 10.5156C11.0057 10.026 11.2505 9.4375 11.2505 8.75C11.2505 8.0625 11.0057 7.47396 10.5161 6.98438C10.0265 6.49479 9.43797 6.25 8.75047 6.25C8.06297 6.25 7.47443 6.49479 6.98485 6.98438C6.49526 7.47396 6.25047 8.0625 6.25047 8.75C6.25047 9.4375 6.49526 10.026 6.98485 10.5156C7.47443 11.0052 8.06297 11.25 8.75047 11.25C9.43797 11.25 10.0265 11.0052 10.5161 10.5156ZM23.0161 23.0156C23.5057 22.526 23.7505 21.9375 23.7505 21.25C23.7505 20.5625 23.5057 19.974 23.0161 19.4844C22.5265 18.9948 21.938 18.75 21.2505 18.75C20.563 18.75 19.9744 18.9948 19.4848 19.4844C18.9953 19.974 18.7505 20.5625 18.7505 21.25C18.7505 21.9375 18.9953 22.526 19.4848 23.0156C19.9744 23.5052 20.563 23.75 21.2505 23.75C21.938 23.75 22.5265 23.5052 23.0161 23.0156Z"
      fill="currentColor"
    />
  </svg>
);

const ClusterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="currentColor"
  >
    <path
      d="M3.78125 26.2188C2.92708 25.3646 2.5 24.3333 2.5 23.125C2.5 21.9167 2.92708 20.8854 3.78125 20.0312C4.63542 19.1771 5.66667 18.75 6.875 18.75C7.25 18.75 7.61458 18.7969 7.96875 18.8906C8.32292 18.9844 8.65625 19.1146 8.96875 19.2812L13.75 14.5V11.0625C12.8333 10.7917 12.0833 10.276 11.5 9.51562C10.9167 8.75521 10.625 7.875 10.625 6.875C10.625 5.66667 11.0521 4.63542 11.9062 3.78125C12.7604 2.92708 13.7917 2.5 15 2.5C16.2083 2.5 17.2396 2.92708 18.0938 3.78125C18.9479 4.63542 19.375 5.66667 19.375 6.875C19.375 7.875 19.0833 8.75521 18.5 9.51562C17.9167 10.276 17.1667 10.7917 16.25 11.0625V14.5L21.0625 19.2812C21.375 19.1146 21.7031 18.9844 22.0469 18.8906C22.3906 18.7969 22.75 18.75 23.125 18.75C24.3333 18.75 25.3646 19.1771 26.2188 20.0312C27.0729 20.8854 27.5 21.9167 27.5 23.125C27.5 24.3333 27.0729 25.3646 26.2188 26.2188C25.3646 27.0729 24.3333 27.5 23.125 27.5C21.9167 27.5 20.8854 27.0729 20.0312 26.2188C19.1771 25.3646 18.75 24.3333 18.75 23.125C18.75 22.75 18.7969 22.3854 18.8906 22.0312C18.9844 21.6771 19.1146 21.3438 19.2812 21.0312L15 16.75L10.7188 21.0312C10.8854 21.3438 11.0156 21.6771 11.1094 22.0312C11.2031 22.3854 11.25 22.75 11.25 23.125C11.25 24.3333 10.8229 25.3646 9.96875 26.2188C9.11458 27.0729 8.08333 27.5 6.875 27.5C5.66667 27.5 4.63542 27.0729 3.78125 26.2188ZM24.4531 24.4531C24.8177 24.0885 25 23.6458 25 23.125C25 22.6042 24.8177 22.1615 24.4531 21.7969C24.0885 21.4323 23.6458 21.25 23.125 21.25C22.6042 21.25 22.1615 21.4323 21.7969 21.7969C21.4323 22.1615 21.25 22.6042 21.25 23.125C21.25 23.6458 21.4323 24.0885 21.7969 24.4531C22.1615 24.8177 22.6042 25 23.125 25C23.6458 25 24.0885 24.8177 24.4531 24.4531ZM16.3281 8.20312C16.6927 7.83854 16.875 7.39583 16.875 6.875C16.875 6.35417 16.6927 5.91146 16.3281 5.54688C15.9635 5.18229 15.5208 5 15 5C14.4792 5 14.0365 5.18229 13.6719 5.54688C13.3073 5.91146 13.125 6.35417 13.125 6.875C13.125 7.39583 13.3073 7.83854 13.6719 8.20312C14.0365 8.56771 14.4792 8.75 15 8.75C15.5208 8.75 15.9635 8.56771 16.3281 8.20312ZM8.20312 24.4531C8.56771 24.0885 8.75 23.6458 8.75 23.125C8.75 22.6042 8.56771 22.1615 8.20312 21.7969C7.83854 21.4323 7.39583 21.25 6.875 21.25C6.35417 21.25 5.91146 21.4323 5.54688 21.7969C5.18229 22.1615 5 22.6042 5 23.125C5 23.6458 5.18229 24.0885 5.54688 24.4531C5.91146 24.8177 6.35417 25 6.875 25C7.39583 25 7.83854 24.8177 8.20312 24.4531Z"
      fill="#currentColor"
    />
  </svg>
);

const FLowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="currentColor"
  >
    <path
      d="M18.75 23.75V22.5H16.25C15.5625 22.5 14.974 22.2552 14.4844 21.7656C13.9948 21.276 13.75 20.6875 13.75 20V10H11.25V11.25C11.25 11.9375 11.0052 12.526 10.5156 13.0156C10.026 13.5052 9.4375 13.75 8.75 13.75H5C4.3125 13.75 3.72396 13.5052 3.23438 13.0156C2.74479 12.526 2.5 11.9375 2.5 11.25V6.25C2.5 5.5625 2.74479 4.97396 3.23438 4.48438C3.72396 3.99479 4.3125 3.75 5 3.75H8.75C9.4375 3.75 10.026 3.99479 10.5156 4.48438C11.0052 4.97396 11.25 5.5625 11.25 6.25V7.5H18.75V6.25C18.75 5.5625 18.9948 4.97396 19.4844 4.48438C19.974 3.99479 20.5625 3.75 21.25 3.75H25C25.6875 3.75 26.276 3.99479 26.7656 4.48438C27.2552 4.97396 27.5 5.5625 27.5 6.25V11.25C27.5 11.9375 27.2552 12.526 26.7656 13.0156C26.276 13.5052 25.6875 13.75 25 13.75H21.25C20.5625 13.75 19.974 13.5052 19.4844 13.0156C18.9948 12.526 18.75 11.9375 18.75 11.25V10H16.25V20H18.75V18.75C18.75 18.0625 18.9948 17.474 19.4844 16.9844C19.974 16.4948 20.5625 16.25 21.25 16.25H25C25.6875 16.25 26.276 16.4948 26.7656 16.9844C27.2552 17.474 27.5 18.0625 27.5 18.75V23.75C27.5 24.4375 27.2552 25.026 26.7656 25.5156C26.276 26.0052 25.6875 26.25 25 26.25H21.25C20.5625 26.25 19.974 26.0052 19.4844 25.5156C18.9948 25.026 18.75 24.4375 18.75 23.75ZM21.25 11.25H25V6.25H21.25V11.25ZM21.25 23.75H25V18.75H21.25V23.75ZM5 11.25H8.75V6.25H5V11.25Z"
      fill="currentColor"
    />
  </svg>
);

const DesignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="currentColor"
  >
    <path
      d="M5 12.5V22.5V7.5V12.5ZM17.5 26.25C17.8542 26.25 18.151 26.1302 18.3906 25.8906C18.6302 25.651 18.75 25.3542 18.75 25C18.75 24.6458 18.6302 24.349 18.3906 24.1094C18.151 23.8698 17.8542 23.75 17.5 23.75C17.1458 23.75 16.849 23.8698 16.6094 24.1094C16.3698 24.349 16.25 24.6458 16.25 25C16.25 25.3542 16.3698 25.651 16.6094 25.8906C16.849 26.1302 17.1458 26.25 17.5 26.25ZM25 13.75C25.3542 13.75 25.651 13.6302 25.8906 13.3906C26.1302 13.151 26.25 12.8542 26.25 12.5C26.25 12.1458 26.1302 11.849 25.8906 11.6094C25.651 11.3698 25.3542 11.25 25 11.25C24.6458 11.25 24.349 11.3698 24.1094 11.6094C23.8698 11.849 23.75 12.1458 23.75 12.5C23.75 12.8542 23.8698 13.151 24.1094 13.3906C24.349 13.6302 24.6458 13.75 25 13.75ZM12.5 13.75C12.8542 13.75 13.151 13.6302 13.3906 13.3906C13.6302 13.151 13.75 12.8542 13.75 12.5C13.75 12.1458 13.6302 11.849 13.3906 11.6094C13.151 11.3698 12.8542 11.25 12.5 11.25H8.75C8.39583 11.25 8.09896 11.3698 7.85938 11.6094C7.61979 11.849 7.5 12.1458 7.5 12.5C7.5 12.8542 7.61979 13.151 7.85938 13.3906C8.09896 13.6302 8.39583 13.75 8.75 13.75H12.5ZM12.5 18.75C12.8542 18.75 13.151 18.6302 13.3906 18.3906C13.6302 18.151 13.75 17.8542 13.75 17.5C13.75 17.1458 13.6302 16.849 13.3906 16.6094C13.151 16.3698 12.8542 16.25 12.5 16.25H8.75C8.39583 16.25 8.09896 16.3698 7.85938 16.6094C7.61979 16.849 7.5 17.1458 7.5 17.5C7.5 17.8542 7.61979 18.151 7.85938 18.3906C8.09896 18.6302 8.39583 18.75 8.75 18.75H12.5ZM5 25C4.3125 25 3.72396 24.7552 3.23438 24.2656C2.74479 23.776 2.5 23.1875 2.5 22.5V7.5C2.5 6.8125 2.74479 6.22396 3.23438 5.73438C3.72396 5.24479 4.3125 5 5 5H26.25C26.6042 5 26.901 5.11979 27.1406 5.35938C27.3802 5.59896 27.5 5.89583 27.5 6.25C27.5 6.60417 27.3802 6.90104 27.1406 7.14062C26.901 7.38021 26.6042 7.5 26.25 7.5H5V22.5H10C10.3542 22.5 10.651 22.6198 10.8906 22.8594C11.1302 23.099 11.25 23.3958 11.25 23.75C11.25 24.1042 11.1302 24.401 10.8906 24.6406C10.651 24.8802 10.3542 25 10 25H5ZM14.8438 27.6562C14.1146 26.9271 13.75 26.0417 13.75 25C13.75 24.1875 13.9844 23.4583 14.4531 22.8125C14.9219 22.1667 15.5208 21.7188 16.25 21.4688V18.75C16.25 18.3958 16.3698 18.099 16.6094 17.8594C16.849 17.6198 17.1458 17.5 17.5 17.5H23.75V16.0312C23.0208 15.7812 22.4219 15.3333 21.9531 14.6875C21.4844 14.0417 21.25 13.3125 21.25 12.5C21.25 11.4583 21.6146 10.5729 22.3438 9.84375C23.0729 9.11458 23.9583 8.75 25 8.75C26.0417 8.75 26.9271 9.11458 27.6562 9.84375C28.3854 10.5729 28.75 11.4583 28.75 12.5C28.75 13.3125 28.5156 14.0417 28.0469 14.6875C27.5781 15.3333 26.9792 15.7812 26.25 16.0312V18.75C26.25 19.1042 26.1302 19.401 25.8906 19.6406C25.651 19.8802 25.3542 20 25 20H18.75V21.4688C19.4792 21.7188 20.0781 22.1667 20.5469 22.8125C21.0156 23.4583 21.25 24.1875 21.25 25C21.25 26.0417 20.8854 26.9271 20.1562 27.6562C19.4271 28.3854 18.5417 28.75 17.5 28.75C16.4583 28.75 15.5729 28.3854 14.8438 27.6562Z"
      fill="currentColor"
    />
  </svg>
);

const MobileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="currentColor"
  >
    <path
      d="M5 25C4.3125 25 3.72396 24.7552 3.23438 24.2656C2.74479 23.776 2.5 23.1875 2.5 22.5V7.5C2.5 6.8125 2.74479 6.22396 3.23438 5.73438C3.72396 5.24479 4.3125 5 5 5H25C25.6875 5 26.276 5.24479 26.7656 5.73438C27.2552 6.22396 27.5 6.8125 27.5 7.5V22.5C27.5 23.1875 27.2552 23.776 26.7656 24.2656C26.276 24.7552 25.6875 25 25 25H5ZM21.875 10.8438H25V7.5H21.875V10.8438ZM21.875 16.6562H25V13.3438H21.875V16.6562ZM5 22.5H19.375V7.5H5V22.5ZM21.875 22.5H25V19.1562H21.875V22.5Z"
      fill="currentColor"
    />
  </svg>
);

const SystemIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="currentColor"
  >
    <path
      d="M14.125 19.625L10.375 15.875C10.125 15.625 10 15.3333 10 15C10 14.6667 10.125 14.375 10.375 14.125L14.125 10.375C14.375 10.125 14.6667 10 15 10C15.3333 10 15.625 10.125 15.875 10.375L19.625 14.125C19.875 14.375 20 14.6667 20 15C20 15.3333 19.875 15.625 19.625 15.875L15.875 19.625C15.625 19.875 15.3333 20 15 20C14.6667 20 14.375 19.875 14.125 19.625ZM16.75 26.7188C16.5208 26.9479 16.25 27.125 15.9375 27.25C15.625 27.375 15.3125 27.4375 15 27.4375C14.6875 27.4375 14.375 27.375 14.0625 27.25C13.75 27.125 13.4792 26.9479 13.25 26.7188L3.28125 16.75C3.05208 16.5208 2.875 16.25 2.75 15.9375C2.625 15.625 2.5625 15.3125 2.5625 15C2.5625 14.6875 2.625 14.375 2.75 14.0625C2.875 13.75 3.05208 13.4792 3.28125 13.25L13.2188 3.3125C13.4688 3.0625 13.7448 2.875 14.0469 2.75C14.349 2.625 14.6667 2.5625 15 2.5625C15.3333 2.5625 15.651 2.625 15.9531 2.75C16.2552 2.875 16.5312 3.0625 16.7812 3.3125L26.7188 13.25C26.9479 13.4792 27.125 13.75 27.25 14.0625C27.375 14.375 27.4375 14.6875 27.4375 15C27.4375 15.3125 27.375 15.625 27.25 15.9375C27.125 16.25 26.9479 16.5208 26.7188 16.75L16.75 26.7188ZM15 24L24 15L15 6L6 15L15 24Z"
      fill="currentColor"
    />
  </svg>
);

const PrototypeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="currentColor"
  >
    <path
      d="M2.5 22.5C1.8125 22.5 1.22396 22.2552 0.734375 21.7656C0.244792 21.276 0 20.6875 0 20V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H20C20.6875 0 21.276 0.244792 21.7656 0.734375C22.2552 1.22396 22.5 1.8125 22.5 2.5V11.25C22.5 11.6042 22.3802 11.901 22.1406 12.1406C21.901 12.3802 21.6042 12.5 21.25 12.5C20.8958 12.5 20.599 12.3802 20.3594 12.1406C20.1198 11.901 20 11.6042 20 11.25V2.5H2.5V20H10C10.3542 20 10.651 20.1198 10.8906 20.3594C11.1302 20.599 11.25 20.8958 11.25 21.25C11.25 21.6042 11.1302 21.901 10.8906 22.1406C10.651 22.3802 10.3542 22.5 10 22.5H2.5ZM17.9375 20.2188L22.3438 15.7812C22.5938 15.5312 22.8906 15.4062 23.2344 15.4062C23.5781 15.4062 23.875 15.5312 24.125 15.7812C24.375 16.0312 24.5 16.3281 24.5 16.6719C24.5 17.0156 24.375 17.3125 24.125 17.5625L18.8125 22.875C18.5625 23.125 18.2656 23.25 17.9219 23.25C17.5781 23.25 17.2812 23.125 17.0312 22.875L14.375 20.2188C14.1458 19.9688 14.0312 19.6719 14.0312 19.3281C14.0312 18.9844 14.1562 18.6875 14.4062 18.4375C14.6562 18.1875 14.9479 18.0625 15.2812 18.0625C15.6146 18.0625 15.9062 18.1875 16.1562 18.4375L17.9375 20.2188ZM7.14062 12.1406C7.38021 11.901 7.5 11.6042 7.5 11.25C7.5 10.8958 7.38021 10.599 7.14062 10.3594C6.90104 10.1198 6.60417 10 6.25 10C5.89583 10 5.59896 10.1198 5.35938 10.3594C5.11979 10.599 5 10.8958 5 11.25C5 11.6042 5.11979 11.901 5.35938 12.1406C5.59896 12.3802 5.89583 12.5 6.25 12.5C6.60417 12.5 6.90104 12.3802 7.14062 12.1406ZM7.14062 7.14062C7.38021 6.90104 7.5 6.60417 7.5 6.25C7.5 5.89583 7.38021 5.59896 7.14062 5.35938C6.90104 5.11979 6.60417 5 6.25 5C5.89583 5 5.59896 5.11979 5.35938 5.35938C5.11979 5.59896 5 5.89583 5 6.25C5 6.60417 5.11979 6.90104 5.35938 7.14062C5.59896 7.38021 5.89583 7.5 6.25 7.5C6.60417 7.5 6.90104 7.38021 7.14062 7.14062ZM16.25 12.5C16.6042 12.5 16.901 12.3802 17.1406 12.1406C17.3802 11.901 17.5 11.6042 17.5 11.25C17.5 10.8958 17.3802 10.599 17.1406 10.3594C16.901 10.1198 16.6042 10 16.25 10H11.25C10.8958 10 10.599 10.1198 10.3594 10.3594C10.1198 10.599 10 10.8958 10 11.25C10 11.6042 10.1198 11.901 10.3594 12.1406C10.599 12.3802 10.8958 12.5 11.25 12.5H16.25ZM16.25 7.5C16.6042 7.5 16.901 7.38021 17.1406 7.14062C17.3802 6.90104 17.5 6.60417 17.5 6.25C17.5 5.89583 17.3802 5.59896 17.1406 5.35938C16.901 5.11979 16.6042 5 16.25 5H11.25C10.8958 5 10.599 5.11979 10.3594 5.35938C10.1198 5.59896 10 5.89583 10 6.25C10 6.60417 10.1198 6.90104 10.3594 7.14062C10.599 7.38021 10.8958 7.5 11.25 7.5H16.25Z"
      fill="currentColor"
    />
  </svg>
);

export const icons = {
  EvaluationIcon,
  AnalysisIcon,
  MapIcon,
  ClusterIcon,
  FLowIcon,
  DesignIcon,
  MobileIcon,
  SystemIcon,
  PrototypeIcon,
};

/* -------------------------------------------------------------
   3. CARDS
   ------------------------------------------------------------- */
import cardAnimation from "../../../assets/images/card-animation.png";

export const MainCard = ({
  title,
  description,
  image,
  className = "",
  hasExtraCard,
}) => {
  return (
    <div
      className={`border border-[#27272A] p-6 flex flex-col justify-between h-42 md:h-full relative overflow-hidden group hover:border-[rgba(255,255,255,0.16)] transition-colors md:border-r-0 ${
        hasExtraCard ? "border-b-0" : ""
      } ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-40 h-40 bg-[#F3FE00] opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-500 pointer-events-none"
      />

      <img
        src={cardAnimation}
        alt="animations"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-6 left-6 z-0 h-auto w-full max-w-130 scale-40 opacity-0 transition-all duration-1000 ease-out group-hover:scale-100 group-hover:opacity-100"
      />

      <div className="flex items-start flex-col gap-3 relative z-10">
        <h3 className="text-[#F4F4EE] font-tight text-lg md:text-5xl font-semibold md:font-bold leading-7 md:leading-15 tracking-[-0.96px]">
          {title}
        </h3>

        <p className="text-[#A1A1AA] mb-10 md:mb-0 text-sm w-full md:w-117.25 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export const ExtraCard = ({ icon, number, title, description }) => (
  <div
    className="border border-[#27272A] p-6 rounded-b-[14px] flex items-start justify-between"
    style={{
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)",
    }}
  >
    <div className="flex flex-col gap-21">
      <span
        className="text-white
    transition-colors
    duration-500
    group-hover:text-[#F3FE00]
  "
      >
        {icon}
      </span>
      <div className="flex flex-col gap-1.5">
        <h4 className="text-[#FFF] font-tight text-lg font-semibold leading-7">
          {title}
        </h4>
        <p className="text-[#A1A1AA] text-sm">{description}</p>
      </div>
    </div>
    <span className="text-[#71717A] text-xs">{number}</span>
  </div>
);

export const DeliverableCard = ({
  icon,
  number,
  title,
  description,
  animationIndex,
  className = "",
}) => {
  const Animation =
    animationIndex !== undefined
      ? cardAnimations[animationIndex % cardAnimations.length]
      : null;

  return (
    <div
      className={`border border-[#27272A] p-6 flex flex-col gap-19 relative overflow-hidden group hover:border-[rgba(255,255,255,0.16)] transition-colors ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#F3FE00] opacity-0 group-hover:opacity-30 blur-[80px] transition-opacity duration-500 pointer-events-none"
      />
      {Animation && <Animation />}
      <div className="flex items-start justify-between relative z-10">
        <span className="text-white transition-colors duration-500 group-hover:text-[#F3FE00]">
          {icon}
        </span>
        <span className="text-[#71717A] text-xs">{number}</span>
      </div>
      <div className="flex flex-col gap-1.5 relative z-10">
        <h4 className="text-[#FFF] text-lg font-tight font-semibold leading-7">
          {title}
        </h4>
        <p className="text-[#A1A1AA] text-sm">{description}</p>
      </div>
    </div>
  );
};
