import "./HowWeHelp.css";
import { SVC_ROWS } from "../../../data/servicesData";
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";

export default function HowWeHelp({ id }) {
  return (
    <section id={id} className="zf-howhelp">
      <div className="container">
      {/* ── Section Header ──
          Figma: label + title LEFT (max-w 600px) | desc RIGHT (w 630px)
          flex row, justify-between, align-center
      ── */}
      <div className="zf-howhelp-header">
        <div className="zf-howhelp-header-left">
          <p className="zf-howhelp-label">How we help</p>
          <h2 className="zf-howhelp-title">
            UI/UX Design Services
            <br />
            We Offer
          </h2>
        </div>
        <p className="zf-howhelp-desc">
          A complete design practice covering every stage of the product
          lifecycle:
        </p>
      </div>

      {/* ── Service Grid ── */}
      <div className="zf-svc-grid">
        {SVC_ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="zf-svc-row">
            {row.map((cell, cellIndex) =>
              cell === null ? (
                <div key={cellIndex} className="zf-svc-cell zf-svc-cta">
                  <div className="zf-svc-icon" aria-hidden="true">
                    <Icon name="svc-mvp" size={30} />
                  </div>
                  <div className="zf-svc-text">
                    <p className="zf-svc-cta-title">
                      Not sure which path fits your project?
                    </p>
                    <p className="zf-svc-cta-desc">
                      Tell us where you are and we&apos;ll recommend the right
                      approach — honestly.
                    </p>
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
                      Get a Free Consultation
                    </Button>
                  </div>
                </div>
              ) : (
                <div key={cellIndex} className="zf-svc-cell">
                  <div className="zf-svc-icon" aria-hidden="true">
                    <Icon name={cell.icon} size={30} />
                  </div>
                  <div className="zf-svc-text">
                    <p className="zf-svc-title">{cell.title}</p>
                    <p className="zf-svc-desc">{cell.desc}</p>
                  </div>
                </div>
              )
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
