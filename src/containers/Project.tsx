import React from 'react';

interface Props {
  details: {
    name: string;
    blurb: string[];
    gitLink: string;
    appLink: string;
    tech: string[];
    image: string;
  };
};

const Project = ({details} : Props) => {

  console.log('====================================');
  console.log(details);
  console.log('====================================');

  return (
    <div>Project</div>
  )
};

export default Project;