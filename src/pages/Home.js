import React, { useState } from "react";
import "../styles/Home.css";
import LiveScores from "../components//LiveScores.js";
import LeagueInfo from "../components/LeagueInfo.js";
import Fixtures from "../components/Fixtures.js";
import { topLeagues } from "../services/apiFootballServices";
//import { getLeaugue } from "../services/apiFootballServices.js";
function Home() {
  const [selectedLeague, setSelectedLeague] = useState(topLeagues[0].id); // varsayılan lig
  //getLeaugue(39, 2023).then((data) => {
  //console.log(data);
  //console.log(data[0]);
  //console.log(data[1]);
  //});
  //getLeaugue(39,2023)
  console.log(selectedLeague)
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

            <select
              value={selectedLeague}
              onChange={(e) => setSelectedLeague(Number(e.target.value))}
            >
              {topLeagues.map((league) => (
                <option key={league.id} value={league.id}>
                  {league.name}
                </option>
              ))}
            </select>
          </div>

          <Fixtures selectedLeague={selectedLeague} />
        </div>
      </div>

      <div className="box" id="league-tablo">
        <h1>League Table</h1>
        <LeagueInfo />
      </div>
    </div>
  );
}

export default Home;
