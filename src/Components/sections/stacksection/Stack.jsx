import { useState, useRef } from "react";
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
    imgClass: "h-[52px] w-[36px] object-contain",
    cellClass: "bg-[#F8F7EE] border-[0.6px] border-solid border-[#F1EFE6]",
  },
  {
    name: "FigJam",
    img: figjamImg,
    imgClass: "h-[52px] w-[52px] object-cover",
    cellClass:
      "bg-[#F4F2E8] border-t-[0.6px] border-b-[0.6px] border-r-[0.6px] border-solid border-[#F1EFE6]",
  },
  {
    name: "Framer",
    img: framerImg,
    imgClass: "h-[52px] w-[36px] object-contain",
    cellClass:
      "bg-[#F8F7EE] border-t-[0.6px] border-b-[0.6px] border-r-[0.6px] border-solid border-[#F1EFE6]",
  },
  {
    name: "Penpot",
    img: penpotImg,
    imgClass: "h-[52px] w-[40px] object-contain",
    cellClass:
      "bg-[#F4F2E8] border-t-[0.6px] border-b-[0.6px] border-r-[0.6px] border-solid border-[#F1EFE6]",
  },
  {
    name: "Sketch",
    img: sketchImg,
    imgClass: "h-[50px] w-[50px] object-cover",
    cellClass:
      "bg-[#F4F2E8] border-b-[0.6px] border-l-[0.6px] border-r-[0.6px] border-solid border-[#F1EFE6]",
  },
  {
    name: "Axure RP",
    img: axureImg,
    imgClass: "h-[52px] w-[52px] object-contain",
    cellClass:
      "bg-[#F8F7EE] border-b-[0.6px] border-r-[0.6px] border-solid border-[#F1EFE6]",
  },
  {
    name: "ProtoPie",
    img: protopieImg,
    imgClass: "h-[52px] w-[52px] object-contain",
    cellClass:
      "bg-[#F4F2E8] border-b-[0.6px] border-r-[0.6px] border-solid border-[#F1EFE6]",
  },
  {
    name: "Adobe Xd",
    img: adobexdImg,
    imgClass: "h-[50px] w-[50px] object-cover",
    cellClass:
      "bg-[#F8F7EE] border-b-[0.6px] border-r-[0.6px] border-solid border-[#F1EFE6]",
  },
];

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor((i * 7 + 3) % arr.length);
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

const ToolsStack = ({ id }) => {
  const [active, setActive] = useState("UI/UX Design");
  const [dropOpen, setDropOpen] = useState(false);
  const tools = TOOLS[active] ?? [];
  const row1 = tools.slice(0, 4);
  const row2 = tools.slice(4, 8);

  const handleSelect = (tab) => {
    setActive(tab);
    setDropOpen(false);
  };

  return (
    <section
      id={id}
      className="w-full overflow-x-hidden bg-[#0B0B0B] py-[60px] max-[1100px]:py-12 max-[640px]:py-10"
    >
      <div className="container">
        <div className="flex w-full flex-col gap-12 max-[640px]:gap-8">
          {/* Header */}
          <div className="flex w-full items-center gap-12 max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-6">
            <div className="flex min-w-0 max-w-[600px] flex-1 flex-col gap-4 max-[1100px]:max-w-full">
              <p className="m-0 text-[14px] font-normal leading-5 text-[#F3FE00]">
                Stack
              </p>
              <h2 className="m-0 font-['Inter_Tight',sans-serif] text-[36px] font-semibold leading-[44px] tracking-[-0.72px] text-white max-[640px]:text-[28px] max-[640px]:leading-9">
                Tools We Use for
                <br />
                UI/UX Design
              </h2>
            </div>
            <p className="m-0 min-w-0 flex-1 text-[16px] font-medium leading-6 text-[#D4D4D8] max-[1100px]:max-w-full max-[640px]:text-[15px]">
              Our design stack blends industry-standard tools with modern AI
              platforms, giving your team senior craft at startup speed.
            </p>
          </div>

          {/* Body */}
          <div className="flex w-full items-start gap-6 max-[1024px]:flex-col">
            {/* Desktop Sidebar */}
            <aside className="hidden w-[246px] shrink-0 self-stretch rounded-[14px] bg-[#18181B] p-3 min-[1025px]:flex items-start">
              <div className="flex flex-1 flex-col items-center">
                <div className="flex w-[210px] flex-col gap-2">
                  {TABS.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActive(tab)}
                      className={[
                        "relative flex w-[210px] shrink-0 items-center rounded-[6px] px-4 py-3 text-left transition-colors duration-150",
                        active === tab
                          ? "bg-[rgba(243,254,0,0.12)]"
                          : "hover:bg-white/5",
                      ].join(" ")}
                    >
                      {active === tab && (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute left-0 top-1/2 h-[21px] w-[3px] -translate-y-1/2 rounded-[1px] bg-[#F3FE00]"
                        />
                      )}
                      <span
                        className={[
                          "whitespace-nowrap text-[14px] font-medium leading-5",
                          active === tab ? "text-[#F3FE00]" : "text-[#D4D4D8]",
                        ].join(" ")}
                      >
                        {tab}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Mobile/Tablet */}
            <div className="flex min-w-0 flex-1 flex-col gap-4 min-[1025px]:hidden w-full">
              {/* Dropdown trigger */}
              <div className="relative w-full">
                <button
                  type="button"
                  onClick={() => setDropOpen((p) => !p)}
                  className="w-full flex items-center justify-between px-4 py-[10px] rounded-[6px] border border-[#2a2a2a] bg-[#141414] cursor-pointer"
                >
                  <span className="font-['Inter'] text-sm font-medium text-[#d4d4d8]">
                    {active}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    className={`shrink-0 transition-transform duration-300 ${
                      dropOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      d="M21 10.5C21 10.5 15.8445 17.5 14 17.5C12.1555 17.5 7 10.5 7 10.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Dropdown list */}
                {dropOpen && (
                  <div className="absolute top-[calc(100%+4px)] left-0 right-0 z-50 rounded-[6px] border border-[#2a2a2a] bg-[#141414] overflow-hidden flex flex-col">
                    {TABS.map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => handleSelect(tab)}
                        className={[
                          "w-full text-left px-4 py-[10px] font-['Inter'] text-sm font-medium border-none cursor-pointer transition-colors duration-150",
                          "border-b border-[#2a2a2a] last:border-b-0",
                          active === tab
                            ? "bg-[#1e1c00] text-[#c1c300]"
                            : "text-[#71717a] hover:text-[#d4d4d8] hover:bg-white/[0.04]",
                        ].join(" ")}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Tool grid */}
              <div className="w-full overflow-hidden rounded-[14px]">
                <div className="grid w-full grid-cols-2">
                  {row1.map((tool) => (
                    <div
                      key={tool.name + "-r1"}
                      className={[
                        "flex flex-col items-center justify-center gap-4 h-[160px] px-4 py-6",
                        tool.cellClass,
                      ].join(" ")}
                    >
                      <img
                        src={tool.img}
                        alt={tool.name}
                        className={tool.imgClass}
                        loading="lazy"
                      />
                      <p className="m-0 text-center text-[13px] font-normal leading-normal text-[#27272A]">
                        {tool.name}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid w-full grid-cols-2">
                  {row2.map((tool) => (
                    <div
                      key={tool.name + "-r2"}
                      className={[
                        "flex flex-col items-center justify-center gap-4 h-[160px] px-4 py-6",
                        tool.cellClass,
                      ].join(" ")}
                    >
                      <img
                        src={tool.img}
                        alt={tool.name}
                        className={tool.imgClass}
                        loading="lazy"
                      />
                      <p className="m-0 text-center text-[13px] font-normal leading-normal text-[#27272A]">
                        {tool.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop tool grid */}
            <div className="hidden min-[1025px]:block min-w-0 flex-1 overflow-hidden rounded-[14px]">
              <div className="grid w-full grid-cols-4">
                {row1.map((tool) => (
                  <div
                    key={tool.name + "-r1"}
                    className={[
                      "flex flex-col items-center justify-center gap-6 h-[194px] px-6 py-12",
                      tool.cellClass,
                    ].join(" ")}
                  >
                    <img
                      src={tool.img}
                      alt={tool.name}
                      className={tool.imgClass}
                      loading="lazy"
                    />
                    <p className="m-0 text-center text-[14px] font-normal leading-normal text-[#27272A]">
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid w-full grid-cols-4">
                {row2.map((tool) => (
                  <div
                    key={tool.name + "-r2"}
                    className={[
                      "flex flex-col items-center justify-center gap-6 h-[194px] px-6 py-12",
                      tool.cellClass,
                    ].join(" ")}
                  >
                    <img
                      src={tool.img}
                      alt={tool.name}
                      className={tool.imgClass}
                      loading="lazy"
                    />
                    <p className="m-0 text-center text-[14px] font-normal leading-normal text-[#27272A]">
                      {tool.name}
                    </p>
                  </div>
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
