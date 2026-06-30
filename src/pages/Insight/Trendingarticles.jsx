import SectionHeader from "../../Components/ui/HomeHeader";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import practice from "../../assets/images/paractice.webp";
import prototyping from "../../assets/images/prototyping.webp";
import screen from "../../assets/images/screen.webp";
import improve from "../../assets/images/improve.webp";
import choose from "../../assets/images/choose.webp";
import articles from "../../assets/images/articles.webp";

const tabs = [
  "Design",
  "Product",
  "Software Development",
  "Customer Success",
  "Leadership",
  "Management",
];

const cardsData = [
  {
    id: 1,
    category: "Design",
    title: "Improving Website Conversion Rates: A UX- Centric Approach",
    description:
      "Discover how to significantly boost your website's conversion rates by prioritiz...",
    img: practice,
    readtime: "7 min read",
    date: "Jan 23, 2025",
  },
  {
    id: 2,
    category: "Design",
    title: " How to Conduct Usability Testing That Gets Results?",
    description:
      " Uncover usability issues early & get real user feedback to design products that...",
    img: articles,
    readtime: "7 min read",
    date: "Jan 22, 2025",
  },
  {
    id: 3,
    category: "Design",
    title: "The Challenges and Solutions in Multi-Screen UI/UX Design 2024",
    description:
      "Multi-Screen UI/UX Design in 2024! Conquer the challenges of designing for deskt...",
    img: screen,
    readtime: "6 min read",
    date: "Jan 21, 2025",
  },
  {
    id: 4,
    category: "Design",
    title: "Improving Website Conversion Rates: A UX- Centric Approach",
    description:
      "Discover how to significantly boost your website's conversion rates by prioritiz...",
    img: choose,
    readtime: "7 min read",
    date: "Jan 23, 2025",
  },
];

const TrendingArticles = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filteredArticles = cardsData.filter((item) => {
    const matchCategory =
      item.category == "Design" || item.category === activeTab;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className='sm:pt-37 pt-8 sm:pb-25 pb-8 sm:bg-[url("/src/assets/images/trending-section-bg.webp")] bg-[#0D0D0D]'>
      <div className="container">
        <div className="relative grid grid-cols-1 sm:grid-cols-[510px_1fr] gap-[45px]">
          {/* LEFT SIDE */}
          <div className="sm:sticky top-[100px] self-start">
            <SectionHeader
              eyebrow="Popular insights"
              title="Trending Articles You Need To Read"
              description="Stay Ahead of the Curve and Dive Deep into the Must-Read Trending Articles that Keep You Informed and Inspired"
              align="start"
            />

            <div className="flex flex-col gap-3 sm:mt-12 mt-4">
              <label className="text-[#FFF] text-sm font-medium leading-5">
                Blog categories
              </label>

              <input
                type="search"
                placeholder="Search Any Insight"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[rgba(255,255,255,0.10)] border w-91 ps-6 pe-1.5 h-12 border-[rgba(255,255,255,0.20)] rounded-full text-[#FFF] outline-none text-sm"
              />

              {/* TABS */}
              <div className="flex flex-col items-start">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 cursor-pointer text-sm leading-[21px] items-start transition
                      ${
                        activeTab === tab ? " text-[#F3FE00]" : "text-[#BDBDBD]"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col sm:gap-15 gap-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((item) => (
                <Link
                  aria-label="Insight link"
                  className="group  block border overflow-hidden hover:border-[#F3FE00] rounded-2xl border-transparent "
                  to="#"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2  items-center rounded-[12px] sm:h-[218px] sm:h-auto border border-white/20 backdrop-blur ">
                    {/* Image */}
                    <img
                      src={item.img}
                      alt={item.title}
                      height="218"
                      width="302"
                      className="w-full h-full object-cover group-hover:scale-105 duration-300 "
                    />
                    {/* Content */}
                    <div className="py-4 pe-4 ps-7 bg-[rgba(255,255,255,0.08)] border-0 flex flex-col h-full justify-between gap-3">
                      <h3 className="text-[#FFF] font-['Geologica'] text-[20px]  font-semibold group-hover:text-[#F3FE00]">
                        {item.title}
                      </h3>
                      <p className="text-[#FFF] text-sm leading-6 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex pt-3 gap-2 text-[#FFF] text-sm font-[' Inter'] items-center">
                        {item.readtime}{" "}
                        <span className="w-1.5 h-1.5 bg-white rounded-full "></span>
                        {item.datetime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-white/60">No articles found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingArticles;
