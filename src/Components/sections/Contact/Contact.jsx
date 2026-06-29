import { useState } from "react";
import svgPaths from "./svgpaths";
import imgRectangle6343 from "./c9b0cbb8cbd7061165d8f4888a1bf89f69d6ffd0.png";

export default function Frame5() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
    // TODO: hook up actual submit logic (API call etc.)
  };

  return (
    <div className="bg-[#faf9f4] flex items-start p-5 sm:p-10 lg:p-15 relative w-full overflow-hidden">
      <div className="w-full max-w-330 mx-auto">
        {/* Frame21 - Main Container */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between overflow-clip relative rounded-[14px] shrink-0 w-full">
          {/* LEFT SIDE - Testimonials */}
          <div
            className="bg-white flex flex-col gap-10 lg:gap-15 items-start overflow-clip px-6 sm:px-10 py-10 lg:py-15 relative shrink-0 w-full lg:w-135.5"
            data-name="testimonials Variant 9"
          >
            {/* Heading */}
            <div className="flex flex-col items-start relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-col font-['Inter_Tight:SemiBold',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[#27272a] text-[20px] sm:text-[24px] w-full">
                <p className="leading-7 sm:leading-8 whitespace-pre-wrap">{`What  Our Customers Say`}</p>
              </div>
            </div>

            {/* Frame25 - Quote + Author + Controls */}
            <div className="flex flex-1 flex-col gap-4 items-start min-h-px relative w-full">
              {/* Quote Icon */}
              <div className="flex flex-col items-start relative shrink-0 w-full">
                <div
                  className="h-[30.601px] relative shrink-0 w-10"
                  data-name=""
                >
                  <svg
                    className="absolute block inset-0 size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 40 30.6009"
                  >
                    <path
                      d={svgPaths.p3c110b00}
                      fill="var(--fill-0, #52525B)"
                      id="â"
                    />
                  </svg>
                </div>
              </div>

              {/* Frame17 - Review Text + Author + Navigation */}
              <div className="flex flex-1 flex-col items-start justify-between min-h-px relative w-full gap-6">
                {/* Review Text */}
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-0 not-italic relative shrink-0 text-[#27272a] text-[15px] sm:text-[16px] w-full">
                  <p className="leading-6.5 sm:leading-7">{`"ZeeFrames delivered the complete design within the agreed timeline, and the client received positive user feedback on the app's ease of use and visual appeal during testing. The team demonstrated excellent project management and was very organized in their approach throughout the engagement."`}</p>
                </div>

                {/* Frame24 - Author + Navigation Controls */}
                <div className="flex flex-col gap-7 sm:gap-9 items-center justify-center relative shrink-0 w-full">
                  {/* Frame20 - Author Info + Clutch Logo */}
                  <div className="flex flex-wrap items-end justify-between gap-4 relative shrink-0 w-full">
                    {/* Author */}
                    <div className="flex gap-3 items-center relative shrink-0">
                      {/* Avatar */}
                      <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-13">
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full"
                          src={imgRectangle6343}
                        />
                        <div
                          aria-hidden
                          className="absolute border border-[#454545] border-solid inset-0 rounded-[9999px]"
                        />
                      </div>
                      {/* Name + Role */}
                      <div className="[word-break:break-word] flex flex-col gap-1 items-start leading-0 not-italic relative shrink-0 text-black whitespace-nowrap">
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
                          <p className="leading-6">Daahir Ibraahim</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px]">
                          <p className="leading-5">
                            Project Managemer, E Salaax
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Clutch Logo */}
                    <div
                      className="h-4 relative shrink-0 w-[56.471px]"
                      data-name="clutch_logo.svg"
                    >
                      <svg
                        className="absolute block inset-0 size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 56.4706 16"
                      >
                        <g clipPath="url(#clip0_1_1000)" id="clutch_logo.svg">
                          <path
                            d={svgPaths.pf7de100}
                            fill="var(--fill-0, #E62415)"
                            id="Vector"
                          />
                          <path
                            d={svgPaths.ped2f500}
                            fill="var(--fill-0, #17313B)"
                            id="Vector_2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_1000">
                            <rect fill="white" height="16" width="56.4706" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Frame27 - Arrow Buttons + Dots */}
                  <div className="flex flex-wrap gap-5 items-center relative shrink-0 w-full">
                    {/* Arrow Buttons */}
                    <div className="flex flex-1 gap-5 items-start min-w-px relative">
                      {/* Prev Button */}
                      <div
                        className="flex gap-[6.27px] items-center justify-center px-[12.54px] py-[7.524px] relative rounded-[6269.214px] shrink-0 size-10"
                        data-name="secondary-btn"
                      >
                        <div
                          aria-hidden
                          className="absolute border-[#2d2d2d] border-[0.94px] border-solid inset-0 pointer-events-none rounded-[6269.214px]"
                        />
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="-scale-y-100 flex-none rotate-180">
                            <div
                              className="relative size-[12.54px]"
                              data-name="arrow-up"
                            >
                              <svg
                                className="absolute block inset-0 size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 12.5397 12.5397"
                              >
                                <g id="arrow-up">
                                  <path
                                    d={svgPaths.p17f46700}
                                    id="Vector"
                                    stroke="var(--stroke-0, #9D9D9D)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d={svgPaths.p38c45180}
                                    id="Vector_2"
                                    stroke="var(--stroke-0, #9D9D9D)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Next Button */}
                      <div
                        className="bg-black flex gap-[6.27px] items-center justify-center px-[12.54px] py-[7.524px] relative rounded-[6269.214px] shrink-0 size-10"
                        data-name="secondary-btn"
                      >
                        <div
                          aria-hidden
                          className="absolute border-[#a1a1aa] border-[0.94px] border-solid inset-0 pointer-events-none rounded-[6269.214px]"
                        />
                        <div
                          className="relative shrink-0 size-[12.54px]"
                          data-name="arrow-up"
                        >
                          <svg
                            className="absolute block inset-0 size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 12.5397 12.5397"
                          >
                            <g id="arrow-up">
                              <path
                                d={svgPaths.p17f46700}
                                id="Vector"
                                stroke="var(--stroke-0, white)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d={svgPaths.p38c45180}
                                id="Vector_2"
                                stroke="var(--stroke-0, white)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Dots Indicator */}
                    <div
                      className="bg-[#f4f4f4] flex gap-1.25 items-center p-1 relative rounded-[100px] shrink-0"
                      data-name="Component 94"
                    >
                      {/* Progress Bar */}
                      <div
                        className="h-2.5 relative shrink-0 w-15"
                        data-name="Component 89"
                      >
                        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[5px]" />
                        <div className="absolute bg-[#a1a1aa] inset-[0_83.33%_0_0] rounded-[5px]" />
                      </div>
                      {/* Dot 1 */}
                      <div className="relative shrink-0 size-1.5">
                        <svg
                          className="absolute block inset-0 size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 6 6"
                        >
                          <circle
                            cx="3"
                            cy="3"
                            fill="var(--fill-0, #D4D4D8)"
                            id="Ellipse 2911"
                            r="3"
                          />
                        </svg>
                      </div>
                      {/* Dot 2 */}
                      <div className="relative shrink-0 size-1.5">
                        <svg
                          className="absolute block inset-0 size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 6 6"
                        >
                          <circle
                            cx="3"
                            cy="3"
                            fill="var(--fill-0, #D4D4D8)"
                            id="Ellipse 2911"
                            r="3"
                          />
                        </svg>
                      </div>
                      {/* Dot 3 */}
                      <div className="relative shrink-0 size-1.5">
                        <svg
                          className="absolute block inset-0 size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 6 6"
                        >
                          <circle
                            cx="3"
                            cy="3"
                            fill="var(--fill-0, #D4D4D8)"
                            id="Ellipse 2911"
                            r="3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="flex flex-1 flex-row self-stretch w-full">
            <div className="bg-black flex-1 min-w-0 relative w-full">
              <div className="flex flex-col gap-10 lg:gap-15 items-start p-6 sm:p-10 lg:p-15 relative w-full h-full">
                {/* Header Text */}
                <div className="flex flex-col gap-6 items-start justify-center relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-start max-w-150 relative shrink-0 w-full">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-0 not-italic relative shrink-0 text-[#f3fe00] text-[14px] whitespace-nowrap">
                      <p className="leading-5">Contact Us</p>
                    </div>
                    <div className="flex flex-col items-start relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter_Tight:SemiBold',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[28px] sm:text-[32px] lg:text-[36px] text-white tracking-[-0.72px] w-full">
                        <p className="leading-8.5 sm:leading-10 lg:leading-11">
                          Lets work on what you care about!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center relative shrink-0 w-full">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-0 not-italic relative shrink-0 text-[#d4d4d8] text-[15px] sm:text-[16px] w-full">
                      <p className="leading-6">
                        Got a project in mind? From a full UI/UX refresh to a
                        brand-new digital experience, we're ready to help. Let's
                        turn your vision into reality
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Fields + Button */}
                <div className="flex flex-col items-start relative w-full gap-10">
                  {/* Fields */}
                  <div className="flex flex-col gap-8 sm:gap-12 items-start relative shrink-0 w-full">
                    {/* Row 1: Full Name + Email */}
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start relative shrink-0 w-full">
                      <div className="flex flex-1 flex-col gap-3 items-start min-w-0 relative w-full">
                        <label
                          htmlFor="fullName"
                          className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-0 not-italic relative shrink-0 text-[#d5d5d5] text-[16px] whitespace-nowrap"
                        >
                          <p className="leading-6">Full Name*</p>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="bg-transparent border-0 border-b border-[#8F8F8F] focus:border-white focus:outline-none text-white text-[16px] font-['Inter:Regular',sans-serif] placeholder:text-[#8F8F8F] w-full pb-3"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 items-start min-w-0 relative w-full">
                        <label
                          htmlFor="email"
                          className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-0 not-italic relative shrink-0 text-[#d5d5d5] text-[16px] whitespace-nowrap"
                        >
                          <p className="leading-6">Email Address*</p>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="bg-transparent border-0 border-b border-[#8F8F8F] focus:border-white focus:outline-none text-white text-[16px] font-['Inter:Regular',sans-serif] placeholder:text-[#8F8F8F] w-full pb-3"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone + Country */}
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start relative shrink-0 w-full">
                      <div className="flex flex-1 flex-col gap-3 items-start min-w-0 relative w-full">
                        <label
                          htmlFor="phone"
                          className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-0 not-italic relative shrink-0 text-[#d5d5d5] text-[16px] whitespace-nowrap"
                        >
                          <p className="leading-6">Phone Number</p>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+92 3xx xxxxxxx"
                          className="bg-transparent border-0 border-b border-[#8F8F8F] focus:border-white focus:outline-none text-white text-[16px] font-['Inter:Regular',sans-serif] placeholder:text-[#8F8F8F] w-full pb-3"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 items-start min-w-0 relative w-full">
                        <label
                          htmlFor="country"
                          className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-0 not-italic relative shrink-0 text-[#d5d5d5] text-[16px] whitespace-nowrap"
                        >
                          <p className="leading-6">Country (Optional)</p>
                        </label>
                        <input
                          id="country"
                          name="country"
                          type="text"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="Pakistan"
                          className="bg-transparent border-0 border-b border-[#8F8F8F] focus:border-white focus:outline-none text-white text-[16px] font-['Inter:Regular',sans-serif] placeholder:text-[#8F8F8F] w-full pb-3"
                        />
                      </div>
                    </div>

                    {/* Row 3: Message */}
                    <div className="flex flex-col gap-3 items-start justify-center relative shrink-0 w-full">
                      <label
                        htmlFor="message"
                        className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-0 not-italic relative shrink-0 text-[#d5d5d5] text-[16px]"
                      >
                        <p className="leading-6">Message</p>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="bg-transparent border-0 border-b border-[#8F8F8F] focus:border-white focus:outline-none text-white text-[16px] font-['Inter:Regular',sans-serif] placeholder:text-[#8F8F8F] w-full pb-3 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                    <div className="flex items-center justify-end relative shrink-0 w-full">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="flex-1 relative rounded-[999999px] w-full cursor-pointer p-[1.5px] bg-linear-to-r from-[#f3fe00] to-[#33de1d] transition-all duration-300 group"
                        data-name="lets talk"
                      >
                        {/* Inner dark fill */}
                        <div className="bg-[#0a0a0a] rounded-[999999px] flex items-center justify-center px-5.5 py-3.5 w-full group-hover:bg-transparent transition-all duration-300">
                          <p className="font-['Inter_Tight:SemiBold',sans-serif] leading-5.25 not-italic text-[16px] text-white group-hover:text-black text-center whitespace-nowrap">
                            Submit Inquiry
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
