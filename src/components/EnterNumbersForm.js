import React, { useState } from "react";

function EnterNumbersForm({ onSubmitNumbers }) {
  const [numbers, setNumbers] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmitNumbers && numbers.trim() !== "") {
      onSubmitNumbers(numbers);
      setNumbers("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter numbers (e.g. 5,2,7)"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EnterNumbersForm;
