const imgNoise =
  "https://www.figma.com/api/mcp/asset/76dbde0c-ef89-42bc-8ae3-539758899543";
const img002 =
  "https://www.figma.com/api/mcp/asset/fbfe7bb5-c436-42b5-ac1d-44e9d9edb53c";
const imgEllipse4 =
  "https://www.figma.com/api/mcp/asset/096023d4-a28f-43c3-a918-db974146eb00"; // large yellow-green glow left
const imgEllipse7 =
  "https://www.figma.com/api/mcp/asset/8144e552-ea12-4714-b68b-5d66217c0fa0"; // small glow top-right
const imgEllipse5 =
  "https://www.figma.com/api/mcp/asset/5e539236-1ce6-4a30-8360-c28e65710aed"; // small glow top-left
const imgEllipse6 =
  "https://www.figma.com/api/mcp/asset/d66b6ac5-a04f-4daa-8a06-ab4534fbfe02"; // glow bottom-left
const imgArrow =
  "https://www.figma.com/api/mcp/asset/fca2080f-b1e4-454c-9786-528a552aeb91";

export default function StartProject() {
  return (
    // Section wrapper: bg #0E0E0E, py 32px, flex row, overflow hidden
    <section className="bg-[#0e0e0e] relative overflow-hidden py-8 max-lg:py-12 max-sm:py-10">
      <div className="container flex items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-10">
        {/* ── Background glows ── */}

        {/* Large yellow-green glow — left, 549×549, top -131px left -116px */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ width: 549, height: 549, left: -116, top: -131 }}
        >
          <div className="absolute" style={{ inset: "-80.15%" }}>
            <img src={imgEllipse4} alt="" className="block w-full h-full" />
          </div>
        </div>

        {/* Small glow top-right — 276×276, left 1240px top -85px */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ width: 276, height: 276, left: 1240, top: -85 }}
        >
          <div className="absolute" style={{ inset: "-116.27%" }}>
            <img src={imgEllipse7} alt="" className="block w-full h-full" />
          </div>
        </div>

        {/* Small glow top-left overlay — 228×228, left -70px top -73px */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ width: 228, height: 228, left: -70, top: -73 }}
        >
          <div className="absolute" style={{ inset: "-50.57%" }}>
            <img src={imgEllipse5} alt="" className="block w-full h-full" />
          </div>
        </div>

        {/* Glow bottom-left — 324×324, left -82px top 374px */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ width: 324, height: 324, left: -82, top: 374 }}
        >
          <div className="absolute" style={{ inset: "-82.22%" }}>
            <img src={imgEllipse6} alt="" className="block w-full h-full" />
          </div>
        </div>

        {/* Noise texture overlay — full width 1440×364, opacity 32% */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.32]"
          style={{
            backgroundImage: `url("${imgNoise}")`,
            backgroundSize: "432px 192px",
            backgroundPosition: "top left",
            height: 364,
          }}
        />

        {/* ── Left: Text + CTA ── */}
        <div className="relative z-10 flex flex-col gap-9 shrink-0">
          {/* Text block */}
          <div className="flex flex-col gap-4 w-[603px] max-lg:w-full">
            {/* Heading: Inter Tight SemiBold 48/60 -0.96px white */}
            <h2
              className="text-white text-[48px] leading-[60px] tracking-[-0.96px] m-0 font-semibold max-lg:text-[36px] max-lg:leading-[44px] max-sm:text-[28px] max-sm:leading-[36px]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Start your UI/UX&nbsp; design project today
            </h2>

            <p
              className="text-[#fafafa] text-[18px] leading-7 m-0 font-normal max-sm:text-[16px]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Book a free discovery call with a senior designer no commitment,
              <br className="max-sm:hidden" /> no pressure.
            </p>
          </div>

          <button
            className="flex items-center gap-2 bg-[#f3fe00] px-4 py-2 rounded-[99999px] border border-transparent cursor-pointer w-fit transition-colors duration-200 hover:bg-transparent hover:border-[#f3fe00] group relative"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="text-black text-[16px] leading-6 font-medium whitespace-nowrap group-hover:text-transparent relative">
              Book a Free Discovery Call
              <span className="absolute inset-0 flex items-center justify-center text-[#f3fe00] opacity-0 group-hover:opacity-100">
                Let's Talk
              </span>
            </span>
            <img
              src={imgArrow}
              alt=""
              className="w-4 h-4 shrink-0 group-hover:invisible"
            />
          </button>
        </div>

        <div
          className="relative shrink-0 max-lg:self-auto "
          style={{ width: 300, height: 300 }}
        >
          <img
            src={img002}
            alt="3D star decoration"
            className="absolute object-cover "
            style={{ width: 293.18, height: 293.18, left: -15.68, top: 0 }}
          />
          <img
            src={img002}
            alt=""
            aria-hidden="true"
            className="absolute object-cover "
            style={{ width: 103.64, height: 103.64, left: 173.86, top: 12.95 }}
          />
        </div>
      </div>
    </section>
  );
}
