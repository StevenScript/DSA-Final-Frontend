import { render, screen } from "@testing-library/react";
import DisplayTrees from "./DisplayTrees";

test("renders a heading for previous trees", () => {
  render(<DisplayTrees trees={[]} />);
  const heading = screen.getByText(/previous trees/i);
  expect(heading).toBeInTheDocument();
});

test("renders a list of trees if provided", () => {
  const mockTrees = [
    { id: 1, inputNumbers: "5,2,7", treeJson: '{"value":5,...}' },
    { id: 2, inputNumbers: "10,6", treeJson: '{"value":10,...}' },
  ];
  render(<DisplayTrees trees={mockTrees} />);
  expect(screen.getByText("5,2,7")).toBeInTheDocument();
  expect(screen.getByText("10,6")).toBeInTheDocument();
});
