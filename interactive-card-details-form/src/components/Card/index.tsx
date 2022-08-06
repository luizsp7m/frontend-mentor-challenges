import { Circles, Container, Front, Versus } from "./styles";

export function Card() {
  return (
    <Container>
      <Front>
        <Circles>
          <div />
          <div />
        </Circles>

        <h1>9591 6489 6389 101E</h1>

        <div className="card-bottom">
          <span>FELICIA LEIRE</span>
          <span>09/00</span>
        </div>
      </Front>

      <Versus>
        <span>000</span>
      </Versus>
    </Container>
  );
}