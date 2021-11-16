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
      <hr />
      <Contact />
      <hr />
      <Skills />
      <hr />
      <About />
      <hr />
      <Projects />
      <hr />
      <footer>
        {'\u00a9'} Sam Humphreys 2021
      </footer>

    </div>


  );
};

export default App;