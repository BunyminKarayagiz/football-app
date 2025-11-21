import React from "react";
import "../styles/Navbar.css";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <h1 className="title">ScoreBall</h1>
        <div className="button-container">
          <button>Home</button>
          <button>Live Scores</button>
          <button>Leauges</button>
          <button>Players</button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
