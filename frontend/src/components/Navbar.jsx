import React from "react";
import { Link } from "react-router-dom";
import colors from "../styles/colors";

export default function Navbar() {
return (
<nav className="flex justify-between items-center px-6 py-4 shadow-md" style={{ backgroundColor: colors.primary }}>
<Link to="/" className="text-white text-xl font-bold">VotingApp</Link>
<div className="space-x-4">
<Link to="/" className="text-white hover:underline">Home</Link>
<Link to="/signup" className="text-white hover:underline">Voter Signup</Link>
<Link to="/login" className="text-white hover:underline">Voter Login</Link>
<Link to="/admin/signup" className="text-white hover:underline">Admin Signup</Link>
<Link to="/admin/login" className="text-white hover:underline">Admin Login</Link>
</div>
</nav>
);
}