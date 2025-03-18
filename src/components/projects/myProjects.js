import React from 'react';
import { Projects } from './projects';

export const MyProjects = () => {
  return (
    <div className='mx-auto bg-pink-300'>
      <h1 className='text-4xl text-center text-white p-4'>Projects</h1>

      <div className="flex gap-20 m-8 justify-center flex-wrap">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Projects 
          title="Oh So Heavenly"
          imageUrl='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/160/244/original/Screenshot_2025-03-14_at_09.22.24.png?1741962291'
          githubLink='https://github.com/NatalieVinyu'
          projectLink='https://github.com/NatalieVinyu'
          /> 
        </div>

        

      </div>
    </div>
    
  )};
