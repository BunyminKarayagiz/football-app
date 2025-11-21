import React from "react";
import "../styles/Home.css";
import { getmatch } from "../services/apiFootballServices.js";

  
function Home() {
  getmatch()
  return (
    <div>
      <div className="home-container">
        <div className="box" id="live-score">
          <h1>Live Scores</h1>
          
        </div>

        <div className="box" id="league-tablo">
          <h1>League Table</h1>
        </div>

        <div className="box" id="fikstur">
          <h1>Fikstur</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
