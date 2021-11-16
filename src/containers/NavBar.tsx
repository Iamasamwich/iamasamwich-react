import React from 'react';

const NavBar = () => {

  const handleScroll = (elem : string) => {
    if (elem === 'contact') {
      window.scrollTo({top: 0});
    } else {
      const target = document.querySelector(`#${elem}`) as HTMLElement;
      window.scrollTo({top: target.offsetTop});
    };
  };

  return (
    <div className="navbar">
      <div 
        className="nav-button"
        onClick={() => handleScroll('contact')}
      >Contact</div>
      <div 
        className="nav-button"
        onClick={() => handleScroll('skills')}
      >Skills</div>
      <div 
        className="nav-button"
        onClick={() => handleScroll('about')}
      >About</div>
      <div 
        className="nav-button"
        onClick={() => handleScroll('projects')}
      >Projects</div>
    </div>
  );
};

export default NavBar;