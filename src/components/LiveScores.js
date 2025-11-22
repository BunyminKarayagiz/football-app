import React, { useEffect, useState } from "react";
//import { getMatchs } from "../services/apiFootballServices";
import LiveMatch from "./LiveMatch";
import "../styles/LiveScores.css"
import {xxx} from "./xx.js"

function LiveScores() {
  const [matchs_item, setMatch] = useState([]);

  useEffect(() => {
    
    //getMatchs().then((matchs) => {
    //    console.log(matchs)
    //  setMatch(matchs);
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
