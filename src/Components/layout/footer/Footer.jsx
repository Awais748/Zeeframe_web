import { Link } from "react-router-dom";
import imgFooterBg from "../../../assets/images/imgbackgroundfooter.jpg";
import imgLogoText from "../../../assets/images/imgLogoTextfooter.svg";
import imgIso from "../../../assets/images/iso.png";
import imgClutch from "../../../assets/images/imgClutchfooter.png";
import imgGoodfirms from "../../../assets/images/imgGoodfirms.svg";
import imgGoodfirms2 from "../../../assets/images/imgGoodfirms2.svg";
import imgCustomSw from "../../../assets/images/imgCustomSw.png";

import imgDribbble from "../../../assets/images/dribblefooter.svg";
import imgBehance from "../../../assets/images/imgbehancefooter.svg";
import imgYoutube from "../../../assets/images/ytfooter.svg";
import imgFacebook from "../../../assets/images/fbfooter.svg";
import imgLinkedin from "../../../assets/images/linkedlnfooter.svg";
import imgInstagram from "../../../assets/images/instagramfooter.svg";

const COMPANY_LINKS = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Services", path: "/services" },
  { text: "Work", path: "/work" },
  { text: "Insights", path: "/insights" },
];

const SERVICE_LINKS = [
  { text: "UX UI Design", path: "/services/ui-ux-consulting" },
  { text: "UX Research", path: "/services/ux-research-insights" },
  { text: "Design System", path: "/services/design-systems-guidelines" },
  { text: "Web App Design", path: "/services/web-design" },
  { text: "Mobile App Design", path: "/services/mobile-design" },
];

const INDUSTRY_LINKS = [
  { text: "Technology", path: "/industries/technology" },
  { text: "Education", path: "/industries/education" },
  { text: "FinTech", path: "/industries/fintech" },
  { text: "Crypto", path: "/industries/crypto" },
  { text: "HealthCare", path: "/industries/healthcare" },
  { text: "Real Estate", path: "/industries/real-estate" },
];

const SOCIALS = [
  {
    img: imgDribbble,
    label: "Dribbble",
    href: "https://dribbble.com/zeeframes",
  },
  { img: imgBehance, label: "Behance", href: "https://behance.net/zeeframes" },
  { img: imgYoutube, label: "YouTube", href: "https://youtube.com/@zeeframes" },
  {
    img: imgFacebook,
    label: "Facebook",
    href: "https://facebook.com/zeeframes",
  },
  {
    img: imgLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/zeeframes",
  },
  {
    img: imgInstagram,
    label: "Instagram",
    href: "https://instagram.com/zeeframes",
  },
];

// ── Arrow icon shared ─────────────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 opacity-0 -translate-x-2 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.66406 11.3327L11.3307 4.66602M11.3307 11.3327V4.66602H4.66406"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── NavCol — accepts { text, path }[] ─────────────────────────────────────────
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
          <Link
            key={link.path}
            to={link.path}
            className="group flex items-center gap-1.5 w-fit text-[#d4d4d8] text-[14px] leading-[21px] font-normal no-underline hover:text-white transition-colors duration-200"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="relative">
              {link.text}
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </span>
            <ArrowIcon />
          </Link>
        ))}
      </div>
    </div>
  );
}

function SocialBtn({ img, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10  flex items-center justify-center overflow-hidden shrink-0 transition-opacity duration-200 hover:opacity-70"
    >
      <img src={img} alt={label} className="w-6 h-6 object-contain" />
    </a>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="relative w-full border-t border-[#2a2a2a] bg-[#0b0b0b]">
      {/* Noise texture */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          src={imgFooterBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col gap-[48px] sm:gap-[60px] lg:gap-[72px] items-center py-10 sm:py-12 lg:py-16">
          {/* ── Big wordmark ── */}
          <div className="relative w-full shrink-0 h-[70px] sm:h-[110px] lg:h-[150px] xl:h-[180px]">
            <Link to="/" aria-label="ZeeFrames — home">
              <img
                src={imgLogoText}
                alt="ZeeFrames"
                className="absolute inset-0 w-full h-full object-contain object-left"
              />
            </Link>
          </div>

          {/* ── Middle row ── */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[101px] items-start w-full">
            {/* Brand column */}
            <div className="flex flex-col gap-8 shrink-0 w-full lg:w-auto lg:max-w-[393px]">
              <p
                className="text-[#d5d5d5] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] font-normal m-0"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We transform ideas into user-centered digital experiences for
                businesses worldwide, from Fortune 500s to startups, using
                Figma, Webflow, and no-code solutions.
              </p>

              {/* Trust badges */}
              <div className="flex items-center gap-5 flex-wrap">
                <img
                  src={imgIso}
                  alt="ISO Certified"
                  className="object-contain shrink-0 w-[52px] h-[52px] sm:w-[62px] sm:h-[62px]"
                />
                <img
                  src={imgClutch}
                  alt="Top Clutch"
                  className="object-contain shrink-0 w-[48px] h-[52px] sm:w-[57px] sm:h-[62px]"
                />
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
                      alt="GoodFirms"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
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

            {/* ── Nav columns — proper routes ── */}
            <div className="flex flex-1 flex-wrap sm:flex-nowrap gap-8 lg:gap-12 items-start min-w-0 w-full">
              <NavCol title="Company" links={COMPANY_LINKS} />
              <NavCol title="Services" links={SERVICE_LINKS} />
              <NavCol title="Industries" links={INDUSTRY_LINKS} />
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

            <Link
              to="/privacy-policy"
              className="group flex items-center gap-1.5 w-fit text-[#8f8f8f] text-[14px] leading-[21px] font-normal no-underline hover:text-white transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="relative">
                Privacy Policy
                <span className="absolute left-0 -bottom-0.5 w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </span>
              <ArrowIcon />
            </Link>

            {/* Socials */}
            <div className="flex items-center  gap-3 sm:gap-5">
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
