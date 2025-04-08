import React, { useState } from "react";

function EnterNumbersForm({ onSubmitNumbers }) {
  const [numbers, setNumbers] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const numbersRegex = /^\s*\d+(\s*,\s*\d+)*\s*$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the input field
    if (!numbersRegex.test(numbers)) {
      setError(
        "Please enter a valid comma-separated list of numbers (e.g., 5,2,7)."
      );
      setSuccess("");
      return;
    }
    setError("");
    try {
      await onSubmitNumbers(numbers);
      setSuccess("BST created successfully!");
      setNumbers("");
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("There was an error creating the BST.");
      setSuccess("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter numbers (e.g., 5,2,7)"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <button type="submit">Submit</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>{success}</div>}
    </form>
  );
}

export default EnterNumbersForm;
