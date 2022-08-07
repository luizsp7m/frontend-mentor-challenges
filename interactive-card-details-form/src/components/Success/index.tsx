import { Container } from "./styles";
import { Button } from "../Button";

export function Success() {
  return (
    <Container>
      <img src="/assets/icon-complete.svg" alt="Icon Complete" />

      <div>
        <h1>Thank You!</h1>
        <p>We've added your card details</p>
      </div>

      <Button name="Continue" type="button" />
    </Container>
  );
}