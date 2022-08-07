import styled from "styled-components";

interface InputProps {
  error: boolean;
}

export const Container = styled.form`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  div.form-row {
    display: flex;
    gap: 2.4rem;
  }

  div.form-group-row {
    display: flex;
    gap: 1.4rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;

  label {
    text-transform: uppercase;
    font-size: 1.45rem;
    font-weight: 700;
    letter-spacing: 0.20rem;
    color: ${({ theme }) => theme.colors.violet.dark};
  }

  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.35rem;
    font-weight: 500;
  }
`;

export const Input = styled.input<InputProps>`
  height: 4.8rem;
  width: 100%;
  padding: 0 1.2rem;
  font-size: 1.45rem;
  border-radius: 0.75rem;
  outline: 0;
  color: ${({ theme }) => theme.colors.violet.dark};
  font-weight: 500;
  border: 1px solid ${({ error, theme }) => !error ? theme.colors.violet.light : theme.colors.red};

  &::placeholder {
    color: ${({ theme }) => theme.colors.violet.light};
    letter-spacing: 0.15rem;
  }

  &:focus {
    border-color: ${({ error, theme }) => !error ? theme.colors.violet.dark : theme.colors.red};
  }
`;