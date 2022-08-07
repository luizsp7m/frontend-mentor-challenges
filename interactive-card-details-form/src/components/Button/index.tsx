import { Container } from "./styles";

interface Props {
  name: string;
  type: "button" | "submit";
}

export function Button({ name, type }: Props) {
  return (
    <Container type={type}>
      {name}
    </Container>
  );
}