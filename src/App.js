import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import Dashboard from "./dashboard/Dashboard";
import Sidebar from "./dashboard/Sidebar";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div className="bg-bg bg-no-repeat bg-cover">
      <UserAuthContextProvider>
        <Header />
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <BackToTopButton />
        <Footer />
      </UserAuthContextProvider>
    </div>
  );
};

export default App;
