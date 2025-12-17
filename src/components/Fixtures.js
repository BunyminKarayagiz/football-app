import React, { useState, useEffect } from "react";
import { xxfixture } from "./xx";
import { MdOutlineDateRange, MdStadium } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";
import { GiWhistle } from "react-icons/gi";
import { FaInfo } from "react-icons/fa";
//import { getFixturesByLeague } from "../services/apiFootballServices";
import { useNavigate } from "react-router-dom";

function Fixtures({ selectedLeague }) {
  const [fixtures, setFixtures] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    //async function fetchData() {
    //  const data = await getFixturesByLeague(selectedLeague);
    //  console.log("Veri Alındı");
    //  setFixtures(data);
    //}
    //fetchData();

    setFixtures(xxfixture);
  }, [selectedLeague]);

  if (fixtures.length === 0)
    return <p className="text-gray-400">No fixtures available.</p>;

  return (
    <div className="p-[2vh] rounded-[2vh] max-h-[50vh] flex flex-col border border-[.1vh] border-gray-800">
      <h1 className="text-[3vh] font-semibold p-[.5vh]">Fixture</h1>
      {/* --- SABİT ICON BAR --- */}
      <div
        className="flex flex-wrap gap-[10vh] text-[2.5vh] text-gray-300 
                   mt-[2vh] mb-[1vh] justify-around rounded-[2vh]
                   sticky top-0 z-20 pb-[1vh] pt-[1vh]"
      >
        <MdOutlineDateRange />
        <PiHandshake />
        <FaInfo />
      </div>
      <div className="overflow-y-auto space-y-[1vh] snap-y pr-[0.5vh]">
        {fixtures.map((match) => (
          <div
            key={match.fixture.id}
            className="flex justify-between snap-start items-center 
                       bg-[#1B1F24] p-[1.5vh] rounded-xl shadow-md 
                       border border-[.1vh] border-gray-800 hover:bg-[#21262d] transition"
          >
            {/* DATE */}
            <div className="text-[1.7vh] text-center text-gray-300 w-[20vh]">
              {(() => {
                const d = new Date(match.fixture.date);
                return (
                  <>
                    <p>{d.toLocaleDateString("tr-TR")}</p>
                    <p>
                      {d.toLocaleTimeString("tr-TR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </>
                );
              })()}
            </div>

            {/* TEAMS */}
            <div className="flex flex-col w-[20vh]">
              <div
                onClick={() => {
                  navigate(`/team/${match.homeTeam.id}`);
                }}
                className="cursor-pointer flex items-center gap-[2vh]"
              >
                <img
                  src={match.homeTeam.logo}
                  alt=""
                  className="w-[3vh] h-[3vh]"
                />
                <p className="text-[1.7vh]">{match.homeTeam.name}</p>
              </div>
              <div
                onClick={() => {
                  navigate(`/team/${match.awayTeam.id}`);
                }}
                className="cursor-pointer flex items-center gap-[2vh] mt-[1vh]"
              >
                <img
                  src={match.awayTeam.logo}
                  alt=""
                  className="w-[3vh] h-[3vh]"
                />
                <p className="text-[1.7vh]">{match.awayTeam.name}</p>
              </div>
            </div>
            {/* REF + STADIUM */}
            <div className="flex flex-col items-end gap-[2vh] text-gray-300">
              <div className="flex items-center gap-[1vh]">
                <p className="text-[1.5vh]">{match.fixture.ref}</p>
                <GiWhistle className="text-[2vh] text-gray-400" />
              </div>
              <div className="flex items-center gap-[1vh]">
                <p className="text-[1.5vh]">{match.fixture.stadium}</p>
                <MdStadium className="text-[2vh] text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fixtures;
