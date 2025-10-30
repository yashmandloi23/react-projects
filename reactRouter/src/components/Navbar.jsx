import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    padding: "0.35rem 0.6rem",
    borderRadius: "4px",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 1rem",
    background: "#0d6efd",
    color: "#fff",
  };

  const itemsStyle = {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>MySite</div>
      <div style={itemsStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/About" style={linkStyle}>
          About
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
        <Link to="/courses" style={linkStyle}>
          Courses
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
