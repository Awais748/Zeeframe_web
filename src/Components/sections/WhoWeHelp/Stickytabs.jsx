import React, { useEffect, useState, useRef } from "react";

const tabIds = {
  "Who We Help": "who-we-help",
  "The Gap": "the-gap",
  "How we help": "how-we-help",
  "Our process": "our-process",
  Stack: "stack",
  "Use Cases": "use-cases",
  Deliverables: "deliverables",
  "Why Zeeframes": "why-zeeframes",
};

// Navbar height (~73px) + StickyTabs bar height (~80-90px) combined,
// so section headings don't get hidden underneath the sticky bars.
const STICKY_OFFSET = 160;

export default function StickyTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + STICKY_OFFSET;
      let currentActive = activeTab;
      for (const tab of tabs) {
        const element = document.getElementById(tabIds[tab]);
        if (element) {
          const absoluteTop =
            element.getBoundingClientRect().top + window.scrollY;
          if (absoluteTop <= scrollPosition) currentActive = tab;
        }
      }
      if (currentActive !== activeTab) setActiveTab(currentActive);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab, tabs]);

  const scrollToSection = (tab) => {
    const element = document.getElementById(tabIds[tab]);
    if (element) {
      const absoluteTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: absoluteTop - STICKY_OFFSET, behavior: "smooth" });
    }
  };

  const handleMobileSelect = (tab) => {
    setActiveTab(tab);
    setMobileOpen(false);
    scrollToSection(tab);
  };

  return (
    <div
      ref={containerRef}
      className="sticky top-[73px] z-[90] w-full bg-[#0b0b0b] p-2"
    >
      {/* ── Desktop tabs ── */}
      <div className="hidden min-[1100px]:block">
        <div className="container">
          <div
            className="flex items-center gap-2 overflow-x-auto py-2"
            style={{ scrollbarWidth: "none" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`font-['Inter'] text-sm font-medium px-4 py-2 rounded-md whitespace-nowrap cursor-pointer border-none transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[#282601] text-[#c1c300]"
                    : "bg-transparent text-[#71717a] hover:text-[#d4d4d8]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile accordion ── */}
      <div className="min-[1100px]:hidden px-5 py-2 relative">
        {/* Trigger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="w-full flex items-center justify-between px-3 py-[10px] rounded-[6px] border border-[#373737] bg-[rgba(255,255,255,0.03)] cursor-pointer"
        >
          <span className="font-['Inter'] text-sm font-medium text-white">
            {activeTab}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className={`transition-transform duration-300 shrink-0 ${
              mobileOpen ? "rotate-180" : "rotate-0"
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

        {/* Dropdown card — absolute, same width as trigger */}
        {mobileOpen && (
          <div className="absolute top-[calc(100%-8px)] left-4 right-4 z-[100] rounded-[6px] border border-[#373737] bg-[#373737]  overflow-hidden flex flex-col">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleMobileSelect(tab)}
                className={`w-full text-left px-3 py-[10px] font-['Inter'] text-sm font-medium border-none cursor-pointer transition-colors duration-150 border-b border-[#373737] last:border-b-0 ${
                  activeTab === tab
                    ? "bg-[#282601] text-[#c1c300]"
                    : " text-[#71717a] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
