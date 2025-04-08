import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Binary Search Tree App</h1>
      <p>
        Enter a series of numbers (comma-separated) to create a BST on the left.
        Then, select a BST by its ID to balance on the right. Unbalanced and
        balanced BSTs will display in their respective sections.
      </p>
    </header>
  );
}

export default Header;
