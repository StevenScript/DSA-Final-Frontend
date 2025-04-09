import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import BalanceForm from "./BalanceForm";

/**
 * Tests for BalanceForm verify that the form validates input and triggers the onBalance callback.
 */
test("calls onBalance with entered tree ID", async () => {
  const onBalanceMock = jest.fn();
  render(<BalanceForm onBalance={onBalanceMock} />);

  const input = screen.getByPlaceholderText(/e.g., 1/i);
  const button = screen.getByText(/Balance BST/i);

  // Simulate user interaction within act to capture state updates.
  await act(async () => {
    fireEvent.change(input, { target: { value: "5" } });
    fireEvent.click(button);
  });

  // Wait for the state update and verify the callback was called with the correct value.
  await waitFor(() => expect(onBalanceMock).toHaveBeenCalledWith(5));
});
