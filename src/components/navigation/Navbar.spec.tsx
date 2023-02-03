import { screen } from "@testing-library/react";
import { renderWithProviders } from "../util/test-utils";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("Should render correctly", () => {
    renderWithProviders(<Navbar />);

    const navBtn = screen.getByText(/HOME ROOM CHAIR/i);

    expect(navBtn).toBeInTheDocument();
  });
});
