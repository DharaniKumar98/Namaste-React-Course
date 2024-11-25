import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us page TestCases", () => {
  test("Should load Contact Us Component", () => {
    render(<ContactUs />);
    //screen.debug(); - HTML output of ContactUs component printed to the console
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  // it is just alias for test - no difference
  it("Should load Button inside Contact Component", () => {
    render(<ContactUs />);

    //const button = screen.getByRole("button");
    //expect(button).toBeInTheDocument();

    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  test("Should load input element inside Contact Component", () => {
    render(<ContactUs />);

    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });

  test("Should load 2 input elements inside Contact Component", () => {
    render(<ContactUs />);

    //Querying
    const inputElements = screen.getAllByRole("textbox");

    expect(inputElements.length).toBe(2);
    expect(inputElements.length).not.toBe(3);
  });
});
