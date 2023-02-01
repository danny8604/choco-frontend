import { render, screen } from "@testing-library/react";
import Error from "./Error";

describe("Error", () => {
  it("Should render Sorry, an unexpected error has occurred...", () => {
    render(<Error />);

    const textElement = screen.getByText(
      /Sorry, an unexpected error has occurred.../
    );

    expect(textElement).toBeInTheDocument();
  });
});
