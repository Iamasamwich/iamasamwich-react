import React from 'react';
import About from './About';
import Contact from './Contact';
import Heading from './Heading';
import NavBar from './NavBar';
import Projects from './Projects';
import Skills from './Skills';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Heading />
      <Contact />
      <Skills />
      <About />
      <Projects />
    </div>


  );
};

export default App;