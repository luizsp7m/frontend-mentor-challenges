import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-image: url("/assets/crew/background-crew-desktop.jpg");
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Title = styled.div`
  color: #fafafa;
  font-size: 2rem;
  letter-spacing: .25rem;
  text-transform: uppercase;

  > b {
    color: rgba(255, 255, 255, .5);
    margin-right: 1.5rem;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;

  align-items: center;

  @media(max-width: 840px) {
    grid-template-columns: 1fr;
  }
`

export const CrewContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;

  @media(max-width: 840px) {
    align-items: center;
  }
`

export const CrewDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  > h2 {
    color: rgba(255, 255, 255, .5);
    font-weight: 300;
    text-transform: uppercase;
    font-size: 3rem;
  }

  > h1 {
    color: #fafafa;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 5rem;
  }

  > p {
    font-size: 1.55rem;
    color: rgba(255, 255, 255, .75);
    width: 35rem;
    letter-spacing: .05rem;
    line-height: 2.45rem;

    min-height: 12rem;
  }

  @media(max-width: 840px) {
    text-align: center;
    order: 2;
    margin-top: 4rem;

    > p {
      width: 100%;
    }
  }
`

export const NavCrew = styled.div`
  display: flex;
  gap: 1rem;
`

export const NavItem = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: ${({ selected }) => selected ? "#fafafa" : "rgba(255, 255, 255, .5)"};
  border-radius: 50%;
  cursor: pointer;
  transition: .25s;

  &:hover {
    background-color: #fafafa;
  }
`

export const CrewImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  > img {
    height: 60rem;
    width: auto;
    object-fit: cover;
  }

  @media(max-width: 840px) {
    order: -1;

    > img {
      height: 30rem;
    }
  }
`