import React from "react";
import styles from "./Header.module.css";

/**
 * Header component displays the title and instructions for the BST application.
 * Explains to the user how to create an unbalanced BST and balance a selected BST.
 *
 * @returns {JSX.Element} A header with a title and a descriptive paragraph.
 */
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
