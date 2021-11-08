import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;
  background-image: url("/assets/home/background-home-desktop.jpg");
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Main = styled.div`
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media(max-width: 840px) {
    flex-direction: column;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  > h2 {
    color: rgba(255, 255, 255, .5);
    font-weight: 300;
    text-transform: uppercase;
    font-size: 2rem;
  }

  > h1 {
    color: #fafafa;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 12rem;
  }

  > p {
    font-size: 1.55rem;
    color: rgba(255, 255, 255, .75);
    width: 33rem;
    letter-spacing: .05rem;
    line-height: 2.45rem;
  }

  @media(max-width: 840px) {
    text-align: center;

    > p {
      width: 100%;
    }
  }
`

export const Button = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;

  text-decoration: none;

  > button {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    border: 0;
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    color: rgba(0, 0, 0, .75);
    transition: .25s;

    &:hover {
      width: 22rem;
      height: 22rem;
      color: rgba(0, 0, 0, .85);
    }
  }
`
