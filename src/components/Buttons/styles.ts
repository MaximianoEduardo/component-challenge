import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1203px;
  background: #fff;
  padding: 53px 83px;
`;

export const Title = styled.h1`
  color: var(--header);
  font-size: 24px;
  font-family: 'Poppins';
  font-weight: 500;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 28px 0;
`

export const  Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .rowWrapper{
    label{
      color: #333333;
      font-family: Ubuntu Mono;
      font-size: 12px;
    }
    button{
      margin-top: 12px;
    }
  }
  & + div{
    margin-top: 45px;
  }
`
