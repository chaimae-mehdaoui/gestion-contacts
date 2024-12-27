import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1 style={{ fontSize: "4rem", color: "#dc3545", animation: "fadeIn 1.5s" }}>404</h1>
      <p style={{ fontSize: "1.5rem", color: "#666" }}>Oops! The page you are looking for does not exist.</p>
      <img src="https://via.placeholder.com/150" alt="404 Error" style={{ margin: "2rem auto", maxWidth: "100%" }} />
      <Link to="/" style={{ textDecoration: "none", padding: "0.5rem 1rem", background: "#007bff", color: "white", borderRadius: "4px" }}>
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;