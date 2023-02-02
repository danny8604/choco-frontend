import { render, screen } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import { renderWithProviders } from "../util/test-utils";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("Should render correctly", () => {
    renderWithProviders(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const navBtn = screen.getByText(/HOME ROOM CHAIR/i);

    expect(navBtn).toBeInTheDocument();
  });
});
