import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

export async function createTree(numbers) {
  const response = await axios.post(`${BASE_URL}/trees`, { numbers });
  return response.data; // returns a TreeRecord object
}

export async function fetchUnbalancedTrees() {
  const response = await axios.get(`${BASE_URL}/trees`);
  return response.data; // returns an array of TreeRecords
}

export async function balanceTree(treeId) {
  const response = await axios.post(`${BASE_URL}/balance/${treeId}`);
  return response.data;
}

export async function fetchBalancedTrees() {
  const response = await axios.get(`${BASE_URL}/balanced`);
  return response.data;
}
