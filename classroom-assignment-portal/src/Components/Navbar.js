import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎓 Classroom Assignment Portal</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/teacher">Teacher</Link>
        <Link to="/student">Student</Link>
      </div>
    </nav>
  );
}
