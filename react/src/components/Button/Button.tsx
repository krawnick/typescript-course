import cn from 'classnames'
import React, { FC } from 'react'

import styles from './Button.module.css'
import { ButtonProps, Appearance } from './Button.props'

export const Button: FC<ButtonProps> = ({
  children,
  appearance,
  ...props
}): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.buttonIcon]: appearance === Appearance.Icon,
        [styles.buttonPrimary]: appearance === Appearance.Primary,
        [styles.buttonSecondary]: appearance === Appearance.Secondary,
        [styles.buttonShop]: appearance === Appearance.Shop,
      })}
      {...props}
    >
      {children}
    </button>
  )
  // switch (appearance) {
  //   case Appearance.Disable: {
  //     return (
  //       <button className={cn(styles.button, styles.buttonDisable)} {...props}>
  //         {children}
  //       </button>
  //     )
  //   }
  //   case Appearance.DisableSecondary: {
  //     return (
  //       <button
  //         className={cn(styles.button, styles.buttonDisableSecondary)}
  //         {...props}
  //       >
  //         {children}
  //       </button>
  //     )
  //   }
  //   case Appearance.Icon: {
  //     return (
  //       <button className={cn(styles.button, styles.buttonIcon)} {...props}>
  //         {children}
  //       </button>
  //     )
  //   }
  //   case Appearance.Primary: {
  //     return (
  //       <button className={cn(styles.button, styles.buttonPrimary)} {...props}>
  //         {children}
  //       </button>
  //     )
  //   }
  //   case Appearance.Secondary: {
  //     return (
  //       <button
  //         className={cn(styles.button, styles.buttonSecondary)}
  //         {...props}
  //       >
  //         {children}
  //       </button>
  //     )
  //   }
  //   case Appearance.Shop: {
  //     return (
  //       <button className={cn(styles.button, styles.buttonShop)} {...props}>
  //         {children}
  //       </button>
  //     )
  //   }
  //   default:
  //     return <></>
  // }
}
