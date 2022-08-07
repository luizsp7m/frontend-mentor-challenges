import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Router } from "./Router";
import { FormInputs } from "./types";

export function App() {
  const methods = useForm<FormInputs>();

  return (
    <FormProvider {...methods}>
      <Router />
    </FormProvider>
  );
}