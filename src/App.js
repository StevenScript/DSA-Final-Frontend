import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage"; // Our new composite layout component
import * as api from "./api/api";

/**
 * App is the root component that manages state, handles API interactions,
 * and passes data & callbacks to the HomePage.
 *
 * It maintains separate state for unbalanced trees, balanced trees, and a global notification,
 * and it provides error handling for API calls.
 *
 * @returns {JSX.Element} The main application wrapped by HomePage.
 */
function App() {
  const [unbalancedTrees, setUnbalancedTrees] = useState([]);
  const [balancedTrees, setBalancedTrees] = useState([]);
  const [globalNotification, setGlobalNotification] = useState("");

  // Fetch unbalanced and balanced BSTs when the component mounts.
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

  /**
   * Handles BST creation by invoking the API and updating state.
   * Displays success or error notifications.
   */
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

  /**
   * Handles balancing a BST by its ID via the API.
   * Updates state and displays a corresponding notification.
   */
  const handleBalanceTree = async (treeId) => {
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
      {/* HomePage composes the header and two-column layout */}
      <HomePage
        onCreateTree={handleCreateTree}
        unbalancedTrees={unbalancedTrees}
        onBalanceTree={handleBalanceTree}
        balancedTrees={balancedTrees}
      />
    </div>
  );
}

export default App;
