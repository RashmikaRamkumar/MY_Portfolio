// File: src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills/Index";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./components/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Cursor />
          <div className="relative min-h-screen transition-colors duration-500 dark:bg-gray-900 bg-white">
            <div className="relative z-10">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;
