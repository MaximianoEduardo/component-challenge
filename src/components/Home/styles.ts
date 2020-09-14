import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;


`;

export const TitleWrapper = styled.div`
  display: flex;
  background: #FFF;
  width: 100%;
  max-width: 30vw;
  height: auto;
  border-radius: 6px;
  padding: 12px;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.5);
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.5);
  flex-direction: column;
`

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--active);
  font-weight: 600;
  span{
    font-size: 16px;
  }
`

export const Description = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  border-radius: 6px;
  padding: 12px;
  justify-content: center;
  flex-direction: column;
  line-height: 32px;
  a > img{
    padding-top: 7px;
    width: 45px;
    height: 45px;
  }
`
