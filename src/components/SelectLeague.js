import { useState } from "react";
import { topLeagues } from "../services/apiFootballServices";
import "../styles/SelectLeague.css"

function SelectLeague({setLeague}) {
  const [selectedLeague] = useState(topLeagues[0].id); // varsayılan lig

  return (
    <div className="league-select-wrapper">
      <img
        src={topLeagues.find((l) => l.id === selectedLeague).flag}
        className="selected-flag"
        alt=""
      />

      <select
        value={selectedLeague}
        onChange={(e) => setLeague(Number(e.target.value))}
      >
        {topLeagues.map((league) => (
          <option key={league.id} value={league.id}>
            {league.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectLeague;
