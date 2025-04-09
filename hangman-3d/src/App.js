import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/LandingPage/Landing';
import Experience from './Components/Experience';
import SinglePlayer from './Components/SinglePlayer/SinglePlayer';
import TwoPlayer from './Components/TwoPlayer/TwoPlayer'
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
            <Route path="onePlayer" element={<SinglePlayer />} />
            <Route path="twoPlayer" element={<TwoPlayer/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
