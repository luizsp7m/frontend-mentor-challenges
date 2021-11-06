import { useState } from 'react';

import { Container, Logo, Nav, NavItem, Burger } from './styles';

export default function Header({ navItemSelected = "home" }) {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Logo>
        <img src="/assets/shared/logo.svg" alt="Logo" />
      </Logo>

      <Nav className={showMenu ? "toggled" : ""}>
        <NavItem to="/" selected={navItemSelected === "home" && true}>
          <b>00</b> Home
        </NavItem>

        <NavItem to="/destination" selected={navItemSelected === "destination" && true}>
          <b>01</b> Destination
        </NavItem>

        <NavItem to="/crew" selected={navItemSelected === "crew" && true}>
          <b>02</b> Crew
        </NavItem>

        <NavItem to="/technology" selected={navItemSelected === "technology" && true}>
          <b>03</b> Technology
        </NavItem>
      </Nav>

      <Burger 
        onClick={() => setShowMenu(!showMenu)}
        className={showMenu ? "toggled" : ""}
      >
        <img src={`/assets/shared/icon-${showMenu ? "close" : "hamburger"}.svg`} alt="Burger" />
      </Burger>
    </Container>
  );
}