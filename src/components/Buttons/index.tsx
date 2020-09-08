import React from 'react';
import { Primary, Outline, Text } from '../../stories/Button/Button.stories';

import { Container, Title, ButtonWrapper, Row } from './styles';

const Buttons: React.FC = () => {
  return (
    <Container>
      <Title>
        Buttons
      </Title>

      <ButtonWrapper>

        <Row>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Primary />
          </div>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Primary />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Outline />
          </div>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Outline />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Text />
          </div>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Text />
          </div>
        </Row>


      </ButtonWrapper>

    </Container>
  );
};

export default Buttons;
