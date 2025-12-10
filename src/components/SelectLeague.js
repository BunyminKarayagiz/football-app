import { topLeagues } from "../services/apiFootballServices";
import { IoChevronDown } from "react-icons/io5";

function SelectLeague({ selectedLeague, setLeague }) {
  if (!selectedLeague) {
    selectedLeague = 39;
  }

  const current = topLeagues.find((l) => l.id === selectedLeague);
  return (
    <div className="relative w-fit">
      <div
        className="flex items-center gap-[1vh] bg-white/5 px-[2vh] py-[1vh] rounded-xl 
                   backdrop-blur-md shadow-sm hover:bg-white/10 transition pr-[2vh]"
      >
        <img
          src={current.flag}
          className="w-[2.5vh] h-[2.5vh] rounded-md shadow"
          alt=""
        />

        {/* SELECT */}
        <select
          value={selectedLeague}
          onChange={(e) => setLeague(Number(e.target.value))}
          className="bg-transparent text-[gray-200] outline-none cursor-pointer text-[1.5vh]
                     appearance-none w-full"
          style={{
            colorScheme: "dark",
          }}
        >
          {topLeagues.map((league) => (
            <option key={league.id} value={league.id} className="bg-[#161B22]">
              {league.name}
            </option>
          ))}
        </select>

        <IoChevronDown className="absolute text-[1.7vh] right-[2vh] top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
      </div>

      {/* OPTION STYLES OVERRIDE */}
      <style>
        {`
          select option {
            border:none; 
            color: #D1D5DB !important;
            padding: 8px;
          }
          select option:checked{
              background-color: #333 !important;
          }
          select option:hover { 
            background-color:red !important;
          }
        `}
      </style>
    </div>
  );
}

export default SelectLeague;
