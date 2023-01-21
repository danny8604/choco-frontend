import { ScrollRestoration } from "react-router-dom";
import RegisterForm from "../components/registerForm/RegisterForm";

const RegisterPage = () => {
  return (
    <main>
      <ScrollRestoration />
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
