import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 8rem;
  padding: 8rem 0;
  width: 90%;
  margin: 0 auto;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 0 4rem 0;
    width: 100%;
    gap: 4rem;
  }
`;