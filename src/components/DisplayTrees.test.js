import { render, screen } from "@testing-library/react";
import DisplayTrees from "./DisplayTrees";

test("renders a list of trees if provided", () => {
  const mockTrees = [
    { id: 1, inputNumbers: "5,2,7", treeJson: '{"value":5,...}' },
    { id: 2, inputNumbers: "10,6", treeJson: '{"value":10,...}' },
  ];
  render(<DisplayTrees trees={mockTrees} />);

  // Use regex /5,2,7/
  expect(screen.getByText(/5,2,7/)).toBeInTheDocument();
  expect(screen.getByText(/10,6/)).toBeInTheDocument();
});
