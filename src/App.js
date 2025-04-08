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
  const [globalNotification, setGlobalNotification] = useState("");

  // Load unbalanced and balanced trees on mount
  useEffect(() => {
    api
      .fetchUnbalancedTrees()
      .then((data) => setUnbalancedTrees(data))
      .catch((error) => {
        console.error("Error fetching unbalanced trees:", error);
        setUnbalancedTrees([]);
        setGlobalNotification("Error fetching unbalanced trees");
      });
    api
      .fetchBalancedTrees()
      .then((data) => setBalancedTrees(data))
      .catch((error) => {
        console.error("Error fetching balanced trees:", error);
        setBalancedTrees([]);
        setGlobalNotification("Error fetching balanced trees");
      });
  }, []);

  // Handle new unbalanced BST creation
  const handleCreateTree = async (numbers) => {
    try {
      const newTree = await api.createTree(numbers);
      setUnbalancedTrees((prev) => [newTree, ...prev]);
      setGlobalNotification("BST created successfully!");
      setTimeout(() => setGlobalNotification(""), 3000);
    } catch (error) {
      console.error("Error creating tree:", error);
      setGlobalNotification("Error creating BST");
      setTimeout(() => setGlobalNotification(""), 3000);
    }
  };

  // Handle balancing an existing BST given its ID
  const handleBalanceBST = async (treeId) => {
    try {
      const newBalancedTree = await api.balanceTree(treeId);
      setBalancedTrees((prev) => [newBalancedTree, ...prev]);
      setGlobalNotification("BST balanced successfully!");
      setTimeout(() => setGlobalNotification(""), 3000);
    } catch (error) {
      console.error("Error balancing tree:", error);
      setGlobalNotification("Error balancing BST");
      setTimeout(() => setGlobalNotification(""), 3000);
    }
  };

  return (
    <div>
      <h1>Binary Search Tree App</h1>
      {globalNotification && (
        <div
          style={{
            color: globalNotification.includes("Error") ? "red" : "green",
            marginBottom: "1em",
          }}
        >
          {globalNotification}
        </div>
      )}
      <EnterNumbersForm onSubmitNumbers={handleCreateTree} />
      <DisplayUnbalancedTrees trees={unbalancedTrees} />
      <BalanceForm onBalance={handleBalanceBST} />
      <DisplayBalancedTrees balancedTrees={balancedTrees} />
    </div>
  );
}

export default App;
