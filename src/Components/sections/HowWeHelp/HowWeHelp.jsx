import { SVC_ROWS } from "../../../data/servicesData";
import { Button } from "../../ui/Button";
import Icon from "../../ui/Icon";
import SectionHeader from "../../ui/SectionHeader";

export default function HowWeHelp({ id }) {
  return (
    <section
      id={id}
      className="w-full bg-[#0b0b0b] py-[60px] max-[1100px]:py-12 max-[640px]:py-8"
    >
      <div className="container">
        <SectionHeader
          label="How we help"
          title={
            <>
              UI/UX Design Services
              <br />
              We Offer
            </>
          }
          description="A complete design practice covering every stage of the product lifecycle:"
        />

        {/* ── Service Grid ── */}
        <div className="flex flex-col rounded-[14px] overflow-hidden">
          {SVC_ROWS.map((row, rowIndex) => {
            const isFirstRow = rowIndex === 0;
            const isLastRow = rowIndex === SVC_ROWS.length - 1;

            return (
              <div
                key={rowIndex}
                className={`flex max-[1100px]:flex-wrap max-[640px]:flex-col ${
                  isLastRow ? "[&>div]:border-b [&>div]:border-[#373737]" : ""
                }`}
              >
                {row.map((cell, cellIndex) => {
                  const isFirstCell = cellIndex === 0;
                  const isLastCell = cellIndex === row.length - 1;

                  const borderRadius =
                    isFirstRow && isFirstCell
                      ? "14px 0 0 0"
                      : isFirstRow && isLastCell
                      ? "0 14px 0 0"
                      : isLastRow && isFirstCell
                      ? "0 0 0 14px"
                      : isLastRow && isLastCell
                      ? "0 0 14px 0"
                      : "0";

                  // ── CTA cell ──
                  if (cell === null) {
                    return (
                      <div
                        key={cellIndex}
                        className="
                          bg-white flex-1 h-[253px] p-6 flex flex-col justify-between items-start
                          border-t border-l border-[#cdcdcd] last:border-r border-[#cdcdcd]
                          transition-colors duration-300 hover:bg-[#f3fe00]
                          max-[1100px]:flex-[1_1_50%] max-[1100px]:min-w-[50%] max-[1100px]:h-auto
                          max-[640px]:flex-none max-[640px]:w-full max-[640px]:border max-[640px]:border-[#373737] max-[640px]:rounded-none max-[640px]:h-auto max-[640px]:gap-10 max-[640px]:justify-start
                        "
                        style={{ borderRadius }}
                      >
                        <div className="w-10 h-10 flex items-center justify-center overflow-hidden shrink-0">
                          <Icon name="svc-mvp" size={30} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="font-['Inter_Tight'] font-semibold text-[20px] leading-[30px] text-[#27272a] m-0 mb-2">
                            Not sure which path fits your project?
                          </p>
                          <p className="font-['Inter'] text-sm font-normal leading-5 text-[#52525b] m-0 mb-4">
                            Tell us where you are and we&apos;ll recommend the
                            right approach — honestly.
                          </p>
                          <Button
                            variant="black"
                            icon="arrow-black"
                            className="w-fit px-5 py-2.5 hover:bg-transparent hover:text-[#0b0b0b] hover:border-[#0b0b0b]"
                          >
                            Get a Free Consultation
                          </Button>
                        </div>
                      </div>
                    );
                  }

                  // ── Normal cell ──
                  return (
                    <div
                      key={cellIndex}
                      className="
                        group flex-1 h-63.25 p-6 flex flex-col justify-between items-start
                        border-t border-l border-[#373737] last:border-r
                        relative overflow-hidden cursor-pointer
                        bg-[#1F1F1F]
                        transition-all duration-300
                        hover:[background:radial-gradient(93.1%_120.16%_at_10.23%_0%,rgba(243,254,0,0.25)_0%,rgba(0,0,0,0.00)_56%),linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.01)_100%),#151515]
                        hover:border-t hover:border-r hover:border-l hover:border-[#373737] hover:border-b-0
                        max-[1100px]:flex-[1_1_50%] max-[1100px]:min-w-[50%] max-[1100px]:h-auto
                        max-[640px]:flex-none max-[640px]:w-full max-[640px]:border max-[640px]:border-[#373737] max-[640px]:rounded-none max-[640px]:h-auto max-[640px]:gap-10 max-[640px]:justify-start
                        max-[640px]:hover:bg-[#1F1F1F]
                      "
                      style={{ borderRadius }}
                    >
                      <div className="w-10 h-10 flex items-center justify-center overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-[1.08] max-[640px]:group-hover:scale-100">
                        <Icon name={cell.icon} size={30} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-['Inter_Tight'] font-semibold text-lg leading-7 text-white m-0 max-[640px]:text-base max-[640px]:leading-6">
                          {cell.title}
                        </p>
                        <p className="font-['Inter'] text-sm font-normal leading-5 text-[#d4d4d8] m-0">
                          {cell.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
