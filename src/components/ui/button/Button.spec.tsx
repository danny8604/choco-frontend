import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("Should render correctly button text", () => {
    const { getByText } = render(<Button btnMessage={"Test Button"} />);

    const textElement = getByText("Test Button");

    expect(textElement).toBeInTheDocument();
  });
});
