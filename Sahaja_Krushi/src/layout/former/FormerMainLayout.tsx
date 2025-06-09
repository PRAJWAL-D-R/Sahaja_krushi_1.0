// src/layout/admin/AdminMainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import FarmerDashboardNavbar from "../../components/FormerNavbar";

const FormerMainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <FarmerDashboardNavbar/>
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default FormerMainLayout;
