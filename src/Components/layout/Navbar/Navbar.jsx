import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../../data/servicesData";
import { Button } from "../../ui/Button";
import Icon from "../../ui/Icon";

import logoIcon from "../../../assets/icons/zeeframeicon.svg";
import logoWordmark from "../../../assets/icons/zeeframelogo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0d0d0d] sticky top-0 z-100">
      {/* ── Container ── */}
      <div className="container">
        <div className=" px-5 py-8.5 flex items-center justify-between">
          {/* ── Brand ── */}
          <a
            href="/"
            aria-label="ZeeFrames home"
            className="inline-flex items-center shrink-0"
          >
            <span className="inline-flex items-center gap-[7.38px]">
              <img
                src={logoIcon}
                alt=""
                className="block w-[22.5px] h-[22.5px] shrink-0"
              />
              <img
                src={logoWordmark}
                alt="ZeeFrames"
                className="block w-25 h-[14.5px] shrink-0"
              />
            </span>
          </a>

          {/* ── Center nav links — desktop only ── */}
          <div className="hidden max-[1100px]:hidden min-[1100px]:flex items-center">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `inline-flex px-4 py-2 justify-center items-center gap-2.5 rounded-full border text-white text-sm font-normal leading-5 whitespace-nowrap cursor-pointer transition-all duration-150 ${
                    isActive
                      ? "border-[#1b1b1b] bg-[#0b0b0b]"
                      : "border-transparent bg-[#0d0d0d] hover:border-[#1b1b1b] hover:bg-[#0b0b0b]"
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </div>

          {/* ── Right side ── */}
          <div className="flex items-center gap-2 shrink-0">
            {/* CTA — desktop only */}
            <div className="max-[1100px]:hidden">
              <Button
                variant="whitetrans"
                size="sm"
                icon="arrow-nav"
                iconSize={16}
              >
                Work with Us
              </Button>
            </div>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              className="min-[1100px]:hidden bg-transparent border-none p-1 cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                // Close icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 5H20"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 19H14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {open && (
        <div className="min-[1100px]:hidden absolute top-23 left-0 right-0 bg-[#111111] border-b border-[#222222] px-6 py-4 flex flex-col gap-1 z-99">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="inline-flex px-4 py-2 items-center gap-2.5 rounded-full border border-transparent text-white text-sm font-normal leading-5 cursor-pointer transition-all duration-150 hover:border-[#1b1b1b] hover:bg-[#0b0b0b]"
              onClick={() => setOpen(false)}
            >
              {link.text}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <div className="mt-2">
            <Button variant="white" size="sm" icon="arrow-nav" iconSize={16}>
              Work with Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
