import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import BalanceForm from "./BalanceForm";

test("calls onBalance with entered tree ID", async () => {
  const onBalanceMock = jest.fn();
  render(<BalanceForm onBalance={onBalanceMock} />);

  const input = screen.getByPlaceholderText(/e.g., 1/i);
  const button = screen.getByText(/Balance BST/i);

  // Wrap the state-updating events within act
  await act(async () => {
    fireEvent.change(input, { target: { value: "5" } });
    fireEvent.click(button);
  });

  // Wait for the mocked function to have been called
  await waitFor(() => expect(onBalanceMock).toHaveBeenCalledWith(5));
});
