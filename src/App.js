import "./App.css";
import React, { useEffect, useState } from "react";
import EnterNumbersForm from "./components/EnterNumbersForm"; // already exists from before
import DisplayUnbalancedTrees from "./components/DisplayUnbalancedTrees";
import BalanceForm from "./components/BalanceForm";
import DisplayBalancedTrees from "./components/DisplayBalancedTrees";
import {
  createTree,
  fetchUnbalancedTrees,
  balanceTree,
  fetchBalancedTrees,
} from "./api/api";

function App() {
  const [unbalancedTrees, setUnbalancedTrees] = useState([]);
  const [balancedTrees, setBalancedTrees] = useState([]);

  // Load unbalanced and balanced trees on mount
  useEffect(() => {
    fetchUnbalancedTrees().then((data) => setUnbalancedTrees(data));
    fetchBalancedTrees().then((data) => setBalancedTrees(data));
  }, []);

  // Handle new unbalanced BST creation
  const handleCreateTree = async (numbers) => {
    const newTree = await createTree(numbers);
    // Add to the front of unbalanced trees
    setUnbalancedTrees((prev) => [newTree, ...prev]);
  };

  // Handle balancing an existing BST given its ID
  const handleBalanceBST = async (treeId) => {
    try {
      const newBalancedTree = await balanceTree(treeId);
      // Add to the balanced trees list
      setBalancedTrees((prev) => [newBalancedTree, ...prev]);
    } catch (error) {
      console.error("Error balancing tree:", error);
    }
  };

  return (
    <div>
      <h1>Binary Search Tree App</h1>
      {/* Form to create a new unbalanced BST */}
      <EnterNumbersForm onSubmitNumbers={handleCreateTree} />

      {/* Display all unbalanced BSTs */}
      <DisplayUnbalancedTrees trees={unbalancedTrees} />

      {/* Form to balance a selected BST */}
      <BalanceForm onBalance={handleBalanceBST} />

      {/* Display all balanced BSTs */}
      <DisplayBalancedTrees balancedTrees={balancedTrees} />
    </div>
  );
}

export default App;
