import React, { useEffect, useState } from "react";
import LiveMatch from "./LiveMatch";
import { xxx } from "./xx.js";

function LiveScores() {
  const [matchs_item, setMatch] = useState([]);

  useEffect(() => {
    setMatch(xxx);
  }, []);

  return (
    <div className="w-full flex justify-center ">
      <div className="grid grid-cols-1 grid-cols-2 gap-[2vh] p-[2vh] max-h-[50vh] w-full overflow-y-auto">
        {matchs_item.map((item) => (
          <LiveMatch key={item.fixture_id} match={item} />
        ))}
      </div>
    </div>
  );
}

export default LiveScores;
