import React, { useState, useEffect } from "react";
//import { getFixturesByLeague } from '../services/apiFootballServices'; // API çağrı fonksiyonu
import { xxfixture } from "./xx";

function Fixtures({ selectedLeague }) {
  const [fixtures, setFixtures] = useState([]);


  useEffect(() => {
    //const fetchFixtures = async () => {
    //  const data = await getFixturesByLeague(selectedLeague);
    //  setFixtures(data);
    //};
    //fetchFixtures();
    setFixtures(xxfixture);
  }, [selectedLeague]);

  return (
    <div>
      <div className="fixtures-list">
        {fixtures.length === 0 ? (
          <p>No fixtures available.</p>
        ) : (
          fixtures.map((match) => (
            <div key={match.fixture.id}>
              {match.homeTeam.name} vs {match.awayTeamname} -{" "}
              {match.fixture.date}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Fixtures;
