import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import colors from "../styles/colors";

export default function VotingPage() {
  const [seconds, setSeconds] = useState(60);
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const voterId = localStorage.getItem("voter");
    if (!voterId) navigate("/voter/login");
  }, [navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          localStorage.removeItem("voter");
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="p-6 min-h-screen" style={{ backgroundColor: colors.lightBlue }}>
      <h1 className="text-center text-2xl font-bold mb-4" style={{ color: colors.darkBlue }}>Vote Now (Time left: {seconds}s)</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div>
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            width={300}
            height={300}
            videoConstraints={{ facingMode: "user" }}
            className="rounded-xl border-4 border-white shadow-lg"
          />
          <p className="text-center mt-2 text-sm">Face verification active</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-xl w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Select Your Candidate</h2>
          <select className="w-full p-2 border mb-4 rounded">
            <option>Select candidate</option>
            <option>Candidate A</option>
            <option>Candidate B</option>
          </select>
          <button className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700">Submit Vote</button>
        </div>
      </div>
    </div>
  );
}