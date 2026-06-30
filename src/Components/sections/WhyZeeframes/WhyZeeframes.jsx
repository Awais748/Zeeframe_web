import SectionHeader from "../../ui/SectionHeader";
import imgArrowUpRight from "../../../assets/images/imgArrowUpRight.svg";
import imgGlassKnot from "../../../assets/images/glass-knot.png";
import imgFrame from "../../../assets/images/imgFrame.svg";
import imgFrame1 from "../../../assets/images/imgframe1.svg";
import imgFrame2 from "../../../assets/images/imgFrame2.svg";
import imgFrame3 from "../../../assets/images/imgFrame3.svg";
import imgFrame4 from "../../../assets/images/imgFrame4.svg";
import imgFrame5 from "../../../assets/images/imgframe5.svg";

const WHY_CELLS = [
  {
    icon: imgFrame5,
    title: "Senior Design Engineers",
    desc: "Work with Fortune 500-caliber designers delivering shippable specs through engineering fluency.",
    borderClass: "border-[0.6px] border-[#373737]",
    roundedClass: "rounded-tl-[14px] max-[640px]:rounded-tl-[0px]",
  },
  {
    icon: imgFrame4,
    title: "AI-Native Workflow",
    desc: "Figma Make, Google Stitch, Lovable, and LLM synthesis are part of our daily design practice.",
    borderClass:
      "border-t-[0.6px] border-b-[0.6px] border-r-[0.6px] border-[#373737]",
    roundedClass: "",
  },
  {
    icon: imgFrame3,
    title: "Domain Experts",
    desc: "Senior UX designers with real EdTech and education product experience.",
    borderClass:
      "border-t-[0.6px] border-b-[0.6px] border-r-[0.6px] border-[#373737]",
    roundedClass: "rounded-tr-[14px] max-[640px]:rounded-tr-[0px]",
  },
  {
    icon: imgFrame2,
    title: "AI-certified",
    desc: "Hands-on with AI tools and workflows — used to accelerate, not replace.",
    borderClass:
      "border-l-[0.6px] border-b-[0.6px] border-r-[0.6px] border-[#373737]",
    roundedClass: "rounded-bl-[14px] max-[640px]:rounded-bl-[0px]",
  },
  {
    icon: imgFrame1,
    title: "Trusted by Global Brands",
    desc: "Walmart, Cisco, Nissan, Trafilea, and fast-growing startups worldwide trust our design craft.",
    borderClass: "border-b-[0.6px] border-r-[0.6px] border-[#373737]",
    roundedClass: "",
  },
  {
    icon: imgFrame,
    title: "Award-Winning Craft",
    desc: "Rated on Clutch, Trustpilot, GoodFirms, and Dribbble. Winner at the Tech Behemoths UX/UI Design Awards 2025.",
    borderClass: "border-b-[0.6px] border-r-[0.6px] border-[#373737]",
    roundedClass: "rounded-br-[14px] max-[640px]:rounded-br-[0px]",
  },
];

export default function WhyZeeframes({ id }) {
  return (
    <section
      id={id}
      className="bg-[#0b0b0b] py-[60px] max-[1100px]:py-12 max-[640px]:py-10"
    >
      <style>{`
        .zf-why-cell {
          background: #0b0b0b;
          transition: background 0.25s ease;
        }
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
      `}</style>

      <div className="container flex flex-col gap-16 max-[640px]:gap-10">
        {/* ── Inner card ── */}
        <div className="bg-[#151515] rounded-[14px] py-[60px] w-full max-[1100px]:py-10 max-[640px]:py-8">
          {/* SectionHeader inside card with custom padding */}
          <div className="px-8 max-[1100px]:px-6 max-[640px]:px-4">
            <SectionHeader
              label="Why Zeeframes"
              title="Why Choose Zeeframes as Your UI/UX Design Agency"
              description="Hundreds of agencies can design a screen. Here's what makes us a different kind of design partner:"
              theme="dark"
              className="mb-10 max-[640px]:mb-8"
            />
          </div>

          {/* ── 3×2 Grid ── */}
          <div className="px-8 max-[1100px]:px-6 max-[640px]:px-4">
            <div className="flex flex-col w-full">
              {/* Row 1 */}
              <div className="flex w-full max-[640px]:flex-col">
                {WHY_CELLS.slice(0, 3).map((cell) => (
                  <div
                    key={cell.title}
                    className={`
                      zf-why-cell relative flex flex-col gap-16 h-[272px] items-start overflow-hidden p-6 flex-1
                      border-solid ${cell.borderClass} ${cell.roundedClass}
                      max-[1100px]:h-[240px] max-[1100px]:gap-10
                      max-[640px]:h-auto max-[640px]:gap-8 max-[640px]:p-5 max-[640px]:min-h-[180px]
                      max-[640px]:border-l-[0.6px] max-[640px]:border-r-[0.6px]
                    `}
                  >
                    <div className="zf-why-icon w-10 h-10 flex items-center justify-center overflow-hidden shrink-0 transition-transform duration-300">
                      <img
                        src={cell.icon}
                        alt=""
                        className="w-[30px] h-[30px] object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                      <p className="font-['Inter_Tight'] font-semibold text-white text-[18px] leading-7 m-0">
                        {cell.title}
                      </p>
                      <p className="font-['Inter'] font-normal text-[#d4d4d8] text-[14px] leading-5 m-0">
                        {cell.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex w-full max-[640px]:flex-col">
                {WHY_CELLS.slice(3, 6).map((cell) => (
                  <div
                    key={cell.title}
                    className={`
                      zf-why-cell relative flex flex-col gap-16 h-[272px] items-start overflow-hidden p-6 flex-1
                      border-solid ${cell.borderClass} ${cell.roundedClass}
                      max-[1100px]:h-[240px] max-[1100px]:gap-10
                      max-[640px]:h-auto max-[640px]:gap-8 max-[640px]:p-5 max-[640px]:min-h-[180px]
                      max-[640px]:border-l-[0.6px] max-[640px]:border-r-[0.6px]
                    `}
                  >
                    <div className="zf-why-icon w-10 h-10 flex items-center justify-center overflow-hidden shrink-0 transition-transform duration-300">
                      <img
                        src={cell.icon}
                        alt=""
                        className="w-[30px] h-[30px] object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                      <p className="font-['Inter_Tight'] font-semibold text-white text-[18px] leading-7 m-0">
                        {cell.title}
                      </p>
                      <p className="font-['Inter'] font-normal text-[#d4d4d8] text-[14px] leading-5 m-0">
                        {cell.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Yellow CTA banner ── */}
        <div className="relative overflow-hidden w-full rounded-[14px] bg-[#f3fe00] py-[60px] px-16 flex items-center justify-between gap-10 max-[1100px]:flex-col max-[1100px]:py-12 max-[1100px]:px-8 max-[1100px]:text-center max-[640px]:py-10 max-[640px]:px-6">
          {/* Glow circles */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-20px] top-[-85px] w-[290px] h-[290px] rounded-full bg-white/15"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-[-49px] bottom-[-85px] w-[290px] h-[290px] rounded-full bg-white/10"
          />

          {/* Text block */}
          <div className="relative z-10 flex flex-col gap-8 max-[1100px]:items-center">
            <div className="flex flex-col gap-3">
              <h2 className="font-['Inter_Tight'] font-semibold text-[#27272a] text-[48px] leading-[60px] tracking-[-0.96px] m-0 max-[1100px]:text-[32px] max-[1100px]:leading-[40px] max-[640px]:text-[26px] max-[640px]:leading-[34px]">
                See how we've helped others win
              </h2>
              <p className="font-['Inter_Tight'] font-normal text-[#27272a] text-[18px] leading-7 max-w-[779px] m-0 max-[640px]:text-[15px] max-[640px]:leading-6">
                Browse our portfolio of successfully shipped products across
                SaaS, mobile, and enterprise platforms crafted with a focus on
                usability, innovation, and business growth.
              </p>
            </div>

            <button className="group flex w-fit items-center gap-2 rounded-[99999px] border border-transparent bg-black px-4 py-2 transition-colors duration-200 hover:border-black hover:bg-[#f3fe00] cursor-pointer">
              <span className="font-['Inter'] font-medium text-white text-[16px] leading-6 whitespace-nowrap group-hover:text-black">
                View Our Work
              </span>
              <img
                src={imgArrowUpRight}
                alt=""
                className="w-4 h-4 group-hover:invert"
              />
            </button>
          </div>

          {/* Glass knot */}
          <div className="relative z-10 w-[246px] h-[226px] shrink-0 overflow-hidden ">
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
