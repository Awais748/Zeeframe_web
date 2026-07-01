import { useState } from "react";
import ShowCaseCards from "../Home/Homecreativeshowcase";

const INDUSTRY_LIST = [
  "All Niches",
  "AI",
  "Enterprise",
  "Fin-Tech",
  "SaaS",
  "Crypto & Web3",
  "Automotive",
  "Ed-Tech",
  "Mar-Tech",
  "IT/Consulting",
  "Health Tech",
  "E-Commerce",
  "Construction Tech",
  "Legal Tech",
  "Freight & Logistics",
  "Social Media",
];

const ChooseIndustry = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRY_LIST[0]);

  const getTabClasses = (label) => {
    const base =
      "cursor-pointer  px-6 py-3 text-base leading-6 font-medium rounded-3xl transition-all duration-300 border";
    return selectedIndustry === label
      ? `${base} bg-[rgba(255,255,255,0.90)] text-[#0D0D0D] border-[#FFF]`
      : `${base} border-[rgba(60,60,60,0.72)] bg-[#111] text-[#FFF]`;
  };

  return (
    <section className="sm:py-20 py-8 bg-[#090909]">
      <div className="container">
        <h2 className="text-[#F2F2F2] text-sm font-medium font-['Inter'] mb-6">
          Choose your industry
        </h2>

        <div className="flex flex-wrap gap-4 mb-10">
          {INDUSTRY_LIST.map((label) => (
            <button
              key={label}
              onClick={() => setSelectedIndustry(label)}
              className={getTabClasses(label)}
            >
              {label}
            </button>
          ))}
        </div>

        <ShowCaseCards showHeader={false} activeCategory={selectedIndustry} />
      </div>
    </section>
  );
};

export default ChooseIndustry;
