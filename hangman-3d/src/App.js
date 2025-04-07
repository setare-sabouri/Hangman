import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import GamePage from './Components/GamePage';
import Experience from './Components/Experience';
import './styles.scss';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/game" element={<Experience/>} >   
          <Route index element={<GamePage/>} />
          <Route path="twoPlayer" element={<h1>Two Player Game</h1>} />
          <Route path="onePlayer" element={<h1>One Player Game</h1>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
