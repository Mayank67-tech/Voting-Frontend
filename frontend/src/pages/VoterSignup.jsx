import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AadhaarForm from "../components/AadhaarForm";

export default function VoterSignup() {
const [verified, setVerified] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleSignup = (e) => {
e.preventDefault();
// Save voter to DB logic
navigate("/login");
};

return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
{!verified ? (
<AadhaarForm onVerified={() => setVerified(true)} />
) : (
<form onSubmit={handleSignup} className="bg-white p-6 rounded-xl shadow-xl w-96 mt-8">
<h2 className="text-center text-2xl font-bold mb-4 text-blue-700">Voter Signup</h2>
<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border mb-3 rounded" required />
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border mb-3 rounded" required />
<button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Signup</button>
</form>
)}
</div>
);
}