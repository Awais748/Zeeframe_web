import { Button } from "../../Components/ui/Button";
import imgArrow from "../../assets/images/insightarrow.svg";
import imgDot from "../../assets/images/insightimgdot.svg";
import img1 from "../../assets/images/insightcard1.png";
import img2 from "../../assets/images/insightcard2.png";
import img3 from "../../assets/images/insightcard3.png";

const CARDS = [
  {
    img: img1,
    title: "20+ GenAI UX patterns, examples and implementation tactics",
    desc: "A shared language for product teams to build usable, intelligent and safe GenAI experiences...",
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

export default function Homeinsights() {
  return (
    <section className="bg-[#0b0b0b] py-[80px] max-sm:py-10">
      <div className="container">
        <div className="flex flex-col gap-12 w-full">
          {/* Header */}
          <div className="flex items-start justify-between gap-6 max-sm:flex-col max-sm:gap-4">
            <div className="flex flex-col gap-8">
              <p className="text-[#F3FE00] text-[14px] font-['Inter'] font-medium uppercase leading-normal m-0">
                Our Insights
              </p>
              <h2
                className="text-white m-0 font-bold max-w-[510px] max-sm:text-[28px] max-sm:leading-[36px]"
                style={{
                  fontFamily: "'Geologica', sans-serif",
                  fontSize: 40,
                  lineHeight: "40px",
                }}
              >
                Insights That Inspire Vision Forward
              </h2>
            </div>

            {/* Button — blacktrans variant with text swap on hover */}
            <Button
              variant="yellow"
              size="lg"
              className="relative overflow-hidden hover:bg-transparent hover:text-white hover:border-yellow transition-all duration-300"
            >
              <span className="flex items-center gap-2 group-hover:invisible">
                Explore More
                <img src={imgArrow} alt="" className="w-4 h-4 shrink-0" />
              </span>

              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                See More
              </span>
            </Button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="flex flex-col cursor-pointer group"
              >
                {/* Image */}
                <div className="h-[227px] relative rounded-tl-[12px] rounded-tr-[12px] overflow-hidden shrink-0">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-5 flex-1 p-6 rounded-bl-[16px] rounded-br-[16px] border border-[#373737] border-t-0 bg-[#0b0b0b] backdrop-blur-[6px] transition-colors duration-200 group-hover:bg-[rgba(255,255,255,0.04)]">
                  <div className="flex flex-col gap-2">
                    <p
                      className="text-white text-[28px] font-medium leading-tight m-0 line-clamp-3"
                      style={{ fontFamily: "'Geologica', sans-serif" }}
                    >
                      {card.title}
                    </p>
                    <p
                      className="text-[#d5d5d5] text-[16px] leading-6 m-0 font-normal line-clamp-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-[#e7e7e7] text-[14px] leading-5 whitespace-nowrap font-['Inter']">
                      {card.readTime}
                    </span>
                    <img
                      src={imgDot}
                      alt=""
                      className="w-[6px] h-[6px] shrink-0"
                    />
                    <span className="text-[#e7e7e7] text-[14px] leading-5 whitespace-nowrap font-['Inter']">
                      {card.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
