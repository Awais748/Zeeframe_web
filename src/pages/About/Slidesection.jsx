import SectionHeader from "../../Components/ui/HomeHeader";
import slide1 from "../../assets/images/swippper1.webp";
import slide2 from "../../assets/images/swipper2.webp";
import slide3 from "../../assets/images/swipper3.webp";
import slide4 from "../../assets/images/swipper4.webp";
import slide5 from "../../assets/images/swipper5.webp";

const logos = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
];

const SliderSection = () => {
  return (
    <section className="py-20 relative z-50 bg-[#090909]">
      <SectionHeader
        eyebrow="our culture"
        title="Behind The Scenes"
        description="We believe in clear communication, proactive problem solving, and full transparency.."
      />

      <div className="overflow-hidden relative">
        <div className="flex gap-2 mt-16 team-slider animate-logo-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="brand"
              width="282"
              height="360"
              loading="lazy"
              className="h-auto w-full object-cover grayscale-100 "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
