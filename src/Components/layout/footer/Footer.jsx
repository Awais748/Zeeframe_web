const imgFooterBg =
  "https://www.figma.com/api/mcp/asset/85600845-04e7-4e26-a8ed-68de8ad0bbde"; // noise texture bg
const imgLogoText =
  "https://www.figma.com/api/mcp/asset/6c9befc4-bdf2-440f-9ee5-f59428614a70"; // big ZeeFrames wordmark
const imgIso =
  "https://www.figma.com/api/mcp/asset/2b882b03-c564-4362-adfb-ee8b7c859168"; // ISO badge 62×62
const imgClutch =
  "https://www.figma.com/api/mcp/asset/14dd38ba-06e0-47cf-b41d-ed836e194a56"; // Clutch badge 57×62
const imgGoodfirms =
  "https://www.figma.com/api/mcp/asset/67148ef0-a9ab-4e1f-96aa-1f6627f8efb2"; // GoodFirms mask
const imgGoodfirms2 =
  "https://www.figma.com/api/mcp/asset/e7672f4f-e1fa-4bb3-a3ce-603ac6bd3ae6"; // GoodFirms inner
const imgCustomSw =
  "https://www.figma.com/api/mcp/asset/385cdc56-f037-48bf-823f-37544286af1f"; // custom-software badge

const imgDribbble =
  "https://www.figma.com/api/mcp/asset/3033662e-52ed-4694-8bc6-1face5d8435f"; // dribbble
const imgYoutube =
  "https://www.figma.com/api/mcp/asset/a25f0c9b-ef66-4a3b-a66f-ebb234ebad40"; // youtube
const imgBehance =
  "https://www.figma.com/api/mcp/asset/d4005c69-2a47-4524-b2d9-9a049a6c0b83"; // behance
const imgLinkedin =
  "https://www.figma.com/api/mcp/asset/cfa6f6c3-e6ee-4678-9c17-d8a4d0f12bd6"; // linkedin
const imgFacebook =
  "https://www.figma.com/api/mcp/asset/c3978bbc-3805-4fb3-a3ce-23ff171df27d"; // facebook
const imgInstagram =
  "https://www.figma.com/api/mcp/asset/58bb0f64-631a-4640-b972-28ccbd92b7b1"; // instagram

const COMPANY = ["Home", "About", "Services", "Work", "Insights"];
const SERVICES = [
  "UX UI Design",
  "UX Research",
  "Design System",
  "Web App Design",
  "Mobile App Design",
];
const INDUSTRIES = [
  "Technology",
  "Education",
  "FinTech",
  "Crypto",
  "HealthCare",
  "Real Estate",
];

const SOCIALS = [
  { img: imgDribbble, label: "Dribbble", href: "#" },
  { img: imgBehance, label: "Behance", href: "#" },
  { img: imgYoutube, label: "YouTube", href: "#" },
  { img: imgFacebook, label: "Facebook", href: "#" },
  { img: imgLinkedin, label: "LinkedIn", href: "#" },
  { img: imgInstagram, label: "Instagram", href: "#" },
];

function NavCol({ title, links }) {
  return (
    <div className="flex flex-col gap-5 flex-1 min-w-[140px]">
      <p
        className="text-white text-[16px] leading-5 font-semibold m-0 whitespace-nowrap"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {title}
      </p>
      <div className="flex flex-col gap-[14px]">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="group flex items-center gap-1.5 w-fit text-[#d4d4d8] text-[14px] leading-[21px] font-normal no-underline hover:text-white transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="relative">
              {link}
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-white opacity-0 group-hover:opacity-100"></span>
            </span>
            <svg
              className="w-4 h-4 opacity-0 -translate-x-2 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 shrink-0"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4.66406 11.3327L11.3307 4.66602M11.3307 11.3327V4.66602H4.66406"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

function SocialBtn({ img, label, href }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shrink-0"
    >
      <img src={img} alt={label} className="w-6 h-6 object-contain" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-[#2a2a2a] bg-[#0b0b0b]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          src={imgFooterBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container relative z-10">
        {/* Content */}
        <div className="flex flex-col gap-[48px] sm:gap-[60px] lg:gap-[72px] items-center py-10 sm:py-12 lg:py-16">
          {/* ── Big wordmark logo ── */}
          <div className="relative w-full shrink-0 h-[70px] sm:h-[110px] lg:h-[150px] xl:h-[180px]">
            <img
              src={imgLogoText}
              alt="ZeeFrames"
              className="absolute inset-0 w-full h-full object-contain object-left"
            />
          </div>

          {/* ── Middle row: brand left + nav cols right ── */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[101px] items-start w-full">
            {/* Brand column */}
            <div className="flex flex-col gap-8 shrink-0 w-full lg:w-auto lg:max-w-[393px]">
              {/* Tagline: Inter Regular 18/27 #D5D5D5 */}
              <p
                className="text-[#d5d5d5] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] font-normal m-0"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We transform ideas into user-centered digital experiences for
                businesses worldwide, from Fortune 500s to startups, using
                Figma, Webflow, and no-code solutions.
              </p>

              {/* Badges row */}
              <div className="flex items-center gap-5 flex-wrap">
                {/* ISO — 62×62 */}
                <img
                  src={imgIso}
                  alt="ISO Certified"
                  className="object-contain shrink-0 w-[52px] h-[52px] sm:w-[62px] sm:h-[62px]"
                />
                {/* Clutch — 57×62 */}
                <img
                  src={imgClutch}
                  alt="Top Clutch"
                  className="object-contain shrink-0 w-[48px] h-[52px] sm:w-[57px] sm:h-[62px]"
                />
                {/* GoodFirms — 79×54 */}
                <div className="relative overflow-hidden shrink-0 w-[67px] h-[46px] sm:w-[79px] sm:h-[54px]">
                  <div
                    className="absolute"
                    style={{
                      inset: "1.65% 0.43% 3.23% 5.06%",
                      maskImage: `url("${imgGoodfirms}")`,
                      maskSize: "100% 100%",
                      maskRepeat: "no-repeat",
                    }}
                  >
                    <img
                      src={imgGoodfirms2}
                      alt=""
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                {/* Custom Software — 90×60 */}
                <div className="relative overflow-hidden shrink-0 w-[76px] h-[51px] sm:w-[90px] sm:h-[60px]">
                  <img
                    src={imgCustomSw}
                    alt="Custom Software Development"
                    className="absolute object-contain"
                    style={{
                      width: "99.81%",
                      height: "124%",
                      left: "1.25%",
                      top: "-7.17%",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Nav columns */}
            <div className="flex flex-1 flex-wrap sm:flex-nowrap gap-8 lg:gap-12 items-start min-w-0 w-full">
              <NavCol title="Company" links={COMPANY} />
              <NavCol title="Services" links={SERVICES} />
              <NavCol title="Industries" links={INDUSTRIES} />
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full border-t border-[#2a2a2a] pt-8 text-center md:text-left">
            {/* Copyright */}
            <p
              className="text-[#8f8f8f] text-[13px] sm:text-[14px] leading-[21px] font-normal m-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              © 2026 Copyright ZeeFrames Private Limited. All rights reserved.
            </p>

            {/* Privacy Policy */}
            <a
              href="#"
              className="group flex items-center gap-1.5 w-fit text-[#8f8f8f] text-[14px] leading-[21px] font-normal no-underline hover:text-white transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="relative">
                Privacy Policy
                <span className="absolute left-0 -bottom-0.5 w-full h-[1px] bg-white opacity-0 group-hover:opacity-100"></span>
              </span>
              <svg
                className="w-4 h-4 opacity-0 -translate-x-2 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 shrink-0"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4.66406 11.3327L11.3307 4.66602M11.3307 11.3327V4.66602H4.66406"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {SOCIALS.map((s) => (
                <SocialBtn key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
