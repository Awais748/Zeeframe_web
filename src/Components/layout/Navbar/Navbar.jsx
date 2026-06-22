import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../../data/servicesData";
import Icon from "../../ui/Icon";
import "./Navbar.css";

import logoIcon from "../../../assets/icons/zeeframeicon.svg";
import logoWordmark from "../../../assets/icons/zeeframelogo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="zf-nav">
      <a href="/" className="zf-brand" aria-label="ZeeFrames home">
        <span className="zf-brand-lockup">
          <img src={logoIcon} alt="" className="zf-logo-mark" />
          <img src={logoWordmark} alt="ZeeFrames" className="zf-brand-text" />
        </span>
      </a>

      <div className="zf-nav-center">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `zf-nav-link ${isActive ? "zf-nav-link--active" : ""}`
            }
          >
            {link.text}
          </NavLink>
        ))}
      </div>

      <div className="zf-nav-right">
        <button type="button" className="zf-nav-cta">
          Work with Us
          <Icon name="arrow-nav" size={16} />
        </button>

        <button
          type="button"
          className="zf-hamburger"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="zf-mobile-menu">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="zf-nav-link"
              onClick={() => setOpen(false)}
            >
              {link.text}
            </NavLink>
          ))}

          <button type="button" className="zf-nav-cta zf-nav-cta--mobile">
            Work with Us
            <Icon name="arrow-nav" size={16} />
          </button>
        </div>
      )}
    </nav>
  );
}
