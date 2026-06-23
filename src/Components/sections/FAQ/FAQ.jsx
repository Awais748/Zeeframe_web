
import { useState, useRef } from 'react';
import { FAQS } from '../../../data/servicesData';

/*
  Smooth accordion animation added:
  1. Plus -> X rotation: single icon, two lines, the vertical line
     rotates 0deg -> 90deg so plus visually becomes minus (no icon swap/flicker).
  2. Answer panel: grid-template-rows 0fr -> 1fr transition (clean height
     animation without needing JS-measured pixel heights).
  3. Chevron/icon and panel both use the same duration/easing so they feel
     like one motion instead of two separate snaps.
*/

function PlusMinusIcon({ isOpen }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Horizontal line — always visible */}
      <line x1="3.33" y1="10" x2="16.67" y2="10" stroke="#27272A" strokeWidth="1.6" strokeLinecap="round" />
      {/* Vertical line — rotates flat (90deg) when open, fades out alongside */}
      <line
        x1="10" y1="3.33" x2="10" y2="16.67"
        stroke="#27272A" strokeWidth="1.6" strokeLinecap="round"
        style={{
          transformOrigin: '10px 10px',
          transform: isOpen ? 'rotate(90deg) scaleY(0)' : 'rotate(0deg) scaleY(1)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
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

          return (
            <div
              key={faq.q}
              className={`
                border-[#e4e4e7] border-solid
                ${isFirst ? '' : 'border-t'}
              `}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex items-center justify-between gap-12 p-6 w-full bg-transparent border-none text-left cursor-pointer group"
              >
                <p
                  className="flex-1 min-w-0 text-[#27272a] text-[18px] leading-7 m-0 font-semibold transition-colors duration-200 group-hover:text-black"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {faq.q}
                </p>

                <span className="shrink-0 flex items-center justify-center">
                  <PlusMinusIcon isOpen={isOpen} />
                </span>
              </button>

              {/* Smooth height animation via grid-template-rows trick.
                  Avoids needing JS to measure pixel heights, and animates
                  cleanly in both directions (open AND close). */}
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="min-h-0 overflow-hidden">
                  <p
                    className="text-[#3f3f46] text-[14px] leading-5 m-0 font-normal px-6 pb-6 max-w-[665px] transition-opacity duration-200"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      opacity: isOpen ? 1 : 0,
                      transitionDelay: isOpen ? '100ms' : '0ms',
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}