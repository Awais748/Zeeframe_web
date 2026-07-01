import ServiceCard from "../../Components/Servicecard";
import cardImg from "../../assets/images/square.webp";
import HomeSectionHeader from "../../Components/ui/HomeHeader";

const ServicesSection = ({ tag, title, image }) => {
  return (
    <section className="bg-black sm:py-20 py-8">
      <div className="container">
        <HomeSectionHeader
          eyebrow="WE are great at"
          title="Our Services"
          description="Designs with Exceptional User Experiences."
        />
        <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-x-15 gap-y-6 sm:mt-16 mt-8">
          <ServiceCard
            tag="For Digital Experiences"
            title="UX UI Design"
            image={cardImg}
            link="/services"
          />

          <ServiceCard
            tag="For Startups & Existing Companies"
            title="Product Revamp"
            image={cardImg}
            link="/services"
          />

          <ServiceCard
            tag="For Visual Storytellers"
            title="Brand Design"
            image={cardImg}
            link="/services"
          />

          <ServiceCard
            tag="For Rapid App Builders"
            title="No-Code Development"
            image={cardImg}
            link="/services"
          />

          <ServiceCard
            tag="FOR STARTUPS & FOUNDERS"
            title="MVP Design"
            image={cardImg}
            link="/services"
          />

          <ServiceCard
            tag="Dedicated ux ui Team"
            title="Team Extension"
            image={cardImg}
            link="/services"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
