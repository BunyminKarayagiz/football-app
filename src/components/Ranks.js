import React from "react";
import "../styles/League.css";
import FormDisplay from "./FormDisplay";

function Ranks({ teams = [] }) {
  return (
    <div className="teams-info-container">
      <p>{teams.teams.rank}</p>
      <div className="name-img-container">
        <img
          src={teams.teams.logo}
          alt={teams.teams.logo}
          className="team-logo"
        />
        <p>{teams.teams.name}</p>
      </div>
      <p className="scores">{teams.teams.played}</p>
      <p className="scores">{teams.teams.win}</p>
      <p className="scores">{teams.teams.draw}</p>
      <p className="scores">{teams.teams.lose}</p>
      <p className="scores">{teams.teams.goalsdiff}</p>
      <p className="scores">{teams.teams.points}</p>
      <FormDisplay form={teams.teams.form} />
    </div>
  );
}

export default Ranks;
