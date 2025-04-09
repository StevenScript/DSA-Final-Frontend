import React from "react";
import Header from "../components/Header";
import UnbalancedBSTSection from "../components/UnbalancedBSTSection";
import BalancedBSTSection from "../components/BalancedBSTSection";
import styles from "./HomePage.module.css";

/**
 * HomePage composes the main layout of the application.
 * It includes a header and two sections arranged side by side:
 * the left for unbalanced BST operations and the right for balanced BST operations.
 *
 * @param {Function} onCreateTree - Callback to handle BST creation.
 * @param {Array} unbalancedTrees - List of unbalanced BST records.
 * @param {Function} onBalanceTree - Callback to handle the balancing of a BST.
 * @param {Array} balancedTrees - List of balanced BST records.
 * @returns {JSX.Element} The complete page layout.
 */
function HomePage({
  onCreateTree,
  unbalancedTrees,
  onBalanceTree,
  balancedTrees,
}) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>
        <UnbalancedBSTSection
          onSubmitNumbers={onCreateTree}
          trees={unbalancedTrees}
        />
        <BalancedBSTSection
          onBalance={onBalanceTree}
          balancedTrees={balancedTrees}
        />
      </div>
    </div>
  );
}

export default HomePage;
