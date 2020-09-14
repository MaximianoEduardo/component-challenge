import React from 'react'
import Sidebar from '../Sidebar'
import Buttons from '../Buttons'
import { Container } from './styles'
import Home from '../Home'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <Container>
      <Router>
        <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/buttons">
              <Buttons />
            </Route>
          </Switch>
      </Router>
    </Container>
  );
};

export default Layout;
