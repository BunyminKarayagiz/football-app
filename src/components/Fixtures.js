import React, { useState, useEffect } from "react";
//import { getFixturesByLeague } from "../services/apiFootballServices"; // API çağrı fonksiyonu
import { xxfixture } from "./xx";
import "../styles/LiveScoresAndFixtures.css";
import { MdOutlineDateRange } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";
import { MdStadium } from "react-icons/md";
import { GiWhistle } from "react-icons/gi";
import { FaInfo } from "react-icons/fa";

function Fixtures({ selectedLeague }) {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    //  const fetchFixtures = async () => {
    //    const data = await getFixturesByLeague(selectedLeague);
    //    setFixtures(data);
    //  };
    //  fetchFixtures();
    setFixtures(xxfixture);
  }, [selectedLeague]);

  return (
    <div className="fixtures-list">
      <div className="fixture-info-icons">
        <p>
          <MdOutlineDateRange />
        </p>
        <p>
          <PiHandshake />
        </p>
        <p>
          <FaInfo />
        </p>
      </div>
      {fixtures.length === 0 ? (
        <p>No fixtures available.</p>
      ) : (
        fixtures.map((match) => (
          <div className="fixture" key={match.fixture.id}>
            <div className="time-container">
              {match.fixture.date &&
                (() => {
                  const dateObj = new Date(match.fixture.date);

                  const day = String(dateObj.getDate()).padStart(2, "0");
                  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
                  const year = dateObj.getFullYear();

                  const hours = String(dateObj.getHours()).padStart(2, "0");
                  const minutes = String(dateObj.getMinutes()).padStart(2, "0");

                  return (
                    <>
                      <p>{`${day}-${month}-${year}`}</p>
                      <p>{`${hours}:${minutes}`}</p>
                    </>
                  );
                })()}
            </div>

            <div className="fixture-team-container">
              <div className="fixture-team" id="home">
                <img
                  src={match.homeTeam.logo}
                  alt={match.homeTeam.logo}
                  className="team-logo"
                />
                <p>{match.homeTeam.name}</p>
              </div>
              <div className="fixture-team" id="away">
                <img
                  src={match.awayTeam.logo}
                  alt={match.awayTeam.logo}
                  className="team-logo"
                />
                <p>{match.awayTeam.name}</p>
              </div>
            </div>
            <div className="fixture-ref-stad">
              <div className="ref-stad">
                <p>{match.fixture.ref}</p>
                <p>
                  <GiWhistle />
                </p>
              </div>
              <div className="ref-stad">
                <p>{match.fixture.stadium}</p>
                <p>
                  <MdStadium />
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Fixtures;
