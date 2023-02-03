import { getByRole, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { LoginState } from "../../features/login/loginSlice";
import { renderWithProviders } from "../util/test-utils";
import NavbarLogin from "./NavbarLogin";

describe("NavvarLogin", () => {
  const initialLoginState: LoginState = {
    userId: "testId",
    userEmail: "test@test.com",
    userToken: "testToken",
    tokenExpirationDate: new Date(),
    userCart: [],
    favoriteItems: [],
    showChangePassword: true,
    login: true,
    logout: false,
  };

  it("Should render link", () => {
    renderWithProviders(
      <BrowserRouter>
        <NavbarLogin />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });
  it("Should render link with LOGIN text", () => {
    renderWithProviders(
      <BrowserRouter>
        <NavbarLogin />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveTextContent(/LOGIN/i);
  });

  it("Should not render link with LOGIN", () => {
    renderWithProviders(
      <BrowserRouter>
        <NavbarLogin />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).not.toHaveTextContent(/LOGOUT/i);
  });

  it("Should render link with LOGOUT", async () => {
    renderWithProviders(
      <BrowserRouter>
        <NavbarLogin />
      </BrowserRouter>,
      {
        preloadedState: {
          login: initialLoginState,
        },
      }
    );

    const link = screen.getByRole("link");

    expect(link).toHaveTextContent(/LOGOUT/i);
  });
});
