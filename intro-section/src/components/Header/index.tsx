import { 
  Container, 
  Wrapper, 
  Navbar, 
  Nav, 
  NavItem, 
  DropdownContainer, 
  Dropdown, 
  Logo, 
  ButtonGroup,
  Menu
} from "./styles";

export function Header() {
  return (
    <Container>
      <Wrapper>
        <Navbar>
          <Logo>
            <img src="/assets/images/logo.svg" alt="Logo" />
          </Logo>

          <Nav>
            <NavItem>
              <a href="#">
                <span>Features</span>
                <img src="/assets/images/icon-arrow-down.svg" alt="Icon" />
              </a>

              <DropdownContainer>
                <Dropdown>
                  <a href="#">
                    <img src="/assets/images/icon-todo.svg" alt="Icon" />
                    <span>Todo List</span>
                  </a>

                  <a href="#">
                    <img src="/assets/images/icon-calendar.svg" alt="Icon" />
                    <span>Calendar</span>
                  </a>

                  <a href="#">
                    <img src="/assets/images/icon-reminders.svg" alt="Icon" />
                    <span>Reminders</span>
                  </a>

                  <a href="#">
                    <img src="/assets/images/icon-planning.svg" alt="Icon" />
                    <span>Planning</span>
                  </a>
                </Dropdown>
              </DropdownContainer>
            </NavItem>

            <NavItem>
              <a href="#">
                <span>Company</span>
                <img src="/assets/images/icon-arrow-down.svg" alt="Icon" />
              </a>

              <DropdownContainer>
                <Dropdown>
                  <a href="#">
                    <span>History</span>
                  </a>

                  <a href="#">
                    <span>Our Team</span>
                  </a>

                  <a href="#">
                    <span>Blog</span>
                  </a>
                </Dropdown>
              </DropdownContainer>
            </NavItem>

            <NavItem>
              <a href="#">
                <span>Careers</span>
              </a>
            </NavItem>

            <NavItem>
              <a href="#">
                <span>About</span>
              </a>
            </NavItem>
          </Nav>
        </Navbar>

        <ButtonGroup>
          <button className="login">Login</button>
          <button className="register">Register</button>
        </ButtonGroup>

        <Menu>
          <img src="/assets/images/icon-menu.svg" alt="Icon" />
        </Menu>
      </Wrapper>
    </Container>
  );
}