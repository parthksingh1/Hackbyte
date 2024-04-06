import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Qna from './pages/Qna.jsx'
import Poll from './pages/Poll.jsx'
import Navbar from './components/navbar.jsx';
import ConfessionPage from './pages/Confession/Confessionfullpage.jsx';
import Home from './pages/Home/Home.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qna" element={<Qna />} />
        <Route path="/poll" element={<Poll />} />
        <Route path="/confession" element={<ConfessionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
