import styled from "styled-components";

interface NavProps {
  toggled: boolean;
}

export const Container = styled.div`
  position: fixed;
  width: 100%;
  background: var(--white);
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 3rem;
  margin: 0 auto;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  gap: 5.2rem;
`;

export const Nav = styled.div<NavProps>`
  display: flex;
  align-items: center;
  gap: 3.6rem;

  @media(max-width: 850px) {
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: var(--white);
    padding: 3rem;
    height: 100vh;
    right: 0;
    left: 50%;
    top: 0;
    bottom: 0;
    padding-top: 8rem;
    transition: transform 0.25s ease-in-out;
    transform: ${props => props.toggled ? `translateX(100%)` : `translateX(0)`};

    ${props => !props.toggled && `
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -200%;
        right: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
    `}
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: 0.25s ease-in-out;
  padding-top: 1.6rem;
  top: 0.25rem;

  @media(max-width: 850px) {
    position: relative;
    padding-top: 0;
    top: 0;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  min-width: 12rem;
  padding: 1.8rem;
  background: var(--white);
  border-radius: 0.5rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  transition: color 0.25s ease-in-out;

  > a {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    text-decoration: none;

    span {
      font-size: 1.45rem;
      color: var(--gray);

      &:hover {
        color: var(--black);
      }
    }
  }

  @media(max-width: 850px) {
    box-shadow: none;
  }
`;

export const NavItem = styled.div`
  position: relative;
  
  > a {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    text-decoration: none;
    transition: color 0.25s ease-in-out;

    span {
      font-size: 1.45rem;
      color: var(--gray);
    }

    img {
      transition: 0.25s ease-in-out;
    }
  }

  &:hover {
    ${DropdownContainer} {
      visibility: visible;
      opacity: 1;
      top: 1rem;
    }

    > a {
      span {
        color: var(--black);
      }

      img {
        transform: rotate(180deg);
      }
    }
  }
`;

export const Logo = styled.div`
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  @media(max-width: 850px) {
    display: none;
  }

  button {
    outline: 0;
    border: 0;
    background: 0;
    font-size: 1.45rem;
    color: var(--gray);
    padding: 1.3rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.25s ease-in-out;

    &:hover {
      color: var(--black);
    }
  }

  button.login {

  }

  button.register {
    border: 1px solid var(--gray);

    &:hover {
      border-color: var(--black);
    }
  }
`;

export const Menu = styled.div`
  display: none;

  @media(max-width: 850px) {
    z-index: 10;
    display: block;
  }
`;