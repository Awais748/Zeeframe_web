import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { NAV_LINKS } from "../../../data/servicesData.js";
import { Button } from "../../ui/Button";
import MegaDropdown from "./Megadropdown";
import useServicesStore from "../../../store/store.js";
import {
  UIUX,
  Brand,
  Code,
  Consult,
  UX,
  Product,
  Arc,
  Guideline,
  Prototyping,
  Web,
  Mobile,
  Motion,
} from "../../../assets/icons/icon.jsx";

import logoIcon from "../../../assets/icons/zeeframeicon.svg";
import logoWordmark from "../../../assets/icons/zeeframelogo.svg";
import { ChevronDown } from "lucide-react";

const categoryIcons = {
  "ui-ux-design": <UIUX />,
  "brand-design": <Brand />,
  "no-code-development": <Code />,
};

const serviceIcons = {
  "ui-ux-consulting": <Consult />,
  "ux-research-insights": <UX />,
  "ux-audit-product-optimization": <Product />,
  "experience-architecture": <Arc />,
  "design-systems-guidelines": <Guideline />,
  "prototyping-user-testing": <Prototyping />,
  "web-design": <Web />,
  "mobile-design": <Mobile />,
  "brand-identity-design": <Consult />,
  "brand-strategy-positioning": <UX />,
  "motion-design": <Motion />,
  "visual-communication-design": <Arc />,
  "rebranding-evolution": <Guideline />,
  "webflow-development": <Consult />,
  "framer-development": <UX />,
  "figma-sites": <Product />,
  "platform-maintenance-support": <Arc />,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const {
    dropDownOpen,
    toggleDropdown,
    fetchData,
    data,
    activeCategory,
    setCategory,
  } = useServicesStore();
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

  const handleMobileServicesToggle = () => {
    if (!data) fetchData();
    toggleDropdown();
  };

  const handleMobileLinkClick = () => {
    setOpen(false);
    if (dropDownOpen) toggleDropdown();
  };

  const currentMobileCategory = data?.categories?.find(
    (cat) => cat.id === activeCategory
  );
  const mobileFilteredServices = currentMobileCategory?.services || [];

  return (
    <nav className="w-full bg-[#0d0d0d] sticky top-0 z-100">
      <div className="container">
        <div className="px-5 py-6 flex items-center justify-between">
          <a>
            <span className="inline-flex items-center gap-[7.38px]">
              <img
                src={logoIcon}
                alt=""
                className="block w-[22.5px] h-[22.5px] shrink-0"
              />
              <img
                src={logoWordmark}
                alt="ZeeFrames"
                className="block w-[133.395px] h-[19.413px] shrink-0"
              />
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
              <Button
                variant="whitetrans"
                size="sm"
                icon="arrow-nav"
                iconSize={16}
              >
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

      {open && (
        <div
          className="min-[1100px]:hidden fixed inset-0 top-[73px] bg-[#0d0d0d] px-5 py-5 flex flex-col items-center gap-1 z-99 overflow-y-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {NAV_LINKS.map((link) => {
            if (link.text === "Services") {
              return (
                <div
                  key={link.path}
                  className="w-full flex flex-col items-center"
                >
                  <button
                    type="button"
                    onClick={handleMobileServicesToggle}
                    className={`inline-flex px-4 py-2 items-center gap-2 rounded-full border border-transparent text-base font-normal leading-5 cursor-pointer transition-all duration-150 hover:border-[#1b1b1b] hover:bg-[#0b0b0b] ${
                      dropDownOpen ? "text-[#F3FE00]" : "text-white"
                    }`}
                  >
                    {link.text}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        dropDownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {dropDownOpen && data && (
                    <div className="w-full mt-3 flex flex-col gap-1">
                      {/* Category rows with icons */}
                      <div className="w-full flex flex-col gap-1">
                        {data.categories.map((cat) => {
                          const isActive = activeCategory === cat.id;
                          return (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => setCategory(cat.id)}
                              className={`w-full p-4 rounded-lg flex items-center gap-3 transition-colors duration-200 ${
                                isActive
                                  ? "bg-[rgba(243,254,0,0.08)]"
                                  : "hover:bg-[rgba(243,254,0,0.08)]"
                              }`}
                            >
                              <span className="shrink-0">
                                {categoryIcons[cat.id] || <Code />}
                              </span>
                              <p className="text-sm font-semibold text-white">
                                {cat.label}
                              </p>
                            </button>
                          );
                        })}
                      </div>

                      {/* Services list for active category - card style */}
                      <div className="w-full flex flex-col gap-2 mt-3">
                        {mobileFilteredServices.map((service) => (
                          <NavLink
                            key={service.id}
                            to={service.href}
                            onClick={handleMobileLinkClick}
                            className="w-full p-4 rounded-sm hover:bg-[rgba(243,254,0,0.08)] transition-colors duration-200"
                          >
                            <div className="flex gap-3">
                              <span className="shrink-0 mt-0.5">
                                {serviceIcons[service.id] || <Consult />}
                              </span>
                              <div className="flex flex-col gap-1">
                                <h3 className="text-lg text-white font-semibold leading-6">
                                  {service.dropdown_label}
                                </h3>
                                <p className="text-sm text-[#8D8D8D] leading-5">
                                  {service.dropdown_description}
                                </p>
                              </div>
                            </div>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className="inline-flex px-4 py-2 items-center gap-2.5 rounded-full border border-transparent text-white text-sm font-normal leading-5 cursor-pointer transition-all duration-150 hover:border-[#1b1b1b] hover:bg-[#0b0b0b]"
                onClick={handleMobileLinkClick}
              >
                {link.text}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
}
