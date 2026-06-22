import React, { useEffect, useState, useRef } from "react";
import "./StickyTabs.css";

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

export default function StickyTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      let currentActive = activeTab;
      for (const tab of tabs) {
        const element = document.getElementById(tabIds[tab]);
        if (element) {
          const absoluteTop =
            element.getBoundingClientRect().top + window.scrollY;
          if (absoluteTop <= scrollPosition) {
            currentActive = tab;
          }
        }
      }
      if (currentActive !== activeTab) {
        setActiveTab(currentActive);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab, tabs]);

  const scrollToSection = (tab) => {
    const element = document.getElementById(tabIds[tab]);
    if (element) {
      const absoluteTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: absoluteTop - 140,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={containerRef} className="zf-sticky-tabs-container">
      <div className="container">
        <div className="zf-sticky-tabs-inner">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`zf-sticky-tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => scrollToSection(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}