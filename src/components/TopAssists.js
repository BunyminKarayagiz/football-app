import React, { useState, useEffect } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { TbPlayFootball } from "react-icons/tb";
import { TbSoccerField } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import { xxtopAssists } from "./xx";
//import { getTopAssists } from "../services/apiFootballServices";
import { useNavigate } from "react-router-dom";

function TopAssists({ selectedLeagueSeason, selectedLeagueId }) {
  const [topAssists, setTopAssists] = useState([]);
  const navigate = useNavigate();
  const season = selectedLeagueSeason ?? 2023;
  const league = selectedLeagueId ?? 39;

  useEffect(() => {
    //async function fetchData() {
    //  const players = await getTopAssists(league, season);
    //  console.log(players)
    //  setTopAssists(players)
    //}
    //fetchData();
    setTopAssists(xxtopAssists);
  }, [league, season]);
  return (
    <div className="rounded-[2vh] border border-[.1vh] border-[#374151] p-[1vh] max-h-[48vh] flex flex-col">
      <h1 className="text-[3vh] font-semibold p-[1vh]">Top Assists</h1>

      <div
        className="grid grid-cols-[3vh_4vh_1fr_3vh_11vh_.1vh_11vh] 
                      gap-[1vh] p-[1vh] border-b border-b-[.1vh]  border-[#4B5563] 
                      text-[#9CA3AF] text-[2vh] place-items-center sticky top-0 z-10"
      >
        <p>#</p>
        <IoPersonSharp className="justify-self-start col-span-2" />
        <p className="text-[1.5vh]">Age</p>
        <TbPlayFootball />
        <TbSoccerField />
        <GoGoal />
      </div>
      <div className="snap-y overflow-y-auto">
        {topAssists.map((s, i) => (
          <div
            key={i}
            className="snap-start grid grid-cols-[3vh_1fr_9vh_4vh_6vh_6vh] 
                       p-[1vh] border border-[.1vh] border-[#374151] rounded-[2vh] 
                       mt-[.6vh] bg-[#232830] hover:bg-[#2c323a] 
                       gap-[1vh] text-[1.6vh] place-items-center"
          >
            <p className="font-bold">{i + 1}.</p>
            <div
              onClick={() => {
                navigate(`/player/${s.player.id}`);
              }}
              className="cursor-pointer flex h-[4vh] gap-[2vh] justify-self-start"
            >
              <img src={s.player.photo} alt={s.player.name} />
              <p className="content-center">{s.player.name}</p>
            </div>
            <p className="mr-[2.5vh]">{s.player.age}</p>
            <img
              onClick={() => {
                navigate(`/team/${s.team.id}`);
              }}
              className="cursor-pointer mr-[1.5vh]"
              src={s.team.logo}
              alt={s.team.name}
            />
            <p>{s.statistics.appearences}</p>
            <p>{s.statistics.goal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopAssists;
