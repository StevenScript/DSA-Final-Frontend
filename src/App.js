import "./App.css";
import React, { useState, useEffect } from "react";
import EnterNumbersForm from "./components/EnterNumbersForm";
import DisplayTrees from "./components/DisplayTrees";
import { createTree, fetchAllTrees } from "./api/api";

function App() {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    // On first load, fetch all existing trees
    fetchAllTrees().then((data) => setTrees(data));
  }, []);

  const handleCreateTree = async (numbers) => {
    try {
      const newTree = await createTree(numbers);
      // Add the new tree to our local state
      setTrees((prevTrees) => [newTree, ...prevTrees]);
    } catch (error) {
      console.error("Error creating tree:", error);
    }
  };

  return (
    <div>
      <h1>Binary Search Tree App</h1>
      <EnterNumbersForm onSubmitNumbers={handleCreateTree} />
      <DisplayTrees trees={trees} />
    </div>
  );
}

export default App;
