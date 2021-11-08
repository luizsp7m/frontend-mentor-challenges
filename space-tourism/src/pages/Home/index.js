import Header from '../../components/Header';

import { Container, Main, Description, Button } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <Description data-aos="fade-right">
          <h2>So, you want to travel to</h2>

          <h1>Space</h1>

          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </Description>

        <Button to="/destination" data-aos="zoom-in">
          <button>Explore</button>
        </Button>
      </Main>
    </Container>
  );
}