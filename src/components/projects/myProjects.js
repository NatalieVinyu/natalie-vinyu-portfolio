import React from 'react';
import { Projects } from './projects';

export const MyProjects = () => {
  return (
    <div className="container mx-auto bg-cyan-300 flex">
      <div className="flex gap-8 m-8 justify-center">
      <Projects 
        title="Oh So Heavenly"
        imageUrl='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/160/244/original/Screenshot_2025-03-14_at_09.22.24.png?1741962291'
        githubLink='https://github.com/NatalieVinyu'
        projectLink='https://github.com/NatalieVinyu'
      /> 
      <Projects 
        title="Oh So Heavenly"
        imageUrl='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/160/244/original/Screenshot_2025-03-14_at_09.22.24.png?1741962291'
        githubLink='https://github.com/NatalieVinyu'
        projectLink='https://github.com/NatalieVinyu'
      />
      </div>

    </div>
  )};
