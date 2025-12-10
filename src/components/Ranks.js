import React from "react";
import FormDisplay from "./FormDisplay";

function Ranks({ teams = [] }) {
  return (
    <div
      className="grid grid-cols-[6vh_139.5vh_4.5vh_4.5vh_4.5vh_4.5vh_5vh_6vh_10vh]
                 items-center text-white bg-[#232830] rounded-[1vh] p-[1vh]
                 hover:bg-[#2c323a] transition border-[.1vh] border-gray-700">
      
      {/* Rank */}
      <p className="text-[1.5vh] text-center font-bold">{teams.teams.rank}</p>

      {/* Team Name + Logo */}
      <div className="flex items-center gap-[1vh]">
        <img
          src={teams.teams.logo}
          alt={teams.teams.name}
          className="w-[4vh] h-[4vh]"
        />
        <p className="text-[2vh]">{teams.teams.name}</p>
      </div>

      {/* Stats */}
      <p className="text-[1.5vh] text-center">{teams.teams.played}</p>
      <p className="text-[1.5vh] text-center text-green-400">{teams.teams.win}</p>
      <p className="text-[1.5vh] text-center">{teams.teams.draw}</p>
      <p className="text-[1.5vh] text-center text-red-400">{teams.teams.lose}</p>
      <p className="text-[1.5vh] text-center">{teams.teams.goalsdiff}</p>
      <p className="text-[1.5vh] text-center font-bold text-yellow-400">{teams.teams.points}</p>

      {/* FORM */}
      <FormDisplay form={teams.teams.form} />
    </div>
  );
}

export default Ranks;
