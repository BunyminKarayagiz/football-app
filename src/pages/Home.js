import React, { useState } from "react";
import "../styles/Home.css";
import LiveScores from "../components//LiveScores.js";
import LeagueInfo from "../components/LeagueInfo.js";
import Fixtures from "../components/Fixtures.js";
import SelectLeague from "../components/SelectLeague.js";
//import { getLeaugue } from "../services/apiFootballServices.js";

function Home() {
  const [selectedLeague, setSelectedLeague] = useState(39); // varsayılan lig
  //getLeaugue(39, 2023).then((data) => {
  //console.log(data);
  //console.log(data[0]);
  //console.log(data[1]);
  //});
  //getLeaugue(39,2023)

  return (
    <div className="home-container">
      <div className="live-fixture-container">
        <div className="box" id="live-score">
          <h1>Live Scores</h1>
          <LiveScores />
        </div>
        <div className="box" id="fixture">
          <div className="fixture-tite-container">
            <h1>Fixture</h1>
            <SelectLeague setLeague={setSelectedLeague} />
          </div>

          <Fixtures selectedLeague={selectedLeague} />
        </div>
      </div>

      <div className="box" id="league-tablo">
        <div className="fixture-tite-container">
          <h1>League</h1>
          <SelectLeague setLeague={setSelectedLeague} />
        </div>
        <LeagueInfo selectedLeague={selectedLeague} />
      </div>
    </div>
  );
}

export default Home;
