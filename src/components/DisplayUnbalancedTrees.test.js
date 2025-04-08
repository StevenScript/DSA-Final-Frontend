import React from "react";
import { render, screen, within } from "@testing-library/react";
import DisplayUnbalancedTrees from "./DisplayUnbalancedTrees";

test("renders a heading for unbalanced trees", () => {
  render(<DisplayUnbalancedTrees trees={[]} />);
  const heading = screen.getByText(/unbalanced trees/i);
  expect(heading).toBeInTheDocument();
});

test("renders a list of unbalanced trees with IDs and numbers", () => {
  const mockTrees = [
    { id: 1, inputNumbers: "5,2,7", treeJson: '{"value":5}' },
    { id: 2, inputNumbers: "1,3,8", treeJson: '{"value":1}' },
  ];

  render(<DisplayUnbalancedTrees trees={mockTrees} />);

  // Instead of matching the entire text, we search for the list items.
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(2);

  // Check that the first list item contains "ID:" and "1" and "5,2,7"
  const firstItemText = listItems[0].textContent;
  expect(firstItemText).toMatch(/ID:\s*1/);
  expect(firstItemText).toMatch(/5,2,7/);

  // Check the second list item for the expected content.
  const secondItemText = listItems[1].textContent;
  expect(secondItemText).toMatch(/ID:\s*2/);
  expect(secondItemText).toMatch(/1,3,8/);
});
