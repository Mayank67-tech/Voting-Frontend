import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import colors from "../styles/colors";

const images = [
  "/vote1.jpg",
  "/vote2.jpg",
  "/vote3.jpg",
  "/vote4.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const targetDate = new Date("2025-08-15T23:59:59").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setCountdown("Voting closed!");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ backgroundColor: colors.lightBlue }}>
      {/* Slideshow */}
      <div
        className="relative w-full m-2 max-w-5xl mx-auto mt-6 overflow-hidden rounded-xl shadow-lg"
        data-aos="fade-up"
      >
        <img
          src={images[currentIndex]}
          alt="Voting Slide"
          className="w-full h-[400px] object-cover transition-all duration-500"
        />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-70"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-70"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Welcome + Buttons */}
      <div className="text-center mt-12" data-aos="fade-up">
        <img src="/i1.jpg" alt="Voting Logo" className="w-24 rounded-2xl mb-4 mx-auto" />
        <h1 className="text-4xl font-bold mb-4" style={{ color: colors.navy }}>
          Welcome to SmartVote
        </h1>
        <div className="space-x-4">
          <Link
            to="/candidates"
            className="px-4 py-2 rounded text-white hover:brightness-110 transition"
            style={{ backgroundColor: colors.primary }}
          >
            View Candidates
          </Link>
          <Link
            to="/vote"
            className="px-4 py-2 rounded text-white hover:brightness-110 transition"
            style={{ backgroundColor: colors.success }}
          >
            Start Voting
          </Link>
        </div>
      </div>

      {/* Countdown Timer */}
      <div
        className="text-center mt-6 text-xl font-medium"
        style={{ color: colors.navy }}
        data-aos="fade-up"
      >
        🕒 Voting ends in:{" "}
        <span className="font-bold" style={{ color: colors.danger }}>
          {countdown}
        </span>
      </div>

      {/* Statistics Section */}
<div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-center px-4" data-aos="fade-up">
  <div className="p-6 rounded-xl shadow-lg bg-white">
    <h3 className="text-xl font-bold text-blue-900">Registered Candidates</h3>
    <p className="text-5xl font-bold text-green-600 mt-2">83%</p>
    <p className="text-gray-600 mt-1">of eligible candidates</p>
  </div>
  <div className="p-6 rounded-xl shadow-lg bg-white">
    <h3 className="text-xl font-bold text-blue-900">Voter Turnout</h3>
    <p className="text-5xl font-bold text-purple-600 mt-2">68%</p>
    <p className="text-gray-600 mt-1">have already voted</p>
  </div>
</div>


      {/* Info Sections */}
      <div className="max-w-4xl mx-auto mt-16 text-center px-4">
        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: colors.navy }}
          data-aos="fade-up"
        >
          Why Voting is Important
        </h2>
        <p className="text-lg mb-8 text-gray-700" data-aos="fade-up">
          Voting empowers individuals to shape their communities and hold leaders accountable. Your voice matters!
        </p>

        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: colors.navy }}
          data-aos="fade-up"
        >
          Our Mission
        </h2>
        <p className="text-lg mb-8 text-gray-700" data-aos="fade-up">
          SmartVote is on a mission to bring safe, transparent, and accessible elections to everyone, anywhere.
        </p>
      </div>

      {/* Testimonials */}
      <div className="w-full max-w-5xl mx-auto mt-16" data-aos="fade-up">
        <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.navy }}>
          What People Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {[
            {
              name: "Aarav Singh",
              quote: "Online voting is now so easy and secure with SmartVote!",
            },
            {
              name: "Meera Patel",
              quote: "I loved how smooth and trustworthy the experience was.",
            },
            {
              name: "Rohan Das",
              quote: "Young voters like me finally have a reason to participate!",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600 italic">"{t.quote}"</p>
              <p className="mt-2 font-semibold" style={{ color: colors.navy }}>
                - {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-20 py-6 px-4" style={{ backgroundColor: colors.navy }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div>
            <h4 className="font-bold mb-2">About Us</h4>
            <p className="text-sm">
              SmartVote is a digital voting solution ensuring security, transparency, and ease of use.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/candidates" className="hover:underline">Candidates</Link></li>
              <li><Link to="/vote" className="hover:underline">Vote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p className="text-sm">Email: support@smartvote.com</p>
            <p className="text-sm">Phone: +91 12345 67890</p>
          </div>
        </div>
        <p className="text-center text-xs mt-6 text-gray-300">
          © 2025 SmartVote. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
