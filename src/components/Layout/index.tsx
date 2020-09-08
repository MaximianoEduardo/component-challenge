import React from 'react'
import Sidebar from '../Sidebar'
import Buttons from '../Buttons'
import { Container } from './styles'

const Layout: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Buttons />
    </Container>
  );
};

export default Layout;
