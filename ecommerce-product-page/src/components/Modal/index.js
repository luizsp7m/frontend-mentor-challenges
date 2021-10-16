import { Container, Content } from "./styles";

export default function Modal({ children }) {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );
}