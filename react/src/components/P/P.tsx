import cn from 'classnames'
import React, { FC } from 'react'

import styles from './P.module.css'
import { PProps } from './P.props'

export const P: FC<PProps> = ({ size, bold, children }) => {
  switch (size) {
    case 'l':
      return (
        <p
          className={cn(styles.l, {
            [styles.bold]: bold === true,
          })}
        >
          {children}
        </p>
      )
    case 'm':
      return (
        <p
          className={cn(styles.m, {
            [styles.bold]: bold === true,
          })}
        >
          {children}
        </p>
      )
    case 's':
      return (
        <p
          className={cn(styles.s, {
            [styles.bold]: bold === true,
          })}
        >
          {children}
        </p>
      )
    case 'xs':
      return (
        <p
          className={cn(styles.xs, {
            [styles.bold]: bold === true,
          })}
        >
          {children}
        </p>
      )
    case 'tinny':
      return (
        <p
          className={cn(styles.tinny, {
            [styles.bold]: bold === true,
          })}
        >
          {children}
        </p>
      )
    default:
      return <></>
  }
}
