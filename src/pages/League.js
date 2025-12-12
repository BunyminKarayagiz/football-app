import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fixtures from "../components/Fixtures";
import LeagueInfo from "../components/LeagueInfo";
import SelectSeason from "../components/SelectSeason";
import TopScoresPlayer from "../components/TopScoresPlayer";
import TopAssists from "../components/TopAssists";

function League() {
  const param = useParams();
  const [season, setSeason] = useState();

  useEffect(() => {
    season ? setSeason(season) : setSeason(2023);
  }, [season, param.id]);
  //bg-[#1B1F24]
  return (
    <div className="grid grid-cols-2 gap-[3vh] p-[6vh]">
      <div className="">
        <div className="mb-[2vh]">
          <SelectSeason season={season} setSeason={setSeason} />
        </div>
        <div className="overflow-y-auto h-full pr-[1vh]">
          <LeagueInfo selectedLeague={param.id} selectedSeason={season} />
        </div>
      </div>

      <div className="grid grid-rows-[1fr_1fr_1fr] w-full p-[3vh] overflow-y-auto">
        <TopScoresPlayer
          selectedLeagueSeason={season}
          selectedLeagueId={param.id}
        />
        <TopAssists selectedLeagueSeason={season} selectedLeagueId={param.id} />
          <Fixtures selectedLeague={param.id} />
      </div>
    </div>
  );
}

export default League;
