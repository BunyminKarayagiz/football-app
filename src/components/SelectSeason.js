import React from "react";
import { seasons } from "../services/apiFootballServices";
import { IoChevronDown } from "react-icons/io5";

function SelectSeason({ season, setSeason }) {
  if (!season) setSeason = 2023;

  const current = seasons.find((l) => l === season);

  return (
    <div className="relative w-fit">
      <div
        className="flex items-center bg-white/5 px-[2vh] py-[1vh] rounded-xl 
                     backdrop-blur-md shadow-sm hover:bg-white/10 transition pr-[2vh]"
      >
        {/* SELECT */}
        <select
          value={current}
          onChange={(e) => setSeason(Number(e.target.value))}
          className="bg-transparent text-[gray-200] outline-none cursor-pointer text-[1.5vh]
                       appearance-none w-full"
          style={{
            colorScheme: "dark",
          }}
        >
          {seasons.map((s, i) => (
            <option key={i} value={s} className="bg-[#161B22]">
              {s} - {s + 1}
            </option>
          ))}
        </select>

        <IoChevronDown className="text-[2vh] text-gray-300 pointer-events-none" />
      </div>

      {/* OPTION STYLES OVERRIDE */}
      <style>
        {`
            select option {
              border:none; 
              color: #D1D5DB !important;
              padding: 8px;
            }
            select option:checked{
                background-color: #333 !important;
            }
            select option:hover { 
              background-color:red !important;
            }
          `}
      </style>
    </div>
  );
}

export default SelectSeason;
