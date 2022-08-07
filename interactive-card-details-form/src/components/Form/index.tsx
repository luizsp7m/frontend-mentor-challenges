import { useFormContext } from "react-hook-form";
import { FormInputs } from "../../types";
import { Button } from "../Button";
import { Container, Input, InputGroup } from "./styles";

const validations = {
  cardholder: {
    required: "Can't be blank",

    minLength: {
      value: 3,
      message: "Minimum of 3 characters"
    },

    maxLength: {
      value: 32,
      message: "Maximum of 32 characters"
    },

    pattern: {
      value: /^[a-zA-Z\s]*$/,
      message: "Wrong format, letters only"
    }
  },

  card_number: {
    required: "Can't be blank",

    minLength: {
      value: 16,
      message: "Minimum of 16 numbers"
    },

    maxLength: {
      value: 16,
      message: "Maximum of 16 numbers"
    },

    pattern: {
      value: /^[0-9]*$/,
      message: "Wrong format, numbers only"
    }
  },

  code: {
    required: "Can't be blank",

    minLength: {
      value: 3,
      message: "Minimum of 3 numbers"
    },

    maxLength: {
      value: 3,
      message: "Maximum of 3 numbers"
    },

    pattern: {
      value: /^[0-9]*$/,
      message: "Wrong format"
    }
  },

  month_expiration: {
    required: "Can't be blank",

    min: {
      value: 1,
      message: "The minimum value is 1",
    },

    max: {
      value: 12,
      message: "The maximum value is 12"
    },

    pattern: {
      value: /^[0-9]*$/,
      message: "Wrong format"
    }
  },

  year_expiration: {
    required: "Can't be blank",

    min: {
      value: 22,
      message: "The minimum value is 22",
    },

    max: {
      value: 99,
      message: "The maximum value is 99"
    },

    pattern: {
      value: /^[0-9]*$/,
      message: "Wrong format"
    }
  },
}

interface Props {
  handleShowSuccessPage: () => void;
}

export function Form({ handleShowSuccessPage }: Props) {
  const { register, handleSubmit, formState: { errors } } = useFormContext<FormInputs>();

  const onSubmit = handleSubmit(data => {
    handleShowSuccessPage();
  });

  return (
    <Container onSubmit={onSubmit}>
      <InputGroup>
        <label>CARDHOLDER NAME</label>
        <Input
          type="text"
          placeholder="e.g. Jane Appleseed"
          maxLength={32}
          error={errors.cardholder ? true : false}
          {...register("cardholder", validations.cardholder)}
        />
        {errors.cardholder && <span>{errors.cardholder.message}</span>}
      </InputGroup>

      <InputGroup>
        <label>CARD NUMBER</label>
        <Input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={16}
          error={errors.card_number ? true : false}
          {...register("card_number", validations.card_number)}
        />
        {errors.card_number && <span>{errors.card_number.message}</span>}
      </InputGroup>

      <div className="form-row">
        <InputGroup>
          <label>EXP. DATE (MM/YY)</label>

          <div className="form-group-row">
            <Input
              type="text"
              placeholder="MM"
              maxLength={2}
              error={errors.month_expiration ? true : false}
              {...register("month_expiration", validations.month_expiration)}
            />

            <Input
              type="text"
              placeholder="YY"
              maxLength={2}
              error={errors.year_expiration ? true : false}
              {...register("year_expiration", validations.year_expiration)}
            />
          </div>

          {errors.month_expiration && errors.year_expiration && <span>{errors.month_expiration.message}</span>}
          {errors.month_expiration && !errors.year_expiration && <span>{errors.month_expiration.message}</span>}
          {errors.year_expiration && !errors.month_expiration && <span>{errors.year_expiration.message}</span>}
        </InputGroup>

        <InputGroup>
          <label>CVC</label>
          <Input
            type="text"
            placeholder="e.g. 123"
            maxLength={3}
            error={errors.code ? true : false}
            {...register("code", validations.code)}
          />
          {errors.code && <span>{errors.code.message}</span>}
        </InputGroup>
      </div>

      <Button name="Confirm" type="submit" />
    </Container>
  );
}