import { Route, Routes } from "react-router-dom";

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Nav />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/resume"  element={<Resume />} />
          <Route path="/about"   element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
