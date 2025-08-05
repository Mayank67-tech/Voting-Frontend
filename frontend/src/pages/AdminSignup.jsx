import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../styles/colors";

export default function AdminSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/admin/login");
  };

  return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: colors.grayBlue }}>
      <form onSubmit={handleSignup} className="bg-white p-6 rounded-xl shadow-xl w-80">
        <h2 className="text-center text-2xl font-bold mb-4" style={{ color: colors.primary }}>Admin Signup</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border mb-3 rounded" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border mb-3 rounded" required />
        <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Signup</button>
      </form>
    </div>
  );
}
