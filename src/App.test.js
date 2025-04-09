// Mock the API module so that no real network calls are made.
jest.mock("./api/api");

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

/**
 * Tests the App component rendering.
 * Verifies that the main header is visible, ensuring that the application initializes correctly.
 */
test("renders BST app header", async () => {
  render(<App />);
  const headerElement = await screen.findByText(/binary search tree app/i);
  expect(headerElement).toBeInTheDocument();
});
