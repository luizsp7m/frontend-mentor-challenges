import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  position: relative;
`;

export const Front = styled.div`
  max-width: 44.7rem;
  height: 24.5rem;
  background-image: url("/assets/bg-card-front.png");
  background-size: cover;
  background-position: center;
  padding: 3rem 3.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 3.2rem;
  position: relative;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.8rem;
    letter-spacing: 0.25rem;
    font-weight: 400;
  }

  div.card-bottom {
    display: flex;
    justify-content: space-between;

    span {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.25rem;
      letter-spacing: 0.25rem;
    }
  }

  @media(max-width: 1024px) {
    order: 2;
  }
`;

export const Circles = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  position: absolute;
  top: 2.8rem;
  
  div:nth-child(1) {
    height: 4.6rem;
    width: 4.6rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    top: 3.2rem;
  }

  div:nth-child(2) {
    height: 1.6rem;
    width: 1.6rem;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    top: 3.2rem;
  }
`;

export const Versus = styled.div`
  width: 44.7rem;
  height: 24.5rem;
  background-image: url("/assets/bg-card-back.png");
  background-size: cover;
  background-position: center;
  position: relative;
  margin-left: 9.6rem;

  span {
    position: absolute;
    top: 11.45rem;
    right: 5rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.25rem;
    letter-spacing: 0.25rem;
  }

  @media(max-width: 1024px) {
    margin-left: 4.8rem;
  }
`;