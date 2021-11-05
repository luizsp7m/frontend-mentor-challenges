import { Container, Logo, Nav, NavItem } from './styles';

export default function Header({ navItemSelected = "home" }) {
  return (
    <Container>
      <Logo>
        <img src="/assets/shared/logo.svg" alt="Logo" />
      </Logo>

      <Nav>
        <NavItem to="/" selected={navItemSelected === "home" && true}>
          <b>00</b>
          <span>Home</span>
        </NavItem>

        <NavItem to="/destination" selected={navItemSelected === "destination" && true}>
          <b>01</b>
          <span>Destination</span>
        </NavItem>

        <NavItem to="/crew" selected={navItemSelected === "crew" && true}>
          <b>02</b>
          <span>Crew</span>
        </NavItem>

        <NavItem to="/technology" selected={navItemSelected === "technology" && true}>
          <b>03</b>
          <span>Technology</span>
        </NavItem>
      </Nav>
    </Container>
  );
}