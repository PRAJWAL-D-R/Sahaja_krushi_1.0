// src/layout/admin/AdminMainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

import GovernmentAgricultureNavbar from "../../components/Navbar";

const AdminMainLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      <GovernmentAgricultureNavbar />
      <main className="flex-1 overflow-auto px-4 py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminMainLayout;
