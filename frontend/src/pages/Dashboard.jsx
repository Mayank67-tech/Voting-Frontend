import React, { useState } from "react";
import colors from "../styles/colors";

export default function Dashboard() {
  const [candidates, setCandidates] = useState([]);
  const [newCandidate, setNewCandidate] = useState({ name: "", info: "" });

  const addCandidate = () => {
    if (!newCandidate.name || !newCandidate.info) return;
    setCandidates([...candidates, { ...newCandidate, id: Date.now() }]);
    setNewCandidate({ name: "", info: "" });
  };

  const deleteCandidate = (id) => {
    setCandidates(candidates.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: colors.lightBlue }}>
      <h1 className="text-3xl font-bold mb-4 text-center" style={{ color: colors.navy }}>Admin Dashboard</h1>
      <div className="bg-white rounded-xl p-4 max-w-xl mx-auto shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Add Candidate</h2>
        <input type="text" placeholder="Name" value={newCandidate.name} onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })} className="w-full p-2 mb-2 border rounded" />
        <textarea placeholder="Info" value={newCandidate.info} onChange={(e) => setNewCandidate({ ...newCandidate, info: e.target.value })} className="w-full p-2 mb-2 border rounded" />
        <button onClick={addCandidate} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add</button>
      </div>

      <div className="mt-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Candidate List</h2>
        {candidates.map((c) => (
          <div key={c.id} className="bg-white p-4 mb-2 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">{c.name}</h3>
              <p>{c.info}</p>
            </div>
            <button onClick={() => deleteCandidate(c.id)} className="text-red-500 font-semibold">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}