import React, { useState, useEffect } from "react";
import Ranks from "./Ranks";
import { league_info, ranks } from "./xx";
//import { getLeaugue } from "../services/apiFootballServices";
import { useNavigate } from "react-router-dom";

function LeagueInfo({ selectedLeague, selectedSeason }) {
  const [leagueInfo, setLeagueInfo] = useState({});
  const [teams, setTeams] = useState([]);
  const [boolData, setBoolData] = useState(true);
  const season = selectedSeason ?? 2023; // Home sayfası season vermiyorsa 2023 kullan
  const league = selectedLeague ?? 39;
  const navigate = useNavigate();
  useEffect(() => {
    // Eğer league id yoksa (henüz gelmediyse) bekle
    if (!league) return;

    let mounted = true;
    setBoolData(true); // fetch başlarken göstergeyi true yap (loading / veri var varsayımı)

    //async function fetchData() {
    //  try {
    //    const [leagueRes, teamRes] = await getLeaugue(league, season);
    //
    //    if (!mounted) return; // component unmount olduysa state güncelleme
    //
    //    if (!leagueRes) {
    //      // servisten boş döndüyse
    //      setBoolData(false);
    //      setLeagueInfo({});
    //      setTeams([]);
    //    } else {
    //      setLeagueInfo(leagueRes);
    //      setTeams(teamRes || []);
    //      setBoolData(true);
    //    }
    //  } catch (error) {
    //    console.error("getLeaugue error:", error);
    //    if (!mounted) return;
    //    setBoolData(false);
    //    setLeagueInfo({});
    //    setTeams([]);
    //  }
    //}
    //
    //fetchData();
    setLeagueInfo(league_info);
    setTeams(ranks);
    if (!mounted) return;
    return () => {
      mounted = false;
    };
  }, [league, season]); // bağımlılıklar derived (computed) değişkenler

  return boolData ? (
    <div className="w-full rounded-xl p-[2vh] mt-[3vh] shadow-lg border border-[.1vh] border-gray-700">
      <div className="text-white mb-[2vh]">
        <h2
          onClick={() => {
            navigate(`/league/${leagueInfo.id}`);
          }}
          className="cursor-pointer text-[2.5vh] font-bold inline-block"
        >
          {leagueInfo.league_name}
        </h2>
        <h3 className="text-[2vh] text-gray-400">{leagueInfo.country}</h3>
      </div>

      <div
        className="grid grid-cols-[6vh_1fr_4.5vh_4.5vh_4.5vh_4.5vh_5vh_6vh_10vh] 
                        text-gray-400 text-[1.5vh] font-semibold border-b border-b-[.1vh] border-gray-600 pb-[1vh]"
      >
        <p>#</p>
        <p>Team</p>
        <p>P</p>
        <p>W</p>
        <p>D</p>
        <p>L</p>
        <p>GD</p>
        <p>PTS</p>
        <p>FORM</p>
      </div>

      <div className="mt-[1vh] flex flex-col gap-[.8vh]">
        {teams.map((item) => (
          <Ranks key={item.teams.id} teams={item} />
        ))}
      </div>
    </div>
  ) : (
    <p className="flex h-[5vh] justify-center border border-[.1vh] border-[#1F2937] items-center rounded-[2vh] bg-[#161B22] text-[2vh] text-gray-400">
      No fixtures available.
    </p>
  );
}

export default LeagueInfo;
