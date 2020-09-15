import React from 'react'
import { NavLink } from "react-router-dom"
import { Container, Title, RoutesComponents, TitleComponent } from './styles'

const Sidebar: React.FC = () => {
  return (
    <Container>
      
        <a href="https://devchallenges.io/" target='_blank' rel='noopener noreferrer'>
          <Title>
            <span>Dev</span>challenges.io
          </Title>
        </a>
     

      <RoutesComponents>
        <NavLink to="/" activeClassName="selected">
          <TitleComponent className='active'>
            Home
          </TitleComponent>
        </NavLink>
        <NavLink to="/buttons" activeClassName="selected">
          <TitleComponent>
            Buttons
          </TitleComponent>
        </NavLink>
        <NavLink to="/inputs" activeClassName="selected">
          <TitleComponent>
            Typography
          </TitleComponent>
        </NavLink>
        <NavLink to="/inputs" activeClassName="selected">
          <TitleComponent>
            Inputs
          </TitleComponent>
        </NavLink>
        <NavLink to="/inputs" activeClassName="selected">
          <TitleComponent>
           Grid
          </TitleComponent>
        </NavLink>
      </RoutesComponents>
    </Container>
  )
}

export default Sidebar
