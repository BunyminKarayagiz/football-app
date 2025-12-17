import { useNavigate } from "react-router-dom";

function LiveMatch({ match }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#1B1F24] backdrop-blur-md
      border border-[.1vh] border-[#1F2937]
      p-[2vh] rounded-[3vh] shadow-md
      hover:shadow-xl hover:bg-blue-500
      transition-all duration-200"
    >
      {/* MATCH HEADER */}
      <div className="flex items-center justify-end mb-[2vh]">
        <p className="text-red-500 text-[1.5vh] font-bold">{match.elapsed}'</p>
      </div>

      {/* TEAMS */}
      <div className="flex items-center justify-between gap-[1vh]">
        {/* HOME */}
        <div
          onClick={() => {
            navigate(`/team/${match.home_team.id}`);
          }}
          className="cursor-pointer flex items-center gap-[1vh]"
        >
          <img
            src={match.home_team.logo}
            alt={match.home_team.name}
            className="w-[3.5vh] h-[3.5vh]"
          />
          <p className="text-[1.5vh]">{match.home_team.name}</p>
        </div>

        {/* SCORE */}
        <p className="font-bold text-[2vh]">
          {match.home_team.goal} - {match.away_team.goal}
        </p>

        {/* AWAY */}
        <div
          onClick={() => {
            navigate(`/team/${match.away_team.id}`);
          }}
          className="cursor-pointer flex items-center gap-[1vh] justify-end"
        >
          <p className="text-[1.5vh]">{match.away_team.name}</p>
          <img
            src={match.away_team.logo}
            alt={match.away_team.name}
            className="w-[3.5vh] h-[3.5vh]"
          />
        </div>
      </div>
    </div>
  );
}

export default LiveMatch;
