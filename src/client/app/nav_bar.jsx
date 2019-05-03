import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Navbar, Nav, NavItem } from 'reactstrap';

import modules from '../modules';

const NavBar = () => (
  <Navbar color="faded" light>
    <Container>
      <Row className="align-items-center">
        <Link to="/" className="navbar-brand">Melbourne Impressions</Link>
        <Nav>
          {modules.navItems}
        </Nav>
        {(!__PERSIST_GQL__ || __DEV__) && <Nav className="ml-auto" navbar>
          <NavItem>
            <a href={__PUBLIC_URL__ + "/graphiql"}>GraphiQL</a>
          </NavItem>
        </Nav>}
      </Row>
    </Container>
  </Navbar>
);

export default NavBar;
