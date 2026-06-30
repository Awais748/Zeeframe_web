import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "../../assets/icons/icon";
import practice from "../../assets/images/paractice.webp";
import prototyping from "../../assets/images/prototyping.webp";
import screen from "../../assets/images/screen.webp";
import improve from "../../assets/images/improve.webp";
import choose from "../../assets/images/choose.webp";
import articles from "../../assets/images/articles.webp";
import InsightCard from "../../Components/ui/Insightcard";

const cardsData = [
  {
    id: 1,
    title: "Improving Website Conversion Rates: A UX- Centric Approach",
    description:
      "Discover how to significantly boost your website's conversion rates by prioritiz...",
    img: practice,
    readtime: "7 min read",
    date: "Jan 23, 2025",
  },
  {
    id: 2,
    title: " How to Conduct Usability Testing That Gets Results?",
    description:
      " Uncover usability issues early & get real user feedback to design products that...",
    img: articles,
    readtime: "7 min read",
    date: "Jan 22, 2025",
  },
  {
    id: 3,
    title: "The Challenges and Solutions in Multi-Screen UI/UX Design 2024",
    description:
      "Multi-Screen UI/UX Design in 2024! Conquer the challenges of designing for deskt...",
    img: screen,
    readtime: "6 min read",
    date: "Jan 21, 2025",
  },
  {
    id: 4,
    title: "Improving Website Conversion Rates: A UX- Centric Approach",
    description:
      "Discover how to significantly boost your website's conversion rates by prioritiz...",
    img: choose,
    readtime: "7 min read",
    date: "Jan 23, 2025",
  },
  {
    id: 5,
    title: " How to Conduct Usability Testing That Gets Results?",
    description:
      " Uncover usability issues early & get real user feedback to design products that...",
    img: prototyping,
    readtime: "7 min read",
    date: "Jan 22, 2025",
  },
  {
    id: 6,
    title: "The Challenges and Solutions in Multi-Screen UI/UX Design 2024",
    description:
      "Multi-Screen UI/UX Design in 2024! Conquer the challenges of designing for deskt...",
    img: improve,
    readtime: "6 min read",
    date: "Jan 21, 2025",
  },
];

const CARD_WIDTH = 381;
const GAP = 48;

const CardSlide = () => {
  const containerRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const totalWidth = cardsData.length * (CARD_WIDTH + GAP) - GAP;

  const updateContainerWidth = (node) => {
    if (node) {
      containerRef.current = node;
      setContainerWidth(node.offsetWidth);
    }
  };

  const maxDrag = Math.max(totalWidth - containerWidth, 0);

  const isBeginning = scrollX <= 0;
  const isEnd = scrollX >= maxDrag;

  const goTo = (direction) => {
    const step = CARD_WIDTH + GAP;
    let next = direction === "next" ? scrollX + step : scrollX - step;
    next = Math.min(Math.max(next, 0), maxDrag);
    setScrollX(next);
  };

  return (
    <section className="sm:py-20 py-8 bg-[#090909]">
      <div className="container">
        <p className="font-['Geologica'] text-[#F3FE00] text-sm uppercase">
          Latest insights
        </p>
        <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between gap-4 sm:gap-auto sm:mb-12 mb-8 sm:mt-3 mt-4">
          <h2 className="font-['Geologica'] text-white sm:text-[40px] text-[28px] font-bold sm:leading-11 leading-10">
            Our Recent Articles
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => goTo("prev")}
              disabled={isBeginning}
              className={`h-12 px-5 rounded-full border transition
                ${
                  isBeginning
                    ? "cursor-not-allowed bg-[#555555] border-none text-gray-600"
                    : "bg-[#F3FE00] border-[#F3FE00] text-black hover:opacity-90"
                }`}
            >
              <ArrowLeft />
            </button>

            <button
              onClick={() => goTo("next")}
              disabled={isEnd}
              className={`h-12 px-5 rounded-full border transition
                ${
                  isEnd
                    ? "cursor-not-allowed bg-[#555555] border-none text-gray-600"
                    : "bg-[#F3FE00] border-[#F3FE00] text-black hover:opacity-90"
                }`}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div ref={updateContainerWidth} className="overflow-hidden w-full">
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            drag="x"
            dragConstraints={{ left: -maxDrag, right: 0 }}
            dragElastic={0.05}
            animate={{ x: -scrollX }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            onDragEnd={(_, info) => {
              const step = CARD_WIDTH + GAP;
              let next = scrollX - info.offset.x;
              next = Math.round(next / step) * step;
              next = Math.min(Math.max(next, 0), maxDrag);
              setScrollX(next);
            }}
          >
            {cardsData.map((item) => (
              <InsightCard
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                readingtime={item.readtime}
                datetime={item.date}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CardSlide;
