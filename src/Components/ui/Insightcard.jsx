const InsightCard = ({ img, title, description, readingtime, datetime }) => {
  return (
    <div className="group flex flex-col items-stretch overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.2)] hover:border-[#F3FE00] transition-colors duration-300 w-[381px] shrink-0">
      <div className="h-[246px] relative shrink-0 w-full">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.08)] flex flex-col items-start gap-6 p-6 w-full">
        <div className="flex flex-col gap-3 items-start w-full">
          <h3 className="font-['Geologica'] font-semibold text-[22px] text-white group-hover:text-[#F3FE00] transition-colors duration-300 leading-[28px] line-clamp-3 min-h-[84px]">
            {title}
          </h3>
          <p className="font-['Inter'] text-base text-white leading-[25px] line-clamp-2 min-h-[50px]">
            {description}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-['Inter'] text-xs text-white whitespace-nowrap">
            {readingtime}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <span className="font-['Inter'] text-xs text-white whitespace-nowrap">
            {datetime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;