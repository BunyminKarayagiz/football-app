import React, { useState, useEffect } from "react";
import Ranks from "./Ranks";
import { league_info, ranks } from "./xx";
import "../styles/League.css";
function LeagueInfo() {
  const [leagueInfo, setLeagueInfo] = useState({});
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    //getMatchs().then((matchs) => {
    //    console.log(matchs)
    //  setMatch(matchs);
    //});

    setTeams(ranks);
    setLeagueInfo(league_info);
    console.log(league_info)
  }, []);
  return (
    <div className="league-container">
      <div className="league-info">
        <h2>{leagueInfo.league_name}</h2>
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
          <Ranks key={item.teams.id} teams={item} league_info={leagueInfo} />
        ))}
      </div>
    </div>
  );
}

export default LeagueInfo;
