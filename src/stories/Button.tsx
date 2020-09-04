import React from 'react'
import { ButtonStyled } from './Button'

export interface Props{
  primary?: boolean
  secondary?:boolean
  variant?: 'text' | 'outline' | ' default'
  disableShadow?: boolean
  disable?: boolean
  startIcon?: string
  endIcon?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'second'
  label?:string
}

export const Button: React.FC<Props> = ({
  primary =false,
  variant = 'default',
  size = 'md',
  color = 'primary',
  label,
  ...props
}) => {
  return (
    <ButtonStyled  className={['button', `button--${size}`, `button--${color}`, `button--${variant}`].join(' ')}>
      {label}
    </ButtonStyled>
  )
}