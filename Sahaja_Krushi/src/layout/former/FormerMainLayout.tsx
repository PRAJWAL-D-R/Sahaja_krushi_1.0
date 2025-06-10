// src/layout/admin/AdminMainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import FarmerNavbar from "../../components/FormerNavbar";

const FormerMainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <FarmerNavbar/>
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default FormerMainLayout;
