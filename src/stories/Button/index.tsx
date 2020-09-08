import React, {useState} from 'react'
import { Container, ButtonStyled } from './styles'
import cart from '../icons/cart.svg'
import code from '../icons/code.svg'
import cached from '../icons/cached.svg'
import account from  '../icons/account.svg'
import contactless from '../icons/contactless.svg'

export interface Props {
  primary?: boolean
  danger?: boolean
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

const Button: React.FC<Props> = ({
  primary =false,
  variant = 'default',
  size = 'md',
  color = 'primary',
  label = 'Default',
  disableShadow= false,
  disable = false,
  startIcon,
  endIcon,
  ...props
}) => {

  const Shadow = disableShadow ? '' : 'shadowOff'

  function IconForStart (){

    switch (startIcon) {
      case 'cart':
        return(<img alt='icon' src={cart}/>)
      case 'cached':
        return(<img alt='icon' src={cached}/>) 
      case 'account' :
        return(<img alt='icon' src={account}/>)
      case 'code':
        return(<img alt='icon' src={code}/>)
      case 'contactless' :
        return(<img alt='icon' src={contactless}/>)
      default:
        break;
    }

  }

  function IconForEnd (){

    switch (endIcon) {
      case 'cart':
        return(<img className='endIcon' alt='icon' src={cart}/>)
      case 'cached':
        return(<img className='endIcon' alt='icon' src={cached}/>) 
      case 'account' :
        return(<img className='endIcon' alt='icon' src={account}/>)
      case 'code':
        return(<img className='endIcon' alt='icon' src={code}/>)
      case 'contactless' :
        return(<img className='endIcon' alt='icon' src={contactless}/>)
      default:
        break;
    }

  }
  

  return (
    <ButtonStyled  className={['button', `button--${size}`, `button--${color}`, `button--${variant}`, `button--${Shadow}`].join(' ')}>
      {
        startIcon ? 
        IconForStart()
        :  (
          <>
          </>
        )
      }
      {label}
      {
        endIcon ? 
        IconForEnd()
        :  (
          <>
          </>
        )
      }
    </ButtonStyled>
  )
}

export default Button;
