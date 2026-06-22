// FAQ.jsx — Pixel-perfect recreation from Figma node 60212:13989
// Pure Tailwind CSS — no external CSS file needed
// Replaces the old FAQ.jsx + FAQ.css

import { useState } from 'react';
import { FAQS } from '../../../data/servicesData';

// Inline SVG icons — exact Figma minus/plus icons
function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="3.33" x2="10" y2="16.67" stroke="#27272A" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="3.33" y1="10" x2="16.67" y2="10" stroke="#27272A" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="4" y1="12" x2="20" y2="12" stroke="#27272A" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-[#faf9f4] py-[80px] max-sm:py-12">
      <div className="container">

      <div className="flex flex-col gap-4 mb-12">
        <p
          className="text-[#18181b] text-[14px] leading-5 m-0 font-normal"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Questions
        </p>

        <h2
          className="text-[#27272a] text-[36px] leading-[44px] tracking-[-0.72px] m-0 font-semibold"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div className="bg-white rounded-[14px] overflow-hidden border border-[#e4e4e7]">
        {FAQS.map((faq, index) => {
          const isOpen = openIdx === index;
          const isFirst = index === 0;
          const isLast = index === FAQS.length - 1;

          return (
            <div
              key={faq.q}
              className={`
                border-[#e4e4e7] border-solid
                ${isFirst ? '' : 'border-t'}
                ${isLast ? '' : ''}
              `}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex items-center justify-between gap-12 p-6 w-full bg-transparent border-none text-left cursor-pointer"
              >
                <p
                  className="flex-1 min-w-0 text-[#27272a] text-[18px] leading-7 m-0 font-semibold"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {faq.q}
                </p>

                <span className="shrink-0 flex items-center justify-center">
                  {isOpen ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>

              {isOpen && (
                <p
                  className="text-[#3f3f46] text-[14px] leading-5 m-0 font-normal px-6 pb-6 max-w-[665px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}