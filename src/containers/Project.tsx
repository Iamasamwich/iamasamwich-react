import React from 'react';

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
        {details.blurb.map(blurb => {
          return (
            <p className="project-blurb">
              {blurb}
            </p>
          );
        })}
        <p className='bold'>Made using:</p>
        <div className="skill-row small-skills">
          {details.tech.map(skill => {
            return (
              <div className="skill skill-small">
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