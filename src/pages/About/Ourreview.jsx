import {
  Clutchs,
  Firms,
  ReviewStars,
  Stars,
  Upwork,
} from "../../assets/icons/icon";
import reviewstars from "../../assets/images/reviewstar.webp";

const cardsData = [
  {
    starColor: "text-[#FF3D2E]",
    icon: <Clutchs />,
    reviews: "41 Reviews",
  },
  {
    starColor: "text-[#5591FF]",
    icon: <Firms />,
    reviews: "41 Reviews",
  },
  {
    starColor: "text-[#6FDA44]",
    icon: <Upwork />,
    reviews: "41 Reviews",
  },
];

const ReviewSection = () => {
  return (
    <section className="sm:py-20 py-8 bg-[#090909] relative z-50">
      <div className="container">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-18 sm:mx-60">
          {cardsData.map((item, index) => (
            <div className="flex flex-col gap-3 ">
              <div className="flex items-center sm:gap-3 gap-auto justify-between">
                <h2 className="text-base leading-4 text-[#D5D5D5] font-['Inter'] text-nowrap">
                  Reviewed on
                </h2>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Stars key={i} className={item.starColor} />
                  ))}
                </div>
              </div>
              <div className="flex items-center sm:gap-5 gap-auto justify-between">
                <span>{item.icon}</span>
                <p className="text-[#D5D5D5] text-sm text-nowrap leading-4 font-['Inter']">
                  {item.reviews}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:p-8 p-6 sm:mt-18 mt-8 rounded-xl bg-[#F3FE00] sm:mx-26">
          <div className="flex sm:flex-row flex-col sm:gap-18 gap-6 items-center justify-center">
            <div className="flex sm:flex-row flex-col items-center sm:gap-5">
              <h3 className="text-[#0B0B0B] text-[40px] font-extrabold font-['Inter']">
                224
              </h3>
              <p className="text-[#0B0B0B] text-sm sm:w-22  leading-6 font-['Inter']">
                Reviews on 3 platforms
              </p>
            </div>
            <div className="flex sm:flex-row flex-col items-center sm:gap-4">
              <div className="flex items-center gap-4">
                <h3 className="text-[#0B0B0B] text-[40px] font-extrabold font-['Inter']">
                  4.9
                </h3>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <ReviewStars key={i} />
                  ))}
                </div>
              </div>

              <p className="text-[#0B0B0B] text-base sm:w-22 leading-6 font-['Inter'] text-nowrap">
                Average Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
