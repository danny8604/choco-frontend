import { render, screen } from "@testing-library/react";
import FormInput, { FormInputProps } from "./FormInput";

describe("FormInput", () => {
  const formInputProps: FormInputProps = {
    props: {
      type: "email",
      name: "email",
      label: "email",
      placeholder: "EMAIL",
      required: true,
      value: "20",
    },
    errorMessage: "errorMessage",
    onChange: () => {},
  };

  it("Sould render email", () => {
    render(
      <FormInput
        props={formInputProps.props}
        errorMessage={formInputProps.errorMessage}
        onChange={formInputProps.onChange}
      />
    );

    const test = screen.getByLabelText(formInputProps.props.placeholder);

    expect(test).toBeInTheDocument();
  });
});
