import { useState } from "react";
import { Button } from "../../Components/ui/Button";
import stars from "../../assets/images/clutchreview.svg";
import SectionHeader from "../../Components/ui/HomeHeader";
import { Link } from "react-router-dom";
import { FAQS } from "../../data/Homefaqs";

const FaqsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-black py-20 sm:block hidden">
      <div className="container">
        <div className="grid grid-cols-[minmax(100px,397px)_minmax(100px,1fr)] gap-12">
          {/* Left */}
          <div>
            <SectionHeader
              align="start"
              titleclassName="pt-4"
              eyebrow="FAQs"
              title="Got Question?"
              description="We begin with meaningful conversations that drive design decisions."
            />
            <div className="flex items-center gap-8 pt-8">
              <Button
                href="https://calendly.com/contact-zeeframes/30min?month=2026-01"
                target="_blank"
                className="w-47 h-12 bg-[#F3FE00] border border-transparent text-black transition-all duration-300 hover:bg-transparent hover:border-[#F3FE00] hover:text-[#F3FE00]"
              >
                <span className="group-hover:hidden flex items-center gap-3 justify-center">
                  Book a free call
                </span>
                <span className="hidden group-hover:block">Lets talk</span>
              </Button>
              <Link to="#">
                <img
                  src={stars}
                  alt="stars"
                  className="h-12 w-41"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>

          {/* Right — FAQ list */}
          <div className="flex flex-col gap-4">
            {FAQS.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-colors duration-300 ${
                    isActive
                      ? "border-[#F3FE00] bg-[rgba(243,254,0,0.04)]"
                      : "border-[#1F1F1F] bg-[#0D0D0D]"
                  }`}
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <h3 className="text-base font-['Geologica'] font-medium text-white pr-4">
                      {item.question}
                    </h3>

                    {/* Plus / Minus animated icon */}
                    <span
                      className={`flex items-center justify-center rounded-md p-1 shrink-0 transition-colors duration-300 ${
                        isActive
                          ? "bg-[#F3FE00] text-black"
                          : "bg-[#2B2A2A] text-[#6D6D6D]"
                      }`}
                    >
                      {/* Rotating cross → minus trick with pure CSS */}
                      <span className="relative w-4 h-4 flex items-center justify-center">
                        {/* Horizontal bar — always visible */}
                        <span className="absolute w-3 h-[1.5px] bg-current rounded-full transition-all duration-300" />
                        {/* Vertical bar — rotates to 0 (hidden) when active */}
                        <span
                          className={`absolute w-[1.5px] h-3 bg-current rounded-full transition-all duration-300 ${
                            isActive
                              ? "rotate-90 opacity-0"
                              : "rotate-0 opacity-100"
                          }`}
                        />
                      </span>
                    </span>
                  </button>

                  {/* Answer — smooth height animation */}
                  <div
                    className={`grid transition-all duration-400 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-5">
                      <p className="text-base text-[#D5D5D5] leading-6 pb-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
