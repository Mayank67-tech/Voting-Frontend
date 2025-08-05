import React from "react";
import CandidateCard from "../components/CandidateCard";
import colors from "../styles/colors";

// Example candidate data
const candidates = [
{
id: 1,
name: "Alice Johnson",
party: "Unity Party",
symbol: "🕊️",
description: "Focused on community development and education.",
},
{
id: 2,
name: "Bob Singh",
party: "Progress Alliance",
symbol: "🚀",
description: "Advocates for technology and innovation policies.",
},
{
id: 3,
name: "Chitra Mehra",
party: "Green Future",
symbol: "🌿",
description: "Passionate about environment and sustainability.",
},
];

export default function CandidateList() {
return (
<div
className="min-h-screen p-6"
style={{ backgroundColor: colors.grayBlue }}
>
<h1 className="text-3xl font-bold text-center mb-8" style={{ color: colors.darkBlue }}>
Candidates
</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
{candidates.map((candidate) => (
<CandidateCard key={candidate.id} candidate={candidate} />
))}
</div>
</div>
);
}