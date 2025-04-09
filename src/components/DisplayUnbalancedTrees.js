import React from "react";

/**
 * Component that displays a list of unbalanced BST records.
 *
 * @param {Object[]} trees - Array of tree records. Each record should have:
 *   - id: unique identifier,
 *   - inputNumbers: the string of comma-separated numbers provided by the user,
 *   - treeJson: the JSON representation of the unbalanced BST.
 * @returns {JSX.Element} JSX element that renders a heading and list of trees.
 */
function DisplayUnbalancedTrees({ trees }) {
  return (
    <div>
      <h2>Unbalanced Trees</h2>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>
            <div>
              <strong>ID:</strong> {tree.id}
            </div>
            <div>
              <strong>Numbers:</strong> {tree.inputNumbers}
            </div>
            <div>
              <strong>BST JSON:</strong> {tree.treeJson}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayUnbalancedTrees;
