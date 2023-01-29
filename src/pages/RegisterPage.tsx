import { ScrollRestoration } from "react-router-dom";
import Form from "../components/ui/form/Form";
import Register from "../features/register/Register";

const RegisterPage = () => {
  return (
    <main>
      <ScrollRestoration />
      <Form formTitle={"REGISTER CHOCO STORE"}>
        <Register />
      </Form>
    </main>
  );
};

export default RegisterPage;
