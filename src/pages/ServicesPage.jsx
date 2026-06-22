import Navbar from "../Components/layout/Navbar/Navbar";
import Footer from "../Components/layout/footer/Footer";
import Hero from "../Components/sections/Hero/Hero";
import WhoWeHelp from "../Components/sections/WhoWeHelp/WhoWeHelp";
import FAQ from "../Components/sections/FAQ/FAQ";
import Contact from "../Components/sections/Contact/Contact";
import StartProject from "../Components/sections/Startyour/StartYourUIUX";
import OurInsights from "../Components/sections/OurInsight/Insight";
import Locations from "../Components/sections/locations/Location";

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <WhoWeHelp />

      <FAQ />
      <StartProject />
      <OurInsights />
      <Contact />
      <Locations />
    </>
  );
}
