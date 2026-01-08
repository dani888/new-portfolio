import { Route, Routes } from "react-router-dom";

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

import './App.css';
import './pages/Home/home.css';
import './pages/Resume/resume.css';
import './pages/About/about.css';
import './pages/Projects/projects.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
