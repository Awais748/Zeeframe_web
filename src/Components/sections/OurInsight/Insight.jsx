import { useState } from "react";
import imgArrow from "../../../assets/images/insightimgarrow.svg";
import imgDot from "../../../assets/images/insightimgdot.svg";
import img1 from "../../../assets/images/insightcard1.png";
import img2 from "../../../assets/images/insightcard2.png";
import img3 from "../../../assets/images/insightcard3.png";

const CARDS = [
  {
    img: img1,
    title: "20+ GenAI UX patterns, examples and implementation tactics",
    desc: "A shared language for product teams to build usable, intelligent and safe GenAI experiences.",
    readTime: "7 min read",
    date: "Jan 23, 2025",
  },
  {
    img: img2,
    title:
      "Skipping Figma, human after all, Figma grid, accessibility as an afterthought",
    desc: "Weekly curated resources for designers — thinkers and makers.",
    readTime: "7 min read",
    date: "Jan 23, 2025",
  },
  {
    img: img3,
    title: "Is your creative character being sacrificed to Algorithm, Inc.?",
    desc: "AI is changing how we work. Here's why and how we must preserve the human spirit that drives...",
    readTime: "7 min read",
    date: "Jan 23, 2025",
  },
];

function BlogCard({ img, title, desc, readTime, date }) {
  const [hovered, setHovered] = useState(false);

  return (
    // Fixed height 463px — same for all cards, no exceptions
    <div
      className="flex flex-col flex-1 min-w-0 cursor-pointer"
      style={{ height: 463 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image — fixed 227px */}
      <div
        style={{ height: 227, flexShrink: 0 }}
        className="relative overflow-hidden rounded-tl-[12px] rounded-tr-[12px]"
      >
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content — exactly 236px (463 - 227) */}
      <div
        className="flex flex-col justify-between border border-t-0 border-[#e4e4e7] rounded-bl-[14px] rounded-br-[14px] p-6 overflow-hidden transition-colors duration-200"
        style={{
          height: 236,
          flexShrink: 0,
          backgroundColor: hovered ? "#e7e5e4" : "#ffffff",
        }}
      >
        {/* Title + desc — clamp overflow */}
        <div className="flex flex-col gap-4 overflow-hidden">
          <p
            className="text-[#0b0b0b] text-[20px] leading-[30px] m-0 font-semibold line-clamp-2"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            {title}
          </p>
          <p
            className="text-[#3f3f46] text-[16px] leading-6 m-0 font-normal line-clamp-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {desc}
          </p>
        </div>

        {/* Meta — always at bottom */}
        <div className="flex items-center gap-2 shrink-0">
          <span
            className="text-[#52525b] text-[14px] leading-5 whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {readTime}
          </span>
          <div className="relative w-[6px] h-[6px] shrink-0">
            <img
              src={imgDot}
              alt=""
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <span
            className="text-[#52525b] text-[14px] leading-5 whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function OurInsights() {
  return (
    <section className="bg-[#faf9f4] py-[80px] max-lg:py-[60px] max-sm:py-10">
      <div className="container">
        <div className="flex flex-col gap-12 w-full">
          {/* Header */}
          <div className="flex items-start justify-between gap-6 max-sm:flex-col max-sm:gap-4">
            <div className="flex flex-col gap-4">
              <p
                className="text-[#18181b] text-[14px] leading-5 m-0 font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Our Insights
              </p>
              <h2
                className="text-[#27272a] text-[36px] leading-[44px] tracking-[-0.72px] m-0 font-semibold max-w-[755px] max-sm:text-[28px] max-sm:leading-[36px]"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Insights That Inspire Vision Forward
              </h2>
            </div>
            <button
              className="flex items-center gap-2 bg-black px-4 py-2 rounded-[99999px] border border-transparent cursor-pointer shrink-0 w-fit transition-colors duration-200 hover:bg-transparent hover:border-black group relative"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="text-white text-[16px] leading-6 font-medium whitespace-nowrap group-hover:text-transparent relative">
                Explore More
                <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100">
                  See More
                </span>
              </span>
              <img
                src={imgArrow}
                alt=""
                className="w-4 h-4 shrink-0 group-hover:invisible"
              />
            </button>
          </div>

          {/* Cards — items-start so cards don't stretch each other */}
          <div className="flex gap-6 items-start w-full max-lg:flex-col">
            {CARDS.map((card) => (
              <BlogCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
