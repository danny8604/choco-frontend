import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "../util/test-utils";
import NavbarCart from "./NavbarCart";

describe("NavbarCart", () => {
  it("Should render correctly", () => {
    renderWithProviders(<NavbarCart />);

    const btnElement = screen.getByRole("button");

    expect(btnElement).toBeInTheDocument();
  });
});
