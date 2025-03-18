import React from 'react';

// named export
export const Projects = ({ title, imageUrl, githubLink, projectLink }) => {
  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-md rounded overflow-hidden shadow-lg bg-white">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-semibold p-4">{title}</h1>
          <img src={imageUrl} alt="Project Screenshot" className="w-full h-auto mb-4" />
          <div className="flex justify-center gap-8">
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
  );
};
