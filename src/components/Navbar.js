import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import Footer from "./Footer";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <header className="w-full h-[9vh] bg-[#1B1F24] text-white py-4 px-[4vh] shadow-lg flex items-center justify-between">
        <button
          className="text-[3vh] rounded-md hover:bg-[#252b33] transition"
          onClick={() => setOpen(true)}
        >
          <FiAlignJustify />
        </button>

        <h1 className="text-[2.5vh] font-bold tracking-wide truncate">
          ScoreBall
        </h1>
      </header>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[35vh] bg-[#1E242A] text-white shadow-xl p-[2vh]
          transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          className="text-[3.5vh] absolute right-[2vh] top-[2vh] text-gray-300 hover:text-white"
          onClick={() => setOpen(false)}
        >
          ×
        </button>

        <h2 className="text-[3.5vh] font-semibold mb-[3vh] mt-[5vh]">Menü</h2>

        {/* MENU ITEMS */}
        <div className="flex flex-col gap-[2vh]">
          <button
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
            className="nav-btn"
          >
            Home
          </button>

          <button
            onClick={() => {
              navigate("/league");
              setOpen(false);
            }}
            className="nav-btn"
          >
            League
          </button>

          <button
            onClick={() => {
              navigate("/fixtures");
              setOpen(false);
            }}
            className="nav-btn"
          >
            Fixture
          </button>

          <button
            onClick={() => {
              navigate("/teams");
              setOpen(false);
            }}
            className="nav-btn"
          >
            Teams
          </button>

          <button
            onClick={() => {
              navigate("/players");
              setOpen(false);
            }}
            className="nav-btn"
          >
            Players
          </button>
        </div>
      </aside>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-[#111317] text-white px-4">
        <Outlet />
      </main>

      {/* FOOTER burada */}
      <Footer />
    </>
  );
}

export default Navbar;
