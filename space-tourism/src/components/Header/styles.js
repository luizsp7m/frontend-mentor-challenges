import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  height: 10rem;
`;

export const Logo = styled(Link)`
  padding: 0 2rem;

  > img {
    max-width: 4rem;
    width: 100%;
    height: auto;
  }
`;

export const Nav = styled.div`
  background-color: rgba(0, 0, 0, .2);
  padding: 0 12rem 0 9rem;
  display: flex;
  align-items: center;
  gap: 6rem;
  background: rgba(0, 0, 0, .025);
  backdrop-filter: blur(15px);

  @media(max-width: 880px) {

    position: fixed;
    top: 0; bottom: 0;
    right: 0; left: 50%;
    background-color: #0f0f0f;

    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: center;

    backdrop-filter: unset;

    transform: translateX(100%);
    transition: transform .3s;

    &.toggled {
      transform: translateX(0);
    }
    
    /* &.toggled {
      display: flex;
      flex-direction: column;
      justify-content: center;

      position: fixed;
      top: 0; bottom: 0;
      left: 0; right: 0;

      background: #0f0f0f;
      backdrop-filter: unset;

      z-index: 10;
    } */
  }
`

export const NavItem = styled(Link)`
  color: rgba(255, 255, 255, .75);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 3rem 0;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: .05rem;
  font-weight: 300;
  transition: .25s;

  border-top: 3px solid transparent;
  border-bottom: 3px solid ${({ selected }) => selected ? "#fafafa" : "transparent"};

  &:hover {
    border-bottom-color: #fafafa;
  }

  > b {
    color: #fafafa;
  }

  @media(max-width: 880px) {
    padding: 1rem 0;
    border: 0;
  }
`

export const Burger = styled.div`
  display: none;

  @media(max-width: 880px) {
    padding: 0 2rem;
    height: 88px;
    display: flex;
    align-items: center;
    z-index: 10;
  }
`