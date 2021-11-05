import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 4rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  padding: 0 4rem;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
  padding: 0rem 12rem 0 10rem;

  background-color: rgba(255, 255, 255, .1);
  backdrop-filter: blur(1rem);
`

export const NavItem = styled(Link)`
  color: #fafafa;
  display: flex;
  align-items: center;
  gap: 1.35rem;
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: .1rem;
  text-decoration: none;

  padding: 3.45rem 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid ${props => props.selected ? "#fafafa" : "transparent"};
  cursor: pointer;
  transition: .25s;

  &:hover {
    border-bottom-color: #fafafa;
  }

  > b {
    font-size: 2rem;
  }

  > span {
    font-size: 2rem;
    text-transform: uppercase;
    color: rgba(255, 255, 255, .85);
    font-weight: 300;
  }
`
