import LogoMark from "../../assets/icons/zeeframelogo.svg?react";

export default function Logo({ markSize = 23, className = "" }) {
  return (
    <span className={`zf-brand-lockup ${className}`.trim()}>
      <LogoMark
        width={markSize}
        height={markSize}
        className="zf-logo-mark"
        aria-hidden="true"
      />
      <span className="zf-brand-text">ZeeFrames</span>
    </span>
  );
}
