import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Tictactoe from './pages/Tictactoe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tictactoe" element={<Tictactoe />} />
    </Routes>
  );
}

export default App;
