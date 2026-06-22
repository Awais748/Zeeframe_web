const imgFrame5 =
  "https://www.figma.com/api/mcp/asset/92275564-5dd5-4cca-a79a-d90ff9df0692"; // Senior Design Engineers icon
const imgFrame4 =
  "https://www.figma.com/api/mcp/asset/70da89ca-0bff-46a1-b165-ff1fa26533b0"; // AI-Native Workflow icon
const imgFrame3 =
  "https://www.figma.com/api/mcp/asset/1d45b17d-07dc-4526-ae4d-59cce9b03dbf"; // Domain Experts icon
const imgFrame2 =
  "https://www.figma.com/api/mcp/asset/ea827559-2588-466b-a5a2-0590281f8432"; // AI-certified icon
const imgFrame1 =
  "https://www.figma.com/api/mcp/asset/3aa6f634-949e-41c6-9f10-ad4d18f50904"; // Trusted by Global Brands icon
const imgFrame =
  "https://www.figma.com/api/mcp/asset/269bc56b-b51a-461b-a3ea-cfbf1afd214a"; // Award-Winning Craft icon
const imgGlassKnot =
  "https://www.figma.com/api/mcp/asset/51b53cbe-4717-444f-bdd2-935e140c97cd";
const imgVector =
  "https://www.figma.com/api/mcp/asset/e9e10a21-53ec-4c6e-aaa6-410bd260f87a";
const imgEllipse =
  "https://www.figma.com/api/mcp/asset/e4cc091e-b21d-4fda-9d22-3637cfec55cf";
const imgArrowUpRight =
  "https://www.figma.com/api/mcp/asset/fc1603eb-f373-4819-868f-2b1a47c0d493";

// Grid cell data matching Figma exactly
const WHY_CELLS = [
  // Row 1
  {
    icon: imgFrame5,
    title: "Senior Design Engineers",
    desc: "Work with Fortune 500-caliber designers delivering shippable specs through engineering fluency.",
    // top-left: rounded-tl, full border
    borderClass: "border-[0.6px] border-[#373737]",
    roundedClass: "rounded-tl-[14px]",
    isHover: true, // Figma shows this cell in hover state
  },
  {
    icon: imgFrame4,
    title: "AI-Native Workflow",
    desc: "Figma Make, Google Stitch, Lovable, and LLM synthesis are part of our daily design practice.",
    borderClass:
      "border-t-[0.6px] border-b-[0.6px] border-r-[0.6px] border-[#373737]",
    roundedClass: "",
    isHover: false,
  },
  {
    icon: imgFrame3,
    title: "Domain Experts",
    desc: "Senior UX designers with real EdTech and education product experience.",
    borderClass:
      "border-t-[0.6px] border-b-[0.6px] border-r-[0.6px] border-[#373737]",
    roundedClass: "rounded-tr-[14px]",
    isHover: false,
  },
  // Row 2
  {
    icon: imgFrame2,
    title: "AI-certified",
    desc: "Hands-on with AI tools and workflows — used to accelerate, not replace.",
    borderClass:
      "border-l-[0.6px] border-b-[0.6px] border-r-[0.6px] border-[#373737]",
    roundedClass: "rounded-bl-[14px]",
    isHover: false,
  },
  {
    icon: imgFrame1,
    title: "Trusted by Global Brands",
    desc: "Walmart, Cisco, Nissan, Trafilea, and fast-growing startups worldwide trust our design craft.",
    borderClass: "border-b-[0.6px] border-r-[0.6px] border-[#373737]",
    roundedClass: "",
    isHover: false,
  },
  {
    icon: imgFrame,
    title: "Award-Winning Craft",
    desc: "Rated on Clutch, Trustpilot, GoodFirms, and Dribbble. Winner at the Tech Behemoths UX/UI Design Awards 2025.",
    borderClass: "border-b-[0.6px] border-r-[0.6px] border-[#373737]",
    roundedClass: "rounded-br-[14px]",
    isHover: false,
  },
];

function WhyCell({ cell }) {
  return (
    <div
      className={`
        zf-why-cell relative flex flex-col gap-16 h-[272px] items-start overflow-hidden p-6 flex-1
        border-solid ${cell.borderClass} ${cell.roundedClass}
        max-sm:h-auto max-sm:gap-10 max-sm:p-5
      `}
    >
      {/* Icon wrapper 40×40 */}
      <div className="zf-why-icon w-10 h-10 flex items-center justify-center overflow-hidden shrink-0 transition-transform duration-300">
        <img
          src={cell.icon}
          alt=""
          className="w-[30px] h-[30px] object-contain"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3 w-full">
        <p
          className="text-white text-[18px] leading-7 m-0 font-semibold"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          {cell.title}
        </p>
        <p
          className="text-[#d4d4d8] text-[14px] leading-5 m-0 font-normal"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {cell.desc}
        </p>
      </div>
    </div>
  );
}

export default function WhyZeeframes({ id }) {
  return (
    <section
      id={id}
      className="bg-[#0b0b0b] py-[60px] max-lg:py-12 max-sm:py-10"
    >
      <style>{`
        /* Default cell bg */
        .zf-why-cell {
          background: #0b0b0b;
          transition: background 0.25s ease;
        }
        /* Hover state — exact Figma radial + linear gradient */
        .zf-why-cell:hover {
          background:
            radial-gradient(93.1% 120.16% at 10.23% 0%, rgba(243,254,0,0.40) 0%, rgba(0,0,0,0) 56%),
            linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%),
            #151515;
          cursor: pointer;
        }
        .zf-why-cell:hover .zf-why-icon {
          transform: scale(1.08);
        }
        /* Ellipse glow circles in the CTA banner */
        .cta-glow-tr {
          position: absolute;
          width: 290px;
          height: 290px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          right: -20px;
          top: -85px;
          pointer-events: none;
        }
        .cta-glow-bl {
          position: absolute;
          width: 290px;
          height: 290px;
          border-radius: 50%;
          background: rgba(255,255,255,0.10);
          left: -49px;
          bottom: -85px;
          pointer-events: none;
        }
      `}</style>

      <div className="container flex flex-col items-center gap-16">
        {/* ── Inner card ── */}
        <div className="bg-[#151515] rounded-[14px] py-[60px] w-full max-lg:py-10 max-sm:py-8">
          {/* Header row */}
          <div className="flex justify-between  items-start px-8 max-lg:px-5 max-sm:px-4">
            <div className="flex items-start justify-between gap-8 mb-12 max-lg:flex-col max-lg:gap-5 relative">
              {/* Left: label + title */}
              <div className="flex flex-col gap-4 relative shrink-0 max-w-[517px]">
                {/* Yellow label */}
                <p
                  className="text-[#f3fe00] text-[14px] leading-5 m-0 font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Why Zeeframes
                </p>

                {/* Title */}
                <h2
                  className="text-white text-[36px] leading-[44px] tracking-[-0.72px] m-0 font-semibold max-w-[517px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Why Choose Zeeframes as Your UI/UX Design Agency
                </h2>

                {/* Decorative vector — positioned absolutely off the title */}
                <div
                  className="absolute pointer-events-none hidden xl:block"
                  style={{ left: 415, top: -45, width: 214, height: 235 }}
                >
                  <div
                    style={{
                      transform: "rotate(-30deg)",
                      transformOrigin: "center",
                    }}
                  >
                    <img
                      src={imgVector}
                      alt=""
                      style={{ width: 136, height: 192, display: "block" }}
                    />
                  </div>
                </div>
              </div>

              {/* Right: description */}
              <p
                className="text-[#d4d4d8] text-[16px] leading-6 m-0 pt-14  font-medium max-w-[630px] max-lg:max-w-full"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Hundreds of agencies can design a screen. Here's what makes us a
                different kind of design partner:
              </p>
            </div>
          </div>

          {/* ── 3×2 Grid ── */}
          <div className="px-8 max-lg:px-5 max-sm:px-4">
            <div className="flex flex-col w-full">
              {/* Row 1 */}
              <div className="flex w-full max-sm:flex-col">
                {WHY_CELLS.slice(0, 3).map((cell) => (
                  <WhyCell key={cell.title} cell={cell} />
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex w-full max-sm:flex-col">
                {WHY_CELLS.slice(3, 6).map((cell) => (
                  <WhyCell key={cell.title} cell={cell} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Yellow CTA banner ── */}
        <div className="bg-[#f3fe00] rounded-[14px] py-[60px] px-16 flex items-center justify-between gap-10 relative overflow-hidden w-full max-w-[1256px] max-lg:flex-col max-lg:py-12 max-lg:px-8 max-lg:text-center max-sm:py-10 max-sm:px-6">
          {/* Ambient glow — top right */}
          <div className="cta-glow-tr" aria-hidden="true" />
          {/* Ambient glow — bottom left */}
          <div className="cta-glow-bl" aria-hidden="true" />

          {/* Text block */}
          <div className="relative z-10 flex flex-col gap-8 max-lg:items-center">
            <div className="flex flex-col gap-3">
              <h2
                className="text-[#27272a] text-[48px] leading-[60px] tracking-[-0.96px] m-0 font-semibold max-lg:text-[32px] max-lg:leading-[40px]"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                See how we've helped others win
              </h2>
              <p
                className="text-[#27272a] text-[18px] leading-7 max-w-[779px] m-0 font-normal"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Browse our portfolio of successfully shipped products across
                SaaS, mobile, and enterprise platforms crafted with a focus on
                usability, innovation, and business growth.
              </p>
            </div>

            {/* CTA button */}
            <button
              className="bg-black flex items-center gap-2 px-4 py-2 rounded-[99999px] shrink-0 cursor-pointer border border-transparent w-fit transition-colors duration-200 hover:bg-[#f3fe00] hover:border-black group"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="text-white text-[16px] leading-6 font-medium whitespace-nowrap group-hover:text-black">
                View Our Work
              </span>
              <img
                src={imgArrowUpRight}
                alt=""
                className="w-4 h-4 group-hover:invert"
              />
            </button>
          </div>

          {/* Glass knot image */}
          <div className="relative z-10 w-[246px] h-[226px] shrink-0 overflow-hidden max-lg:hidden">
            <img
              src={imgGlassKnot}
              alt="Glass knot sculpture"
              loading="lazy"
              className="absolute w-full"
              style={{ top: "-48.96%", left: 0, height: "193.94%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
