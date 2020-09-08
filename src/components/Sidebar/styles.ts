import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 237px;
  height: 100vh;
  padding: 40px 0;
`;

export const Title = styled.h1`
  font-size: 13px;
  font-weight: 600px;
  color: var(--active);
  font-family: 'Poppins';
  >span{
    color: #F7542E;
  }
`

export const RoutesComponents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 122px 0 ;
  width: 120px;
`

export const TitleComponent = styled.h2`
  font-family: Noto Sans JP;
  font-weight: 500;
  font-size: 14px;
  color: var( --gray);
  transition: 300ms ease-out;
  padding: 5px;
  border-radius: 10px;
  & + h2 {
    margin-top: 20px
  }
  &.active{
    color: var(--active);
  }
  :hover{
    color: #fff;
    background: #323834;
  }
`