import "./Process.css";

const iconDiscovery = "https://www.figma.com/api/mcp/asset/22c9c159-6912-492a-899c-c36e2989fa24";
const iconIA        = "https://www.figma.com/api/mcp/asset/f72cd2b1-2f07-4f8d-ba5f-d8d006c0db9b"; 
const iconDesign    = "https://www.figma.com/api/mcp/asset/2872b4ff-81e1-469e-9a67-28b809b12b05";  

// Star bullet icon
const iconStar      = "https://www.figma.com/api/mcp/asset/ee5f0094-9cf1-485b-bb12-fb0812d978eb";

// CTA card
const procCardBg    = "https://www.figma.com/api/mcp/asset/f20c9a5e-5236-4ce4-87d1-bc55036e1ef6";
const iconArrow     = "https://www.figma.com/api/mcp/asset/7f501b3e-6860-43c1-9570-80010f1d21a9";

const PROCESS_CARDS = [
  {
    id: "discovery",
    icon: iconDiscovery,
    iconAlt: "Discovery phase icon",
    title: "Discovery & Research",
    contentGap: "zf-proc-content--gap12",   
    bullets: [
      "Kickoff workshop and stakeholder alignment in FigJam.",
      "User research, competitive benchmarking, and analytics review.",
      "Clear design brief with goals, KPIs, and success metrics.",
    ],
  },
  {
    id: "ia",
    icon: iconIA,
    iconAlt: "Information architecture icon",
    title: "Information Architecture & Flows",
    contentGap: "zf-proc-content--gap24",
    bullets: [
      "User journey mapping and sitemap design.",
      "Task flows for critical user actions.",
      "Low-fidelity wireframes for structure review.",
    ],
  },
  {
    id: "design",
    icon: iconDesign,
    iconAlt: "Design and testing icon",
    title: "Design & Testing",
    contentGap: "zf-proc-content--gap24",
    bullets: [
      "High-fidelity UI design in Figma with Figma Make and Google Stitch for rapid exploration.",
      "Custom visual language, typography system, and color tokens.",
      "Motion and micro-interaction direction using Lottie and Spline.",
    ],
  },
];


function ProcessBullet({ text }) {
  return (
    <div className="zf-proc-bullet">
      <div className="zf-proc-bullet-star">
        <span className="zf-star-icon">
          <img src={iconStar} alt="" aria-hidden="true" />
        </span>
      </div>
      <span>{text}</span>
    </div>
  );
}

function ProcessCard({ icon, iconAlt, title, bullets, contentGap, highlighted = false }) {
  return (
    <article
      className={`zf-proc-card${highlighted ? " highlighted" : ""}`}
      aria-label={title}
    >
      {/* Mobile icon: bare 30×30 */}
      <div className="zf-proc-icon-mobile" aria-hidden="true">
        <img src={icon} alt={iconAlt} />
      </div>

      {/* Desktop icon: 40×40 overflow-clip wrapper with 30×30 centered inside */}
      <div className="zf-proc-icon-desktop" aria-hidden="true">
        <img src={icon} alt={iconAlt} />
      </div>

      {/* Content: title + bullets */}
      <div className={`zf-proc-content ${contentGap}`}>
        <p className="zf-proc-title">{title}</p>
        <div className="zf-proc-bullets">
          {bullets.map((text) => (
            <ProcessBullet key={text} text={text} />
          ))}
        </div>
      </div>
    </article>
  );
}

/** CTA card — image area top, dark bottom */
function ProcessCtaCard() {
  return (
    <article className="zf-proc-card cta-card" aria-label="Start your project">
      {/* Image area */}
      <div className="zf-proc-top" aria-hidden="true">
        <img
          className="zf-proc-bg-img"
          src={procCardBg}
          alt=""
          loading="lazy"
        />
      </div>

      {/* Dark bottom */}
      <div className="zf-proc-bottom">
        <div className="zf-proc-cta-copy">
          <p className="zf-proc-cta-title">Want this process for your product?</p>
          <p className="zf-proc-cta-sub">
            Tell us about your project and get a tailored design roadmap within
            24 hours.
          </p>
        </div>
        <a href="/contact" className="zf-proc-cta-btn">
          Start Your Project
          <img
            className="zf-proc-cta-btn-arrow"
            src={iconArrow}
            alt=""
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}

export default function Process({ id }) {
  return (
    <section id={id} className="zf-process">
      <div className="container">

        <div className="zf-process-inner">
          <div className="zf-process-header">
            <div className="zf-process-header-left">
              <p className="zf-process-label">Process</p>
             
              <p className="zf-process-title">
                <span className="zf-process-title-mobile">Our UI UX Design Process</span>
                <span className="zf-process-title-desktop">{`Our UI/UX\u00A0 Design Process`}</span>
              </p>
            </div>
            <p className="zf-process-desc">
              Every UI UX design engagement follows a clear five-phase sprint.
              Timelines typically run 4 to 12 weeks based on product complexity.
            </p>
          </div>

          <div className="zf-proc-cards  grid grid-cols-4">
            {PROCESS_CARDS.map((card) => (
              <ProcessCard key={card.id} {...card} />
            ))}
            <ProcessCtaCard />
          </div>
        </div>

      </div>
    </section>
  );
}