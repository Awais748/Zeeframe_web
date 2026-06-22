import { useState } from "react";
import figmaImg from "../../../assets/images/stack/figma.png";
import figjamImg from "../../../assets/images/stack/figjam.png";
import framerImg from "../../../assets/images/stack/framer.png";
import penpotImg from "../../../assets/images/stack/penpot.png";
import sketchImg from "../../../assets/images/stack/sketch.png";
import axureImg from "../../../assets/images/stack/axure.png";
import protopieImg from "../../../assets/images/stack/protopie.png";
import adobexdImg from "../../../assets/images/stack/adobexd.png";

const TABS = [
  "UI/UX Design",
  "AI & Creative Intelligence",
  "Low Code",
  "Usability Testing",
  "Graphic & Motion",
  "Collaboration",
  "Documentation",
];

const UXUI_TOOLS = [
  {
    name: "Figma",
    img: figmaImg,
    imgClass: "h-[72px] w-[48px] object-contain",
    cellClass: "bg-[#F8F7EE] border-[0.6px] border-solid border-[#F1EFE6]",
  },
  {
    name: "FigJam",
    img: figjamImg,
    imgClass: "h-[72px] w-[72px] object-cover",
    cellClass:
      "bg-[#F4F2E8] border-[0.6px] border-solid border-[#F1EFE6] border-l-0",
  },
  {
    name: "Framer",
    img: framerImg,
    imgClass: "h-[72px] w-[48px] object-contain",
    cellClass: "bg-[#F8F7EE] border-r-[0.6px] border-solid border-[#F1EFE6]",
  },
  {
    name: "Penpot",
    img: penpotImg,
    imgClass: "h-[72px] w-[54px] object-contain",
    cellClass:
      "bg-[#F4F2E8] border-[0.6px] border-solid border-[#F1EFE6] border-l-0",
  },
  {
    name: "Sketch",
    img: sketchImg,
    imgClass: "h-[70px] w-[70px] object-cover",
    cellClass:
      "bg-[#F4F2E8] border-[0.6px] border-solid border-[#F1EFE6] border-t-0",
  },
  {
    name: "Axure RP",
    img: axureImg,
    imgClass: "h-[72px] w-[72px] object-contain",
    cellClass:
      "bg-[#F8F7EE] border-b-[0.6px] border-r-[0.6px] border-solid border-[#F1EFE6]",
  },
  {
    name: "ProtoPie",
    img: protopieImg,
    imgClass: "h-[72px] w-[72px] object-contain",
    cellClass:
      "bg-[#F4F2E8] border-b-[0.6px] border-r-[0.6px] border-solid border-[#F1EFE6]",
  },
  {
    name: "Adobe Xd",
    img: adobexdImg,
    imgClass: "h-[70px] w-[70px] object-cover",
    cellClass:
      "bg-[#F8F7EE] border-b-[0.6px] border-r-[0.6px] border-solid border-[#F1EFE6]",
  },
];
const shuffleArray = (array) => {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor((i * 7 + 3) % arr.length); // deterministic shuffle
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

const TOOLS = {
  "UI/UX Design": UXUI_TOOLS,
  "AI & Creative Intelligence": shuffleArray(UXUI_TOOLS),
  "Low Code": shuffleArray(shuffleArray(UXUI_TOOLS)),
  "Usability Testing": shuffleArray(shuffleArray(shuffleArray(UXUI_TOOLS))),
  "Graphic & Motion": shuffleArray([...UXUI_TOOLS].reverse()),
  Collaboration: shuffleArray([...UXUI_TOOLS].sort(() => 0.5 - Math.random())),
  Documentation: [...UXUI_TOOLS].reverse(),
};
function SidebarTab({ label, isActive, onClick }) {
  if (isActive) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="relative box-border flex w-[210px] shrink-0 items-center rounded-[6px] bg-[rgba(243,254,0,0.12)] px-[16px] py-[12px] text-left"
      >
        <span
          className="pointer-events-none absolute left-0 top-1/2 h-[21px] w-[3px] -translate-y-1/2 rounded-[1px] bg-[#F3FE00]"
          aria-hidden
        />
        <span className="whitespace-nowrap text-[14px] font-medium leading-[20px] text-[#F3FE00]">
          {label}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="box-border flex w-[210px] shrink-0 items-center rounded-[6px] px-[16px] py-[12px] text-left"
    >
      <span className="whitespace-nowrap text-[14px] font-medium leading-[20px] text-[#D4D4D8]">
        {label}
      </span>
    </button>
  );
}

function ToolCell({ tool }) {
  return (
    <div
      className={[
        "box-border flex h-[194.667px] min-w-0 flex-col items-center justify-center gap-[24px]",
        "px-[24px] py-[48px]",
        tool.cellClass,
      ].join(" ")}
    >
      <img
        src={tool.img}
        alt={tool.name}
        className={tool.imgClass}
        loading="lazy"
      />
      <p className="text-center text-[14px] font-normal leading-normal text-[#27272A]">
        {tool.name}
      </p>
    </div>
  );
}

const ToolsStack = ({ id }) => {
  const [active, setActive] = useState("UI/UX Design");
  const tools = TOOLS[active] ?? [];
  const row1 = tools.slice(0, 4);
  const row2 = tools.slice(4, 8);

  return (
    <section
      id={id}
      className="box-border w-full overflow-x-hidden bg-[#0B0B0B] py-[60px] max-[1100px]:py-[48px]"
    >
      <div className="container">
        <div className="box-border flex w-full min-w-0 flex-col gap-[48px]">
          {/* Header */}
          <div className="flex w-full min-w-0 items-center gap-[48px]">
            <div className="flex min-w-0 max-w-[600px] grow basis-0 flex-col gap-[16px]">
              <p className="text-[14px] font-normal leading-[20px] text-[#F3FE00]">
                Stack
              </p>
              <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-semibold leading-[44px] tracking-[-0.72px] text-white">
                Tools We Use for
                <br />
                UI/UX Design
              </h2>
            </div>
            <p className="min-w-0 max-w-[649px] grow basis-0 text-[16px] font-medium leading-[24px] text-[#D4D4D8]">
              Our design stack blends industry-standard tools with modern AI
              platforms, giving your team senior craft at startup speed.
            </p>
          </div>

          {/* Body */}
          <div className="flex w-full min-w-0 items-start gap-[24px]">
            {/* Sidebar — Figma 60212:13718 */}
            <aside className="box-border flex w-[246px] shrink-0 items-start self-stretch rounded-[14px] bg-[#18181B] p-[12px]">
              <div className="flex min-w-0 flex-1 flex-col items-center rounded-[6px]">
                <div className="flex w-[210px] flex-col items-start gap-[8px]">
                  {TABS.map((tab) => (
                    <SidebarTab
                      key={tab}
                      label={tab}
                      isActive={active === tab}
                      onClick={() => setActive(tab)}
                    />
                  ))}
                </div>
              </div>
            </aside>

            {/* Tool grid */}
            <div className="min-w-0 flex-1 overflow-hidden rounded-[14px]">
              <div className="grid w-full grid-cols-4">
                {row1.map((tool) => (
                  <ToolCell key={tool.name} tool={tool} />
                ))}
              </div>
              <div className="grid w-full grid-cols-4">
                {row2.map((tool) => (
                  <ToolCell key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsStack;
