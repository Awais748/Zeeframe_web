import cardicon1 from "../../../assets/icons/processcard1.svg";
import cardicon2 from "../../../assets/icons/processcard2.svg";
import cardicon3 from "../../../assets/icons/processcard3.svg";
import cardicon4 from "../../../assets/icons/processcardlist.svg";
import cardupperimg from "../../../assets/images/processcardimg.jpg";

import SectionHeader from "../../ui/SectionHeader";
import { Button } from "../../ui/Button";

const iconDiscovery = cardicon1;
const iconIA = cardicon2;
const iconDesign = cardicon3;
const iconStar = cardicon4;
const procCardBg = cardupperimg;

const PROCESS_CARDS = [
  {
    id: "discovery",
    icon: iconDiscovery,
    iconAlt: "Discovery phase icon",
    title: "Discovery & Research",
    bullets: [
      "Kickoff workshop and stakeholder alignment in FigJam.",
      "User research, competitive benchmarking, and analytics review.",
      "Clear design brief with goals, KPIs, and success metrics.",
    ],
  },
  {
    id: "ia",
    icon: iconIA,
    iconAlt: "Information architecture icon",
    title: "Information Architecture & Flows",
    bullets: [
      "User journey mapping and sitemap design.",
      "Task flows for critical user actions.",
      "Low-fidelity wireframes for structure review.",
    ],
  },
  {
    id: "design",
    icon: iconDesign,
    iconAlt: "Design and testing icon",
    title: "Design & Testing",
    bullets: [
      "High-fidelity UI design in Figma with Figma Make and Google Stitch for rapid exploration.",
      "Custom visual language, typography system, and color tokens.",
      "Motion and micro-interaction direction using Lottie and Spline.",
    ],
  },
];

export default function Process({ id }) {
  return (
    <section
      id={id}
      className="w-full bg-[#faf9f4] py-[60px] max-[1100px]:py-12 max-[640px]:py-8"
    >
      <div className="container">
        <SectionHeader
          label="Process"
          title={
            <>
              <span className="hidden min-[1024px]:inline">
                Our UI/UX&nbsp; Design Process
              </span>
              <span className="min-[1024px]:hidden">
                Our UI UX Design Process
              </span>
            </>
          }
          description="Every UI UX design engagement follows a clear five-phase sprint. Timelines typically run 4 to 12 weeks based on product complexity."
          theme="light"
          labelColor="#27272a"
        />

        {/* ── Cards row ── */}
        <div className="flex rounded-[14px] overflow-hidden border border-[#cdcdcd] max-[1024px]:grid max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
          {/* ── 3 process cards ── */}
          {PROCESS_CARDS.map((card) => (
            <article
              key={card.id}
              aria-label={card.title}
              className="
                group bg-white flex flex-col justify-between
                p-6 min-h-[399px] flex-1 min-w-0
                border-r border-[#cdcdcd]
                transition-colors duration-300 hover:bg-[#e7e5e4] cursor-pointer
                max-[1024px]:border-b max-[1024px]:last:border-r-0
                max-[640px]:min-h-0 max-[640px]:gap-8 max-[640px]:justify-start max-[640px]:border-r-0
              "
            >
              {/* Icon — top */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0 overflow-hidden transition-transform duration-300">
                <img
                  src={card.icon}
                  alt={card.iconAlt}
                  className="w-[30px] h-[30px] object-contain block"
                />
              </div>

              {/* Title + bullets — bottom */}
              <div className="flex flex-col gap-6">
                <p className="font-['Inter_Tight'] font-semibold text-lg leading-7 text-[#27272a] m-0">
                  {card.title}
                </p>
                <div className="flex flex-col gap-2">
                  {card.bullets.map((text) => (
                    <div key={text} className="flex gap-2 items-start">
                      <div className="pt-[5px] shrink-0">
                        <img
                          src={iconStar}
                          alt=""
                          aria-hidden="true"
                          className="w-3 h-3 block"
                        />
                      </div>
                      <span className="font-['Inter'] text-sm font-normal leading-5 text-[#52525b]">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {/* ── CTA card — fixed width so process cards don't over-stretch ── */}
          <article
            aria-label="Start your project"
            className="
              w-[300px] shrink-0 flex flex-col overflow-hidden rounded-r-[14px]
              min-h-[399px]
              max-[1024px]:w-auto max-[1024px]:col-span-2
              max-[640px]:col-span-1 max-[640px]:rounded-none max-[640px]:rounded-b-[14px]
            "
          >
            {/* BG image — fills remaining space */}
            <div className="flex-1 relative overflow-hidden min-h-[200px]">
              <img
                src={procCardBg}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover block"
              />
            </div>

            {/* Dark bottom panel */}
            <div className="bg-[#09090b] p-5 flex flex-col gap-6 shrink-0">
              <div className="flex flex-col gap-[10px]">
                <p className="font-['Inter_Tight'] font-semibold text-[20px] leading-[28px] text-white m-0">
                  Want this process for your product?
                </p>
                <p className="font-['Inter_Tight'] text-sm font-normal leading-[21px] text-[#e4e4e7] m-0">
                  Tell us about your project and get a tailored design roadmap
                  within 24 hours.
                </p>
              </div>
              <Button
                variant="white"
                href="/contact"
                className="w-fit px-5 py-2.5 text-base font-medium !bg-white !text-black !border-white hover:!bg-black hover:!border-[#f3fe00] hover:!text-[#f3fe00]"
              >
                Start Your Project
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
