import HomeHeroSection from "./Homehero";
import HomeVideo from "./HomeVideo";
import ServicesSection from "./Servicesection";
import HomeProcessSection from "./Homeprocesssection";
import Homecreativeshowcase from "./Homecreativeshowcase";
import HomeDesignthatthink from "./HomeDesignthatthink";
import Homeinsight from "./Homeinsight";
import FaqsSection from "./FaqsSec";
import Homecontactsection from "./Homecontactsection";
import CustomCursor from "../../Components/CustomCursor";
import WhatsappButton from "../../Components/Whatsapp";
const Home = () => {
  return (
    <>
      <CustomCursor />
      <HomeHeroSection />
      <HomeVideo />
      <ServicesSection />
      <HomeProcessSection />
      <Homecreativeshowcase />
      <HomeDesignthatthink />
      <FaqsSection />
      <Homeinsight />
      <Homecontactsection />
      <WhatsappButton />
    </>
  );
};

export default Home;
