import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { LoginState } from "../../features/login/loginSlice";
import { renderWithProviders } from "../util/test-utils";
import NavbarLogin from "./NavbarLogin";

describe("NavvarLogin", () => {
  const render = <NavbarLogin />;

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
    renderWithProviders(render);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });
  it("Should render link with LOGIN text", () => {
    renderWithProviders(render);

    const link = screen.getByRole("link");

    expect(link).toHaveTextContent(/LOGIN/i);
  });

  it("Should not render link with LOGIN", () => {
    renderWithProviders(render);

    const link = screen.getByRole("link");

    expect(link).not.toHaveTextContent(/LOGOUT/i);
  });

  it("Should render link with LOGOUT", async () => {
    renderWithProviders(render, {
      preloadedState: {
        login: initialLoginState,
      },
    });

    const link = screen.getByRole("link");

    expect(link).toHaveTextContent(/LOGOUT/i);
  });

  it("Should render link with LOGIN when click logout link", async () => {
    user.setup();

    renderWithProviders(render, {
      preloadedState: {
        login: initialLoginState,
      },
    });

    const link = screen.getByRole("link");

    await user.click(link);

    expect(link).toHaveTextContent(/LOGIN/i);
  });
});
