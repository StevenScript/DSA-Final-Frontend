import React from "react";
import { render, screen } from "@testing-library/react";
import DisplayBalancedTrees from "./DisplayBalancedTrees";

/**
 * Tests the DisplayBalancedTrees component to ensure that the balanced tree records
 * are rendered correctly.
 */
test("renders balanced trees with IDs and JSON", () => {
  const mockBalancedTrees = [
    {
      id: 1,
      originalTreeId: 5,
      inputNumbers: "1,2,3,4,5",
      balancedTreeJson: '{"value":3,"left":{"value":1},"right":{"value":5}}',
    },
    {
      id: 2,
      originalTreeId: 7,
      inputNumbers: "7,8,9",
      balancedTreeJson: '{"value":8,"left":{"value":7},"right":{"value":9}}',
    },
  ];

  render(<DisplayBalancedTrees balancedTrees={mockBalancedTrees} />);

  // Verify that two list items are rendered
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(2);

  // Check that the first item includes expected content
  expect(listItems[0].textContent).toMatch(/Balanced ID:\s*1/);
  expect(listItems[0].textContent).toMatch(/Original BST ID:\s*5/);
  expect(listItems[0].textContent).toMatch(/1,2,3,4,5/);
  expect(listItems[0].textContent).toMatch(/"value":3/);

  // Check that the second item includes expected content
  expect(listItems[1].textContent).toMatch(/Balanced ID:\s*2/);
  expect(listItems[1].textContent).toMatch(/Original BST ID:\s*7/);
  expect(listItems[1].textContent).toMatch(/7,8,9/);
  expect(listItems[1].textContent).toMatch(/"value":8/);
});
