import React, { useState } from "react";

function BalanceForm({ onBalance }) {
  const [treeId, setTreeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (treeId.trim() !== "") {
      onBalance(Number(treeId));
      setTreeId("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter BST ID to Balance:
        <input
          type="number"
          value={treeId}
          onChange={(e) => setTreeId(e.target.value)}
          placeholder="e.g., 1"
        />
      </label>
      <button type="submit">Balance BST</button>
    </form>
  );
}

export default BalanceForm;
