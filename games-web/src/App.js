import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Tictactoe from './pages/Tictactoe';
import Snake from './pages/Snake';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tictactoe" element={<Tictactoe />} />
      <Route path="/snake" element={<Snake />} />
    </Routes>
    </>
  );
}

export default App;
