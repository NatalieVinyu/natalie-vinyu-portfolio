import React from 'react'

// named export
export const Projects = ({ title, imageUrl, githubLink , projectLink}) => {
  return (
    <div className='mx-auto bg-cyan-300 flex'>
      <div className="flex gap-8 m-8 justify-center">
        <div className="w-full max-w-4xl justify-center rounded overflow-hidden shadow-lg bg-white">
         <div className="p-4 m-4">
          <h1 className="text-4xl">{title}</h1>
          <img src={imageUrl} alt="Project Screenshot" className='w-full max-w-2xl h-auto' />
          <div className="flex text-center justify-center gap-20 m-4">
            <button className="rounded-md bg-gradient-to-r from-purple-500 to-pink-500 p-2 text-white">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </button>
            <button className="rounded-md bg-gradient-to-r from-pink-500 to-purple-500 p-2 text-white">
              <a href={projectLink} target="_blank" rel="noopener noreferrer">Project</a>
            </button>
          </div>
        </div>
      </div>

      </div>
      

    </div>
  );
};
