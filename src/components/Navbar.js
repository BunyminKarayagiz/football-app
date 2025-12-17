import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `px-[2vh] py-[1vh] rounded-xl text-[1.6vh] font-medium transition
     ${
       isActive
         ? "bg-blue-600 text-white"
         : "text-gray-300 hover:bg-[#2c323a] hover:text-white"
     }`;

  return (
    <>
      {/* NAVBAR */}
      <header className="w-full h-[9vh] bg-[#1B1F24] px-[4vh] flex items-center justify-between shadow-lg sticky top-0 z-50">
        {/* LOGO */}
        <h1
          onClick={() => {
            navigate(`/`);
          }}
          className="cursor-pointer text-white text-[2.6vh] font-bold tracking-wide"
        >
          ⚽ ScoreBall
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-[1vh]">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/leagues" className={linkClass}>
            Leagues
          </NavLink>
          <NavLink to="/teams" className={linkClass}>
            Teams
          </NavLink>
          <NavLink to="/players" className={linkClass}>
            Players
          </NavLink>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-[3vh] p-[1vh] rounded-lg hover:bg-[#2c323a]"
          onClick={() => setOpen(!open)}
        >
          <FiMenu />
        </button>
      </header>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[#1E242A] border-t border-[#2c323a] shadow-lg">
          <nav className="flex flex-col p-[2vh] gap-[1vh]">
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className={linkClass}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/leagues"
              className={linkClass}
            >
              Leagues
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/teams"
              className={linkClass}
            >
              Teams
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/players"
              className={linkClass}
            >
              Players
            </NavLink>
          </nav>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-[#111317] text-white px-4 pt-[2vh]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Navbar;
