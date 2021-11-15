import React from 'react';

import node from '../images/nodejs.png';
import express from '../images/express2.png';
import react from '../images/react-logo.png';
import redux from '../images/redux.png';
import typescript from '../images/typescript.png';
import javascript from '../images/javascript.png';
import html from '../images/html.png';
import css from '../images/css.png';
import jquery from '../images/jquery.png';
import mysql from '../images/mysql.png';
import git from '../images/git.png';
import php from '../images/php.svg';
import ruby from '../images/ruby.png';
import postgres from '../images/postgresql.png';
import office from '../images/msoffice.png';


const Skills = () => {
  return (
    <div className="panel">
      <h2 className="panel-heading">Skills</h2>
      <div className="skill-row">
        <div className="skill skill-big">
          <img src={node} alt="node" />
          <p>Node</p>
        </div>
        <div className="skill skill-big">
          <img src={express} alt="express" />
          <p>Express</p>
        </div>
        <div className="skill skill-big">
          <img src={react} alt="react" />
          <p>React</p>
        </div>
        <div className="skill skill-big">
          <img src={redux} alt="redux" />
          <p>Redux</p>
        </div>
      </div>
      <div className="skill-row">
        <div className="skill skill-big">
          <img src={typescript} alt="typescript" />
          <p>TypeScript</p>
        </div>
        <div className="skill skill-big">
          <img src={javascript} alt="javascript" />
          <p>Javascript</p>
        </div>
        <div className="skill skill-big">
          <img src={html} alt="html" />
          <p>HTML</p>  
        </div>
        <div className="skill skill-big">
          <img src={css} alt="css" />
          <p>CSS</p>
        </div>
      </div>
      <div className="skill-row">
        <div className="skill skill-big">
          <img src={mysql} alt="mysql" />
          <p>MySQL</p>
        </div>
        <div className="skill skill-big">
          <img src={jquery} alt="jquery" />
          <p>JQuery</p>
        </div>
        <div className="skill skill-big">
          <img src={git} alt="git" />
          <p>Git</p>
        </div>
        <div className="skill skill-big">
          <img src={office} alt="office" />
          <p>MS Office/</p>
          <p>Libre Office</p>
        </div>
      </div>

      <div className="skill-row small-skills">
        <div className="skill skill-small">
          <img src={php} alt="php" />
          <p>php</p>
        </div>
        <div className="skill skill-small">
          <img src={ruby} alt="ruby" />
          <p>Ruby</p>
        </div>
        <div className="skill skill-small">
          <img src={postgres} alt="postgres" />
          <p>PostgreSQL</p>
        </div>
      </div>

    </div>
  );
};

export default Skills;