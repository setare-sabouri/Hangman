import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/LandingPage/Landing';
import Experience from './Components/Experience';
import SinglePlayer from './Components/SinglePlayer/SinglePlayer';
import TwoPlayer from './Components/TwoPlayer/TwoPlayer'
import './styles.scss';
import GlobalCanvas from './GlobalCanvas';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import useGame from './Stores/useGame';

function App() {

  const isMobileQuery = useMediaQuery({ query: '(max-width: 768px)' })
  const setIsMobile = useGame((state) => state.setIsMobile)

  useEffect(() => {
    setIsMobile(isMobileQuery)
  }, [isMobileQuery, setIsMobile])


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
