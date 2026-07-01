import { useState } from "react";
import data from "./deliverables.json";
import { MainCard, ExtraCard, DeliverableCard, icons } from "./Deliverablesui";

const { tabs, deliverablesByTab } = data;

const renderIcon = (key) => {
  const Icon = icons[key];
  return Icon ? <Icon /> : null;
};

const Deliverables = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabData = deliverablesByTab[activeTab];
  const isSpecial = tabData.layout === "special";

  return (
    <section className="w-full max-w-[1320px] mx-auto px-4 md:px-0 py-16 md:py-24">
      {/* ---------- Tabs ---------- */}
      <div className="container">
        <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors border ${
                activeTab === tab.id
                  ? "bg-[#F3FE00] text-black border-[#F3FE00]"
                  : "bg-transparent text-[#A1A1AA] border-[#27272A] hover:border-[rgba(255,255,255,0.16)]"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* ---------- Layout ---------- */}
        {!isSpecial ? (
          // Discover / Design tab layout: MainCard left, 2x2 grid right, extraCard (agar hai) neeche
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <MainCard
                title={tabData.mainTitle}
                description={tabData.mainDescription}
                hasExtraCard={!!tabData.extraCard}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {tabData.items.map((item, i) => (
                  <DeliverableCard
                    key={item.id}
                    icon={renderIcon(item.iconKey)}
                    number={item.number}
                    title={item.title}
                    description={item.description}
                    animationIndex={i}
                    className={i % 2 === 0 ? "sm:border-r-0" : ""}
                  />
                ))}
              </div>
            </div>
            {tabData.extraCard && (
              <ExtraCard
                icon={renderIcon(tabData.extraCard.iconKey)}
                number={tabData.extraCard.number}
                title={tabData.extraCard.title}
                description={tabData.extraCard.description}
              />
            )}
          </div>
        ) : (
          // Validate / Ship tab layout: MainCard left (full height), right side = topCard + 2-col grid
          <div className="grid grid-cols-1 md:grid-cols-2">
            <MainCard
              title={tabData.mainTitle}
              description={tabData.mainDescription}
            />
            <div className="flex flex-col">
              <DeliverableCard
                icon={renderIcon(tabData.topCard.iconKey)}
                number={tabData.topCard.number}
                title={tabData.topCard.title}
                description={tabData.topCard.description}
                animationIndex={0}
                className="border-b-0"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {tabData.items.map((item, i) => (
                  <DeliverableCard
                    key={item.id}
                    icon={renderIcon(item.iconKey)}
                    number={item.number}
                    title={item.title}
                    description={item.description}
                    animationIndex={i + 1}
                    className={i % 2 === 0 ? "sm:border-r-0" : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Deliverables;
