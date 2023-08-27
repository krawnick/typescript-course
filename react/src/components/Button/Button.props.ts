import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export enum Appearance {
  Disable = 'disable',
  DisableSecondary = 'disable-secondary',
  Icon = 'icon',
  Primary = 'primary',
  Secondary = 'secondary',
  Shop = 'shop',
}

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  appearance: Appearance
}
