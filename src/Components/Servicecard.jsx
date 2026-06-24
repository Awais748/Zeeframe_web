import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ tag, title, image,link }) => {
  return (
    <div className="group  relative sm:w-[579px] w-full overflow-hidden border-y border-white/10 bg-gradient-to-b from-black to-[#0a0a0a] transition-all duration-700 hover:border-l-2 hover:border-white/10 hover:px-8">

      {/* Sliding Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute right-12 w-54 h-42 -translate-x-6 opacity-0 transition-all duration-700 group-hover:translate-x-0 sm:block hidden group-hover:opacity-100"
        />
      )}

      {/* Text Wrapper (moves RIGHT on hover) */}
      <div className="transition-transform sm:py-10 py-6 duration-700 group-hover:translate-x-3">
        <p className="sm:text-lg text-base leading-7 uppercase tracking-widest text-[#E7E7E7]">
          {tag}
        </p>

        <h3 className="sm:pt-5 pt-2 sm:text-[28px] text-[22px] font-medium ff_geologica text-white">
          {title}
        </h3>
      </div>

      {/* Arrow (moves LEFT on hover) */}
      <div className="absolute right-3 sm:top-15 top-10 transition-transform duration-700 group-hover:-translate-x-8">
        <Link aria-label="arrow link" to={link} className="flex p-3 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:bg-white">
          <ArrowUpRight className="text-white transition-colors duration-300 group-hover:text-black" />
        </Link>
      </div>

    </div>
  );
};

export default ServiceCard;
