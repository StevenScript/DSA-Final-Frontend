import React from "react";

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
