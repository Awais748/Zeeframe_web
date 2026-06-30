import React from "react";
import { InsightSearch, Star } from "../../assets/icons/icon";
import ResearchSection from "./ResearchSection";
import CardSwipper from "./CardSlide";
import TrendingArticles from "./Trendingarticles";
import ContactFormSection from "../Home/Homecontactsection";

const Insight = () => {
  return (
    <>
      <section className="py-20 bg-[#0D0D0D]">
        <div className="container">
          <div className="flex relative items-center flex-col gap-3 justify-between">
            <h1 className=" text-white sm:text-7xl text-4xl sm:max-w-230 max-w-full text-center font-extrabold sm:leading-24 leading-12.5 items-center font-['Geologica'] uppercase">
              Stay Updated With Our insights
            </h1>
            <p className="text-white text-lg/6.75 max-w-135 text-center font-['Inter']">
              Read our thoughts and insights on UI UX design
            </p>
          </div>
          <div className="absolute sm:top-[51%] top-[30%] sm:right-[1070px] right-[320px] ">
            <Star />
          </div>

          <div className="mt-8 relative flex justify-center items-center mx-auto">
            <input
              type="search"
              placeholder="Search Any Insight"
              className="bg-[rgba(255,255,255,0.10)] border w-91 ps-6 pe-13 outline-0 h-12 border-[#2D2D2D] rounded-full text-[#FFF] text-base font-['Inter'] leading-[normal]"
            />
            <button className="px-0.5 w-9 h-9 flex items-center justify-center absolute right-[calc(50%-176px)] rounded-full shrink-0 bg-[rgba(255,255,255,0.10)]">
              <InsightSearch />
            </button>
          </div>
        </div>
      </section>
      <ResearchSection />
      <CardSwipper />
      <TrendingArticles />
      <ContactFormSection />
    </>
  );
};

export default Insight;