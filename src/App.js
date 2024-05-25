import './App.css';
import Landing from  './components/Landing';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Landing />
        <Hero />
        <About />
        <Projects />
        <Contact />
    </div>
    </main>



    </div>
  );
}

export default App;
