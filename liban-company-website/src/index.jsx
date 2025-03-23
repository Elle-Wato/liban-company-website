import React from "react";
import ReactDOM from "react-dom/client"; // Change this import
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Create a root for the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);