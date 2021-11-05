import Header from '../../components/Header';

import { Container, Content } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div className="text">
          <h3>So, you want to travel to</h3>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div className="button">
          <button>Explore</button>
        </div>
      </Content>
    </Container>
  );
}