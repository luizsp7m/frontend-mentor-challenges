import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-image: url("/assets/home/background-home-desktop.jpg");
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1100px;
  width: 95%;
  margin: 5rem auto;

  > div.text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #fafafa;

    > h3 {
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 300;
      font-family: 'Barlow Condensed', sans-serif;
      color: rgba(255, 255, 255, .75);
    }

    > h1 {
      font-size: 12rem;
      text-transform: uppercase;
      font-weight: 400;
    }

    > p {
      font-size: 2rem;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 300;
      color: rgba(255, 255, 255, .75);
      width: 40rem;
      line-height: 3rem;
    }
  }

  > div.button {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    
    > button {
      background: #fafafa;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      outline: 0;
      height: 20rem;
      width: 20rem;
      border-radius: 50%;
      font-size: 2rem;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;