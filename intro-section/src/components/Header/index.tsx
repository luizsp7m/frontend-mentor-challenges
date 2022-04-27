import { useState } from "react";
import {
  Container,
  Wrapper,
  Navbar,
  Nav,
  NavItem,
  Dropdown,
  Logo,
  ButtonGroup,
  Menu,
  DropdownContainer
} from "./styles";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Navbar>
          <Logo>
            <img src="/assets/images/logo.svg" alt="Logo" />
          </Logo>

          <Nav toggled={!showMenu}>
            <NavItem>
              <a href="#">
                <span>Features</span>
                <img
                  className="rotate"
                  src="/assets/images/icon-arrow-down.svg"
                  alt="Icon"
                />
              </a>

              <DropdownContainer>
                <Dropdown>
                  <NavItem>
                    <a href="#">
                      <img src="/assets/images/icon-todo.svg" alt="Icon" />
                      <span>Todo List</span>
                    </a>
                  </NavItem>

                  <NavItem>
                    <a href="#">
                      <img src="/assets/images/icon-calendar.svg" alt="Icon" />
                      <span>Calendar</span>
                    </a>
                  </NavItem>

                  <NavItem>
                    <a href="#">
                      <img src="/assets/images/icon-reminders.svg" alt="Icon" />
                      <span>Reminders</span>
                    </a>
                  </NavItem>

                  <NavItem>
                    <a href="">
                      <img src="/assets/images/icon-planning.svg" alt="Icon" />
                      <span>Planning</span>
                    </a>
                  </NavItem>
                </Dropdown>
              </DropdownContainer>
            </NavItem>

            <NavItem>
              <a href="#">
                <span>Company</span>
                <img
                  className="rotate"
                  src="/assets/images/icon-arrow-down.svg"
                  alt="Icon"
                />
              </a>

              <DropdownContainer>
                <Dropdown>
                  <NavItem>
                    <a href="#">
                      <span>History</span>
                    </a>
                  </NavItem>

                  <NavItem>
                    <a href="#">
                      <span>Our Team</span>
                    </a>
                  </NavItem>

                  <NavItem>
                    <a href="#">
                      <span>Blog</span>
                    </a>
                  </NavItem>
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

        <Menu onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <img src="/assets/images/icon-close-menu.svg" alt="Icon" /> : <img src="/assets/images/icon-menu.svg" alt="Icon" />}
        </Menu>
      </Wrapper>
    </Container>
  );
}