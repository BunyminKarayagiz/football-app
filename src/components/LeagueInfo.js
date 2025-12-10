import React, { useState, useEffect } from "react";
import Ranks from "./Ranks";
import { league_info, ranks } from "./xx";

function LeagueInfo({ selectedLeague }) {
  const [leagueInfo, setLeagueInfo] = useState({});
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(ranks);
    setLeagueInfo(league_info);
  }, [selectedLeague]);

  return (
    <div className="w-full bg-[#1B1F24] rounded-xl p-[2vh] mt-[3vh] shadow-lg border border-gray-700">
      <div className="text-white mb-[2vh]">
        <h2 className="text-[2.5vh] font-bold">{leagueInfo.league_name}</h2>
        <h3 className="text-[2vh] text-gray-400">{leagueInfo.country}</h3>
      </div>

      <div
        className="grid grid-cols-[6vh_142vh_4.5vh_4.5vh_4.5vh_4.5vh_5vh_6vh_10vh] 
                      text-gray-400 text-[1.5vh] font-semibold border-b border-gray-600 pb-[1vh]"
      >
        <p>#</p>
        <p>Team</p>
        <p>P</p>
        <p>W</p>
        <p>D</p>
        <p>L</p>
        <p>GD</p>
        <p>PTS</p>
        <p>FORM</p>
      </div>

      <div className="mt-[1vh] flex flex-col gap-[.8vh]">
        {teams.map((item) => (
          <Ranks key={item.teams.id} teams={item} />
        ))}
      </div>
    </div>
  );
}

export default LeagueInfo;
