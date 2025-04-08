import React from "react";
import Header from "../components/Header";
import UnbalancedBSTSection from "../components/UnbalancedBSTSection";
import BalancedBSTSection from "../components/BalancedBSTSection";
import styles from "./HomePage.module.css";

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
