import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import EnterNumbersForm from "./EnterNumbersForm";

/**
 * Tests for EnterNumbersForm.
 * Verifies that the form renders correctly and that the onSubmitNumbers callback
 * is called with the proper input when the form is submitted.
 */
test("renders an input and a submit button", () => {
  render(<EnterNumbersForm />);
  const inputElement = screen.getByPlaceholderText(/enter numbers/i);
  const buttonElement = screen.getByText(/create bst/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("calls onSubmitNumbers when form is submitted", async () => {
  // Define the callback mock within the test scope.
  const onSubmitMock = jest.fn();

  render(<EnterNumbersForm onSubmitNumbers={onSubmitMock} />);

  const inputElement = screen.getByPlaceholderText(/enter numbers/i);
  const buttonElement = screen.getByText(/create bst/i);

  // Use act to wrap events that trigger state updates.
  await act(async () => {
    fireEvent.change(inputElement, { target: { value: "5,2,7" } });
    fireEvent.click(buttonElement);
  });

  // Wait for the callback to be called with the correct argument.
  await waitFor(() => expect(onSubmitMock).toHaveBeenCalledWith("5,2,7"));
});
