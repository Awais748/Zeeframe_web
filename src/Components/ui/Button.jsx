import Icon from './Icon'

const VARIANTS = {
  yellow: 'zf-btn-yellow',
  black: 'zf-btn-black',
  white: 'zf-btn-white',
  submit: 'zf-btn-submit',
}

export default function Button({
  variant = 'yellow',
  icon,
  iconSize = 16,
  children,
  className = '',
  ...props
}) {
  return (
    <button className={`${VARIANTS[variant]} ${className}`.trim()} {...props}>
      {children}
      {icon && <Icon name={icon} size={iconSize} />}
    </button>
  )
}
