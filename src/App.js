import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Interest from "./pages/Interest";
import Award from "./pages/Award";
import Skill from "./pages/Skill";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full flex">
      <Navbar />
      <div className="w-5/6 ml-32 md:ml-56 md:p-8 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/award" element={<Award />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
