import React, { useState } from "react";
import Dashboardview from "./Dashboardview";
import Sidebar from "./Sidebar";
import { Outlet, Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="flex gap-6 ">
        <Outlet />
      <Sidebar />
      <Routes>
        <Route path="/coverletter" element={<Dashboardview />} />
      </Routes>

      <div className=" text-xl text-gray-900 font-semibold ">
        <Dashboardview />
      </div>
    </section>
  );
};

export default Dashboard;
