import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Leagues from "./pages/Leagues.jsx";
import League from "./pages/League";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/league/:id" element={<League />} />
          <Route path="/leagues" element={<Leagues />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
