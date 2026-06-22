import React, { useState } from "react";
import iconChat from "../../../assets/deliverables-figma/icon-chat.svg";
import widgetLines from "../../../assets/deliverables-figma/widget-lines.svg";
import { IconCard02, IconCard03, IconCard04, IconCard05 } from "./DeliverablesIcons";
import headerGlow from "../../../assets/deliverables-figma/header-glow.svg";
import { cardAnimations } from "./DeliverablesAnimations";

const TABS = ["Discover", "Design", "Validate", "Ship"];

const SMALL_CARDS = [
  {
    num: "02",
    title: "Heuristic Evaluation",
    desc: "Expert review against usability principles.",
    Icon: IconCard02,
    hideTitleOnHover: true,
    borders: "border-t border-b border-l border-[#373737]",
    radius: "",
  },
  {
    num: "03",
    title: "Competitive Analysis",
    desc: "Benchmark mapping gaps & opportunities.",
    Icon: IconCard03,
    borders: "border border-[#373737]",
    radius: "rounded-tr-[14px]",
  },
  {
    num: "04",
    title: "User Journey Mapping",
    desc: "Touchpoints, emotions and friction.",
    Icon: IconCard04,
    borders: "border-b border-l border-[#373737]",
    radius: "",
  },
  {
    num: "05",
    title: "Affinity Clustering",
    desc: "Insights grouped into themes.",
    Icon: IconCard05,
    borders: "border-r border-b border-[#373737]",
    radius: "rounded-br-[14px]",
    animSpacing: "mb-4",
  },
];

function SmallCard({ card, AnimComponent }) {
  return (
    <div
      className={`zf-del-card group relative flex flex-col p-6 cursor-pointer overflow-hidden min-h-[226px] min-w-0 ${card.borders} ${card.radius}`}
    >
      <div className="flex justify-between items-center relative z-10">
        <div className="zf-del-icon w-10 h-10 shrink-0 flex items-center justify-center">
          <card.Icon />
        </div>
        <span className="text-[12px] leading-[18px] text-[#71717A] font-normal">
          {card.num}
        </span>
      </div>

      <div
        className={`relative h-[72px] shrink-0 overflow-hidden ${
          card.animSpacing || ""
        }`}
        aria-hidden="true"
      >
        <AnimComponent />
      </div>

      <div
        className={`relative z-10 flex flex-col gap-1.5 transition-opacity duration-300 ${
          card.hideTitleOnHover ? "group-hover:opacity-0" : ""
        }`}
      >
        <h4
          className="text-white text-[18px] font-semibold leading-7 m-0"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          {card.title}
        </h4>
        <p className="text-[#A1A1AA] text-[14px] leading-5 m-0">{card.desc}</p>
      </div>
    </div>
  );
}

export default function Deliverables({ id }) {
  const [activeTab, setActiveTab] = useState("Discover");

  return (
    <section id={id} className="bg-[#0B0B0B] w-full overflow-x-clip py-[60px] font-sans">
      <style>{`
        .zf-del-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%), #0B0B0B;
          transition: background 0.4s ease;
        }
        .zf-del-card:hover {
          background:
            radial-gradient(circle at 25% 15%, rgba(243,254,0,0.1) 0%, transparent 55%),
            linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%),
            #101010;
        }
        .zf-del-icon {
          border-radius: 10px;
          color: white;
          border: 1px solid #373737;
          background-color: rgba(255, 255, 255, 0.05);
          transition: box-shadow 0.35s ease, color 0.35s ease, background-color 0.35s ease, border-color 0.35s ease;
        }
        .zf-del-card:hover .zf-del-icon {
          color: #F3FE00;
          box-shadow: 0 0 20px rgba(243, 254, 0, 0.22);
          border-color: rgba(243, 254, 0, 0.3);
          background-color: rgba(243, 254, 0, 0.1);
        }
        .zf-del-featured {
          background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%), #0B0B0B;
          transition: background 0.4s ease;
        }
        .zf-del-featured:hover {
          background:
            radial-gradient(circle at 80% 0%, rgba(243,254,0,0.2) 0%, rgba(0,0,0,0) 56%),
            linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%),
            #0B0B0B;
        }
        .zf-del-widget {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .zf-del-featured:hover .zf-del-widget {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .zf-del-widget-glow {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .zf-del-featured:hover .zf-del-widget-glow {
          opacity: 0.5;
        }
        .zf-del-lines {
          filter: none;
          transition: filter 0.4s ease;
        }
        .zf-del-featured:hover .zf-del-lines {
          filter: drop-shadow(0 0 10px rgba(193, 195, 0, 0.55));
        }
        .zf-del-tab-active {
          background: #282601;
          color: #C1C300;
        }
        .zf-del-tab-inactive {
          color: #71717A;
        }
        .zf-del-tab-inactive:hover {
          color: #D4D4D8;
        }
      `}</style>

      <div className="container flex flex-col gap-12 min-w-0">
        <div className="flex gap-[60px] items-center justify-between min-w-0">
          <div className="flex flex-col gap-4 relative min-w-0 flex-1">
            <p className="text-[#F3FE00] text-[14px] font-normal leading-5 m-0">
              Deliverables
            </p>
            <h2
              className="text-[36px] font-semibold leading-[44px] tracking-[-0.72px] text-white m-0"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              UI/UX&nbsp; Design Deliverables
            </h2>
            <img
              src={headerGlow}
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none opacity-60"
              style={{
                width: 214,
                height: 235,
                left: 415,
                top: -45,
                filter: "blur(80px)",
              }}
            />
          </div>
          <p className="text-[16px] font-medium text-[#D4D4D8] leading-6 m-0 max-w-[564px] flex-1 min-w-0">
            Every engagement ships with production-ready outputs your team can
            use immediately:
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-2">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 h-11 rounded-[6px] text-[14px] font-medium leading-5 transition-colors duration-200 cursor-pointer border-0 whitespace-nowrap font-sans ${
                    isActive ? "zf-del-tab-active" : "zf-del-tab-inactive"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-[minmax(0,698fr)_minmax(0,606fr)] pt-6 w-full min-w-0">
            <div className="zf-del-featured group relative w-full min-w-0 min-h-[452px] p-6 flex flex-col justify-between overflow-hidden cursor-pointer border-t border-l border-b border-[#373737] rounded-tl-[14px] rounded-bl-[14px]">
              <div className="flex flex-col gap-3 relative z-10">
                <h3
                  className="text-[#F4F4EE] text-[48px] font-bold tracking-[-0.96px] leading-[60px] m-0"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Stakeholder Interviews
                </h3>
                <p className="text-[#A1A1AA] text-[16px] leading-6 max-w-[469px] m-0">
                  Structured conversations extracting goals, constraints &amp;
                  success metrics.
                </p>
              </div>

              <div className="relative z-10 min-h-[149px] flex items-end">
                <div className="zf-del-widget relative w-full">
                  <div
                    className="relative rounded-2xl border border-[rgba(193,195,0,0.18)] px-[23px] py-px min-h-[149px] overflow-hidden"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 120%, rgba(152,148,1,0.4) 0%, rgba(11,11,11,0.25) 60%)",
                    }}
                  >
                    <div
                      className="zf-del-widget-glow absolute w-full max-w-[650px] pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 50%, rgba(243,254,0,0.34) 0%, rgba(243,254,0,0.1) 46%, rgba(0,0,0,0) 72%)",
                        filter: "blur(52px)",
                        top: -40,
                        left: 0,
                        height: 80,
                      }}
                    />

                    <div
                      className="absolute right-6 top-[38px] w-[74px] h-[74px] rounded-full flex items-center justify-center"
                      style={{
                        background:
                          "radial-gradient(circle at 35% 30%, #f7ff8c 0%, #989401 60%, #7a7409 100%)",
                        boxShadow:
                          "0 0 40px rgba(243,254,0,0.8), inset 0 0 18px rgba(255,255,255,0.35)",
                      }}
                    >
                      <img
                        src={iconChat}
                        alt=""
                        className="w-[30px] h-[30px]"
                      />
                    </div>

                    <div className="absolute left-[27px] top-px w-[148px] py-6">
                      <img
                        src={widgetLines}
                        alt=""
                        className="w-[148px] h-auto zf-del-lines"
                      />
                    </div>

                    <div
                      className="absolute left-[337px] top-px h-full w-px opacity-70 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.07) 50%, transparent 100%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 w-full min-w-0 min-h-[452px]">
              {SMALL_CARDS.map((card, i) => (
                <SmallCard
                  key={card.num}
                  card={card}
                  AnimComponent={cardAnimations[i]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
