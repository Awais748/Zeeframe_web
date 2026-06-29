import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { NAV_LINKS } from "../../../data/servicesData.js";
import { Button } from "../../ui/Button";
import MegaDropdown from "./Megadropdown";
import useServicesStore from "../../../store/store.js";

import logoIcon from "../../../assets/icons/zeeframeicon.svg";
import logoWordmark from "../../../assets/icons/zeeframelogo.svg";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { dropDownOpen, toggleDropdown, fetchData, data } = useServicesStore();
  const leaveTimer = useRef(null);

  useEffect(() => {
    if (!data) fetchData();
  }, []);

  const handleServicesEnter = () => {
    clearTimeout(leaveTimer.current);
    if (!dropDownOpen) toggleDropdown();
  };

  const handleServicesLeave = () => {
    leaveTimer.current = setTimeout(() => {
      if (dropDownOpen) toggleDropdown();
    }, 150);
  };

  // MegaDropdown se mouse enter kare toh timer cancel ho
  const handleDropdownEnter = () => {
    clearTimeout(leaveTimer.current);
  };

  // MegaDropdown se mouse leave kare toh close ho
  const handleDropdownLeave = () => {
    leaveTimer.current = setTimeout(() => {
      if (dropDownOpen) toggleDropdown();
    }, 150);
  };

  return (
    <nav className="w-full bg-[#0d0d0d] sticky top-0 z-100">
      <div className="container">
        <div className="px-5 py-6 flex items-center justify-between">
          <a>
            <span className="inline-flex items-center gap-[7.38px]">
              <img src={logoIcon} alt="" className="block w-[22.5px] h-[22.5px] shrink-0" />
              <img src={logoWordmark} alt="ZeeFrames" className="block w-[133.395px] h-[19.413px] shrink-0" />
            </span>
          </a>

          <div className="hidden max-[1100px]:hidden min-[1100px]:flex items-center">
            {NAV_LINKS.map((link) => {
              if (link.text === "Services") {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `inline-flex px-4 py-2 justify-center items-center gap-2.5 rounded-full border text-white text-base font-normal leading-5 whitespace-nowrap cursor-pointer transition-all duration-150 ${
                          isActive || dropDownOpen
                            ? "border-[#1b1b1b] bg-[#0b0b0b]"
                            : "border-transparent bg-[#0d0d0d] hover:border-[#1b1b1b] hover:bg-[#0b0b0b]"
                        }`
                      }
                    >
                      {link.text}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          dropDownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </NavLink>

                    {dropDownOpen && (
                      <div className="fixed left-0 top-[73px] w-screen z-50">
                        <MegaDropdown
                          onMouseEnter={handleDropdownEnter}
                          onMouseLeave={handleDropdownLeave}
                        />
                      </div>
                    )}
                  </div>
                );
              }

              return (
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
              );
            })}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="max-[1100px]:hidden">
              <Button variant="whitetrans" size="sm" icon="arrow-nav" iconSize={16}>
                Work with Us
              </Button>
            </div>
            <button
              type="button"
              className="min-[1100px]:hidden bg-transparent border-none p-1 cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10 5H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 19H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

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