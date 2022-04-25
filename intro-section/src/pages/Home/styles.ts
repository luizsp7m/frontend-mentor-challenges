import styled from "styled-components";

export const Container = styled.div`

`;

export const Main = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
  padding: 8rem 3rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 3.2rem;

  @media(max-width: 1110px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 62rem;
  gap: 3.2rem;
  position: relative;

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
  img {
    height: 62rem;
    width: 100%;
    object-fit: contain;
  }

  @media(max-width: 1110px) {
    order: -1;
  }
`;
