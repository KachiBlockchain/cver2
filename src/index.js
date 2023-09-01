import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import { UserAuthContextProvider } from "./context/UserAuthContext";

import App from "./App";
import Dashboard from "./dashboard/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";

ReactDOM.render(
  <UserAuthContextProvider>
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </React.StrictMode>
    </Router>
  </UserAuthContextProvider>,
  document.getElementById("root")
);
