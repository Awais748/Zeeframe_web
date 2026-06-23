import { USE_CASES } from "../../../data/servicesData";
import Icon from "../../ui/Icon";
import SectionHeader from "../../ui/SectionHeader";

export default function UseCases({ id }) {
  return (
    <section
      id={id}
      className="bg-white w-full py-[60px] max-[1100px]:py-12 max-[640px]:py-10"
    >
      <div className="container">
        <SectionHeader
          label="Use Cases"
          title="UI/UX&nbsp; Design Use Cases"
          description="Real projects we design for startups, SaaS companies, and enterprises:"
          theme="light"
        />

        <div className="border border-[#d4d4d8] rounded-[14px] overflow-hidden">
          {USE_CASES.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-3 border-b border-[#d4d4d8] last:border-b-0 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1"
            >
              {row.map((card, cardIndex) => {
                const isLastInTabletRow = cardIndex === 1;
                const isLastInRow = cardIndex === row.length - 1;

                return (
                  <div
                    key={card.title}
                    className={[
                      "relative p-6 flex flex-col min-h-[220px] bg-white cursor-pointer",
                      "transition-colors duration-200 hover:bg-[#ebebeb] group",
                      // desktop: right border except last col
                      !isLastInRow ? "border-r border-[#d4d4d8]" : "",
                      // tablet (2-col): remove right border from 2nd card
                      isLastInTabletRow ? "max-[1024px]:border-r-0" : "",
                      // tablet: add bottom border to all (row handles last:border-b-0 on row level)
                      "max-[1024px]:border-b max-[1024px]:border-[#d4d4d8]",
                      // mobile: no right border, keep bottom
                      "max-[640px]:border-r-0",
                      // last card in mobile: no bottom border (handled by row last:border-b-0)
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {/* Icon */}
                    <div className="w-9 h-9 flex items-center justify-center mb-4 shrink-0 transition-transform duration-200 group-hover:scale-110">
                      <Icon name={card.icon} size={28} />
                    </div>

                    {/* Title + Desc */}
                    <div className="flex flex-col gap-2 flex-1">
                      <p className="font-['Inter_Tight'] font-semibold text-[16px] leading-[26px] text-[#18181b] m-0">
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
                      <span
                        className="inline-flex items-center justify-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10.329"
                          height="10.329"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M0.870208 10.3285L0 9.45833L8.20042 1.25H0.745208V0H10.3285V9.58333H9.07854V2.12813L0.870208 10.3285Z"
                            fill="#18181B"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
