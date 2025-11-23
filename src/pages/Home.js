import React from "react";
import "../styles/Home.css";
import LiveScores from "../components//LiveScores.js"
import LeagueInfo from "../components/LeagueInfo.js";
//import { getLeaugue } from "../services/apiFootballServices.js";
function Home() {
  //getLeaugue(39, 2023).then((data) => {
  //console.log(data);
  //console.log(data[0]);
  //console.log(data[1]);
  //});
  //getLeaugue(39,2023)
  return (
    <div>
      <div className="home-container">
        <div className="box" id="live-score">
          <h1>Live Scores</h1>
          <LiveScores />
        </div>

        <div className="box" id="league-tablo">
          <h1>League Table</h1>
          <LeagueInfo />
        </div>

        <div className="box" id="fikstur">
          <h1>Fixture</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
