import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const styles = {
    display: "flex",
    flexDirection: "column", // Arrange items vertically
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    textAlign: "center",
    gap: "20px", // Add spacing between elements
  };

  const navigate = useNavigate(); // Use useNavigate for navigation

  return (
    <div style={styles}>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/dashboard')}>Login</button>
    </div>
  );
};

export default Home;
