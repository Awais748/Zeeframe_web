import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const MegaDropdown = ({ onMouseEnter, onMouseLeave }) => {
  const { data, activeCategory, setCategory, toggleDropdown } =
    useServicesStore();
  const [servicesKey, setServicesKey] = useState(0);

  if (!data) return null;

  const { categories } = data;

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

  const currentCategory = categories.find((cat) => cat.id === activeCategory);
  const filteredServices = currentCategory?.services || [];

  const handleCategoryClick = (catId) => {
    if (catId !== activeCategory) {
      setCategory(catId);
      setServicesKey((prev) => prev + 1);
    }
  };

  return (
    <>
      <style>{`
        @keyframes megaFadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mega-dropdown-wrap {
          animation: megaFadeInUp 0.2s ease forwards;
        }
        .mega-services-grid {
          animation: megaFadeInUp 0.22s ease forwards;
        }
        .mega-service-card {
          opacity: 0;
          animation: megaFadeInUp 0.28s ease forwards;
        }
      `}</style>

      <div
        className="mega-dropdown-wrap pt-10 pb-25 bg-[#090909]"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* LEFT — Category Tabs */}
            <aside className="w-full lg:w-auto flex-shrink-0">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <div
                    key={cat.id}
                    className={`p-4 w-full lg:w-[279px] rounded-lg cursor-pointer transition-colors duration-200
                      hover:bg-[rgba(243,254,0,0.08)]
                      ${isActive ? "bg-[rgba(243,254,0,0.08)]" : ""}
                    `}
                    onClick={() => handleCategoryClick(cat.id)}
                  >
                    <div className="flex items-center gap-3">
                      <span>{categoryIcons[cat.id] || <Code />}</span>
                      <p className="text-base font-semibold text-white">
                        {cat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </aside>

            {/* RIGHT — Services Grid */}
            {activeCategory && (
              <div
                key={servicesKey}
                className="mega-services-grid w-full pr-2 [&::-webkit-scrollbar]:hidden"
                style={{
                  maxHeight: "420px",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredServices.map((service, index) => (
                    <Link
                      key={service.id}
                      to={service.href}
                      onClick={toggleDropdown}
                      className="mega-service-card p-5 bg-[#090909] rounded-sm
                        hover:bg-[rgba(243,254,0,0.08)] hover:-translate-y-1
                        transition-all duration-300"
                      style={{ animationDelay: `${index * 35}ms` }}
                    >
                      <div className="flex gap-3">
                        <span className="shrink-0 mt-0.5">
                          {serviceIcons[service.id] || <Consult />}
                        </span>
                        <div className="flex flex-col gap-1">
                          <h2 className="text-base text-white font-semibold leading-6">
                            {service.dropdown_label}
                          </h2>
                          <p className="text-base text-[#8D8D8D] leading-6">
                            {service.dropdown_description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaDropdown;
