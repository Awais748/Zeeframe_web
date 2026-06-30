import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import HomeSectionHeader from "../../Components/ui/HomeHeader";

import process1 from "../../assets/images/process1.webp";
import process2 from "../../assets/images/process2.webp";
import process3 from "../../assets/images/process3.webp";
import process4 from "../../assets/images/process4.webp";
import process5 from "../../assets/images/process5.webp";
import process6 from "../../assets/images/process6.webp";

const processSteps = [
  {
    id: 1,
    title: "01 Discovery",
    subtitle: "Research & Domain Analysis",
    description:
      "Don't ignore the crucial step of Research & Development in the UX Design Process! Discover and solve user problems to launch a successful product. Gather data on the target audience and analyze customer feedback. Improve user experience",
    image: process1,
  },
  {
    id: 2,
    title: "02 Flows",
    subtitle: "User Journey Map Sitemap",
    description:
      "Create successful user flows for your product in the UX design process by mapping user journeys and interactions. Define product ideas and goals, tailored to user needs, behavior, and expectations. Test with real users for optimization.",
    image: process2,
  },
  {
    id: 3,
    title: "03 Wireframes",
    subtitle: "Low - Fidelity Design",
    description:
      "Define the content and functionality of your product with wireframes in the UX Design process. Brainstorm multiple ideas, get feedback, and refine for high fidelity wireframes. Enhance the user interface for a natural and intuitive look.",
    image: process3,
  },
  {
    id: 4,
    title: "Mockups",
    subtitle: "High - Fidelity Design",
    description:
      "Visualize your product's appearance with mockups in the UX Design. Detailed design for every screen gets reviewed by stakeholders and the design team. Get it tested with users for improved design based on their needs and expectations.",
    image: process4,
  },
  {
    id: 5,
    title: "Prototyping",
    subtitle: "Interaction Design",
    description:
      "UX Designers create clickable prototypes for your product using tools like Invision to assess product functionality. Gather user feedback and collaborate with development team to create improved version of the design for implementation.",
    image: process5,
  },
  {
    id: 6,
    title: "Testing",
    subtitle: "Usability Testing",
    description:
      "UX designers focus on improving product usability by testing with real users. Define the testing goals and scenarios and recruit a target audience. Conduct usability tests, analyze results, and make changes for optimal user experience.",
    image: process6,
  },
];

// How dim an inactive item is (0 = fully invisible, 1 = fully bright)
const MIN_OPACITY = 0.35;
// Vertical distance (px) over which the fade happens — bigger = smoother/slower fade
const FADE_RANGE = 160;

const ExecutionSection = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [opacities, setOpacities] = useState(processSteps.map(() => MIN_OPACITY));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!containerRef.current) return;

    const containerHeight = containerRef.current.offsetHeight;
    const currentLineHeight = progress * containerHeight;

    let newActiveIndex = -1;
    const newOpacities = itemRefs.current.map((item, index) => {
      if (!item) return MIN_OPACITY;

      const itemTop = item.offsetTop;

      // Distance of the scroll-line from this item's top.
      // Positive = line has passed this item (scrolled down past it).
      // Negative = line hasn't reached this item yet (or has retreated above it).
      const distance = currentLineHeight - itemTop;

      if (distance >= FADE_RANGE) {
        // Fully passed this item's threshold — stays highlighted,
        // even while later items are also becoming active.
        newActiveIndex = index;
        return 1;
      }

      if (distance <= -FADE_RANGE) {
        // Line hasn't reached here yet (or scrolled back above it) — stays dim.
        return MIN_OPACITY;
      }

      // Within the transition zone around this item's top — smoothly
      // interpolate based on exact scroll progress. Works both directions:
      // scrolling down increases it toward 1, scrolling up decreases it
      // back toward MIN_OPACITY.
      const t = (distance + FADE_RANGE) / (2 * FADE_RANGE);
      if (t > 0.5) newActiveIndex = index;
      return MIN_OPACITY + t * (1 - MIN_OPACITY);
    });

    setActiveIndex(newActiveIndex);
    setOpacities(newOpacities);
  });

  return (
    <section className="bg-black sm:py-20 py-8">
      <div className="container">
        <HomeSectionHeader
          eyebrow="Our process, Your Advantage"
          title="From Idea To Execution"
          description="We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do."
        />
        <div
          ref={containerRef}
          className="relative mx-auto flex max-w-7xl gap-20 sm:px-6 sm:py-24 py-8 md:flex-row flex-col"
        >
          <div className="relative md:w-1/2 w-full">
            {/* Line - grey track (default) + yellow fill (progress) */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-[#3C3C3C] md:block hidden">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-[#F3FE00]"
              />
            </div>

            {/* Cards */}
            <div className="space-y-20 md:pl-16 pl-0">
              {processSteps.map((step, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className="relative"
                    style={{
                      opacity: opacities[index],
                      transition: "opacity 0.1s linear",
                    }}
                  >
                    {/* NUMBER – LEFT OF LINE */}
                    {isActive && (
                      <div className="absolute -left-25 top-1 text-lg font-semibold text-white transition-opacity duration-300 md:block hidden">
                        {String(step.id).padStart(2, "0")}
                      </div>
                    )}
                    <div className="flex gap-1.5">
                      {/* NUMBER FOR MOBILE */}
                      <div className="md:hidden block text-base font-medium text-white mb-2">
                        {String(step.id).padStart(2, "0")}
                      </div>
                      {/* CONTENT */}
                      <h3 className="text-[19px] font-semibold ff_geologica text-xl md:text-[19px] text-white">
                        {step.title.replace(/^\d+\s/, "")}
                      </h3>
                    </div>

                    <p className="mt-1 md:text-lg text-base text-white">
                      {step.subtitle}
                    </p>

                    <p className="mt-3 max-w-md text-sm text-white">
                      {step.description}
                    </p>

                    {/* Mobile Image */}
                    <div className="md:hidden block mt-8">
                      <img
                        src={step.image}
                        className="w-full h-[185px] border border-[rgba(60,60,60,0.72)] rounded-2xl object-cover"
                        alt={step.title}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT STICKY IMAGE - DESKTOP ONLY */}
          <div className="sticky top-30 h-126 w-132 md:block hidden">
            {activeIndex >= 0 && (
              <motion.img
                key={activeIndex}
                src={processSteps[activeIndex].image}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="h-full w-full rounded-2xl object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionSection;