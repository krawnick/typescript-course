import cn from 'classnames'
import { ReactNode } from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

type CommonButtonProps = {
  children: string
  disabled?: boolean
}

type PrimaryButtonProps = CommonButtonProps & {
  arrow?: boolean
  icon?: never
  primary: boolean
  secondary?: never
}
type SecondaryButtonProps = CommonButtonProps & {
  arrow?: never
  icon?: ReactNode
  secondary: boolean
  primary?: never
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps

export const Button = ({
  children,
  icon,
  disabled = false,
  arrow = false,
  primary = false,
  secondary = false,
}: ButtonProps) => {
  const classes = cn({ primary, secondary })

  return (
    <button className={classes} disabled={disabled}>
      {icon}
      <span>{children}</span>
      {arrow && <IoChevronForwardOutline />}
    </button>
  )
}
