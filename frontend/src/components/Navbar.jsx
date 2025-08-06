import React from "react";
import { Link } from "react-router-dom";
import colors from "../styles/colors";
import logo from "/i1.jpg";

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center px-6 py-4 shadow-md"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-8 h-8 bg-white p-1 rounded" />
        <Link to="/" className="text-white text-xl font-bold">
          SmartVote
        </Link>
      </div>

      <div className="space-x-6 flex">
        {[
          { label: "Home", to: "/" },
          { label: "Voter Signup", to: "/signup" },
          { label: "Voter Login", to: "/login" },
          { label: "Admin Signup", to: "/admin/signup" },
          { label: "Admin Login", to: "/admin/login" },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="relative text-white text-base font-medium before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
