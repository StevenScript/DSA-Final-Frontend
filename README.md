# DSA Final Project - Binary Search Tree Application
# FRONT END
### NAME - Steven Norris
### DATE - April 9th 2025

## About this repository

**DSA Final Frontend** is a React-based user interface that complements the DSA Final Backend application.  
It provides an intuitive, responsive interface to create, view, and balance Binary Search Trees (BSTs).

## Overview

This project was built to demonstrate a full-stack application for managing BSTs. The React UI lets users:
- **Create BSTs:** Enter a comma-separated list of numbers to form an unbalanced BST.
- **View BSTs:** See a list of unbalanced BST records.
- **Balance BSTs:** Select an existing BST by its ID to trigger balancing, then view the balanced result.

Key features include:
- **Three-part layout:** A header with instructions, and two side-by-side columns for unbalanced and balanced BST operations.
- **Component-based styling:** Uses CSS Modules for encapsulated, scalable, and maintainable styles.
- **User feedback:** Validation and notification messages for a better user experience.
- **Seamless API integration:** Interacts with a backend API to store and retrieve BST records.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A modern web browser

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/dsa-final-frontend.git
   cd dsa-final-frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally
- **Development Server:**  
  Start the app locally with:
  ```bash
  npm start
  ```  
  The UI will be available at [http://localhost:3000](http://localhost:3000).

- **Testing:**  
  Run tests using:
  ```bash
  npm test
  ```

## Usage Examples

- **Creating a BST:**  
  Enter a comma-separated list of numbers (e.g., `5,2,7`) in the left-side form.  
  If valid, the app creates a BST, displays it in the unbalanced trees list, and shows a success notification.

- **Balancing a BST:**  
  Enter the ID of a stored BST in the right-side form and submit.  
  The app calls the backend API to balance the BST, displays the balanced tree in the list, and notifies the user.

## API Documentation

The frontend interacts with a backend REST API for BST operations. Key endpoints include:
- **POST /api/trees:** Create an unbalanced BST (expects `{ "numbers": "5,2,7" }`).
- **GET /api/trees:** Retrieve all unbalanced BST records.
- **POST /api/balance/{treeId}:** Balance an existing BST.
- **GET /api/balanced:** Retrieve all balanced BST records.

*(See the backend repository for full API details.)*

## Project Structure

```
dsa-final-frontend/
├── src/
│   ├── api/
│   │   ├── api.js                  # API interaction functions
│   │   └── __mocks__/api.js       # Manual mock for API (used in tests)
│   ├── components/
│   │   ├── EnterNumbersForm.js            # Form to create a BST
│   │   ├── DisplayUnbalancedTrees.js      # Displays unbalanced BST records
│   │   ├── BalanceForm.js                 # Form to balance a BST by ID
│   │   ├── DisplayBalancedTrees.js       # Displays balanced BST records
│   │   ├── UnbalancedBSTSection.js       # Container for unbalanced BST input and display
│   │   ├── UnbalancedBSTSection.module.css
│   │   ├── BalancedBSTSection.js         # Container for balanced BST input and display
│   │   └── BalancedBSTSection.module.css
│   ├── pages/
│   │   ├── HomePage.js                   # Composite layout with header and two-column content
│   │   └── HomePage.module.css
│   ├── App.js                            # Root component integrating the HomePage
│   └── App.css                           # Global styles
├── public/
│   └── index.html
└── README.md
```

## Configuration

- **Environment Variables:**  
  Set `REACT_APP_API_URL` (if needed) in a `.env` file to point to your backend API URL.
- **Styles:**  
  The project uses CSS Modules (e.g., `HomePage.module.css`) for component-specific styling to avoid conflicts.

## Testing Instructions

- **Unit & Integration Tests:**  
  Run tests with:
  ```bash
  npm test
  ```
  This project uses Jest and React Testing Library, with manual mocks for API calls to ensure tests run in isolation.



