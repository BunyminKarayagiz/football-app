import React, { useState, useEffect } from "react";
import Ranks from "./Ranks";
import { league_info, ranks } from "./xx";
import "../styles/League.css";
//import { getLeaugue } from "../services/apiFootballServices";

function LeagueInfo({ selectedLeague }) {
  const [leagueInfo, setLeagueInfo] = useState({});
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    //async function fetchLeague() {
    //  try {
    //    const [info, teamList] = await getLeaugue(selectedLeague, 2023);
    //    setTeams(teamList);
    //    setLeagueInfo(info);
    //  } catch (err) {
    //    console.error("League fetch error:", err);
    //  }
    //}
//
    //fetchLeague();
    setTeams(ranks);
    setLeagueInfo(league_info);
  }, [selectedLeague]);
  return (
    <div className="league-container">
      <div className="league-info">
        <h2>{leagueInfo.league_name}</h2>
        <h3>{leagueInfo.country}</h3>
        <div className="type-container">
          <p>#</p>
          <p>TEAM</p>
          <p>P</p>
          <p>W</p>
          <p>D</p>
          <p>L</p>
          <p>GD</p>
          <p>PTS</p>
          <p>FORM</p>
        </div>
      </div>
      <div className="teams-container">
        {teams.map((item) => (
          <Ranks key={item.teams.id} teams={item} />
        ))}
      </div>
    </div>
  );
}

export default LeagueInfo;
