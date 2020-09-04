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
        return(<img src={cart}/>)
      case 'cached':
        return(<img src={cached}/>) 
      case 'account' :
        return(<img src={account}/>)
      case 'code':
        return(<img src={code}/>)
      case 'contactless' :
        return(<img src={contactless}/>)
      default:
        break;
    }

  }

  function IconForEnd (){

    switch (endIcon) {
      case 'cart':
        return(<img className='endIcon' src={cart}/>)
      case 'cached':
        return(<img className='endIcon' src={cached}/>) 
      case 'account' :
        return(<img className='endIcon' src={account}/>)
      case 'code':
        return(<img className='endIcon' src={code}/>)
      case 'contactless' :
        return(<img className='endIcon' src={contactless}/>)
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
