import React from "react";
import { TABS, WHO_CARDS, GAP_ITEMS } from "../../../data/servicesData";
import gapImage from "../../../assets/images/whoweareimg.png";
import whoWeAreBackground from "../../../assets/images/whowearebackground.png";
import SectionHeader from "../../ui/SectionHeader";
import { Button } from "../../ui/Button";
import Icon from "../../ui/Icon";
import StickyTabs from "./Stickytabs";
import HowWeHelp from "../HowWeHelp/HowWeHelp";
import Process from "../Process/Process";
import Stack from "../stacksection/Stack";
import UseCases from "../UseCases/UseCases";
import Deliverables from "../Deliverables/Deliverables";
import WhyZeeframes from "../WhyZeeframes/WhyZeeframes";

export default function WhoWeHelp() {
  return (
    <div>
      <StickyTabs tabs={TABS} />

      <section
        id="who-we-help"
        className="w-full bg-[#0b0b0b] bg-cover bg-right-center bg-no-repeat relative  pt-15"
        style={{ backgroundImage: `url(${whoWeAreBackground})` }}
      >
        <div className="container py-15 max-[1100px]:py-12 max-[768px]:py-10">
          <SectionHeader
            label="Who We Help"
            title="Who Our UI UX Design Services Are For"
            titleStyle={{ maxWidth: 442 }}
            description="The latest industry news, interviews, technologies, and resources. The latest industry news, interviews, technologies, and resources."
          />

          {/* ── Who Cards Grid ── */}
          <div className="grid grid-cols-4 rounded-[14px] overflow-hidden mb-8 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
            {WHO_CARDS.map((card, i) => (
              <div
                key={card.title}
                className={`
                  bg-[#0b0b0b] p-6 min-h-78.5 flex flex-col justify-between
                  border-t border-b border-l border-[#373737]
                  relative overflow-hidden 
                  transition-all duration-300
                  hover:[background:radial-gradient(94%_121.34%_at_14.15%_0.48%,rgba(243,254,0,0.4)_0%,rgba(0,0,0,0)_56%),linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.01)_100%),#151515]
                  last:border-r [&:last-child]:border-[#373737]
                  max-[640px]:border-r max-[640px]:border-[#373737]
                 max-[640px]:min-h-65
                `}
                style={{
                  borderRadius:
                    i === 0
                      ? "14px 0 0 14px"
                      : i === WHO_CARDS.length - 1
                      ? "0 14px 14px 0"
                      : "0",
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden shrink-0 transition-transform duration-300 hover:scale-110">
                  <Icon name={card.icon} size={30} />
                </div>
                <div>
                  <p className="font-['Inter_Tight'] font-semibold text-lg leading-7 text-white m-0 mb-2">
                    {card.title}
                  </p>
                  <p className="text-sm leading-5 text-[#d4d4d8] m-0">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Gap Wrap ── */}
          <div
            id="the-gap"
            className="bg-white flex flex-row items-stretch rounded-[14px] px-8 py-15 gap-12 overflow-hidden max-[1100px]:flex-col max-[1100px]:gap-8 max-[1100px]:px-6 max-[1100px]:py-10 max-[640px]:flex-col max-[640px]:px-5 max-[640px]:py-8 max-[640px]:gap-6 max-[640px]:rounded-xl"
          >
            {/* Image */}
            <div className="w-127 h-86 rounded-lg overflow-hidden shrink-0 max-[1100px]:w-full max-[1100px]:h-55 max-[640px]:h-67.5">
              <img
                src={gapImage}
                alt="UI wireframes on a monitor"
                loading="lazy"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Right content */}
            <div className="flex-1 flex flex-col gap-2 justify-center">
              <h3 className="font-['Inter_Tight'] text-[#27272a] text-[30px] font-semibold leading-11 tracking-[-0.72px] m-0 max-[1100px]:text-[28px] max-[1100px]:leading-9 max-[768px]:text-[24px] max-[768px]:leading-8.5 max-[640px]:text-[22px] max-[640px]:leading-7.5 max-[640px]:tracking-[-0.4px]">
                Signs You Need a UI/UX Design Partner
              </h3>
              <p className="text-[15px] leading-6 text-[#52525b] m-0 max-[640px]:text-sm max-[640px]:leading-5.5">
                If any of these sound familiar, it&apos;s time to engage a UI UX
                design agency:
              </p>

              {/* List */}
              <div className="flex flex-col gap-2 py-3">
                {GAP_ITEMS.map((item) => (
                  <div key={item} className="flex gap-2 items-start">
                    <Icon
                      name="star-yellow"
                      size={12}
                      className="shrink-0 mt-0.75"
                    />
                    <span className="text-sm leading-5 text-[#52525b]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Button
                variant="black"
                icon="arrow-black"
                className="mt-2 w-fit px-5 py-2.5 hover:bg-transparent hover:text-black hover:border-black"
              >
                Request a Free UX Review
              </Button>
            </div>
          </div>
        </div>
      </section>
      <HowWeHelp id="how-we-help" />
      <Process id="our-process" />
      <Stack id="stack" />
      <UseCases id="use-cases" />
      <Deliverables id="deliverables" />
      <WhyZeeframes id="why-zeeframes" />
    </div>
  );
}
