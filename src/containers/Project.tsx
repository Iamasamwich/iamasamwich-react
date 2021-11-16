import React from 'react';
import {github} from '../images/images';

interface Props {
  details: {
    name: string;
    blurb: string[];
    gitLink: string;
    appLink: string;
    tech: {
      img: string;
      name: string;
    }[];
    image: string;
  };
};

const Project = ({details} : Props) => {

  return (
    <div className="project">
      <div className="project-info">
        <h3 className="project-title">{details.name}</h3>
        {details.blurb.map((blurb, i) => {
          return (
            <p className="project-blurb" key={i}>
              {blurb}
            </p>
          );
        })}
        <div className="project-link">
          <p>{'\u261e'}</p>
          <a className="link" href={details.appLink} target="_blank" rel="noreferrer">Try the app</a>
        </div>
        <div className="project-link">
          <img src={github.img} alt={github.name} />
          <a className='link' target="_blank" rel="noreferrer" href={details.gitLink}>See the code</a>
        </div>
        <p className='bold'>Made using:</p>
        <div className="skill-row small-skills">
          {details.tech.map((skill, i) => {
            return (
              <div className="skill skill-small" key={i}>
                <img src={skill.img} alt={skill.name} />
              </div>
            )
          })}
        </div>

      </div>
      <div className="project-image">
        <img src={details.image} alt="project screenshot" />
      </div>
    </div>
  )
};

export default Project;