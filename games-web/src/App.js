import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';
import Tictactoe from './pages/Tictactoe';
import Snake from './pages/Snake';

function App() {
  return (
    <>
    <header className='header'>
      <Link to="/"><h2>Games</h2></Link>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tictactoe" element={<Tictactoe />} />
      <Route path="/snake" element={<Snake />} />
    </Routes>
    <footer className='footer'>Produced by C-Mack Games</footer>
    </>
  );
}

export default App;
