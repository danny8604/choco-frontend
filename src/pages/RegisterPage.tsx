import { ScrollRestoration } from "react-router-dom";
import FormWrapper from "../components/ui/form/FormWrapper";
import Register from "../features/register/Register";

const RegisterPage = () => {
  return (
    <main>
      <ScrollRestoration />
      <FormWrapper formTitle={"REGISTER CHOCO STORE"}>
        <Register />
      </FormWrapper>
    </main>
  );
};

export default RegisterPage;
