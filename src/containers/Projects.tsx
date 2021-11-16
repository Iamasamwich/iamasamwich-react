import React from 'react';
import Project from './Project';

import {clock, things, cycle, ttt} from '../images/images';
import {node, express, mysql, ts, rct, redux, js, css, html} from '../images/images';

const Projects = () => {

  const projects = [
    {
      name: things.name,
      blurb: [
        'While busting new ground in the realms of hyper-creativity I made this Todo App.',
        'This was built using Typescript on top of both the Node/Express/MySQL server and React front end.',
        'Once a user has created an account they can add a Todo with a due date and any sub-steps required, then see a countdown until the task is due and the number of steps completed.'
      ],
      gitLink: 'https://github.com/Iamasamwich/todo-server#readme',
      appLink: 'http://things-to-do-todo-app.herokuapp.com/',
      tech: [node, express, ts, rct, redux, mysql],
      image: things.img 
    },
    {
      name: cycle.name,
      blurb: [
        'I made this app to track a users fitness over time from distance based activities.',
        'A user can enter the date, time, distance, their weight, and some notes from their workout sessions, which is then displayed in graph form.',
        'Cycle Tracker was styles with Semantic UI, and uses Recharts for the graphs.',
        '** Please note that this app was designed for use on mobile only **'
      ],
      gitLink: 'https://github.com/Iamasamwich/fitness_track_server#readme',
      appLink: 'https://cycletrack.herokuapp.com/',
      tech: [node, express, rct, redux, mysql],
      image: cycle.img
    },
    {
      name: ttt.name,
      blurb: [
        'This is a 3-dimensional Tic Tac Toe game, using 3 boards stacked on top of each other.',
        'Users can now get three in a row by going down through the boards, meaning there are now 49 winning combinations instead of the 8 on a single board.',
      ],
      gitLink: 'https://github.com/Iamasamwich/ttt3d#readme',
      appLink: 'https://ttt3d.herokuapp.com/',
      tech: [rct, js, html, css],
      image: ttt.img
    },
    {
      name: clock.name,
      blurb: [
        'This is a clock app, designed to be run in fullscreen mode and left on one of your workspaces.',
        'Opening the burger menu will let the user select how often they want the chime to sound: never, or every 15, 30, or 60 minutes.'
      ],
      gitLink: 'https://github.com/Iamasamwich/clock-dinger#readme',
      appLink: 'https://clockdinger.herokuapp.com',
      tech: [rct, js, html, css],
      image: clock.img
    }
  ];

  return (
    <div className="panel" id="projects">
      <h2 className="panel-heading">Some Of My Projects</h2>
      {projects.map((project, i) => {
        return <Project details={project} key={i} />
      })}
    </div>
  );
};

export default Projects;