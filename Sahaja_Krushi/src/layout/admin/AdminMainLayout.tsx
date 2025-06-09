// src/layout/admin/AdminMainLayout.tsx
import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const AdminMainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminMainLayout;
