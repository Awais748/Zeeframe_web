import SectionHeader from "../../Components/ui/HomeHeader";
import slide1 from "../../assets/images/swippper1.webp";
import slide2 from "../../assets/images/swipper2.webp";
import slide3 from "../../assets/images/swipper3.webp";
import slide4 from "../../assets/images/swipper4.webp";
import slide5 from "../../assets/images/swipper5.webp";

const logos = [slide1, slide2, slide3, slide4, slide5];

// Each image width + gap (282px + 8px gap)
const ITEM_WIDTH = 290;
const TOTAL_WIDTH = logos.length * ITEM_WIDTH;

const SliderSection = () => {
  return (
    <section className="py-20 relative z-50 bg-[#090909]">
      <style>{`
        @keyframes slide-infinite {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${TOTAL_WIDTH}px); }
        }
        .team-slider-track {
          display: flex;
          gap: 8px;
          width: max-content;
          will-change: transform;
          animation: slide-infinite 20s linear infinite;
          -webkit-animation: slide-infinite 20s linear infinite;
        }
        .team-slider-track:hover {
          animation-play-state: paused;
          -webkit-animation-play-state: paused;
        }
        .team-slider-img {
          width: 282px;
          height: 360px;
          flex-shrink: 0;
          object-fit: cover;
          filter: grayscale(100%);
          -webkit-filter: grayscale(100%);
        }
        @media (max-width: 640px) {
          .team-slider-img {
            width: 200px;
            height: 260px;
          }
        }
      `}</style>

      <SectionHeader
        eyebrow="our culture"
        title="Behind The Scenes"
        description="We believe in clear communication, proactive problem solving, and full transparency.."
      />

      <div className="overflow-hidden mt-16">
        {/* Duplicate logos for seamless loop */}
        <div className="team-slider-track">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="team"
              loading="lazy"
              className="team-slider-img"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
