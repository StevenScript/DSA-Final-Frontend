// This manual mock provides stub implementations for API calls used by the frontend.

/**
 * Mocks creating a new BST record by returning a resolved promise
 * with a pre-defined TreeRecord.
 */
export async function createTree(numbers) {
  return Promise.resolve({
    id: 1,
    inputNumbers: numbers,
    treeJson:
      '{"value":5,"left":{"value":2,"left":null,"right":null},"right":{"value":7,"left":null,"right":null}}',
  });
}

/**
 * Mocks fetching unbalanced BST records.
 * Returns an empty array for simplicity.
 */
export async function fetchUnbalancedTrees() {
  return Promise.resolve([]); // return an empty array
}

/**
 * Mocks balancing a BST by returning a resolved promise with a pre-defined
 * BalancedTreeRecord.
 */
export async function balanceTree(treeId) {
  return Promise.resolve({
    id: 100,
    originalTreeId: 1,
    inputNumbers: "5,2,7",
    balancedTreeJson: '{"value":5,"left":{"value":2},"right":{"value":7}}',
  });
}

/**
 * Mocks fetching balanced BST records.
 * Returns an empty array for simplicity.
 */
export async function fetchBalancedTrees() {
  return Promise.resolve([]); // return an empty array
}
