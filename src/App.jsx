import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./Headers";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Meeting from "./pages/Meeting";
import Appointment from "./pages/Appointment";
import Footer from "./pages/footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Headers />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/meeting" element={<Meeting />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
