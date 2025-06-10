// src/layout/admin/AdminMainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import AgricultureNavbar from "../../components/Navbar";

const AdminMainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AgricultureNavbar/>
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminMainLayout;
