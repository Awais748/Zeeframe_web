import React from "react";
import img1 from "../../assets/images/research.webp";

const ResearchSection = () => {
  return (
    <section className='sm:py-20 py-8 bg-[#0D0D0D] bg-[url("/src/assets/images/blog-section-bg.webp")]'>
      <div className="container">
        <div className="grid sm:grid-cols-[minmax(406px,588px)_minmax(100px,100%)] grid-cols-1 sm:gap-12 gap-8">
          <div>
            <img
              src={img1}
              alt="Blogs"
              width="588"
              height="406"
              className="rounded-xl object-cover w-full sm:h-full h-[225px] shrink-0"
            />
          </div>
          <div className="sm:mt-4.5 flex flex-col w-full  gap-3">
            <h2 className="text-[#FFF] sm:text-5xl text-[28px] ff_geologica font-semibold">
              How Thinking Like a Product Designer Changed My Design Handoffs
            </h2>
            <p className="font-['Inter'] text-sm sm:text-xl text-[#FFF]">
              Five lessons I’ve learned about deliverables that Junior Designer
              Me could’ve never imagined.
            </p>
            <div className="flex items-center sm:pt-3 gap-2">
              <span className="text-[#FFF] text-sm font-['Inter']">
                7 min read
              </span>
              <span className="w-1 h-1 rounded-full bg-white"></span>
              <span className="text-[#FFF] text-sm font-['Inter']">
                Jan 23, 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
