import React from 'react';
import git from '../../images/github.svg'
import { Container, TitleWrapper, Title , Description} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>
          Eduardo Maximiano
          <span>
            FrontEnd Developer
          </span>
        </Title>
        <Description>
          <p>
            Ola esse projeto foi feito para me desenvolver e aprender um pouco mais sobre storybook e styledComponents
          <br/>
          Feito com carinho ❤️ 
          <br/>
          Se quiser recomendar algo ou viu alguma coisa fora do comum Não hesite em entrar em contato
            <a href="https://github.com/MaximianoEduardo/component-challenge/issues"> 
            <img src={git} alt="issue git hub"/>
            </a>
          </p>
        
        </Description>
      </TitleWrapper>
      
    </Container>
  );
};

export default Home;
