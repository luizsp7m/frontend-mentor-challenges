import { Card } from "../../components/Card";
import { Form } from "../../components/Form";
import { Container, Main } from "./styles";

export function Home() {
  return (
    <Container>
      <Main>
        <Card />
        <Form />
      </Main>
    </Container>
  );
}