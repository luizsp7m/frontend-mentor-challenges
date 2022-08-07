import { useFormContext } from "react-hook-form";
import { FormInputs } from "../../types";
import { Circles, Container, Front, Versus } from "./styles";

export function Card() {
  const { watch } = useFormContext<FormInputs>();

  const watchAllFields = watch();

  return (
    <Container>
      <Front>
        <Circles>
          <div />
          <div />
        </Circles>

        <h1>{watchAllFields.card_number || "9591 6489 6389 101E"}</h1>

        <div className="card-bottom">
          <span>{watchAllFields.cardholder?.toUpperCase() || "FELICIA LEIRE"}</span>
          <span>{watchAllFields.month_expiration || "09"}/{watchAllFields.year_expiration || "11"}</span>
        </div>
      </Front>

      <Versus>
        <span>{watchAllFields.code || "000"}</span>
      </Versus>
    </Container>
  );
}