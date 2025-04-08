import React from "react";
import EnterNumbersForm from "./EnterNumbersForm";
import DisplayUnbalancedTrees from "./DisplayUnbalancedTrees";
import styles from "./UnbalancedBSTSection.module.css";

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
