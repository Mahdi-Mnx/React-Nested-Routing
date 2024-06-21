// src/pages/Dashboard.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Overview from "./dashboard/Overview";
import Settings from "./dashboard/Settings";
import User from "./dashboard/User";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="overview">Overview</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
          <li>
            <Link to="user/1">User 1</Link>
          </li>
          <li>
            <Link to="user/2">User 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="overview" element={<Overview />} />
        <Route path="settings" element={<Settings />} />
        <Route path="user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
