import { render } from "../util/test-utils";
import NavbarLogoLink from "./NavbarLogoLink";

describe("NavvarLogoLink", () => {
  it("Should render correctly", () => {
    const { getByRole } = render(<NavbarLogoLink />);

    const link = getByRole("link");

    expect(link).toBeInTheDocument();
  });

  it("Should render correctly logo link with text 'CHOCO' ", () => {
    const { getByText } = render(<NavbarLogoLink />);

    const chocoText = getByText("CHOCO");

    expect(chocoText).toBeInTheDocument();
  });
});
