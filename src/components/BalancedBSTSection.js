import React from "react";
import BalanceForm from "./BalanceForm";
import DisplayBalancedTrees from "./DisplayBalancedTrees";
import styles from "./BalancedBSTSection.module.css";

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
