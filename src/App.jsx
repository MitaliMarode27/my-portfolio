import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Projects Page */}
        <Route path="/projects" element={<Projects />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;