import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Leagues from "./pages/Leagues.js";
import League from "./pages/League";
import Team from "./pages/Team.js";
import Teams from "./pages/Teams.js";
import Player from "./pages/Player.js";
import Players from "./pages/Players.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/league/:id" element={<League />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/team/:id" element={<Team />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="/players" element={<Players />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
