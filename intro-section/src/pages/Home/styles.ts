import styled from "styled-components";

export const Container = styled.div`

`;

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;

  padding: 8rem 3rem 8rem 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 4.4rem;

  @media(max-width: 1110px) {
    grid-template-columns: repeat(1, 1fr);
    height: auto;
    padding: 11rem 3rem 3rem 3rem;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 62rem;
  gap: 3.2rem;
  position: relative;
  z-index: 5;

  h1 {
    font-size: 8rem;
    font-weight: 700;
  }

  p {
    max-width: 42.5rem;
    font-size: 1.80rem;
    line-height: 2.75rem;
    color: var(--gray);
  }

  button {
    background: var(--black);
    color: var(--white);
    font-size: 1.6rem;
    align-self: flex-start;
    padding: 1.8rem 3rem;
    border-radius: 1.25rem;
    cursor: pointer;
    outline: 0;
    transition: 0.25s ease-in-out;
    border: 1px solid transparent;

    &:hover {
      background: var(--white);
      color: var(--dark);
      border-color: var(--dark);
    }
  }

  @media(max-width: 1110px) {
    align-items: center;
    gap: 3.2rem;
    height: auto;

    h1, p {
      text-align: center;
    }

    h1 {
      br {
        display: none;
      }
    }

    button {
      align-self: center;
    }
  }
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 62rem;
    width: 100%;
    object-fit: contain;
  }

  img.mobile {
    display: none;
  }

  @media(max-width: 1110px) {
    order: -1;

    img {
      width: 90%;
      height: auto;
    }

    img.mobile {
      display: block;
    }

    img.desktop {
      display: none;
    }
  }
`;
