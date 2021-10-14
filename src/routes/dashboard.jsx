import React from "react";
import "../index.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <Sidebar />
      {/* main content container */}
      <div></div>
    </div>
  );
};

export default Dashboard;
