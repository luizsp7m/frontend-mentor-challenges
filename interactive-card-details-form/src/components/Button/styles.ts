import styled from "styled-components";

export const Container = styled.button`
  height: 5.2rem;
  width: 100%;
  border-radius: 0.75rem;
  border: 0;
  outline: 0;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.violet.dark};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.65rem;
  letter-spacing: 0.1rem;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.80;
  }
`;