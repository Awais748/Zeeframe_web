import React from "react";
import about from "../../assets/images/about.webp";
import { Client, Team, Testmonials } from "../../assets/icons/icon";
const cardsdata = [
  {
    heading: "Our Team",
    description:
      "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
    icon: <Team />,
  },
  {
    heading: "Client-Centric Design",
    description:
      "At ZeeFrames, our unique design approach focuses on understanding client needs and collaborating to create exceptional, goal-driven digital products.",
    icon: <Client />,
  },
  {
    heading: "Testimonials Showcase",
    description:
      "Don’t just take our word for it—see what satisfied clients say. Explore testimonials and case studies showcasing how our design solutions help businesses achieve their goals.",
    icon: <Testmonials />,
  },
];
const AboutSection = () => {
  return (
    <section className="sm:py-20 py-8 relative z-50 bg-[#090909]">
      <div className="container">
        <div className="wrapper flex sm:flex-row flex-col  items-start gap-20">
          <img
            src={about}
            alt="about"
            width="390"
            height="391"
            className="h-auto object-contain max-w-full"
          />
          <div className="flex flex-col  gap-12">
            <div className="flex flex-col items-start gap-4">
              <p className="text-[#F3FE00] ff_geologica uppercase text-sm font-medium">
                about
              </p>
              <h2 className="text-white font-['Geologica'] text-[40px] leading-10 font-bold">
                Who We Are
              </h2>
              <p className="text-[#D5D5D5] font-['Inter'] text-sm leading-[21px] max-w-142">
                ZeeFrames is a specialized UI UX design agency with a focus on
                creating exceptional digital experiences. ZeeFrames is committed
                to delivering the best user experience possible for your
                business.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
              {cardsdata.map((items, index) => (
                <div className="p-4 bg-[#0B0B0B] border border-[#373737] rounded-xl hover:border-[#F3FE00]">
                  <span>{items.icon}</span>
                  <div className="flex flex-col items-start gap-2 mt-6">
                    <h3 className="text-white font-['Geologica'] text-lg leading-7.5">
                      {items.heading}
                    </h3>
                    <p className="text-[#D5D5D5] font-['inter'] w-full text-sm leading-[21px]">
                      {items.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
