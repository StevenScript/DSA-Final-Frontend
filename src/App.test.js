// Mock the API module so that no real network calls are made.
jest.mock("./api/api");

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders BST app header", async () => {
  render(<App />);
  const headerElement = await screen.findByText(/binary search tree app/i);
  expect(headerElement).toBeInTheDocument();
});
