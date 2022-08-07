import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: white;

  &::before {
    content: "";
    position: absolute;
    width: 35%;
    top: 0;
    left: 0;
    height: 100%;
    background: url("/assets/bg-main-desktop.png");
    background-size: cover;
    background-position: center;
  }

  @media(max-width: 1024px) {
    &::before {
      width: 100%;
      height: 35%;
      background: url("/assets/bg-main-mobile.png");
      background-size: cover;
      background-position: center;
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media(max-width: 1024px) {
    flex-direction: column;
    gap: 6.4rem;
  }
`;