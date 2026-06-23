// SectionHeader.jsx

export default function SectionHeader({
  label,
  title,
  description,
  theme = "dark",
  titleStyle,
  descriptionStyle,
  className = "",
}) {
  const isDark = theme === "dark";

  return (
    <div
      className={`
        flex items-center justify-between w-full gap-[60px] mb-12
        max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-6 max-[1100px]:mb-10
        max-[640px]:gap-4 max-[640px]:mb-8
        ${className}
      `.trim()}
    >
      {/* Left: label + title */}
      <div className="flex flex-col gap-4 items-start flex-1 min-w-0 shrink-0 max-[1100px]:w-full">
        {label && (
          <p
            className="font-['Inter'] text-sm font-normal leading-5 m-0"
            style={{ color: isDark ? "#f3fe00" : "#18181b" }}
          >
            {label}
          </p>
        )}
        <h2
          className={`
            font-['Inter_Tight'] font-semibold text-[36px] leading-[44px] tracking-[-0.72px] m-0
            max-[640px]:text-[28px] max-[640px]:leading-[36px] max-[640px]:tracking-[-0.56px]
            ${isDark ? "text-white" : "text-[#27272a]"}
          `}
          style={titleStyle}
        >
          {title}
        </h2>
      </div>

      {/* Right: description */}
      {description && (
        <p
          className={`
            font-['Inter'] text-base font-normal leading-6 m-0
            flex-1 min-w-0 max-[1100px]:w-full
            max-[640px]:text-[15px] max-[640px]:leading-[23px]
            ${isDark ? "text-[#d4d4d8]" : "text-[#52525b]"}
          `}
          style={descriptionStyle}
        >
          {description}
        </p>
      )}
    </div>
  );
}
