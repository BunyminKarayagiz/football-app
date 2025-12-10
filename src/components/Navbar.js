import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {/* NAVBAR */}
      <div className="w-full h-[9vh] bg-[#1B1F24] text-white py-4 px-[4vh] shadow-lg flex items-center justify-between">
        <button
          className="text-[3vh] rounded-md hover:bg-[#252b33] transition"
          onClick={() => setOpen(true)}
        >
          <FiAlignJustify />
        </button>

        <h1 className="text-[2.5vh] font-bold tracking-wide">ScoreBall</h1>
      </div>

      {/* SIDEBAR */}
      <div
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
            className="h-[5vh] py-[1vh] px-[1vh] rounded-[1vh] bg-[#2A323A] hover:bg-[#343d47] transition font-medium text-[2vh]"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/league");
              setOpen(false);
            }}
            className="h-[5vh] py-[1vh] px-[1vh] rounded-[1vh] bg-[#2A323A] hover:bg-[#343d47] transition font-medium text-[2vh]"
          >
            League
          </button>

          <button
            onClick={() => {
              navigate("/fixtures");
              setOpen(false);
            }}
            className="h-[5vh] py-[1vh] px-[1vh] rounded-[1vh] bg-[#2A323A] hover:bg-[#343d47] transition font-medium text-[2vh]"
          >
            Fixture
          </button>

          <button
            onClick={() => {
              navigate("/players");
              setOpen(false);
            }}
            className="h-[5vh] py-[1vh] px-[1vh] rounded-[1vh] bg-[#2A323A] hover:bg-[#343d47] transition font-medium text-[2vh]"
          >
            Players
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-fadeIn"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <Outlet />
    </>
  );
}

export default Navbar;
