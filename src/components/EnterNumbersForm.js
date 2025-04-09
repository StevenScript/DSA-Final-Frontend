import React, { useState } from "react";

/**
 * Form component for submitting a comma-separated string of numbers to create a BST.
 *
 * @param {Function} onSubmitNumbers - Callback function called with a valid input string.
 * @returns {JSX.Element} A form that validates input, shows feedback messages, and calls onSubmitNumbers.
 */
function EnterNumbersForm({ onSubmitNumbers }) {
  const [numbers, setNumbers] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Regex to validate a comma-separated list of one or more numbers.
  const numbersRegex = /^\s*\d+(\s*,\s*\d+)*\s*$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input; if invalid, show an error and abort submission.
    if (!numbersRegex.test(numbers)) {
      setError(
        "Please enter a valid comma-separated list of numbers (e.g., 5,2,7)."
      );
      setSuccess("");
      return;
    }

    setError("");
    setLoading(true);
    try {
      // Call the parent-provided callback to create the BST.
      await onSubmitNumbers(numbers);
      setSuccess("BST created successfully!");
      setNumbers("");
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("There was an error creating the BST.");
      setSuccess("");
    } finally {
      setLoading(false);
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
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Submit"}
      </button>
      {error && <div style={{ color: "red", marginTop: "0.5em" }}>{error}</div>}
      {success && (
        <div style={{ color: "green", marginTop: "0.5em" }}>{success}</div>
      )}
    </form>
  );
}

export default EnterNumbersForm;
