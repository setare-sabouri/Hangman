import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/LandingPage/Landing';
import GamePage from './Components/GamePage';
import Experience from './Components/Experience';
import SinglePlayer from './Components/SinglePlayer/SinglePlayer';
import './styles.scss';
import GlobalCanvas from './GlobalCanvas';

function App() {
  return (
    <>
      <GlobalCanvas />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Experience />} >
            <Route index element={<GamePage />} />
            <Route path="twoPlayer" element={<h1>Two Player Game</h1>} />
            <Route path="onePlayer" element={<SinglePlayer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
