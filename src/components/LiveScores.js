import React, { useEffect, useState } from "react";
import LiveMatch from "./LiveMatch";
import { xxx } from "./xx.js";
import { useNavigate } from "react-router-dom";
//import {topLeagues_str,getLiveMatchs} from "../services/apiFootballServices.js";

function LiveScores() {
  const [groupedMatchs, setGroupedMatchs] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    //  async function fetchData() {
    //    const data = await getLiveMatchs(topLeagues_str);
    //    console.log("data" ,data)
    //    setGroupedMatchs(data);
    //  }
    //
    //  fetchData();
    //  const interval = setInterval(() => {
    //    fetchData();
    //  }, 60000); // 60.000 ms = 60 saniye
    //
    //  return () => clearInterval(interval);
    const grouped = xxx.reduce((acc, match) => {
      const leagueId = match.league.league_id;

      if (!acc[leagueId]) {
        acc[leagueId] = {
          league: match.league,
          matches: [],
        };
      }

      acc[leagueId].matches.push(match);
      return acc;
    }, {});

    setGroupedMatchs(grouped);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-h-[50vh] overflow-y-auto p-[2vh] space-y-[3vh]">
        {Object.values(groupedMatchs).map((leagueGroup) => (
          <div key={leagueGroup.league.league_id}>
            {/* LEAGUE HEADER */}
            <div
              onClick={() => {
                navigate(`/league/${leagueGroup.league.league_id}`);
              }}
              className="flex items-center gap-[1vh] mb-[1.5vh] cursor-pointer w-fit"
            >
              <img
                src={leagueGroup.league.league_logo}
                alt={leagueGroup.league.league_name}
                className="w-[3vh] h-[3vh]"
              />
              <h2 className="text-white font-bold text-[2vh]">
                {leagueGroup.league.league_name}
              </h2>
            </div>

            {/* MATCHES */}
            <div className="grid grid-cols-1 gap-[1.5vh]">
              {leagueGroup.matches.map((match) => (
                <LiveMatch key={match.fixture_id} match={match} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveScores;
