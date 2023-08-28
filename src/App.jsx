import './App.scss'
import { Homepage } from './pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RussoUkraineWar } from './pages/RussoUkraineWar/RussoUkraineWar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/Homepage' element={<Homepage />} />
          <Route path='/RussoUkraineWar' element={<RussoUkraineWar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
