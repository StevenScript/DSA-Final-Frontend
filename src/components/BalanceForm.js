import React, { useState } from "react";

function BalanceForm({ onBalance }) {
  const [treeId, setTreeId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = Number(treeId);
    // Validate that treeId is a positive number
    if (!treeId || isNaN(id) || id <= 0) {
      setError("Please enter a valid BST ID (a positive number).");
      setSuccess("");
      return;
    }
    setError("");
    try {
      await onBalance(id);
      setSuccess("BST balanced successfully!");
      setTreeId("");
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("There was an error balancing the BST.");
      setSuccess("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter BST ID to Balance:
        <input
          type="number"
          placeholder="e.g., 1"
          value={treeId}
          onChange={(e) => setTreeId(e.target.value)}
        />
      </label>
      <button type="submit">Balance BST</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>{success}</div>}
    </form>
  );
}

export default BalanceForm;
