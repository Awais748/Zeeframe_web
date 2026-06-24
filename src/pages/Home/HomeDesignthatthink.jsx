import { Button } from "../../Components/ui/Button";
import gif from "../../assets/images/homestar.gif";
import bg from "../../assets/images/designhomesecbg.webp";
import { Arrowup1 } from "../../assets/icons/icon";

const HomeDesignthatthink = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat sm:py-20 py-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container sm:flex flex-col sm:flex-row items-center justify-between">
        <div>
          <h2 className="sm:text-[70px] text-[28px] ff_geologica sm:max-w-4xl max-w-full font-bold text-white sm:leading-21 leading-10">
            Design That Thinks. Interfaces That Feel.
          </h2>

          <p className="mt-4 text-lg leading-7 max-w-2xl text-gray-300">
            At ZeeFrames, we craft AI-ready design systems for modern software
            responsive, scalable, and human-centered.
          </p>

          <Button
            href="https://calendly.com/contact-zeeframes/30min?month=2026-01"
            target="_blank"
            variant="yellowtrans"
            size="lg"
            className="relative group  sm:mt-6 mt-9"
          >
            <span className="flex items-center gap-3 justify-center transition-opacity group-hover:opacity-0">
              See AI in Action
              <Arrowup1 />
            </span>

            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              Let’s talk
            </span>
          </Button>
        </div>
        <img src={gif} alt="star" className="w-110 h-110" />
      </div>
    </section>
  );
};

export default HomeDesignthatthink;
