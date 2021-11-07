import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-image: url("/assets/technology/background-technology-desktop.jpg");
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Wrapper = styled.div`
  /* max-width: 1400px; */
  width: 100%;
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

  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
  

  > b {
    color: rgba(255, 255, 255, .5);
    margin-right: 1.5rem;
  }
`

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* position: relative;
  right: -23.5%; */

  > img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media(max-width: 840px) {
    order: -1;

    > img {
      height: 30rem;
      object-fit: cover;
    }
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

export const TechnologyContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  max-width: 550px;
  width: 90%;
  margin: 0 auto;

  @media(max-width: 840px) {
    align-items: center;
    flex-direction: column;
  }
`

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media(max-width: 840px) {
    flex-direction: row;
  }
`

export const NavItem = styled.div`
  height: 6rem;
  width: 6rem;
  border: 1px solid rgba(255, 255, 255, .5);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${({ selected }) => selected ? "#0C0F18" : "#fafafa"};
  cursor: pointer;

  transition: .25s;

  background-color: ${({ selected }) => selected ? "#fafafa" : ""};

  &:hover {
    background-color: #fafafa;
    color: #0C0F18;
  }
`

export const TechnologyDescription = styled.div`
  color: #fafafa;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h2 {
    color: rgba(255, 255, 255, .5);
    font-weight: 300;
    text-transform: uppercase;
    font-size: 2rem;
  }

  > h1 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 4rem;
  }

  > p {
    font-size: 1.55rem;
    color: rgba(255, 255, 255, .75);
    width: 32rem;
    letter-spacing: .05rem;
    line-height: 2.45rem;
    min-height: 15rem;
  }

  @media(max-width: 840px) {
    text-align: center;

    > p {
      width: 100%;
    }
  }
`
