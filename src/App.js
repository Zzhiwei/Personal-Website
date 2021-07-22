import './App.css';

import Navbar from './sections/navbar/Navbar';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Skills from './sections/skills/Skills';
import Work from './sections/work/Work';
import Contact from './sections/contact/Contact';
import Madeby from './sections/madeby/Madeby';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Madeby />
    </>
  );
}

export default App;
