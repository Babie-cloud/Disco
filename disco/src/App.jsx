import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/auth/landingpage";
import Login from "./components/auth/login";
// import Signup from "./components/auth/signup";
import ResetPassword from "./components/auth/ResetPassword"; // Ajouté ici
import Dashboard from "./components/Dev/dashboard"; // Assume que tu l'as

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/reset-password" element={<ResetPassword />} /> {/* Ajouté */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;