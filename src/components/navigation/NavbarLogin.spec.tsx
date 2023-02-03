import { getByRole, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderWithProviders } from "../util/test-utils";
import NavbarLogin from "./NavbarLogin";

describe("NavvarLogin", () => {
  it("Should render link", () => {
    renderWithProviders(
      <BrowserRouter>
        <NavbarLogin />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });
  it("Should render link with /LOGIN href", () => {
    renderWithProviders(
      <BrowserRouter>
        <NavbarLogin />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/login");
  });

  it("Should not render link with / href", () => {
    renderWithProviders(
      <BrowserRouter>
        <NavbarLogin />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).not.toHaveAttribute("href", "/");
  });
});
