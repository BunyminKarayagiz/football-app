import React, { useEffect, useState } from "react";
//import { getTopScores } from "../services/apiFootballServices";
import { xxtopScores } from "./xx";

function TopScoresPlayer({ selectedLeagueSeason, selectedLeagueId }) {
  const [topScores, setTopScores] = useState([]);

  const season = selectedLeagueSeason ?? 2023; // Home sayfası season vermiyorsa 2023 kullan
  const league = selectedLeagueId ?? 39;

  useEffect(() => {
    //async function fetchData() {
    //  const players = await getTopScores(league, season);
    //  console.log(players)
    //  setTopScores(players)
    //}
    //fetchData();
    setTopScores(xxtopScores);
  }, [league, season]);

  return (
    <div className="overflow-y-auto h-full max-h-[30vh] p-[1vh]">
      {topScores.map((s, i) => (
        <div className="grid grid-cols-[3vh_4vh_1fr_6vh_4vh_6vh_6vh] p-[1vh] border border-[#374151] rounded-[2vh] mt-[.6vh] bg-[#232830] hover:bg-[#2c323a] gap-[1vh] text-[1.6vh] place-items-center">
          <p className="font-bold">{i + 1}.</p>
          <img src={s.player.photo} alt={s.player.name} title={s.player.name} />
          <p className="justify-self-start">{s.player.name}</p>
          <p>{s.player.age}</p>
          <img src={s.team.logo} alt={s.team.name} title={s.team.name} />
          <p>{s.statistics.appearences}</p>
          <p>{s.statistics.goal}</p>
        </div>
      ))}
    </div>
  );
}

export default TopScoresPlayer;
