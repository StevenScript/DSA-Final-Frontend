import { render, screen } from "@testing-library/react";
import DisplayTrees from "./DisplayTrees";
import React from "react";

/**
 * Tests for the DisplayTrees component.
 * Ensures that when provided with a list of tree objects,
 * the component renders each tree's inputNumbers in the document.
 */
test("renders a list of trees if provided", () => {
  // Define mock data with minimal structure.
  const mockTrees = [
    { id: 1, inputNumbers: "5,2,7", treeJson: '{"value":5,...}' },
    { id: 2, inputNumbers: "10,6", treeJson: '{"value":10,...}' },
  ];

  // Render the component with the mock data.
  render(<DisplayTrees trees={mockTrees} />);

  // Assert that each tree's inputNumbers appear in the output.
  // Regex is used to account for any minor formatting differences.
  expect(screen.getByText(/5,2,7/)).toBeInTheDocument();
  expect(screen.getByText(/10,6/)).toBeInTheDocument();
});
