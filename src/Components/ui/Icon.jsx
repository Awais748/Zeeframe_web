import { ICONS } from '../icons'

export default function Icon({
  name,
  size = 16,
  className = '',
  label,
  ...props
}) {
  const Svg = ICONS[name]
  if (!Svg) return null

  return (
    <Svg
      width={size}
      height={size}
      className={className}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      {...props}
    />
  )
}
