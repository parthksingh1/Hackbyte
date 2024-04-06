import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Poll from './pages/Poll/Poll.jsx'
import Navbar from './components/navbar.jsx';
import ConfessionPage from './pages/Confession.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poll" element={<Poll />} />
        <Route path='/confession' element={<ConfessionPage />} />
      </Routes>
    </BrowserRouter>
  )
}