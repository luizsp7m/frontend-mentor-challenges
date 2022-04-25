import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

`;

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  padding: 0 3rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;

  h1 {
    font-size: 8rem;
    font-weight: 700;
  }

  p {
    font-size: 2.8rem;
    color: var(--gray);
  }
`;

export const Hero = styled.div`
  img {
    height: 700px;
    width: 100%;
    object-fit: contain;
  }
`;