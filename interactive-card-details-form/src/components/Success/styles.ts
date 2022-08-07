import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    margin-bottom: 1.8rem;

    h1 {
      font-size: 3.2rem;
      text-transform: uppercase;
      letter-spacing: 0.15rem;
      font-weight: 500;
    }

    p {
      font-size: 1.80rem;
      color: ${({ theme }) => theme.colors.violet.medium};
      font-weight: 500;
    }
  }
`;