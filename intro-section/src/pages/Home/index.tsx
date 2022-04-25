import { Container, Main, Presentation, Hero } from "./styles";

export function Home() {
  return (
    <Container>
      {/* <Navbar /> */}

      <Main>
        <Presentation>
          <h1>Make <br /> remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button>Learn more</button>
        </Presentation>

        <Hero>
          <img src="/assets/images/image-hero-desktop.png" alt="Hero Image" />
        </Hero>
      </Main>
    </Container>
  );
}