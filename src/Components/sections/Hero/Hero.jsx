import heroBlob from "../../../assets/images/hero-blob.png";
import isoBadge from "../../../assets/images/iso.png";
import clutchBadge from "../../../assets/images/clutch.png";
import awardBadge from "../../../assets/images/award.png";
import videoWidget from "../../../assets/images/video-widget.png";
import heroBackgroundImage from "../../../assets/images/herobackgroundcomponent.png";
import GoodFirmsLogo from "../../../assets/icons/goodfirms-logo.svg?react";
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";

import "./Hero.css";

function Breadcrumb() {
  return (
    <nav className="zf-breadcrumb" aria-label="Breadcrumb">
      <a href="/" className="zf-breadcrumb-item">
        <Icon name="breadcrumb-home" size={12} aria-hidden="true" />
        <span>Home</span>
      </a>

      <Icon
        name="breadcrumb-chevron"
        size={12}
        className="zf-breadcrumb-sep"
        aria-hidden="true"
      />

      {/* Services */}
      <a href="/services" className="zf-breadcrumb-item">
        <span>Services</span>
      </a>

      <Icon
        name="breadcrumb-chevron"
        size={12}
        className="zf-breadcrumb-sep"
        aria-hidden="true"
      />

      {/* Current page */}
      <span
        className="zf-breadcrumb-item zf-breadcrumb-current"
        aria-current="page"
      >
        UI/UX Design
      </span>
    </nav>
  );
}

function BadgeRow() {
  return (
    <div className="zf-trust-section">
      <p className="zf-trust-label">TRUSTED. CERTIFIED. PROVEN.</p>

      <div className="zf-badges">
        {/* ISO badge — 62×62 */}
        <img
          src={isoBadge}
          alt="ISO 9001:2015 Certified"
          className="zf-badge zf-badge-iso"
          loading="lazy"
          draggable="false"
        />

        {/* Clutch badge — 57.35×62 */}
        <img
          src={clutchBadge}
          alt="Top Clutch Pakistan"
          className="zf-badge zf-badge-clutch"
          loading="lazy"
          draggable="false"
        />

        {/* GoodFirms SVG — 79.258×54 */}
        <GoodFirmsLogo
          className="zf-badge zf-badge-goodfirms"
          aria-label="GoodFirms Top Company"
          role="img"
        />

        {/* Award badge — 90×60 */}
        <img
          src={awardBadge}
          alt="Award 2025 Winner – Custom Software Development"
          className="zf-badge zf-badge-award"
          loading="lazy"
          draggable="false"
        />
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <>
      <div className="zf-card-video" aria-hidden="true">
        <img
          src={videoWidget}
          alt="ZeeFrames team collaborating"
          loading="lazy"
          draggable="false"
        />
      </div>

      <div className="zf-card-right">
        <div className="zf-card-copy">
          <p className="zf-card-title">Ready to build a product users love?</p>
          <p className="zf-card-sub">
            Book a free 30-minute discovery call with a senior UI UX designer.
          </p>
        </div>

        <Button
          as="a"
          href="#schedule"
          variant="yellow"
          icon="Heroarrowbtn"
          className="zf-hero-card-btn"
        >
          Schedule Your Free Call
        </Button>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <section
      className="zf-hero"
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      aria-label="UI UX Design Agency hero"
    >
      <div className="container">
        <div className="zf-hero-f" aria-hidden="true">
          <img src={heroBlob} alt="" className="zf-hero-blob" />

          <div className="zf-hero-inner">
            <Breadcrumb />

            <div className="zf-hero-body">
              <div className="zf-hero-left">
                <div className="zf-hero-heading">
                  <h1 className="zf-hero-h1">UI UX Design Agency</h1>
                  <p className="zf-hero-desc">
                    ZeeFrames is a UI/UX design agency crafting intuitive,
                    high-converting digital products with research-driven UX,
                    polished UI, and AI-powered speed.
                  </p>
                </div>

                <BadgeRow />
              </div>

              <div
                className="zf-hero-card"
                aria-label="Book a free discovery call"
              >
                <CardContent />
              </div>
            </div>

            <div
              className="zf-hero-card-mobile"
              aria-label="Book a free discovery call"
            >
              <CardContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
