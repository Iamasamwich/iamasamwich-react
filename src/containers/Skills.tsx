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
    <div className="panel">
      <h2 className="panel-heading">Skills</h2>
      {bigSkills.map(row => {
        return (
          <div className="skill-row">
            {
              row.map(skill => {
                console.log('====================================');
                console.log(skill);
                console.log('====================================');
                return (
                  <div className="skill skill-big">
                    <img src={skill.img} alt={skill.name} />
                    <p>{skill.name}</p>
                  </div>
                )
              })
            }
          </div>
        )
      })}
      {smallSkills.map(row => {
        return (
          <div className="skill-row small-skills">
            {
              row.map(skill => {
                return (
                  <div className="skill skill-small">
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