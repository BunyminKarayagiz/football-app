import React, { useEffect, useState } from "react";
import LiveMatch from "./LiveMatch";
import { xxx } from "./xx.js";
//import { topLeagues_str, getMatchs } from "../services/apiFootballServices.js";

function LiveScores() {
  const [matchs, setMatchs] = useState([]);

  useEffect(() => {
    //async function fetchData() {
    //  const data = await getMatchs(topLeagues_str);
    //  console.log("Veri Alındı");
    //  setMatchs(data);
    //}
//
    //fetchData();
    //const interval = setInterval(() => {
    //  fetchData();
    //}, 60000); // 60.000 ms = 60 saniye
//
    //return () => clearInterval(interval);
    setMatchs(xxx);
  }, []);

  return (
    <div className="w-full flex justify-center ">
      <div className="snap-y grid grid-cols-1 grid-cols-2 gap-[2vh] p-[2vh] max-h-[50vh] w-full overflow-y-auto">
        {matchs.map((item) => (
          <LiveMatch key={item.fixture_id} match={item} />
        ))}
      </div>
    </div>
  );
}

export default LiveScores;
