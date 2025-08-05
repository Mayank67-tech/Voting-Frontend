import React from "react";
import colors from "../styles/colors";

export default function CandidateCard({ candidate }) {
return (
<div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
<h2 className="text-xl font-semibold" style={{ color: colors.primary }}>
{candidate.name}
</h2>
<p className="text-sm font-medium text-gray-700 mb-1">
<strong>Party:</strong> {candidate.party}
</p>
<p className="text-2xl mb-2">{candidate.symbol}</p>
<p className="text-gray-600">{candidate.description}</p>
</div>
);
}