import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/auth/landingpage";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Dashboard from "./components/Dev/dashboard";
// import Layout from "./components/layout/Layout"; // Ton composant de structure

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages publiques (sans sidebar/header complexe) */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Pages privées (encapsulées dans un Layout commun) */}
        <Route path="/app" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* Tu ajouteras ici : path="calendar", path="subjects", etc. */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;