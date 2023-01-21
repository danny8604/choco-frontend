import { ScrollRestoration } from "react-router-dom";
import LoginForm from "../components/loginForm/LoginForm";

const LoginPage = () => {
  return (
    <main>
      <ScrollRestoration />
      <LoginForm />
    </main>
  );
};

export default LoginPage;
