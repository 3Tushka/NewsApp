import './App.scss'
import { Homepage } from './pages/Homepage/Homepage';
import { Business } from './pages/Business/Business';
import { History } from './pages/History/History';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Books } from './pages/Books/Books';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/Homepage' element={<Homepage />} />
          <Route path='/Business' element={<Business />} />
          <Route path='/History' element={<History />} />
          <Route path='/Books' element={<Books />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
