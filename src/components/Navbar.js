import React, { useState } from "react";
import "../styles/Navbar.css";
import { Outlet } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="nabvars">
        <div className="navbar-container">
            <button className="row-navbar-btn" onClick={() => setOpen(true)}>
              <FiAlignJustify />
            </button>
            <h1 className="title">ScoreBall</h1>
          </div>
        <div className="row-navbar-container"></div>
      </div>

      {/* SOLDAN AÇILAN SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <button className="closeBtn" onClick={() => setOpen(false)}>×</button>

        <h2 className="sideTitle">Menü</h2>

        <button className="sideItem">Home</button>
        <button className="sideItem">Leagues</button>
        <button className="sideItem">Fixtures</button>
        <button className="sideItem">Players</button>
      </div>

      {/* ARKA PLAN KARARTMA */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <Outlet />
    </>
  );
}

export default Navbar;
