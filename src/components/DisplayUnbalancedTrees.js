import React from "react";

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
