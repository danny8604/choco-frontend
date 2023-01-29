import { ScrollRestoration } from "react-router-dom";
import Form from "../components/ui/form/Form";
import Login from "../features/login/Login";

const LoginPage = () => {
  return (
    <main>
      <ScrollRestoration />
      <Form formTitle={"LOGIN CHOCO STORE"} showGoogleBtn>
        <Login />
      </Form>
    </main>
  );
};

export default LoginPage;
