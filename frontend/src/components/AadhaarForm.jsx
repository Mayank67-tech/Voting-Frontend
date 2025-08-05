import React, { useState } from "react";
import { verifyIdentity } from "../api/identityVerification";

export default function AadhaarForm({ onVerified }) {
const [formData, setFormData] = useState({
aadhaarNumber: "",
aadhaarName: "",
aadhaarDOB: "",
voterId: "",
voterName: "",
voterDOB: "",
});
const [error, setError] = useState("");
const [verifying, setVerifying] = useState(false);

const handleChange = (e) => {
setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
};

const handleVerify = async (e) => {
e.preventDefault();
setVerifying(true);
setError("");
try {
await verifyIdentity(formData);
onVerified();
} catch (err) {
setError(err.message || "Verification failed.");
} finally {
setVerifying(false);
}
};

return (
<form onSubmit={handleVerify} className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
<h2 className="text-xl font-bold mb-4 text-center">Identity Verification</h2>

php-template
Copy
Edit
  <div className="grid grid-cols-2 gap-4">
    <input name="aadhaarNumber" placeholder="Aadhaar Number" value={formData.aadhaarNumber} onChange={handleChange} className="p-2 border rounded" required />
    <input name="aadhaarName" placeholder="Aadhaar Name" value={formData.aadhaarName} onChange={handleChange} className="p-2 border rounded" required />
    <input name="aadhaarDOB" placeholder="Aadhaar DOB (YYYY-MM-DD)" value={formData.aadhaarDOB} onChange={handleChange} className="p-2 border rounded" required />
    <input name="voterId" placeholder="Voter ID Number" value={formData.voterId} onChange={handleChange} className="p-2 border rounded" required />
    <input name="voterName" placeholder="Voter Name" value={formData.voterName} onChange={handleChange} className="p-2 border rounded" required />
    <input name="voterDOB" placeholder="Voter DOB (YYYY-MM-DD)" value={formData.voterDOB} onChange={handleChange} className="p-2 border rounded" required />
  </div>

  {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}

  <button type="submit" className="mt-4 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600" disabled={verifying}>
    {verifying ? "Verifying..." : "Verify Identity"}
  </button>
</form>
);
}