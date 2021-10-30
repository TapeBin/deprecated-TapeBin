import React from "react";
import Navbar from "../../components/bar/Navbar";
import Profile from "../../components/profile/Profile";

const Index = () => {
  return (
    <div className="flex flex-row" style={{ width: "100vw", height: "100vh" }}>
      <Navbar />
      <Profile />
    </div>
  );
};

export default Index;
