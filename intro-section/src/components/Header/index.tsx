import { useState } from "react";
import {
  Container,
  Wrapper,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  DropdownContainer,
  Dropdown,
  Logo,
  ButtonGroup,
  Menu,
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
              <NavLink>
                <span>Features</span>
                <img className="rotate" src="/assets/images/icon-arrow-down.svg" alt="Icon" />
              </NavLink>

              <DropdownContainer>
                <Dropdown>
                  <NavLink>
                    <img src="/assets/images/icon-todo.svg" alt="Icon" />
                    <span>Todo List</span>
                  </NavLink>

                  <NavLink>
                    <img src="/assets/images/icon-calendar.svg" alt="Icon" />
                    <span>Calendar</span>
                  </NavLink>

                  <NavLink>
                    <img src="/assets/images/icon-reminders.svg" alt="Icon" />
                    <span>Reminders</span>
                  </NavLink>

                  <NavLink>
                    <img src="/assets/images/icon-planning.svg" alt="Icon" />
                    <span>Planning</span>
                  </NavLink>
                </Dropdown>
              </DropdownContainer>
            </NavItem>

            <NavItem>
              <NavLink>
                <span>Company</span>
                <img className="rotate" src="/assets/images/icon-arrow-down.svg" alt="Icon" />
              </NavLink>

              <DropdownContainer>
                <Dropdown>
                  <NavLink>
                    <span>History</span>
                  </NavLink>

                  <NavLink>
                    <span>Our Team</span>
                  </NavLink>

                  <NavLink>
                    <span>Blog</span>
                  </NavLink>
                </Dropdown>
              </DropdownContainer>
            </NavItem>

            <NavItem>
              <NavLink>
                <span>Careers</span>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <span>About</span>
              </NavLink>
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