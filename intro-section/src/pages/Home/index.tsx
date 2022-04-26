import { Customers } from "../../components/Customers";
import { Header } from "../../components/Header";
import { Container, Main, Presentation, Hero } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <Presentation>
          <h1>Make <br /> remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button>Learn more</button>

          <Customers />
        </Presentation>

        <Hero>
          <img src="/assets/images/image-hero-desktop.png" alt="Hero Image" className="desktop" />
          <img src="/assets/images/image-hero-mobile.png" alt="Hero Image" className="mobile"  />
        </Hero>
      </Main>
    </Container>
  );
}