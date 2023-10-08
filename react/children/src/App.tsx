import { ReactChild, ReactNode } from 'react'
import './App.css'

interface BoxProps {
  children: ReactNode
  className: string
}

const Box = ({ children, className }: BoxProps): JSX.Element => {
  return (
    <div
      style={{
        padding: '20px',
        marginBottom: '20px',
        border: '1px solid peru',
      }}
      className={className}
    >
      {children}
    </div>
  )
}

interface SpecialBoxProps {
  children: ReactChild
  className: string
}

const SpecialBox = ({ children, className }: SpecialBoxProps): JSX.Element => {
  return (
    <div
      style={{
        padding: '20px',
        marginBottom: '20px',
        border: '1px solid peru',
      }}
      className={className}
    >
      {children}
    </div>
  )
}

interface StringBoxProps {
  children: string
  className: string
}

const StringBox = ({ children, className }: StringBoxProps): JSX.Element => {
  return (
    <div
      style={{
        padding: '20px',
        marginBottom: '20px',
        border: '1px solid peru',
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export const App = () => {
  return (
    <div>
      <Box className="box">
        {Box.name}
        <p>Hello</p>
        <p>How are you?</p>
      </Box>
      <SpecialBox className="special-box">
        <div>
          {SpecialBox.name}
          <p>Hello</p>
          <p>How are you?</p>
        </div>
      </SpecialBox>
      <StringBox className="string-box">It's okay!</StringBox>
    </div>
  )
}
