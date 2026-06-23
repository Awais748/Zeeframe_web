import heroBlob from "../../../assets/images/hero-blob.png";
import isoBadge from "../../../assets/images/iso.png";
import clutchBadge from "../../../assets/images/clutch.png";
import awardBadge from "../../../assets/images/award.png";
import videoWidget from "../../../assets/images/video-widget.png";
import heroBackgroundImage from "../../../assets/images/herobackgroundcomponent.png";
import GoodFirmsLogo from "../../../assets/icons/goodfirms-logo.svg?react";
import { Button } from "../../ui/Button";
import Icon from "../../ui/Icon";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-[#030303] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      aria-label="UI UX Design Agency hero"
    >
      {/* ── Blob ── */}
      <img
        src={heroBlob}
        alt=""
        className="absolute right-0 -top-[14px] w-[431px] h-[402px] object-cover opacity-50 pointer-events-none z-0"
      />

      {/* ── Container ── */}
      <div className="w-full max-w-[1440px] mx-auto px-[60px] max-[1100px]:px-6 max-[640px]:px-5">
        {/* ── Inner ── */}
        <div className="relative z-[2] w-full flex flex-col gap-8 pt-[60px] pb-[80px] max-[1100px]:pt-10 max-[1100px]:pb-[60px] max-[640px]:pt-8 max-[640px]:pb-12 max-[1100px]:gap-7 max-[640px]:gap-6">
          {/* ── Breadcrumb ── */}
          <nav
            className="hidden min-[1100px]:flex items-center gap-[10px]"
            aria-label="Breadcrumb"
          >
            <a
              href="/"
              className="inline-flex items-center gap-[6px] text-sm font-medium leading-5 text-[#9ca3af] no-underline hover:text-white transition-colors"
            >
              <Icon name="breadcrumb-home" size={12} aria-hidden="true" />
              <span>Home</span>
            </a>
            <Icon
              name="breadcrumb-chevron"
              size={12}
              className="flex-shrink-0 text-[#71717a]"
              aria-hidden="true"
            />
            <a
              href="/services"
              className="inline-flex items-center gap-[6px] text-sm font-medium leading-5 text-[#9ca3af] no-underline hover:text-white transition-colors"
            >
              <span>Services</span>
            </a>
            <Icon
              name="breadcrumb-chevron"
              size={12}
              className="flex-shrink-0 text-[#71717a]"
              aria-hidden="true"
            />
            <span
              className="inline-flex items-center text-sm font-medium leading-5 text-white"
              aria-current="page"
            >
              UI/UX Design
            </span>
          </nav>

          {/* ── Hero Body ── */}
          <div className="flex items-end justify-between w-full max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-10 max-[1100px]:justify-start">
            {/* ── Left column ── */}
            <div className="flex flex-col gap-8 w-[675px] flex-shrink-0 max-[1100px]:w-full max-[640px]:gap-6">
              {/* Heading + desc */}
              <div className="flex flex-col gap-2">
                <h1 className="font-['Inter_Tight'] font-semibold text-[48px] leading-[60px] tracking-[-0.96px] text-white m-0 max-[1100px]:text-[36px] max-[1100px]:leading-[46px] max-[1100px]:tracking-[-0.72px] max-[640px]:text-[28px] max-[640px]:leading-[36px] max-[640px]:tracking-[-0.56px]">
                  UI UX Design Agency
                </h1>
                <p className="font-['Inter'] text-base font-normal leading-6 text-[#d4d4d8] max-w-[623px] m-0 max-[1100px]:max-w-full max-[640px]:text-[15px] max-[640px]:leading-[23px]">
                  ZeeFrames is a UI/UX design agency crafting intuitive,
                  high-converting digital products with research-driven UX,
                  polished UI, and AI-powered speed.
                </p>
              </div>

              {/* Trust / Badges */}
              <div className="flex flex-col gap-6 max-[640px]:gap-4">
                <p className="font-['Inter'] text-sm font-medium leading-5 tracking-[0.04em] text-white m-0">
                  TRUSTED. CERTIFIED. PROVEN.
                </p>
                <div className="flex items-center gap-5 h-[62px] max-[640px]:h-auto max-[640px]:flex-wrap max-[640px]:gap-3">
                  <img
                    src={isoBadge}
                    alt="ISO 9001:2015 Certified"
                    loading="lazy"
                    draggable="false"
                    className="flex-shrink-0 block w-[62px] h-[62px] object-cover max-[640px]:w-12 max-[640px]:h-12"
                  />
                  <img
                    src={clutchBadge}
                    alt="Top Clutch Pakistan"
                    loading="lazy"
                    draggable="false"
                    className="flex-shrink-0 block w-[57.35px] h-[62px] object-cover max-[640px]:w-11 max-[640px]:h-12"
                  />
                  <GoodFirmsLogo
                    className="flex-shrink-0 block w-[79.258px] h-[54px] object-contain max-[640px]:w-[62px] max-[640px]:h-[42px]"
                    aria-label="GoodFirms Top Company"
                    role="img"
                  />
                  <img
                    src={awardBadge}
                    alt="Award 2025 Winner – Custom Software Development"
                    loading="lazy"
                    draggable="false"
                    className="flex-shrink-0 block w-[90px] h-[60px] object-contain max-[640px]:w-[70px] max-[640px]:h-[46px]"
                  />
                </div>
              </div>
            </div>

            {/* ── CTA Card — desktop only ── */}
            <div
              className="bg-[rgba(56,56,56,0.35)] backdrop-blur-[6px] border border-[rgba(255,255,255,0.12)] rounded-2xl p-4 flex gap-4 items-start flex-shrink-0 box-border max-[1100px]:hidden"
              aria-label="Book a free discovery call"
            >
              {/* Video block */}
              <div className="w-[163px] h-[168px] rounded-[4px] flex-shrink-0 overflow-hidden relative self-stretch">
                <img
                  src={videoWidget}
                  alt="ZeeFrames team collaborating"
                  loading="lazy"
                  draggable="false"
                  className="w-full h-full object-cover rounded-[4px] block"
                />
                <div className="absolute inset-0 rounded-[4px] bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />
              </div>

              {/* Right copy + CTA */}
              <div className="flex flex-col gap-6 items-start flex-1 min-w-0">
                <div className="flex flex-col gap-2 w-full">
                  <p className="font-['Inter_Tight'] font-medium text-lg leading-7 w-[223px] text-white m-0 break-words">
                    Ready to build a product users love?
                  </p>
                  <p className="font-['Inter'] text-sm font-normal leading-5 w-[223px] text-[#d4d4d8] m-0 break-words">
                    Book a free 30-minute discovery call with a senior UI UX
                    designer.
                  </p>
                </div>
                <Button
                  variant="yellow"
                  href="#schedule"
                  icon="Heroarrowbtn"
                  className="w-full px-5 py-[10px] text-sm hover:bg-transparent hover:text-[#f3fe00] hover:border-[#f3fe00]"
                >
                  Schedule Your Free Call
                </Button>
              </div>
            </div>
          </div>

          {/* ── CTA Card — mobile only ── */}
          <div
            className="hidden max-[1100px]:flex bg-[rgba(56,56,56,0.35)] backdrop-blur-[6px] border border-[rgba(255,255,255,0.12)] rounded-2xl p-4 gap-4 items-start w-full box-border max-[640px]:flex-col max-[640px]:gap-3"
            aria-label="Book a free discovery call"
          >
            {/* Video block */}
            <div className="w-[140px] h-[140px] rounded-[4px] flex-shrink-0 overflow-hidden relative max-[640px]:w-full max-[640px]:h-[180px]">
              <img
                src={videoWidget}
                alt="ZeeFrames team collaborating"
                loading="lazy"
                draggable="false"
                className="w-full h-full object-cover rounded-[4px] block"
              />
              <div className="absolute inset-0 rounded-[4px] bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />
            </div>

            {/* Right copy + CTA */}
            <div className="flex flex-col gap-4 items-start flex-1 min-w-0 max-[640px]:w-full max-[640px]:gap-3">
              <div className="flex flex-col gap-2 w-full">
                <p className="font-['Inter_Tight'] font-medium text-lg leading-7 text-white m-0">
                  Ready to build a product users love?
                </p>
                <p className="font-['Inter'] text-sm font-normal leading-5 text-[#d4d4d8] m-0">
                  Book a free 30-minute discovery call with a senior UI UX
                  designer.
                </p>
              </div>
              <Button
                variant="yellow"
                href="#schedule"
                icon="Heroarrowbtn"
                className="w-full px-5 py-[10px] text-sm hover:bg-transparent hover:text-[#f3fe00] hover:border-[#f3fe00]"
              >
                Schedule Your Free Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
