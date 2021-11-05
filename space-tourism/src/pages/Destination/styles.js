import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-image: url("/assets/destination/background-destination-desktop.jpg");
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  width: 90%;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  gap: 5rem;
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

  @media(max-width: 840px) {
    grid-template-columns: 1fr;
  }
`

export const PlanetImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    max-width: 35rem;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

export const PlanetContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;

  @media(max-width: 840px) {
    align-items: center;
  }
`

export const PlanetNav = styled.div`
  display: flex;
  list-style: none;
  gap: 3rem;
`

export const NavItem = styled.div`
  color: #fafafa;
  font-size: 1.35rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  cursor: pointer;
  padding: 1rem 0;
  border-bottom: 2px solid ${({ selected }) => selected ? "#fafafa" : "transparent"};
  transition: .25s;

  &:hover {
    border-bottom-color: #fafafa;
  }
`

export const PlanetDescription = styled.div`
  color: #fafafa;

  > h1 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 10rem;
  }

  > p {
    font-size: 1.55rem;
    color: rgba(255, 255, 255, .75);
    width: 32rem;
    letter-spacing: .05rem;
    line-height: 2.45rem;
  }

  @media(max-width: 840px) {
    text-align: center;

    > p {
      width: 100%;
    }
  }
`

export const PlanetMetrics = styled.div`
  display: flex;
  gap: 4rem;
  border-top: 1px solid rgba(255, 255, 255, .1);
  padding: 2rem 0;
  width: 30rem;

  > div {
    display: flex;
    gap: 1rem;
    flex-direction: column;

    > label {
      color: rgba(255, 255, 255, .5);
      font-size: 1.3rem;
      text-transform: uppercase;
    }

    > span {
      color: #fafafa;
      font-size: 2rem;
      letter-spacing: .1rem;
      text-transform: uppercase;
    }
  }

  @media(max-width: 840px) {
    justify-content: center;
    width: 100%;
  }
`