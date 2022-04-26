import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 3.2rem;
  flex-wrap: wrap;

  img {
    
  }

  @media(max-width: 1110px) {
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4.4rem;
    
    img {
      max-width: 8rem;
      height: auto;
      object-fit: contain;
    }
  }
`;