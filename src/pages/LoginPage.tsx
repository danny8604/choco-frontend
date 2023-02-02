import { ScrollRestoration } from "react-router-dom";
import FormWrapper from "../components/ui/form/FormWrapper";
import Login from "../features/login/Login";

const LoginPage = () => {
  return (
    <main>
      <ScrollRestoration />
      <FormWrapper formTitle={"LOGIN CHOCO STORE"} showGoogleBtn>
        <Login />
      </FormWrapper>
    </main>
  );
};

export default LoginPage;
