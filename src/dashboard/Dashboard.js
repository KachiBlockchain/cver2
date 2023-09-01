import React, { useState } from "react";
import Dashboardview from "./Dashboardview";
import Resume from "./Resume";
import Sidebar from "./Sidebar";
import Letter from "./Letter";
import Questions from "./Questions";
import Credits from "./Credits";

import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Account from "./Account";

const Dashboard = () => {
  return (
    <div className="bg-white h-[3400px]">
      {/* heading section */}
     

      {/* sidebar section */}
      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-3 h-screen pl-2">
            <Sidebar />
          </div>

          <div className="col-span-9 h-screen pl-2">
            <section>
              <Routes>
                {/* <Route path="/" element={} /> */}
                <Route path="home" element={<Dashboardview />} />
                <Route path="resume" element={<Resume />} />
                <Route path="letter" element={<Letter />} />
                <Route path="question" element={<Questions />} />
                <Route path="credit" element={<Credits />} />
                <Route path="profile" element={<Profile />} />
                <Route path="account" element={<Account />} />
                <Route path="logout" element={<div>Logout</div>} />
              </Routes>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
