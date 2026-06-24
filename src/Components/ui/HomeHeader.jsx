const HomeSectionHeader = ({
  eyebrow,
  title,
  description,
  titleclassName = "",
  descriptionclassName = "",
  align = "center",
}) => {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center"
          ? "items-center text-center"
          : "items-start text-left"
      }`}
    >
      <p className="text-sm font-['Inter'] font-medium uppercase text-[#F3FE00]">
        {eyebrow}
      </p>
      <h2
        className={`text-[#FFF] sm:text-[40px] text-[28px] font-['Geologica'] font-bold leading-10 ${titleclassName}`}
      >
        {title}
      </h2>

      <p
        className={`text-sm leading-5 text-[#D5D5D5] sm:max-w-[600px] max-w-[327px] ${descriptionclassName}`}
      >
        {description}
      </p>
    </div>
  );
};

export default HomeSectionHeader;
