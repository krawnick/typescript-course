import { ReactNode } from 'react'

export enum Appearance {
  Disable = 'disable',
  DisableSecondary = 'disable-secondary',
  Icon = 'icon',
  Primary = 'primary',
  Secondary = 'secondary',
  Shop = 'shop',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode
  appearance: Appearance
}
