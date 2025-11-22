import React from "react";
import "../styles/Home.css";
//import { getmatch } from "../services/apiFootballServices.js";
import LiveScores from "../components/LiveScores";
  
function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="box" id="live-score">
          <h1>Live Scores</h1>
          <LiveScores />
        </div>

        <div className="box" id="league-tablo">
          <h1>League Table</h1>
        </div>

        <div className="box" id="fikstur">
          <h1>Fixture</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
