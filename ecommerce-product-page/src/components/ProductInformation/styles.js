import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  > h3 {
    color: #FF7D1B;
    font-size: 1.65rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  > h1 {
    color: #1F1F27;
    font-size: 4rem;
  }

  > p {
    color: #8C8F94;
    font-size: 1.65rem;
  }

  > div.price-box {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div {
      display: flex;
      align-items: center;
      gap: 2rem;

      > h1 {
        color: #1F1F27;
        font-size: 4rem;
      }

      > span {
        font-size: 1.35rem;
        font-weight: bold;
        color: #FF7D1B;
        font-weight: 700;
        padding: 1rem;
        background: #FFEFE2;
        border-radius: .5rem;
      }
    }

    > h2 {
      color: #8C8F94;
      font-size: 1.65rem;
      text-decoration: line-through;
    }
  }

  > div.input-group {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 3rem;

    > div.input {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      background: #F7F8FD;
      height: 40px;

      > button {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: 0;
        background: 0;
        border: 0;
        cursor: pointer;
      }

      > label {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1F1F27;
        font-size: 1.35rem;
        font-weight: 700;
      }
    }

    > button {
      background: #FF7D1B;
      padding: 2rem;
      border: 0;
      outline: 0;
      border-radius: .55rem;
      color: #fff;
      font-weight: bold;
      font-size: 1.35rem;
      cursor: pointer;
      transition: opacity .25s;
      display: flex;
      justify-content: center;
      gap: 1rem;
      align-items: center;

      > img {
        
      }

      &:hover {
        opacity: .85;
      }
    }
  }

  @media(max-width: 768px) {
    padding: 0 2rem;

    > div.price-box {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    > div.input-group {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
  }
`;
