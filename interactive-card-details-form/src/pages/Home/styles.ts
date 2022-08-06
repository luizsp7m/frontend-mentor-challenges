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
    left: 0;
    height: 100%;
    background: url("/assets/bg-main-desktop.png");
    background-size: cover;
    background-position: center;
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;