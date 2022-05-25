import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideber from "../../components/DashboardSideber";

const Dashboard = () => {
  return (
    <DashboardSideber>
      <Outlet></Outlet>
    </DashboardSideber>
  );
};

export default Dashboard;
