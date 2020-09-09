import React from 'react';

import { Container, Title, RoutesComponents, TitleComponent } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      
        <a href="https://devchallenges.io/" target='_blank' rel='noopener noreferrer'>
          <Title>
            <span>Dev</span>challenges.io
          </Title>
        </a>
     

      <RoutesComponents>
        <TitleComponent className='active'>
          Buttons
        </TitleComponent>
        <TitleComponent>
          Typography
        </TitleComponent>
        <TitleComponent>
          Inputs
        </TitleComponent>
        <TitleComponent>
          Grid
        </TitleComponent>
      </RoutesComponents>
    </Container>
  );
};

export default Sidebar;
