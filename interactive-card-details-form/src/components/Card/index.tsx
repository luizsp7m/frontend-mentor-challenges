import { useFormContext } from "react-hook-form";
import { FormInputs } from "../../types";
import { Circles, Container, Front, Versus } from "./styles";

export function Card() {
  const { watch } = useFormContext<FormInputs>();

  const watchAllFields = watch();

  const card_number = watchAllFields.card_number ? watchAllFields.card_number : "959164896389101E";
  const cardholder = watchAllFields.cardholder ? watchAllFields.cardholder.toUpperCase() : "FELICIA LEIRE";
  const month_expiration = watchAllFields.month_expiration ? ("00" + watchAllFields.month_expiration).slice(-2) : "09";
  const year_expiration = watchAllFields.year_expiration ? watchAllFields.year_expiration : "11";
  const code = watchAllFields.code ? watchAllFields.code : "000";

  return (
    <Container>
      <Front>
        <Circles>
          <div />
          <div />
        </Circles>

        <h1>{card_number.substring(0, 4)} {card_number.substring(4, 8)} {card_number.substring(8, 12)} {card_number.substring(12, 16)}</h1>

        <div className="card-bottom">
          <span>{cardholder}</span>
          <span>{month_expiration}/{year_expiration}</span>
        </div>
      </Front>

      <Versus>
        <span>{code}</span>
      </Versus>
    </Container>
  );
}