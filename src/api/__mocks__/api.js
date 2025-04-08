// This file mocks the API functions used by App.js.
// It uses named exports so that when App.js does a namespace import,
// these functions are provided.

export async function createTree(numbers) {
  return Promise.resolve({
    id: 1,
    inputNumbers: numbers,
    treeJson:
      '{"value":5,"left":{"value":2,"left":null,"right":null},"right":{"value":7,"left":null,"right":null}}',
  });
}

export async function fetchUnbalancedTrees() {
  return Promise.resolve([]); // return an empty array
}

export async function balanceTree(treeId) {
  return Promise.resolve({
    id: 100,
    originalTreeId: 1,
    inputNumbers: "5,2,7",
    balancedTreeJson: '{"value":5,"left":{"value":2},"right":{"value":7}}',
  });
}

export async function fetchBalancedTrees() {
  return Promise.resolve([]); // return an empty array
}
