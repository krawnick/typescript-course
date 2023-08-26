import cn from 'classnames'
import React, { FC } from 'react'

import styles from './Button.module.css'
import { ButtonProps, Appearance } from './Button.props'

export const Button: FC<ButtonProps> = ({
  children,
  appearance,
}): JSX.Element => {
  switch (appearance) {
    case Appearance.Disable: {
      return (
        <button className={cn(styles.button, styles.buttonDisable)}>
          {children}
        </button>
      )
    }
    case Appearance.DisableSecondary: {
      return (
        <button className={cn(styles.button, styles.buttonDisableSecondary)}>
          {children}
        </button>
      )
    }
    case Appearance.Icon: {
      return (
        <button className={cn(styles.button, styles.buttonIcon)}>
          {children}
        </button>
      )
    }
    case Appearance.Primary: {
      return (
        <button className={cn(styles.button, styles.buttonPrimary)}>
          {children}
        </button>
      )
    }
    case Appearance.Secondary: {
      return (
        <button className={cn(styles.button, styles.buttonSecondary)}>
          {children}
        </button>
      )
    }
    case Appearance.Shop: {
      return (
        <button className={cn(styles.button, styles.buttonShop)}>
          {children}
        </button>
      )
    }
    default:
      return <></>
  }
}
