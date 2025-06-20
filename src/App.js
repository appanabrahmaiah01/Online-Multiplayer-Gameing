import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Leaderboard from "./components/Leaderboard";

 


// Pages
import Home from "./pages/Dashboard";
import Tournaments from './pages/Tournaments'; 
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingBottom: "3rem" }}>
        {/* Add space for footer if it's fixed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
