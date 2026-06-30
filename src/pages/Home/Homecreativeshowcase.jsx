import { useMemo } from "react";
import HomeSectionHeader from "../../Components/ui/HomeHeader";
import imgArrow from "../../assets/images/imgarrow.svg";
import imgEllipse from "../../assets/images/imgEllipse.svg";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";

const projects = [
  {
    id: 1,
    image: img1,
    name: "Bloom Money",
    description: "Empowering communities with financial solutions.",
    categories: ["Fin-Tech", "SaaS"],
  },
  {
    id: 2,
    image: img2,
    name: "Alfan",
    description: "The Platform for Content Creators",
    categories: ["Social Media", "Mar-Tech", "AI"],
  },
  {
    id: 3,
    image: img3,
    name: "Earpoin",
    description: "The Best Place ToFind Productivity Tools",
    categories: ["SaaS", "IT/Consulting", "AI"],
  },
  {
    id: 4,
    image: img4,
    name: "Finnecta",
    description: "Wallet application to streamline digital transactions",
    categories: ["Fin-Tech", "Crypto & Web3"],
  },
  {
    id: 5,
    image: img5,
    name: "Trivo",
    description: "Clearbit, a business intelligence platform",
    categories: ["Enterprise", "IT/Consulting", "AI"],
  },
  {
    id: 6,
    image: img6,
    name: "Fastgo",
    description: "Fastgo's scooter rental app to drive adoption",
    categories: ["Automotive", "Freight & Logistics"],
  },
];

const shuffleArray = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export default function Homecreativeshowcase({
  showHeader = true,
  activeCategory = "All Niches",
}) {
  const filteredProjects = useMemo(() => {
    const matched =
      activeCategory === "All Niches"
        ? projects
        : projects.filter((p) => p.categories.includes(activeCategory));

    // Agar koi match na ho to bhi khali na rahe, saare projects shuffled dikha do
    const finalList = matched.length > 0 ? matched : projects;

    return shuffleArray(finalList);
  }, [activeCategory]);

  const leftProjects = filteredProjects.filter((_, i) => i % 2 === 0);
  const rightProjects = filteredProjects.filter((_, i) => i % 2 === 1);

  return (
    <section
      className="relative w-full  pb-20"
      style={{
        background: "black",
      }}
    >
      <div className="container flex flex-col gap-16 py-20">
        {showHeader && (
          <HomeSectionHeader
            eyebrow="how we helped others succeed"
            title="Our Creative Showcase"
            description="We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do."
          />
        )}

        {/* Desktop: 2-col staggered grid */}
        <div className="hidden sm:grid grid-cols-2 gap-x-10 w-full">
          {/* Left column */}
          <div className="flex flex-col gap-12">
            {leftProjects.map((project) => (
              <div key={project.id} className="flex flex-col gap-6 w-full">
                <div className="relative w-full rounded-3xl overflow-hidden h-[685px] shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-end gap-6 w-full">
                  <div className="flex-1 flex flex-col gap-2 min-w-0">
                    <p className="font-['Inter_Tight'] font-normal text-sm text-white leading-tight">
                      {project.name}
                    </p>
                    <p className="font-['Inter_Tight'] font-medium text-2xl text-white leading-tight">
                      {project.description}
                    </p>
                  </div>
                  <div className="relative border border-[#b8b8b8] rounded-full p-1 flex items-center shrink-0 overflow-hidden w-8 h-8">
                    <img
                      src={imgEllipse}
                      alt=""
                      className="absolute -left-px top-[31px] w-8 pointer-events-none select-none"
                      aria-hidden="true"
                    />
                    <img
                      src={imgArrow}
                      alt="View project"
                      className="relative z-10 w-6 h-6 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column — offset 120px down */}
          <div className="flex flex-col gap-12 pt-[120px]">
            {rightProjects.map((project) => (
              <div key={project.id} className="flex flex-col gap-6 w-full">
                <div className="relative w-full rounded-3xl overflow-hidden h-[685px] shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-end gap-6 w-full">
                  <div className="flex-1 flex flex-col gap-2 min-w-0">
                    <p className="font-['Inter_Tight'] font-normal text-sm text-white leading-tight">
                      {project.name}
                    </p>
                    <p className="font-['Inter_Tight'] font-medium text-2xl text-white leading-tight">
                      {project.description}
                    </p>
                  </div>
                  <div className="relative border border-[#b8b8b8] rounded-full p-1 flex items-center shrink-0 overflow-hidden w-8 h-8">
                    <img
                      src={imgEllipse}
                      alt=""
                      className="absolute -left-px top-[31px] w-8 pointer-events-none select-none"
                      aria-hidden="true"
                    />
                    <img
                      src={imgArrow}
                      alt="View project"
                      className="relative z-10 w-6 h-6 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="flex sm:hidden flex-col gap-10 w-full pt-5">
          {filteredProjects.map((project) => (
            <div key={project.id} className="flex flex-col gap-6 w-full">
              <div className="relative w-full rounded-3xl overflow-hidden h-[414px] shrink-0">
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex items-end gap-6 w-full">
                <div className="flex-1 flex flex-col gap-2 min-w-0">
                  <p className="font-['Inter_Tight'] font-normal text-sm text-white leading-tight">
                    {project.name}
                  </p>
                  <p className="font-['Inter_Tight'] font-medium text-2xl text-white leading-tight">
                    {project.description}
                  </p>
                </div>
                <div className="hidden sm:flex relative border border-[#b8b8b8] rounded-full p-1 items-center shrink-0 overflow-hidden w-8 h-8">
                  <img
                    src={imgEllipse}
                    alt=""
                    className="absolute -left-px top-[31px] w-8 pointer-events-none select-none"
                    aria-hidden="true"
                  />
                  <img
                    src={imgArrow}
                    alt="View project"
                    className="relative z-10 w-6 h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
