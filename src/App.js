import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { InternShip } from "./pages/InternShip";
import Contact from "./pages/Contact";
import JobPortal from "./pages/JobPortal";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/internship" element={<InternShip />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job portal coming soon" element={<JobPortal/>} />



      </Routes>
    </div>
  );
}

export default App;
