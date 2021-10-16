import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, .5);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  width: 460px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  > button {
    position: absolute;
    right: 0;
    top: -3rem;
    background: none;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;