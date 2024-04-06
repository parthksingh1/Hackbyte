import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import ConfessionPage from "./pages/Confession.jsx";
import Home from "./pages/Home.jsx";
import Poll from "./pages/Poll/Poll.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poll" element={<Poll />} />
        <Route path="/confession" element={<ConfessionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
