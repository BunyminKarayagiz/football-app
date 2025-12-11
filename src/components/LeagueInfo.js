import React, { useState, useEffect } from "react";
import Ranks from "./Ranks";
import { league_info, ranks } from "./xx";
//import { getLeaugue } from "../services/apiFootballServices";

function LeagueInfo({ selectedLeague }) {
  const [leagueInfo, setLeagueInfo] = useState({});
  const [teams, setTeams] = useState([]);
  const [boolData, setBoolData] = useState(true);
  useEffect(() => {
  //  async function fetchData() {
  //    const [league, team] = await getLeaugue(selectedLeague, 2023);
  //    if (league === "") setBoolData(false);
  //    setTeams(team);
  //    setLeagueInfo(league);
  //  }
  //  fetchData();
    setTeams(ranks);
    setLeagueInfo(league_info);
    setBoolData(true)
  }, [selectedLeague]);

  return boolData ? (
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
  ) : (
    <p className="flex h-[5vh] justify-center border border-[#1F2937] items-center rounded-[2vh] bg-[#161B22] text-[2vh] text-gray-400">No fixtures available.</p>
  );
}

export default LeagueInfo;
