import React from "react";
import BalanceForm from "./BalanceForm";
import DisplayBalancedTrees from "./DisplayBalancedTrees";
import styles from "./BalancedBSTSection.module.css";

/**
 * BalancedBSTSection composes components for balancing a BST and displaying balanced records.
 * It renders a form to request balancing and a list view of all balanced BST records.
 *
 * @param {Function} onBalance - Callback for handling the balancing of a BST.
 * @param {Array} balancedTrees - Array of balanced BST record objects.
 * @returns {JSX.Element} A section with BalanceForm and DisplayBalancedTrees.
 */
function BalancedBSTSection({ onBalance, balancedTrees }) {
  return (
    <section className={styles.section}>
      <h2>Balanced BST</h2>
      <BalanceForm onBalance={onBalance} />
      <DisplayBalancedTrees balancedTrees={balancedTrees} />
    </section>
  );
}

export default BalancedBSTSection;
