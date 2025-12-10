import React, { useState } from "react";
import LiveScores from "../components/LiveScores.js";
import LeagueInfo from "../components/LeagueInfo.js";
import Fixtures from "../components/Fixtures.js";
import SelectLeague from "../components/SelectLeague.js";

function Home() {
  const [selectedLeague, setSelectedLeague] = useState(39);

  return (
    <div className="flex flex-col min-h-screen px-[8vh] py-[5vh] bg-[#0D1117] text-white">
      {/* Üst Kısım: Live Scores + Fixture */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5vh] w-full">
        
        {/* Left: Live Scores */}
        <div className="w-full">
          <h1 className="text-[3vh] font-semibold mb-[2vh]">Live Scores</h1>
          <div className="bg-[#161B22] p-[1vh] rounded-xl shadow-md border border-gray-800">
            <LiveScores />
          </div>
        </div>

        {/* Right: Fixture */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-[2vh]">
            <h1 className="text-[3vh] font-semibold">Fixtures</h1>
            <SelectLeague setLeague={setSelectedLeague} />
          </div>

          <div className="w-full bg-[#161B22] p-[1vh] rounded-xl  shadow-md border border-gray-800">
            <Fixtures selectedLeague={selectedLeague} />
          </div>
        </div>
      </div>

      {/* Bottom: League Info */}
      <div className="mt-[6vh] w-full">
        <div className="flex items-center justify-between mb-[3vh]">
          <h1 className="text-[3vh] font-semibold">League Info</h1>
          <SelectLeague setLeague={setSelectedLeague} />
        </div>

        <div className="rounded-xl shadow-md">
          <LeagueInfo selectedLeague={selectedLeague} />
        </div>
      </div>
    </div>
  );
}

export default Home;
