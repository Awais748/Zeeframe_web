import { USE_CASES } from "../../../data/servicesData";
import Icon from "../../ui/Icon";

export default function UseCases({ id }) {
  return (
    <section id={id} className="bg-white w-full box-border py-[60px] max-lg:py-12 max-sm:py-10">
      <div className="container">
        <div className="flex grid-cols-[minmax(0,420px)_1fr] gap-x-10 gap-y-3 justify-between  items-start mb-10 max-lg:grid-cols-1 max-lg:gap-y-3 max-lg:mb-8">
        <div className="flex flex-col gap-3">
          <p className="text-[13px] text-zinc-600 font-normal leading-5 m-0">
            Use Cases
          </p>
          <h2
            className="text-[36px] font-semibold leading-[44px] tracking-[-0.72px] text-[#18181b] m-0 max-sm:text-[28px] max-sm:leading-9"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            UI/UX&nbsp; Design Use Cases
          </h2>
        </div>
        <p className="text-[15px] text-zinc-500 leading-6 max-w-[380px] self-end m-0">
          Real projects we design for startups, SaaS companies, and enterprises:
        </p>
      </div>

      <div className="border border-[#d4d4d8] rounded-[14px] overflow-hidden divide-y divide-[#d4d4d8]">
        {USE_CASES.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-3 divide-x divide-[#d4d4d8] max-lg:grid-cols-2 max-lg:divide-x-0 max-sm:grid-cols-1"
          >
            {row.map((card, cardIndex) => (
              <div
                key={card.title}
                className={[
                  "relative p-6 flex flex-col min-h-[220px] bg-white cursor-pointer",
                  "transition-colors duration-200 hover:bg-[#ebebeb] group",
                  "max-lg:border-r max-lg:border-b max-lg:border-[#d4d4d8]",
                  cardIndex === 1 ? "max-lg:border-r-0" : "",
                  "max-sm:border-r-0 max-sm:border-b max-sm:border-[#d4d4d8]",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* Icon */}
                <div className="w-9 h-9 flex items-center justify-center mb-4 flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                  <Icon name={card.icon} size={28} />
                </div>

                {/* Title + Desc */}
                <div className="flex flex-col gap-2 flex-1">
                  <p
                    className="font-semibold text-[16px] leading-[26px] text-[#18181b] m-0"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {card.title}
                  </p>
                  <p className="text-[13px] font-normal leading-5 text-zinc-500 m-0">
                    {card.desc}
                  </p>
                </div>

                {/* View Details + arrow */}
                <div className="flex items-center gap-[5px] mt-4">
                  <span className="text-[13px] font-medium leading-5 text-[#18181b] group-hover:underline group-hover:underline-offset-[3px] transition-all duration-200">
                    View Details
                  </span>
                  {/* Arrow: hidden by default, slides in + fades on hover */}
                  <span
                    className="inline-flex items-center justify-center text-[13px] text-[#18181b] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
