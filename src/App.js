import "./App.css";
import React, { useEffect, useState } from "react";
import EnterNumbersForm from "./components/EnterNumbersForm";
import DisplayUnbalancedTrees from "./components/DisplayUnbalancedTrees";
import BalanceForm from "./components/BalanceForm";
import DisplayBalancedTrees from "./components/DisplayBalancedTrees";

import * as api from "./api/api";

function App() {
  const [unbalancedTrees, setUnbalancedTrees] = useState([]);
  const [balancedTrees, setBalancedTrees] = useState([]);

  // Load unbalanced and balanced trees on mount
  useEffect(() => {
    api
      .fetchUnbalancedTrees()
      .then((data) => setUnbalancedTrees(data))
      .catch((error) => {
        console.error("Error fetching unbalanced trees:", error);
        setUnbalancedTrees([]);
      });
    api
      .fetchBalancedTrees()
      .then((data) => setBalancedTrees(data))
      .catch((error) => {
        console.error("Error fetching balanced trees:", error);
        setBalancedTrees([]);
      });
  }, []);

  // Handle unbalanced BST creation
  const handleCreateTree = async (numbers) => {
    try {
      const newTree = await api.createTree(numbers);
      setUnbalancedTrees((prev) => [newTree, ...prev]);
    } catch (error) {
      console.error("Error creating tree:", error);
    }
  };

  // Handle balancing an existing BST given its ID
  const handleBalanceBST = async (treeId) => {
    try {
      const newBalancedTree = await api.balanceTree(treeId);
      setBalancedTrees((prev) => [newBalancedTree, ...prev]);
    } catch (error) {
      console.error("Error balancing tree:", error);
    }
  };

  return (
    <div>
      <h1>Binary Search Tree App</h1>
      <EnterNumbersForm onSubmitNumbers={handleCreateTree} />
      <DisplayUnbalancedTrees trees={unbalancedTrees} />
      <BalanceForm onBalance={handleBalanceBST} />
      <DisplayBalancedTrees balancedTrees={balancedTrees} />
    </div>
  );
}

export default App;
