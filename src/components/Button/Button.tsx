import React, { ReactElement } from 'react'
import './Button.css'

export interface ButtonProps {
  variant: string
  children: string
  onClick?: () => void
}

const Button = ({ variant, children, onClick }: ButtonProps) => {
  return (
    <button className={variant} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
