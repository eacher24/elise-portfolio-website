import './App.css';
import './styles/landing.css';
import 'boxicons/css/boxicons.min.css';
import Landing from  './components/Landing';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <main>

      <div className="app">
        <Landing />
        <Hero />
        <About />
        <Projects />
        <Contact />
{/*
        <Router>
          <nav>
            <Link to="/">Landing</Link>
            <Link to="/hero">Find out more</Link>
          </nav>
        </Router>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/hero" element={<Hero />} />
        </Routes> */}


    </div>
    </main>



    </div>
  );
}

export default App;
