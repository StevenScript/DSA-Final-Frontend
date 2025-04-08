import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders BST app header", () => {
  render(<App />);
  const headerElement = screen.getByText(/binary search tree app/i);
  expect(headerElement).toBeInTheDocument();
});
