import { ReactNode } from 'react'

export interface PProps extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  size: 'l' | 'm' | 's' | 'xs' | 'tinny'
  bold?: boolean
  children: ReactNode
}
