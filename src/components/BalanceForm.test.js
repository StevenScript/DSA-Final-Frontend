import { render, screen, fireEvent } from "@testing-library/react";
import BalanceForm from "./BalanceForm";

test("calls onBalance with entered tree ID", () => {
  const onBalanceMock = jest.fn();
  render(<BalanceForm onBalance={onBalanceMock} />);

  const input = screen.getByPlaceholderText(/e.g., 1/);
  const button = screen.getByText(/Balance BST/i);

  fireEvent.change(input, { target: { value: "5" } });
  fireEvent.click(button);

  expect(onBalanceMock).toHaveBeenCalledWith(5);
});
