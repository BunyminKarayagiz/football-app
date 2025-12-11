import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeagueInfo from "../components/LeagueInfo";
import SelectSeason from "../components/SelectSeason";
import TopScoresPlayer from "../components/TopScoresPlayer";
import { IoPersonSharp } from "react-icons/io5";
import { FaExclamation } from "react-icons/fa6";
import { TbPlayFootball } from "react-icons/tb";
import { TbSoccerField } from "react-icons/tb";
import { GoGoal } from "react-icons/go";

function League() {
  const param = useParams();
  const [season, setSeason] = useState();

  useEffect(() => {
    season ? setSeason(season) : setSeason(2023);
  }, [season, param.id]);

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

      <div className="grid grid-rows-[1fr_1fr_1fr] gap-[5vh] w-full p-[5vh] overflow-y-auto">
        <div className="rounded-[2vh] border border-[#374151] bg-[#1B1F24]">
          <h1 className="text-[3vh] font-semibold p-[1vh]">Top Scores</h1>
          <div className="grid grid-cols-[3vh_4vh_1fr_1vh_9vh_1vh_11vh] gap-[1vh] p-[1vh] border-b border-[#4B5563] text-[#9CA3AF] text-[2vh] place-items-center">
            <p>#</p>
            <IoPersonSharp className="justify-self-start col-span-2" />{" "}
            {/* FOTO + İSİM için */}
            <FaExclamation />
            <TbPlayFootball />
            <TbSoccerField />
            <GoGoal />
          </div>
          <TopScoresPlayer
            selectedLeagueSeason={season}
            selectedLeagueId={param.id}
          />
        </div>
        <div className="rounded-[2vh] bg-white">
          <h1> Top Asists</h1>
        </div>
        <div className="rounded-[2vh] border border-[#374151] bg-[#1B1F24]">
          asd
        </div>
      </div>
    </div>
  );
}

export default League;
