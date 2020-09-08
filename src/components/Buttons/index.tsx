import React from 'react';
import Button from '../../stories/Button/index'
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
            <Button />
          </div>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Button />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Button />
          </div>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Button />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Button />
          </div>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Button />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Button variant='outline'/>
          </div>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Button variant='outline' />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Button variant='outline'/>
          </div>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Button variant='outline' />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              Disable Shadow
            </label>
            <Button disableShadow/>
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              button
            </label>
            <Button variant='text' disable/>
          </div>
          <div className="rowWrapper">
            <label>
              Disable
            </label>
            <Button disable />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              Icons
            </label>
            <Button color='primary' startIcon='none' />
          </div>
          <div className="rowWrapper">
            <label>
              Disable
            </label>
            <Button color='primary' endIcon='none' />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              Size
            </label>
            <Button color='primary' size='sm' />
          </div>
          <div className="rowWrapper">
            <label>
            Size
            </label>
            <Button color='primary' size='md' />
          </div>
          <div className="rowWrapper">
            <label>
            Size
            </label>
            <Button color='primary' size='lg' />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              Colors
            </label>
            <Button color='default' />
          </div>
          <div className="rowWrapper">
            <label>
            Size
            </label>
            <Button color='primary' />
          </div>
          <div className="rowWrapper">
            <label>
            Size
            </label>
            <Button color='danger' />
          </div>
        </Row>

      </ButtonWrapper>

    </Container>
  );
};

export default Buttons;
