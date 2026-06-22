import "./SectionHeader.css";

export default function SectionHeader({
  label,
  title,
  description,
  theme = 'dark',
  labelColor,
  titleStyle,
  descriptionStyle,
  titleClassName,
  className = '',
}) {
  const isDark = theme === 'dark'
  const h2Class = titleClassName ?? (isDark ? 'zf-section-title' : 'zf-h2-dark')

  return (
    <div className={`zf-section-head ${className}`.trim()}>
      <div className="zf-section-head-left">
        {label && (
          <p
            className="zf-section-label"
            style={labelColor ? { color: labelColor } : undefined}
          >
            {label}
          </p>
        )}
        <h2 className={h2Class} style={titleStyle}>
          {title}
        </h2>
      </div>
      {description && (
        <p
          className="zf-section-desc"
          style={descriptionStyle}
        >
          {description}
        </p>
      )}
    </div>
  )
}
