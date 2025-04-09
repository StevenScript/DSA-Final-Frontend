import axios from "axios";

// Base URL for API calls; can be overridden by the environment variable.
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

/**
 * Creates a new unbalanced BST record from the provided comma-separated numbers.
 * @param {string} numbers - Comma-separated list of numbers (e.g., "5,2,7").
 * @returns {Promise<Object>} A promise resolving to the created TreeRecord.
 */
export async function createTree(numbers) {
  const response = await axios.post(`${BASE_URL}/trees`, { numbers });
  return response.data;
}

/**
 * Fetches all unbalanced BST records.
 * @returns {Promise<Array>} A promise that resolves to an array of TreeRecord objects.
 */
export async function fetchUnbalancedTrees() {
  const response = await axios.get(`${BASE_URL}/trees`);
  return response.data;
}

/**
 * Balances an unbalanced BST identified by treeId.
 * @param {number} treeId - The ID of the unbalanced tree.
 * @returns {Promise<Object>} A promise resolving to a BalancedTreeRecord.
 */
export async function balanceTree(treeId) {
  const response = await axios.post(`${BASE_URL}/balance/${treeId}`);
  return response.data;
}

/**
 * Fetches all balanced BST records.
 * @returns {Promise<Array>} A promise that resolves to an array of BalancedTreeRecord objects.
 */
export async function fetchBalancedTrees() {
  const response = await axios.get(`${BASE_URL}/balanced`);
  return response.data;
}
