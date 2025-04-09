import React from "react";

/**
 * DisplayBalancedTrees renders a list of balanced BST records.
 *
 * @param {Object[]} balancedTrees - Array of balanced tree objects. Each object should include:
 *    - id: the balanced record ID,
 *    - originalTreeId: the ID of the unbalanced tree used to create this balanced tree,
 *    - inputNumbers: the original comma-separated number string,
 *    - balancedTreeJson: the JSON representation of the balanced BST.
 * @returns {JSX.Element} A section that displays balanced trees.
 */
function DisplayBalancedTrees({ balancedTrees }) {
  return (
    <div>
      <h2>Balanced Trees</h2>
      <ul>
        {balancedTrees.map((tree) => (
          <li key={tree.id}>
            <strong>Balanced ID:</strong> {tree.id} <br />
            <strong>Original BST ID:</strong> {tree.originalTreeId} <br />
            <strong>Numbers:</strong> {tree.inputNumbers} <br />
            <strong>Balanced JSON:</strong> {tree.balancedTreeJson}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayBalancedTrees;
