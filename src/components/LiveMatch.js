
function LiveMatch({ match }) {
  return (
    <div className="snap-center bg-[#1B1F24] h-[15vh] backdrop-blur-md border border-[#1F2937] p-[2vh] rounded-[3vh] shadow-md hover:shadow-xl hover:bg-blue-500"> 
      <div className="flex items-center justify-between mb-[4vh]">
        <div className="flex items-center gap-[2vh]">
          <img
            src={match.league.league_logo}
            alt="League"
            className="w-[2.5vh] h-[2.5vh]"
          />
          <p className="text-[1.5vh] font-medium">{match.league.league_name}</p>
        </div>

        <p className="text-red-500 text-[1.5vh]  font-bold">{match.elapsed}'</p>
      </div>

      <div className="flex items-center gap-[1vh] justify-between">
        <div className="flex items-center  gap-[1vh]">
          <img
            src={match.home_team.logo}
            alt={match.home_team.name}
            className="w-[3.5vh] h-[3.5vh]"
          />
          <p className="text-[1.5vh]">{match.home_team.name}</p>
        </div>

        <p className="font-bold text-[2vh]">
          {match.home_team.goal} - {match.away_team.goal}
        </p>

        <div className="flex items-center gap-[1vh] justify-end">
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
