import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Poll from './components/Poll/Poll.jsx'
import Navbar from './components/navbar.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poll" element={<Poll />} />
      </Routes>
    </BrowserRouter>
  )
}