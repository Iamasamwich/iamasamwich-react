import React from 'react';

import {node, express, rct, redux, ts, js, html, css, jq, mysql, git, php, ruby, pg, office} from '../images/images';


const Skills = () => {

  const bigSkills = [
    [node, express, rct, redux],
    [ts, js, html, css],
    [mysql, jq, git, office]
  ];

  const smallSkills = [
    [php, ruby, pg]
  ];

  return (
    <div className="panel" id="skills">
      <h2 className="panel-heading">Skills</h2>
      {bigSkills.map((row,  i) => {
        return (
          <div className="skill-row" key={i}>
            {
              row.map((skill, i) => {
                return (
                  <div className="skill skill-big" key={i}>
                    <img src={skill.img} alt={skill.name} />
                    <p>{skill.name}</p>
                  </div>
                )
              })
            }
          </div>
        )
      })}
      {smallSkills.map((row, i) => {
        return (
          <div className="skill-row small-skills" key={i}>
            {
              row.map((skill, i) => {
                return (
                  <div className="skill skill-small" key={i}>
                    <img src={skill.img} alt={skill.name} />
                    <p>{skill.name}</p>
                  </div>
                )
              })
            }
          </div>
        )
      })}
    </div>
  );
};

export default Skills;