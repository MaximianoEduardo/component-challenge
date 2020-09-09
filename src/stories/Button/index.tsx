import React from 'react'
import MaterialIcon from 'material-icons-react'
import {ButtonStyled} from './styles'

export interface Props {
  variant?: string,
  color?: string,
  size?: string,
  children?: string,
  startIcon?: string,
  endIcon?: string,
  disableShadow?: boolean
  disable?: boolean
}

const Button: React.FC<Props> = ({
  variant = '',
  color = '',
  size = '',
  children = 'Default',
  ...rest
}) => {

  return (
      <ButtonStyled
        className={`button 
          ${variant} 
          ${color} 
          ${size}
          ${rest.disableShadow && "disableShadow"}
          ${rest.startIcon && "startIcon"}
          ${rest.endIcon && "endIcon"}
          ${rest.disable && 'disable'}
        `}
        {...rest}
      >
        {rest.startIcon && (
          <MaterialIcon icon={rest.startIcon} color='#fff' size='18' />
        )}
        {children}
        {rest.endIcon && (
          <MaterialIcon icon={rest.endIcon} color='#fff' size='18' />
        )}
      </ButtonStyled>
    );
  };

export default Button;
