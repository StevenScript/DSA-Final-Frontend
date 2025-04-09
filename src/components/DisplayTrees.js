import React from "react";

/**
 * Component for displaying previously stored BST records.
 *
 * @param {Object[]} trees - Array of tree objects with properties:
 *                           - id: unique identifier for the tree.
 *                           - inputNumbers: original user input (comma-separated numbers).
 *                           - treeJson: JSON string representing the BST structure.
 * @returns {JSX.Element} Renders a heading and a list of tree records.
 */
function DisplayTrees({ trees = [] }) {
  return (
    <div>
      <h2>Previous Trees</h2>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>
            <strong>Numbers:</strong> {tree.inputNumbers}
            <br />
            <strong>BST JSON:</strong> {tree.treeJson}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayTrees;
