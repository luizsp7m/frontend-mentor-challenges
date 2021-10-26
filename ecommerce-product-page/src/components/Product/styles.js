import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  > img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 2rem;
    cursor: ${({ modalIsOpen }) => modalIsOpen ? 'default' : 'pointer'};
  }

  > button {
    position: absolute;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background: #fff;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;

    transition: opacity .25s;

    &:hover {
      opacity: .75;
    }

    display: ${({ displayButton }) => displayButton ? 'block' : 'none'};

    > img {
      width: 1rem;
      height: auto;
    }
  }

  > button.previous {
    left: -2rem;
    top: 50%;
  }

  > button.next {
    right: -2rem;
    top: 50%;
  }

  @media(max-width: 768px) {
    > img {
      border-radius: 0rem;
    }

    > button {
      display: block;
    }

    > button.previous {
      left: .35rem;
      top: 50%;
    }

  > button.next {
      right: .35rem;
      top: 50%;
    }
  }
`;

export const Gallery = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media(max-width: 768px) {
    display: none;
  }

  > img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 1rem;
    cursor: pointer;
    transition: opacity .25s;

    &:hover {
      opacity: .55;
    }
  }

  > img.selected {
    opacity: .55;
    border: 2px solid #FF7D1B;
  }
`