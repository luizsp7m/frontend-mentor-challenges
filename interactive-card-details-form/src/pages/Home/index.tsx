import { useState } from "react";
import { Card } from "../../components/Card";
import { Form } from "../../components/Form";
import { Success } from "../../components/Success";
import { Container, Main } from "./styles";

export function Home() {
  const [showSuccessPage, setShowSuccessPage] = useState(false);

  function handleShowSuccessPage() {
    setShowSuccessPage(true);
  }

  return (
    <Container>
      <Main>
        <Card />
        { showSuccessPage ? <Success /> : <Form handleShowSuccessPage={handleShowSuccessPage} /> }
      </Main>
    </Container>
  );
}