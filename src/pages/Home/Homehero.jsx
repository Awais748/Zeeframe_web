import logo from "../../assets/images/sheild.webp";
import { Button } from "../../Components/ui/Button";
import cloud from "../../assets/images/cloud.svg";
import star from "../../assets/images/star.svg";
import walmart from "../../assets/images/wal-mart.webp";
import cisco from "../../assets/images/cisco.webp";
import yallamotor from "../../assets/images/yallaMotor.webp";
import nisan from "../../assets/images/nissan-motor-corporation.webp";
import trifla from "../../assets/images/trafilea.webp";
import repurpose from "../../assets/images/repurpose.webp";
import adiqat from "../../assets/images/adiqat.webp";
import Lets from "../../assets/images/letstalk.svg";

import {
  FigmaIcon,
  XD,
  FrameW,
  Vector,
  Frame2,
  Diamond,
} from "../../assets/icons/icon";
const logos = [walmart, cisco, trifla, yallamotor, nisan, repurpose, adiqat];

const Icons = [
  { icon: <FigmaIcon /> },
  { icon: <Diamond /> },
  { icon: <XD /> },
  { icon: <FrameW /> },
  { icon: <Vector /> },
  { icon: <Frame2 /> },
];

const HeroSection = () => {
  return (
    <section className="bg-black relative overflow-hidden">
      <div className="container">
        {/* ── Glow blobs ── */}
        <div className="pointer-events-none absolute left-[5%] top-40 h-80 w-[320px] rounded-full bg-[#F3FE00]/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-[5%] top-40 h-80 w-[320px] rounded-full bg-[#F3FE00]/20 blur-[120px]" />

        <div className="sm:flex flex-wrap sm:my-12 my-8 items-center gap-3 relative z-30 border border-[#1F1F1F] w-fit justify-center mx-auto p-2 rounded-md">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#F3FE00]">
              <img src={logo} alt="logo" className="h-4" />
            </span>
            <p className="text-base leading-6 text-white">
              Trusted by startups to craft $100M+ designs with
            </p>
          </div>

          <ul className="flex items-center sm:mt-0 mt-3 group -translate-x-2 mr-2 ml-2">
            {Icons.map((item, index) => (
              <li
                key={index}
                className={`flex items-center justify-center transition-transform duration-300 ease-in-out ${
                  index > 0 ? "group-hover:translate-x-1" : ""
                }`}
              >
                <span className="-ms-1.75 w-8 h-8 rounded-full bg-[#303030] border border-[#0D0D0C] flex items-center justify-center">
                  {item.icon}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Heading ── */}
        <div className="relative text-center sm:mt-12 mt-0">
          <div className="pointer-events-none  absolute  sm:left-35 left-0 sm:-top-35 top-0 ">
            <img
              src={cloud}
              alt=""
              loading="lazy"
              className="sm:h-[429px] h-[174px] sm:w-[435px] w-[176px]"
            />
          </div>
          <div className="pointer-events-none absolute sm:top-65  top-41 sm:right-210 right-65 z-0">
            <img src={star} alt="" loading="lazy" />
          </div>

          <h1 className=" relative text-center sm:text-7xl text-4xl z-10  sm:w-243 w-81.75 uppercase ff_geologica mx-auto font-extrabold sm:leading-24 leading-12.5 text-[#FFF]">
            Creative Intelligence in Every Pixel
          </h1>
          <span className="absolute right-23 ff_geologica top-4 sm:block hidden z-15 rounded-md rotate-7 bg-[#F3FE00] px-2 py-1 text-xs font-extrabold text-black">
            NO CODE
          </span>
        </div>

        {/* ── Subtitle ── */}
        <p className="mx-auto mt-3 sm:mb-12 mb-0 ff_geologica sm:text-xl  text-base text-gray-400 text-center">
          We Craft <span className="text-[#F3FE00]">Stunning</span> Designs For
          Businesses Worldwide.
        </p>

        {/* ── CTAs ── */}
        <div className="sm:mt-8 mt-6 flex justify-center gap-4">
          <Button
            href="https://calendly.com/contact-zeeframes/30min?month=2026-01"
            variant="white"
            size="lg"
            className="relative group overflow-hidden"
            target="_blank"
          >
            <span className="flex items-center justify-center gap-3 transition-opacity duration-300 group-hover:opacity-0">
              Schedule Call
            </span>
            <span className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <img
                src={Lets}
                alt="thumb"
                className="w-11 h-11 transform -translate-x-4 opacity-0 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100"
              />
              <span className="transform translate-x-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                Lets Talk 🤙
              </span>
            </span>
          </Button>

          <Button
            href="https://www.figma.com/proto/Wvc5EAdw0leAMdlJ3tF6Be/ZeeFrames--Website-%7C-Portfolio-%7C-New-Branding?page-id=0%3A1&node-id=1653-10&viewport=-98%2C1247%2C0.16&t=I70aaK7I2yFjTlya-1&scaling=scale-down&content-scaling=fixed"
            variant="whitetrans"
            size="lg"
            className="relative group overflow-hidden"
            target="_blank"
          >
            <span className="transition-opacity duration-300 group-hover:opacity-0">
              © 2025 Work
            </span>
            <span className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 translate-x-2 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-x-0">
              Open
              <FigmaIcon />
            </span>
          </Button>
        </div>

        {/* ── Logo strip ── */}
        <p className="text-white text-sm text-center sm:mt-22 mt-8 font-medium">
          Trusted by Industry Leaders & Fast-Growing Startups
        </p>

        <div className="sm:mt-6 mt-5 sm:mb-21 mb-8 sm:mx-5 mx-0 overflow-hidden relative">
          <div className="flex logo-track sm:gap-12 gap-10 w-max animate-logo-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="brand"
                loading="lazy"
                className="h-8 w-38"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
