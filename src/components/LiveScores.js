import React, { useEffect, useState } from "react";
//import { getMatchs } from "../services/apiFootballServices";
import LiveMatch from "./LiveMatch";
import "../styles/LiveScoresAndFixtures.css"
import {xxx} from "./xx.js"
//import {topLeagues_str} from "../services/apiFootballServices.js"

function LiveScores() {
  const [matchs_item, setMatch] = useState([]);

  useEffect(() => {
    
    //getMatchs(topLeagues_str).then((matchs) => {
    //  setMatch(matchs);
    //  //console.log(matchs)
    //});
    setMatch(xxx)
  }, []);
  return(
    <div className="poem">
      <div className="match-container">
        {matchs_item.map((item)=>(
            <LiveMatch key={item.fixture_id} match={item} />
        ))}

      </div>
    </div>
  );

}

export default LiveScores;
