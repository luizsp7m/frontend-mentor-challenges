import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #FFFFFF;
`;

export const Content = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;

  @media(max-width: 835px) {
    width: 100%;
  }
`;