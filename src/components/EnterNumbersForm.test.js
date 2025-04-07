import { render, screen, fireEvent } from "@testing-library/react";
import EnterNumbersForm from "./EnterNumbersForm";

test("renders an input and a submit button", () => {
  render(<EnterNumbersForm />);
  const inputElement = screen.getByPlaceholderText(/enter numbers/i);
  const buttonElement = screen.getByText(/submit/i);

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("calls onSubmitNumbers when form is submitted", () => {
  const handleSubmit = jest.fn();
  render(<EnterNumbersForm onSubmitNumbers={handleSubmit} />);

  const inputElement = screen.getByPlaceholderText(/enter numbers/i);
  const buttonElement = screen.getByText(/submit/i);

  // Type into the input
  fireEvent.change(inputElement, { target: { value: "5,2,7" } });
  fireEvent.click(buttonElement);

  // Expect "5,2,7"
  expect(handleSubmit).toHaveBeenCalledWith("5,2,7");
});
