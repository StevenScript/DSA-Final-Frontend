import React, { useState } from "react";

/**
 * BalanceForm provides a form for users to submit an unbalanced BST's ID for balancing.
 *
 * @param {Function} onBalance - Callback to initiate balancing for the given BST ID.
 * @returns {JSX.Element} A form with input validation and user feedback for balancing.
 */
function BalanceForm({ onBalance }) {
  const [treeId, setTreeId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * handleSubmit validates the input and invokes onBalance with the BST ID.
   * Provides visual feedback for success or error and manages loading state.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = Number(treeId);
    // Ensure a valid, positive number is provided.
    if (!treeId || isNaN(id) || id <= 0) {
      setError("Please enter a valid BST ID (a positive number).");
      setSuccess("");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await onBalance(id);
      setSuccess("BST balanced successfully!");
      setTreeId("");
      // Remove success message after 3 seconds.
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("There was an error balancing the BST.");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <center>
        <input
          type="number"
          placeholder="e.g., 1"
          value={treeId}
          onChange={(e) => setTreeId(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Balancing..." : "Balance BST"}
        </button>
        {error && (
          <div style={{ color: "red", marginTop: "0.5em" }}>{error}</div>
        )}
        {success && (
          <div style={{ color: "green", marginTop: "0.5em" }}>{success}</div>
        )}
      </center>
    </form>
  );
}

export default BalanceForm;
