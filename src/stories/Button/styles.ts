import styled from 'styled-components';

export const Container = styled.div`

`;

export const ButtonStyled = styled.button`
 border-radius: 6px;
  border: none;
  height: 36px;
  background: #E0E0E0;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  padding: 8px 16px;
  &.button--outline{
    background: #fff;
    border: 1px solid #3D5AFE;
    color: #3D5AFE;
    &:hover,
    &:focus{
      background: rgba(41, 98, 255, 0.1);
    }
  }
  &.button--text{
    background: #fff;
    border:  none;
    color: #3D5AFE;
    &:hover,
    &:focus{
      background: rgba(41, 98, 255, 0.1);
    }
  }
  &.button--sd{
    width: 73px;
  }
  &.button--md{
    width: 81px;
  }
  &.button--lg{
    width: 93px;
  }
  &.button-default{
    background: #E0E0E0;
    &:hover,
    &:focus{
      background: #AEAEAE;
    }
  }
  &.button-primary{
    background: #2962FF;
    color: #fff;
    &:hover,
    &:focus{
      background: #0039CB;
      box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
    }
  }
  &.button-Secondary{
    background: #455A64;
    color: #fff;
    &:hover,
    &:focus{
      background: #1C313A;
      box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
    }
  }
  &.button-Danger{
    background: #D32F2F;
    color: #fff;
    &:hover,
    &:focus{
      background: #9A0007;
      box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
    }
  }
  &.button--shadowOff{
    box-shadow: unset;
    }
   > img{
    width: 13.2px;
    height: 14px;
    display: flex;
    margin-right: 5px;
    &.endIcon{
      margin-left: 5px;
      margin-right: unset;
    }
  }
`;