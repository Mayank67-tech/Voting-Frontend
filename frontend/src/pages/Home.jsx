import React from "react";
import { Link } from "react-router-dom";
import colors from "../styles/colors";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center" style={{ backgroundColor: colors.lightBlue }}>
      <img src="/logo.png" alt="Voting Logo" className="w-24 mb-4" />
      <h1 className="text-4xl font-bold mb-4" style={{ color: colors.navy }}>
        Welcome to SmartVote
      </h1>
      <div className="space-x-4">
        <Link to="/candidates" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          View Candidates
        </Link>
        <Link to="/vote" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Start Voting
        </Link>
      </div>
    </div>
  );
}