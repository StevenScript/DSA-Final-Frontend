import React from "react";
import EnterNumbersForm from "./EnterNumbersForm";
import DisplayUnbalancedTrees from "./DisplayUnbalancedTrees";
import styles from "./UnbalancedBSTSection.module.css";

/**
 * UnbalancedBSTSection composes components for creating and displaying unbalanced BSTs.
 * It provides a form to submit BST input and a list view for the unbalanced BST records.
 *
 * @param {Function} onSubmitNumbers - Callback to handle BST creation submissions.
 * @param {Array} trees - Array of unbalanced BST record objects.
 * @returns {JSX.Element} A section with EnterNumbersForm and DisplayUnbalancedTrees.
 */
function UnbalancedBSTSection({ onSubmitNumbers, trees }) {
  return (
    <section className={styles.section}>
      <h2>Unbalanced BST</h2>
      <EnterNumbersForm onSubmitNumbers={onSubmitNumbers} />
      <DisplayUnbalancedTrees trees={trees} />
    </section>
  );
}

export default UnbalancedBSTSection;
