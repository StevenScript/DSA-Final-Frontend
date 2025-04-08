import React from "react";

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
