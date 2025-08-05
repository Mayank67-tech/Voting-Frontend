import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CandidateList from "./pages/CandidateList";
import VotingPage from "./pages/VotingPage";
import AdminPanel from "./AdminPanel";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import VoterLogin from "./pages/VoterLogin";
import VoterSignup from "./pages/VoterSignup";
import Navbar from "./components/Navbar";

export default function App() {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/candidates" element={<CandidateList />} />
<Route path="/vote" element={<VotingPage />} />
<Route path="/admin" element={<AdminPanel />} />
<Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/signup" element={<AdminSignup />} />
<Route path="/login" element={<VoterLogin />} />
<Route path="/signup" element={<VoterSignup />} />
</Routes>
</Router>
);
}