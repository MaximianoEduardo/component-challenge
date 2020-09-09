import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  padding: 53px 83px;
  >span{
    color: #A9A9A9;
    font-size: 12px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
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
  justify-content: flex-start;
  align-items: center;
  .rowWrapper{
    min-width: 300px;
    label{
      color: #333333;
      font-family: Ubuntu Mono;
      font-size: 12px;
    }
    button{
      margin-top: 12px;
    }
    &.hv{
      >.default{
        background: #AEAEAE;
      }
      >.primary{
        background: #0039CB;
        box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
      }
      >.secondary{
        background: #1C313A;
        box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
      }
      >.danger{
        background: #9A0007;
        box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
      }
      >.outline,.text{
        background: rgba(41, 98, 255, 0.1);
      }
      >.text.disable{
        background: none;
      }
    }
  }
  & + div{
    margin-top: 45px;
  }
`
