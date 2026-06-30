import { Star } from "../../assets/icons/icon";
import { Button } from "../../Components/ui/Button";
import ChooseIndustry from "./ChooseIndustry";
import Homecontactsection from "../Home/Homecontactsection";
const Work = () => {
  return (
    <>
      <section className="sm:py-20 py-8">
        <div className="container">
          <div className="flex relative items-center flex-col gap-3 justify-between">
            <h1 className=" text-white sm:text-7xl text-3xl sm:max-w-230  text-center font-extrabold sm:leading-24 leading-12.5 items-center font-['Geologica'] uppercase">
              Our UI UX & Branding Case Studies
            </h1>
            <p className="text-white text-lg leading-[27px] max-w-135 text-center font-['Inter']">
              No matter the industry you’re in, or the asset you need, we can
              design it for you
            </p>
          </div>
          <div className="absolute sm:top-[51%] top-[30%] sm:right-[1070px] right-[320px] ">
            <Star />
          </div>

          <div className="sm:mt-8 mt-6 flex justify-center mx-auto">
            <Button
              onClick={() =>
                (window.location.href =
                  "https://calendly.com/contact-zeeframes/30min?month=2026-01")
              }
              variant="link"
              size="default"
              className="relative rounded-4xl group border py-2.5 px-4 border-gray-700 text-white hover:text-[#F3FE00] bg-transparent overflow-hidden"
            >
              <span className="transition-opacity duration-700 group-hover:opacity-0">
                Schedule Call
              </span>

              <span
                className="absolute inset-0 flex items-center justify-center gap-4
      opacity-0 translate-x-2 transition-all duration-300 text-[#F3FE00] ease-out
      group-hover:opacity-100 group-hover:translate-x-0"
              >
                Book a Demo
              </span>
            </Button>
          </div>
        </div>
      </section>
      <ChooseIndustry />
      <Homecontactsection showHeader={false} />
    </>
  );
};

export default Work;
