import React from "react";

const Home = () => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
