import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  position: relative;
`;

export const Front = styled.div`
  width: 445px;
  height: 245px;
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
    bottom: 14.25rem;
    margin-bottom: -14.25rem;
    z-index: 10;
  }

  @media(max-width: 560px) {
    width: 285px;
    height: 156px;
    gap: 1.2rem;
    padding: 2.6rem;

    bottom: 12.25rem;
    margin-bottom: -12.25rem;

    h1 {
      font-size: 1.8rem;
    }
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

  @media(max-width: 560px) {
    top: 2.2rem;
  }
`;

export const Versus = styled.div`
  width: 445px;
  height: 245px;
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

  }

  @media(max-width: 560px) {
    width: 285px;
    height: 156px;

    span {
      top: 8.85rem;
    }
  }
`;