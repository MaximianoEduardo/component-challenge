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
                { ' <Button />  '}
            </label>
            <Button color='default'  />
          </div>
          <div className="rowWrapper hv">
            <label>
            { ' &:hover, &:focus  '}
            </label>
            <Button color='default' />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
            { ' <Button variant="outline" />  '}
            </label>
            <Button variant='outline' disableShadow />
          </div>
          <div className="rowWrapper hv">
            <label>
            { ' &:hover, &:focus  '}
            </label>
            <Button  variant='outline' disableShadow/>
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
            { ' <Button variant="text" />  '}
            </label>
            <Button variant='text'  disableShadow />
          </div>
          <div className="rowWrapper hv">
            <label>
            { ' &:hover, &:focus  '}
            </label>
            <Button variant='text'  disableShadow />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
            { ' <Button disableShadow" />  '}
            </label>
            <Button disableShadow color='primary'/>
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
            { ' <Button disable" />  '}
            </label>
            <Button variant='default'  disable disableShadow/>
          </div>
          <div className="rowWrapper hv">
            <label>
              {' <Button variant=”text” disabled /> '}
            </label>
            <Button variant='text' disableShadow disable />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              {' <Button startIcon=”local_grocery_store” />  '}
            </label>
            <Button color='primary' startIcon='account_circle' />
          </div>
          <div className="rowWrapper">
            <label>
              {' <Button endIcon=”local_grocery_store” />  '}
            </label>
            <Button color='primary' endIcon='account_circle' />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              {'<Button size=”sm” />'}
            </label>
            <Button color='primary' size='sm'/>
          </div>
          <div className="rowWrapper">
            <label>
              {'<Button size="md" />'}
            </label>
            <Button color='primary' size='md'/>
          </div>
          <div className="rowWrapper">
            <label>
              {'<Button size="lg" />'}
            </label>
            <Button color='primary' size='lg'/>
          </div>
        </Row>

        <Row>
          <div className="rowWrapper">
            <label>
              {'<Button color=”default” />'}
            </label>
            <Button color='default' />
          </div>
          <div className="rowWrapper">
            <label>
              {'<Button color="primary" />'}
            </label>
            <Button color='primary' />
          </div>
          <div className="rowWrapper">
            <label>
              {'<Button color="secondary" />'}
            </label>
            <Button color='secondary' />
          </div>
          <div className="rowWrapper">
            <label>
              {'<Button color="danger" />'}
            </label>
            <Button color='danger' />
          </div>
        </Row>

        <Row>
          <div className="rowWrapper hv">
            <label>
              {'&:hover, &:focus '}
            </label>
            <Button color='default' />
          </div>
          <div className="rowWrapper hv">
            <Button color='primary' />
          </div>
          <div className="rowWrapper hv">
            <Button color='secondary' />
          </div>
          <div className="rowWrapper hv">
            <Button color='danger' />
          </div>
        </Row>

      </ButtonWrapper>
      <span>
        Eduardo Maximiano @ DevChallenges.io 
      </span>
    </Container>
  );
};

export default Buttons;
