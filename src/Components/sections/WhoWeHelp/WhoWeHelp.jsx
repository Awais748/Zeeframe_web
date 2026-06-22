import React from "react";
import "./WhoWeHelp.css";
import { TABS, WHO_CARDS, GAP_ITEMS } from "../../../data/servicesData";
import gapImage from "../../../assets/images/whoweareimg.png";
import whoWeAreBackground from "../../../assets/images/whowearebackground.png";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";
import StickyTabs from "./Stickytabs";
import HowWeHelp from "../HowWeHelp/HowWeHelp";
import Process from "../Process/Process";
import Stack from "../stacksection/Stack";
import UseCases from "../UseCases/UseCases";
import Deliverables from "../Deliverables/Deliverables";
import WhyZeeframes from "../WhyZeeframes/WhyZeeframes";

export default function WhoWeHelp() {
  return (
    <div className="zf-tabs-scroll-area">
      <StickyTabs tabs={TABS} />
      <section
        id="who-we-help"
        className="zf-who"
        style={{ backgroundImage: `url(${whoWeAreBackground})` }}
      >
        <div className="container">
          <div className="container zf-who-content">
            <SectionHeader
              label="Who We Help"
              title="Who Our UI UX Design Services Are For"
              titleStyle={{ maxWidth: 442 }}
              description="The latest industry news, interviews, technologies, and resources. The latest industry news, interviews, technologies, and resources."
            />

            <div className="zf-who-cards">
              {WHO_CARDS.map((card) => (
                <div key={card.title} className="zf-who-card">
                  <div className="zf-card-icon">
                    <Icon name={card.icon} size={30} />
                  </div>
                  <div>
                    <p className="zf-card-name">{card.title}</p>
                    <p className="zf-card-desc">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="zf-gap-wrap" id="the-gap">
              <div className="zf-gap-img">
                <img
                  src={gapImage}
                  alt="UI wireframes on a monitor"
                  loading="lazy"
                />
              </div>
              <div className="zf-gap-right">
                <h3 className="zf-gap-h3">
                  Signs You Need a UI/UX Design Partner
                </h3>
                <p className="zf-gap-sub">
                  If any of these sound familiar, it&apos;s time to engage a UI
                  UX design agency:
                </p>
                <div className="zf-gap-list">
                  {GAP_ITEMS.map((item) => (
                    <div key={item} className="zf-gap-item">
                      <Icon name="star-yellow" size={12} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="black"
                  icon="arrow-black"
                  className="mt-2
                inline-flex items-center gap-1
                w-fit
                px-3 py-1
                rounded-full
                bg-black
                text-white
                border border-black
                transition-all duration-300
                hover:bg-transparent
                hover:text-black"
                >
                  Request a Free UX Review
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowWeHelp id="how-we-help" />
      <Process id="our-process" />
      <Stack id="stack" />
      <UseCases id="use-cases" />
      <Deliverables id="deliverables" />
      <WhyZeeframes id="why-zeeframes" />
    </div>
  );
}
