import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js"
import Navbar from './components/Navbar.js';

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<Navbar />} >
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
